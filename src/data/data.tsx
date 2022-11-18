export type Icons = 'favorite' | 'watch' | 'star';

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
			icon: Icons;
			title: string;
			copy: string;
		}[];
	};
	logos: {
		title: string;
		copy: string;
	};
} = {
	hero: ['Klasyfikacja gruntów', 'Geodezja', 'Badania gleby'],
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
				copy: 'Aktualizacja Ewidencji Gruntów i Budynków, pomiary sytuacyjno-wysokościowe, wytyczenia.',
			},
		],
	},
	pros: {
		title: 'Twoje zlecenie jest na nas ważne',
		copy: 'Najważniejsze cechy wyróżniające naszą pracę',
		cards: [
			{
				icon: 'favorite',
				title: 'sumiennie',
				copy: 'Wszystkie zlecenia realizujemy z pasją i zgodnie ze sztuką',
			},
			{
				icon: 'star',
				title: 'profesjonalnie',
				copy: 'W pracy wykorzystujemy nowoczesny, renomowany sprzęt',
			},
			{
				icon: 'watch',
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

export const services: {
	title: string;
	copy?: string;
	cards: {
		title: string;
		copyLine1: string;
		isLine1Bold?: boolean;
		copyLine2?: string;
		isLine2Bold?: boolean;
		copyLine3?: string;
		isLine3Bold?: boolean;
		copyLine4?: string;
		isLine4Bold?: boolean;
	}[];
} = {
	title: 'Zakres usług',
	cards: [
		{
			title: 'Geodezja',
			copyLine1:
				'Oferta prac geodezyjnych obejmuje podstawowe pomiary podczas realizacji prac budowlanych oraz prowadzenie formalności mających na celu zmiany w bazie danych Ewidencji Gruntów i Budynków. Przeprowadzane są prace terenowe z użyciem sprzętu typu GPS, niwelator. Prace kameralne obejmują prace w programach C-Geo, Geo-Info.',
			copyLine2: '•aktualizacja Ewidencji Gruntów i Budynków',
			isLine2Bold: true,
			copyLine3: '•pomiary sytuacyjno-wysokościowe',
			isLine3Bold: true,
			copyLine4: '•wytyczenia',
			isLine4Bold: true,
		},
		{
			title: 'Badania gruntu',
			copyLine1:
				'Działania z zakresu badania gleby na zwartość: wapna, magnezu, fosforu, potasu (pH, Mg, P, K) oraz manganu, cynku, miedzi, żelaza.',
			copyLine2:
				'Prace przeprowadzane na gruncie mają na celu pobranie próbek reprezentatywnych poddawanych badaniom w Okręgowej Stacji Chemiczno-rolniczej. Wyniki pozwalają na analizę i dobranie odpowiednich ilości nawozów na konkretne działki czy sprecyzowane powierzchnie większych areałów.',
		},
		{
			title: 'Klasyfikacja gruntów',
			copyLine1: 'Zmiana klasy gruntu',
			isLine1Bold: true,
			copyLine2:
				'Na podstawie przeprowadzonych prac terenowych i analizy dokumentów istniejących i zachowanych w Ośrodku Dokumentacji Geodezyjnej dokonuje się zmiany istniejącej klasy gruntu, np. klasy RIVa (grunt rolny klasy czwartej a) na faktyczną, czyli np. RV (grunt rolny klasy piątej). Klasa gruntu rolnego, a także łąk, pastwisk, lasów, ma znaczenie przy naliczaniu podatku.',
			copyLine3: 'Aktualizacja użytku gruntowego zgodnie ze stanem faktycznym',
			isLine3Bold: true,
			copyLine4:
				'Prostowanie niezgodności zapisów w Ewidencji Gruntów i Budynków z faktycznym stanem gruntu, czyli np. zmiana użytku drogowego na grunt rolny, zmiana użytków leśnych (Ls) na terenach wyłączonych z użytkowania leśnego, zmiana użytków budowlanych (B) na terenach należących do rolnika (w rozumieniu prawa) na Br (tereny rolne zabudowane). W każdym tym przypadku następuje istotna różnica w płaconym podatku od nieruchomości.',
		},
		{
			title: 'Druk wielkoformatowy',
			copyLine1:
				'Nasze biuro wyposażone jest w ploter wielkoformatowy, co daje nam możliwość świadczenia usług wydruku w formatach do A0 oraz w formatach niestandardowych.',
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
