import Image from "next/image";

export const Header = () => {
	return (
		<>
			<header className="flex flex-col gap-12 py-16">
				<h1 className="text-4xl leading-[1.75] md:text-6xl md:leading-[1.85] md:mr-40">
					Je m&rsquo;appelle <span className="title-highlight">Maxime</span>!{" "}
					<br />
					Je suis{" "}
					<span className="title-highlight">
						développeur web full-stack
					</span> et{" "}
					<span className="title-highlight">designer d&rsquo;interface</span>
				</h1>
				<a
					href="#contact"
					className="px-6 py-4 rounded-full bg-feijoa font-semibold text-2xl flex justify-between items-center md:ml-auto md:gap-12"
				>
					Me contacter
					<svg
						width="16"
						height="22"
						viewBox="0 0 16 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M16 11L5.33333 22L-1.90735e-06 22L10.6667 11L1.59523e-08 5.08584e-07L5.33333 9.74839e-07L16 11Z"
							fill="#590004"
						/>
					</svg>
				</a>
			</header>
		</>
	);
};
