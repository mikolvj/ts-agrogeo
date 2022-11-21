import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ScheduleIcon from '@mui/icons-material/Schedule';

export const home: {
	hero: string[];
	servicesShort: {
		title: string;
		copy: string;
		cards: {
			title: string;
			copy: string;
		}[];
	};
	pros: {
		title: string;
		copy: string;
		cards: {
			icon: JSX.Element;
			title: string;
			copy: string;
		}[];
	};
	logos: {
		title: string;
		copy: string;
	};
} = {
	hero: [
		'Klasyfikacja gruntów',
		'Geodezja',
		'Badania gleby',
		'Druk wielkoformatowy',
	],
	servicesShort: {
		title: 'Zakres usług',
		copy: 'Większość z oferowanych usług realizujemy na terenie całej Polski',
		cards: [
			{
				title: 'Badania gruntu',
				copy: 'Badania gleby na zwartość: wapna, magnezu, fosforu, potasu (pH, Mg, P, K) oraz manganu, cynku, miedzi, żelaza.',
			},
			{
				title: 'Klasyfikacja gruntów',
				copy: 'Zmiana klasy gruntu, aktualizacja użytku gruntowego zgodnie ze stanem faktycznym.',
			},
			{
				title: 'Geodezja',
				copy: 'Aktualizacja Ewidencji Gruntów i Budynków, pomiary sytuacyjno-wysokościowe, wytyczenia.',
			},
			{
				title: 'Druk wielkoformatowy',
				copy: 'Wydruk map, opracowań technicznych oraz innych na formatach niestandardowych do formatu A0+.',
			},
		],
	},
	pros: {
		title: 'Twoje zlecenie jest dla nas ważne',
		copy: 'Najważniejsze cechy wyróżniające naszą pracę',
		cards: [
			{
				icon: <FavoriteBorderIcon fontSize='large' />,
				title: 'sumiennie',
				copy: 'Wszystkie zlecenia realizujemy z pasją i zgodnie ze sztuką',
			},
			{
				icon: <StarBorderIcon fontSize='large' />,
				title: 'profesjonalnie',
				copy: 'W pracy wykorzystujemy nowoczesny, renomowany sprzęt',
			},
			{
				icon: <ScheduleIcon fontSize='large' />,
				title: 'terminowo',
				copy: 'Bardzo ważna jest dla nas realizacja w wyznaczonym czasie',
			},
		],
	},
	logos: {
		title: 'Zaufali nam',
		copy: 'Wybrane firmy i instytucje, z którymi stale współpracujemy',
	},
};

export const contact: {
	title: string;
	copy: string;
	nameLine1: string;
	nameLine2: string;
	addressLine1: string;
	addressLine2: string;
	taxId: string;
	phone: string;
	email: string;
} = {
	title: 'Kontakt',
	copy: 'Zapraszamy do kontaktu w celu ustalenia szczegółów',
	nameLine1: 'AgroGeo',
	nameLine2: 'Grzegorz Stasiak',
	addressLine1: 'Donaborów 89C',
	addressLine2: '63-604 Baranów',
	taxId: '619-199-49-18',
	phone: '607 375 574',
	email: 'kontakt@agrogeo.pl',
};

export interface ServicesCards {
	title: string;
	copy: {
		content: string;
		isBold?: boolean;
	}[];
}

