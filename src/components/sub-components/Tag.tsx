interface TagProps {
	linkURL: string;
	linkTitle: string;
	name: string;
}

export const Tag = ({ linkURL, linkTitle, name }: TagProps) => {
	return (
		<>
			<a
				href={linkURL}
				title={linkTitle}
				className="bg-red-500 px-4 py-1 rounded-full font-semibold"
			>
				{name}
			</a>
		</>
	);
};
