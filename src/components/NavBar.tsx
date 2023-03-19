import Image from "next/image";
import { useState } from "react";

interface INavItem {
	name: string;
}

const navItems: INavItem[] = [
	{ name: "lorem 1" },
	{ name: "lorem 2" },
	{ name: "lorem 3" },
	{ name: "lorem 4" },
	{ name: "lorem 5" },
];

export const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<nav
				id="main-nav"
				className={
					"fixed h-screen w-[75vw] overflow-hidden flex flex-col-reverse pb-20 z-50 duration-500 ease-in-out " +
					(isOpen ? "right-[25vw]" : "right-[100vw]")
				}
			>
				<div
					className={
						"h-[200%] w-[200%] rounded-full -top-1/2 bg-yellow absolute duration-500 ease-in-out" +
						(isOpen
							? " delay-100 -left-1/2 -rotate-[20deg]"
							: " delay-75 -left-[400%] -rotate-[20deg]")
					}
				></div>
				<ul className="z-10">
					{navItems.map((item: INavItem, key: number) => {
						return (
							<li
								key={key}
								className={
									"px-4 py-2 text-slate-700 capitalize transform duration-500 " +
									(isOpen ? "translate-x-0" : "-translate-x-full")
								}
							>
								<a
									href="#"
									title="accessibility"
									className="flex items-center gap-4"
								>
									<Image
										width={40}
										height={40}
										src="/open-source.png"
										alt="icone"
									/>
									{item.name}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="fixed bottom-4 left-4 z-50"
			>
				<Image
					width={48}
					height={48}
					src="/open-source.png"
					alt="icone"
					className="bg-slate-50 p-2 rounded-full box-border"
				/>
			</button>
		</>
	);
};
