export const hero: { heading: string; description: string; cta: string } = {
	heading: 'Tekst',
	description: 'Podpis pod tekstem',
	cta: 'wycena',
};

export const pros: { heading: string; description: string } = {
	heading: 'Twoje zlecenie jest dla nas ważne.',
	description: 'Najważniejsze cechy wyróżniające naszą pracę',
};

export type Icons = 'favorite' | 'watch' | 'star';

export const badges: { icon: Icons; title: string; description: string }[] = [
	{
		icon: 'favorite',
		title: 'z pasją',
		description:
			'Wszystkie usługi świadczymy z największą starannością i dbałością o szczegóły.',
	},
	{
		icon: 'star',
		title: 'profesjonalnie',
		description:
			'Wszystkie usługi świadczymy z największą starannością i dbałością o szczegóły.',
	},
	{
		icon: 'watch',
		title: 'terminowo',
		description:
			'Wszystkie usługi świadczymy z największą starannością i dbałością o szczegóły.',
	},
];

export const services: { heading: string; description: string } = {
	heading: 'Zakres oferowanych usług',
	description:
		'Oferujemy szeroki wachlarz usług. Nie widzisz potrzebnej pozycji na liście? Skontaktuj się z nami! Postaramy się znaleźć rozwiązanie.',
};

export const servicesCards: { title: string; content: string }[] = [
	{
		title: 'Klasyfikacja gruntów',
		content:
			'Oferujemy pełny zakres usług związanych z klasyfikacją gruntów. Sklasyfikujemy każdy rodzaj gruntu. Klasyfikowanie gruntów to przedmiot naszych działań. Zajmujemy się profesjonalną klasyfikacją gruntów.',
	},
	{
		title: 'Klasyfikacja gruntów',
		content:
			'Oferujemy pełny zakres usług związanych z klasyfikacją gruntów. Sklasyfikujemy każdy rodzaj gruntu. Klasyfikowanie gruntów to przedmiot naszych działań. Zajmujemy się profesjonalną klasyfikacją gruntów.',
	},
	{
		title: 'Klasyfikacja gruntów',
		content:
			'Oferujemy pełny zakres usług związanych z klasyfikacją gruntów. Sklasyfikujemy każdy rodzaj gruntu. Klasyfikowanie gruntów to przedmiot naszych działań. Zajmujemy się profesjonalną klasyfikacją gruntów.',
	},
];
