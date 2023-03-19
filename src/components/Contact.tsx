import emailjs from "emailjs-com";
import * as dotenv from "dotenv";

dotenv.config();

export const Contact = () => {
	const sendEmail = (e: any) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_KEY as string,
				process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_KEY as string,
				e.currentTarget,
				process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY as string
			)
			.then(
				(result: any) => {
					console.log(result.text);
				},
				(error: any) => {
					console.log(error.text);
				}
			);
	};

	return (
		<>
			<section id="contact">
				<h2>Me contacter</h2>
				<form
					onSubmit={sendEmail}
					className="flex flex-col justify-center gap-6 my-8 max-w-lg mx-auto"
				>
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-lg">Votre Prénom :</label>
						<input
							type="text"
							name="fname"
							className="rounded-full px-5 py-2"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-lg">Votre Nom :</label>
						<input
							type="text"
							name="lname"
							className="rounded-full px-5 py-2"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-lg">Votre Mail :</label>
						<input type="email" name="mail" className="rounded-3xl px-5 py-2" />
					</div>
					<div className="flex flex-col gap-2">
						<label className="font-semibold text-lg">Votre Message :</label>
						<textarea
							rows={6}
							name="message"
							className="px-5 py-2 rounded-3xl"
						/>
					</div>
					<button className="mt-6 px-6 py-4 rounded-full bg-feijoa font-semibold text-2xl flex justify-between items-center">
						Envoyer
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
					</button>
				</form>
			</section>
		</>
	);
};