export const services: {
	title: string;
	copy?: string;
	cards: ServicesCards[];
} = {
	title: 'Zakres usług',
	cards: [
		{
			title: 'Geodezja',
			copy: [
				{
					content:
						'Oferta prac geodezyjnych obejmuje podstawowe pomiary podczas realizacji prac budowlanych oraz prowadzenie formalności mających na celu zmiany w bazie danych Ewidencji Gruntów i Budynków. Przeprowadzane są prace terenowe z użyciem sprzętu typu GPS, niwelator. Prace kameralne obejmują prace w programach C-Geo, Geo-Info.',
				},
				{
					content: '•aktualizacja Ewidencji Gruntów i Budynków',
					isBold: true,
				},
				{
					content: '•pomiary sytuacyjno-wysokościowe',
					isBold: true,
				},
				{
					content: '•wytyczenia',
					isBold: true,
				},
			],
		},
		{
			title: 'Badania gruntu',
			copy: [
				{
					content:
						'Działania z zakresu badania gleby na zwartość: wapna, magnezu, fosforu, potasu (pH, Mg, P, K) oraz manganu, cynku, miedzi, żelaza.',
				},
				{
					content:
						'Prace przeprowadzane na gruncie mają na celu pobranie próbek reprezentatywnych poddawanych badaniom w Okręgowej Stacji Chemiczno-rolniczej. Wyniki pozwalają na analizę i dobranie odpowiednich ilości nawozów na konkretne działki czy sprecyzowane powierzchnie większych areałów.',
				},
			],
		},
		{
			title: 'Klasyfikacja gruntów',
			copy: [
				{ content: 'Zmiana klasy gruntu', isBold: true },
				{
					content:
						'Na podstawie przeprowadzonych prac terenowych i analizy dokumentów istniejących i zachowanych w Ośrodku Dokumentacji Geodezyjnej dokonuje się zmiany istniejącej klasy gruntu, np. klasy RIVa (grunt rolny klasy czwartej a) na faktyczną, czyli np. RV (grunt rolny klasy piątej). Klasa gruntu rolnego, a także łąk, pastwisk, lasów, ma znaczenie przy naliczaniu podatku.',
				},
				{
					content:
						'Aktualizacja użytku gruntowego zgodnie ze stanem faktycznym',
					isBold: true,
				},
				{
					content:
						'Prostowanie niezgodności zapisów w Ewidencji Gruntów i Budynków z faktycznym stanem gruntu, czyli np. zmiana użytku drogowego na grunt rolny, zmiana użytków leśnych (Ls) na terenach wyłączonych z użytkowania leśnego, zmiana użytków budowlanych (B) na terenach należących do rolnika (w rozumieniu prawa) na Br (tereny rolne zabudowane). W każdym tym przypadku następuje istotna różnica w płaconym podatku od nieruchomości.',
				},
			],
		},
		{
			title: 'Druk wielkoformatowy',
			copy: [
				{
					content:
						'Nasze biuro wyposażone jest w ploter wielkoformatowy, co daje nam możliwość świadczenia usług wydruku w formatach do A0+ oraz w formatach niestandardowych.',
				},
			],
		},
	],
};

export const about: {
	cv: {
		title: string;
		name: string;
		copyLine1: string;
		isLine1Bold?: boolean;
		copyLine2?: string;
		isLine2Bold?: boolean;
		copyLine3?: string;
		isLine3Bold?: boolean;
		copyLine4?: string;
		isLine4Bold?: boolean;
	};
	testimonials: {
		title: string;
		quotes: { copy: string; author: string }[];
	};
	disclaimer: string;
} = {
	cv: {
		title: 'O mnie',
		name: 'inż. Grzegorz Stasiak',
		copyLine1:
			'Od 2012r pracuję czynnie jako geodeta. Pod koniec roku 2016r. rozpocząłem praktykę związaną z gleboznawczą klasyfikacją gruntów. W 2017r. uzyskałem uprawnienia klasyfikatora gruntów (nr 567).',
		copyLine2:
			'Swoje prace wykonuję na podstawie Rozporządzeniem Rady Ministrów z dn. 12.09.2012r (Dz.U. z dn.14.11.2012r) w sprawie gleboznawczej klasyfikacji gruntów, załącznika Urzędowej Tabeli Klas Gruntów oraz konsultacji z wykładowcami IUNG-PIB w Puławach.',
		copyLine3:
			'Należę do Stowarzyszenia Geodetów Polskich oraz Polskiego Stowarzyszenia Klasyfikatorów Gruntów',
	},
	testimonials: {
		title: 'Referencje',
		quotes: [
			{
				copy: 'Rezultaty rzetelnie realizowanych prac terenowych uzupełniają bazę Powiatowego Ośrodka Dokumentacji Geodezyjnej i Kartograficznej.',
				author:
					'Naczelnik Wydziału Geodezji, Kartografii, Katastru i Gospodarki Nieruchomościami',
			},
			{
				copy: 'Klasyfikator wykazał się sumiennością, rzeczowością i fachowością. Prace zostały wykonane w sposób prawidłowy. Bardzo dobry kontakt oraz współpraca. Firma godna polecenia.',
				author: 'Naczelnik Wydziału Geodezji, Rolnictwa i Ochrony Środowiska',
			},
		],
	},
	disclaimer:
		'Na życzenie Inwestorów istnieje możliwość udostepnienia opieczętowanych i podpisanych skanów powyższych referencji.',
};

export const desktopNavItems = [
	{
		title: 'start',
		url: '/',
	},
	{
		title: 'usługi',
		url: '/uslugi',
	},
	{
		title: 'o mnie',
		url: '/o-mnie',
	},
];

export const mobileNavItems = [
	...desktopNavItems,
	{
		title: 'kontakt',
		url: '/kontakt',
	},
];
