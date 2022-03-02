import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { registerRoute } from 'workbox-routing';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { ExpirationPlugin } from 'workbox-expiration';
import { setCacheNameDetails } from 'workbox-core';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

declare const self: any;
// Enable debug mode during development
// eslint-disable-next-line no-restricted-globals
const DEBUG_MODE = location.hostname.endsWith('.app.local') || location.hostname === 'localhost';
const componentName = 'energy-service';

const DAY_IN_SECONDS = 24 * 60 * 60;
const MONTH_IN_SECONDS = DAY_IN_SECONDS * 30;
const YEAR_IN_SECONDS = DAY_IN_SECONDS * 365;
const SERVICE_WORKER_VERSION = '1.0.0';

if (DEBUG_MODE) {
	console.debug(`Service worker version ${SERVICE_WORKER_VERSION} loading...`);
}
function getCacheName(title: string): string {
	return `${componentName}-${title}-v${process.env.APP_VERSION}`;
}

setCacheNameDetails({
	prefix: componentName,
	suffix: `v${process.env.APP_VERSION}`,
	precache: 'assets',
	runtime: 'assets',
	googleAnalytics: 'custom-google-analytics-name'
});

const CACHE_NAME = 'offline';

/*
	Precaching configuration
 */
cleanupOutdatedCaches();
// eslint-disable-next-line no-underscore-dangle
const assetsToCache = self.__WB_MANIFEST;

if (DEBUG_MODE) {
	console.trace(`${componentName}:: Assets that will be cached: `, assetsToCache);
}

/*
	Routes
 */
precacheAndRoute(assetsToCache);
registerRoute(
	({ request, url }) => {
		console.log(url.pathname);
		return url.pathname.startsWith('/static/') ?? ['style', 'images', 'font', 'js'].includes(request.destination);
	},
	new CacheFirst({
		cacheName: getCacheName('assets'),
		plugins: [
			new CacheableResponsePlugin({
				statuses: [0, 200]
			}),
			new ExpirationPlugin({
				maxAgeSeconds: YEAR_IN_SECONDS,
				maxEntries: 200,
				purgeOnQuotaError: true
			})
		]
	})
);

registerRoute(
	({ request, url }) => /^\//.exec(url.pathname),
	new NetworkFirst({
		cacheName: getCacheName('home'),
		plugins: [
			new CacheableResponsePlugin({
				statuses: [0, 200]
			}),
			new ExpirationPlugin({
				maxEntries: 1,
				maxAgeSeconds: YEAR_IN_SECONDS // 30 Days
			})
		]
	})
);

self.addEventListener('message', (event: { data: any; type: any; ports: any }) => {
	if (event && event.data) {
		if (event.data === 'GET_VERSION') {
			if (DEBUG_MODE) {
				console.debug(`${componentName}:: Returning the service worker version: ${SERVICE_WORKER_VERSION}`);
			}
			event.ports[0].postMessage(SERVICE_WORKER_VERSION);
		}

		if (event.data === 'SKIP_WAITING') {
			if (DEBUG_MODE) {
				console.debug(`${componentName}:: Skipping waiting...`);
			}
			self.skipWaiting();
		}
		if (event.data === 'CLIENTS_CLAIM') {
			if (DEBUG_MODE) {
				console.debug(`${componentName}:: Claiming clients and cleaning old caches`);
			}
			self.clients.claim();
		}

		if (event.data === 'UNREGISTER') {
			caches.keys().then((cacheNames) => Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName))));
			self.registration.unregister();
		}
	}
});

self.addEventListener('activate', (event: any) => {
	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) =>
				Promise.all(
					cacheNames
						.filter((cacheName) => !new RegExp(`v${process.env.APP_VERSION}`).exec(cacheName))
						.map((cacheName) => caches.delete(cacheName))
				)
			)
	);
});
