import {
	AdrProperty,
	EmailProperty,
	FNProperty,
	IntegerType,
	LangProperty,
	LanguageTagType,
	NProperty,
	OrgProperty,
	PrefParameter,
	RoleProperty,
	SpecialValueType,
	TelProperty,
	TextListType,
	TextType,
	TypeParameter,
	URIType,
	URLProperty,
	VCARD
} from 'vcard4';

interface CardData {
	firstname: string;
	name: string;
	middleName: string;
	post: string;
	addresses: string[];
	phones: string[];
	email: string;
}
export function useVCard(data: Partial<CardData>) {
	const { firstname, name, middleName } = data;

	const fio = [firstname, name, middleName].join(' ');
	const fn = new FNProperty([], new TextType(fio));

	const nArr = new Array(5);

	if (typeof firstname !== 'undefined') {
		nArr[0] = new TextType(firstname);
	}
	if (typeof name !== 'undefined') {
		nArr[1] = new TextType(name);
	}

	if (typeof middleName !== 'undefined') {
		nArr[2] = new TextType(middleName);
	}

	const n = new NProperty([], new SpecialValueType(nArr, 'nproperty'));

	const lang = new LangProperty([new PrefParameter(new IntegerType(2))], new LanguageTagType('ru'));
	const url = new URLProperty(
		[new TypeParameter(new TextType('work'), 'urlproperty')],
		new URIType('https://pr-liz.ru')
	);
	const org = new OrgProperty(
		[new TypeParameter(new TextType('work'), 'orgproperty')],
		new SpecialValueType([new TextType('Лизинговая компания "ПР-Лизинг"')], 'orgproperty')
	);

	const props = [fn, lang, n, org, url];

	if (typeof data.post !== 'undefined') {
		const role = new RoleProperty([], new TextType(data.post));

		props.push(role);
	}
	if (typeof data.email !== 'undefined') {
		const email = new EmailProperty(
			[new TypeParameter(new TextType('work'), 'emailproperty')],
			new TextType(data.email)
		);

		props.push(email);
	}

	if (typeof data.phones !== 'undefined') {
		const phones = data.phones.map(
			(value) =>
				new TelProperty(
					[
						new TypeParameter(new TextListType([new TextType('WORK')]), 'telproperty'),
						new PrefParameter(new IntegerType(2))
					],
					new TextType(value)
				)
		);

		props.push(...phones);
	}
	if (typeof data.addresses !== 'undefined') {
		const addresses = data.addresses.map((address) => {
			const aArr = new Array(7);

			aArr[1] = new TextType(address);
			return new AdrProperty(
				[new TypeParameter(new TextType('work'), 'adrproperty')],
				new SpecialValueType(aArr, 'adrproperty')
			);
		});

		props.push(...addresses);
	}

	return new VCARD(props).repr();
	// return new VCARD([fn, lang, n, org, role, ...phones, ...addresses, email, url]).repr();
}
