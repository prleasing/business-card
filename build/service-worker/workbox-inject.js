const { injectManifest } = require('workbox-build');
const rollup = require('rollup');
const replace = require('@rollup/plugin-replace');
const { terser } = require('rollup-plugin-terser');
const path = require('path');
const fs = require('fs');

const workboxConfig = {
	globDirectory: 'dist',
	globPatterns: ['**/*.*'],
	globIgnores: ['**/*.json', '**/*.gz'],
	maximumFileSizeToCacheInBytes: 20 * 1024 * 1024, // 20Mb

	swSrc: './dist/service-worker.js',
	swDest: './dist/sw.js',

	manifestTransforms: [
		async (manifestEntries) => {
			const manifest = manifestEntries.map((entry) => {
				console.log(entry.url);
				return {
					...entry,
					revision: /-(([a-z0-9]{20})|([a-z0-9]{32}))\./.exec(entry.url) ? null : entry.revision,
					url: `/${entry.url}`
				};
			});

			return { manifest, warnings: [] };
		}
	]
};

async function buildRollup() {
	const outputOptions = {
		output: {
			file: './dist/sw.js',
			format: 'iife'
		},
		plugins: [
			// nodeResolve(),
			replace({
				preventAssignment: true,
				values: {
					'process.env.APP_VERSION': JSON.stringify(require('../../package.json').version)
				}
			}),
			terser()
		]
	};

	const bundle = await rollup.rollup({
		input: './dist/sw.js'
	});
	await bundle.generate(outputOptions);
	await bundle.write(outputOptions);
	await bundle.close();
}

async function bootstrap() {
	try {
		await injectManifest(workboxConfig);
		await buildRollup();
		fs.rmSync(path.join(__dirname, '../../dist/service-worker.js'));
	} catch (e) {
		console.log(e);
	}
}
bootstrap().then();
