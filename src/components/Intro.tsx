import Image from "next/image";

export const Intro = () => {
	return (
		<>
			<section>
				<h2>A propos de moi</h2>
				<div className="flex flex-col gap-8 my-8 md:flex-row-reverse md:gap-32 items-center">
					<Image
						width={320}
						height={320}
						src="/cactus.svg"
						alt="Un petit cactus"
						className="h-40 md:h-80"
					/>
					<p className="leading-loose">
						Bonjour,
						<br />
						Je m&rsquo;appelle Maxime et j&rsquo;ai entamé une réorientation
						dans le domaine du développement web.
						<br />
						J&rsquo;ai actuellement une appétence pour le développement
						front-end du mes antécédants dans la communication visuelle. Je suis
						néanmoins couteau-suisse et je crée également des applications
						back-end avec plusieurs technologies comme :<br />
						- 📈 Apollo et GraphQL
						<br />
						- 🎺 Symfony <br />
						- ⌨️ ExpressJS <br />
					</p>
				</div>
			</section>
		</>
	);
};
