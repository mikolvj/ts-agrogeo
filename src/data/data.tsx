export type Icons = 'favorite' | 'watch' | 'star';

export const hero: {
	headingFirstLine: string;
	headingSecondLine: string;
	headingThirdLine: string;
	cta: string;
} = {
	headingFirstLine: 'Klasyfikacja gruntów',
	headingSecondLine: 'Geodezja',
	headingThirdLine: 'Badania gleby',
	cta: 'kontakt',
};

export const pros: { heading: string; description: string } = {
	heading: 'Twoje zlecenie jest dla nas ważne.',
	description: 'Najważniejsze cechy wyróżniające naszą pracę',
};

export const badges: {
	icon: 'favorite' | 'watch' | 'star';
	title: string;
	description: string;
}[] = [
	{
		icon: 'favorite',
		title: 'sumiennie',
		description: 'Wszystkie zlecenia realizujemy z pasją i zgodnie ze sztuką.',
	},
	{
		icon: 'star',
		title: 'profesjonalnie',
		description: 'W pracy wykorzystujemy nowoczesny, renomowany sprzęt.',
	},
	{
		icon: 'watch',
		title: 'terminowo',
		description: 'Bardzo ważna jest dla nas realizacja w wyznaczonym czasie.',
	},
];

export const services: { heading: string; description: string } = {
	heading: 'Zakres usług',
	description:
		'Większość z oferowanych usług realizujemy na terenie całej Polski',
};

export const servicesCards: { title: string; content: string }[] = [
	{
		title: 'Badania gruntu',
		content:
			'Badania gleby na zwartość: wapna, magnezu, fosforu, potasu (pH, Mg, P, K) oraz manganu, cynku, miedzi, żelaza.',
	},
	{
		title: 'Klasyfikacja gruntów',
		content:
			'Zmiana klasy gruntu, aktualizacja użytku gruntowego zgodnie ze stanem faktycznym.',
	},
	{
		title: 'Geodezja',
		content:
			'Aktualizacja Ewidencji Gruntów i Budynków, pomiary sytuacyjno-wysokościowe, wytyczenia.',
	},
	{
		title: 'Druk wielkoformatowy',
		content:
			'Aktualizacja Ewidencji Gruntów i Budynków, pomiary sytuacyjno-wysokościowe, wytyczenia.',
	},
];
