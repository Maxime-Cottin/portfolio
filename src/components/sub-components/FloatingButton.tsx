import Image from "next/image";

interface FloatingButtonProps {
	isNavOpen: boolean;
	setIsNavOpen: any;
}

export const FloatingButton = ({
	isNavOpen,
	setIsNavOpen,
}: FloatingButtonProps) => {
	return (
		<>
			<button onClick={() => setIsNavOpen(!isNavOpen)}>
				<Image
					width={48}
					height={48}
					src="/open-source.png"
					alt="icone"
					className="bg-slate-50 absolute bottom-4 left-4 p-2 rounded-full z-50 box-border"
				/>
			</button>
		</>
	);
};
