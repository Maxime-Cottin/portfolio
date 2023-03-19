import {
	Gallery,
	Intro,
	Tagbar,
	NavBar,
	Header,
	Contact,
	Footer,
	Skills,
} from "@/components";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Maxime | Développeur web</title>
				<meta
					name="description"
					content="Portfolio de présentation de mes projets et design d'interface et développement web"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/logo.ico" />
			</Head>
			<main className="max-w-6xl mx-auto px-4">
				<Header />
				<Gallery />
				<Skills />
				<Intro />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
