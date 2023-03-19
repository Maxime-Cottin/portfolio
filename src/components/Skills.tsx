import Image from "next/image";

export const Skills = () => {
	return (
		<>
			<section>
				<h2>Mes compétences</h2>
				<div className="grid grid-rows-3 grid-cols-1 gap-6 my-8 font-semibold text-xl">
					<div className="flex gap-6">
						<div className="bg-feijoa h-36 w-7/12 rounded-2xl flex flex-col justify-center items-center">
							<div className="h-8">
								<Image
									width={32}
									height={32}
									src="/typescript.svg"
									alt="Typescript logo"
								/>
							</div>
							Typescript
						</div>
						<div className="bg-feijoa h-36 w-5/12 rounded-2xl flex flex-col justify-center items-center">
							<div className="h-8">
								<Image
									width={32}
									height={32}
									src="/javascript.svg"
									alt="Javascript logo"
								/>
							</div>
							Javascript
						</div>
					</div>
					<div className="flex gap-6">
						<div className="bg-feijoa h-36 w-5/12 rounded-2xl flex flex-col justify-center items-center">
							<div className="h-8">
								<Image
									width={32}
									height={32}
									src="/wordpress.svg"
									alt="WordPress logo"
								/>
							</div>
							WordPress
						</div>
						<div className="bg-feijoa h-36 w-7/12 rounded-2xl flex flex-col justify-center items-center">
							<div className="h-8">
								<Image
									width={32}
									height={32}
									src="/reactjs.svg"
									alt="ReactJS logo"
								/>
							</div>
							ReactJS
						</div>
					</div>
					<div className="flex gap-6">
						<div className="bg-feijoa h-36 w-7/12 rounded-2xl flex flex-col justify-center items-center">
							<div className="h-8">
								<Image
									width={32}
									height={32}
									src="/tailwindcss.svg"
									alt="TailwindCSS logo"
								/>
							</div>
							TailwindCSS
						</div>
						<div className="bg-feijoa h-36 w-5/12 rounded-2xl flex flex-col justify-center items-center">
							<div className="h-8">
								<Image
									height={32}
									width={23.4}
									src="/firebase.svg"
									alt="Firebase logo"
								/>
							</div>
							Firebase
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
