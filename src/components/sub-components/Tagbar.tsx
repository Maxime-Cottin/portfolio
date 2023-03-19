import { Tag } from "./Tag";

export const Tagbar = () => {
	return (
		<>
			<div className="flex gap-2 whitespace-nowrap overflow-scroll">
				<Tag linkURL="#" linkTitle="lorem ipsum" name="lorem ipsum" />
				<Tag linkURL="#" linkTitle="lorem ipsum" name="lorem ipsum" />
				<Tag linkURL="#" linkTitle="lorem ipsum" name="lorem ipsum" />
				<Tag linkURL="#" linkTitle="lorem ipsum" name="lorem ipsum" />
			</div>
		</>
	);
};
