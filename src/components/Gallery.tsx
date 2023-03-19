import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Image from "next/image";

export const Gallery = () => {
	const [isMobile, setIsMobile] = useState(true);

	const updateMedia = () => {
		setIsMobile(window.innerWidth < 768);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});

	return (
		<>
			<section>
				<h2>Galerie</h2>
				<div className="py-16">
					<Swiper
						slidesPerView={isMobile ? 1.25 : 2.25}
						spaceBetween={isMobile ? 24 : 44}
						pagination={true}
						loop={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						modules={[Autoplay, Pagination]}
					>
						<SwiperSlide>
							<div className="relative w-full bg-feijoa rounded-2xl aspect-[1/2] overflow-hidden">
								<a
									href="https://simple-meteo-app.vercel.app/"
									className="absolute inset-0 p-4"
									target="_blank"
								>
									<Image
										width={462}
										height={437}
										src="/simple-meteo-app.jpg"
										alt="Prévisualisation du projet météo"
										className="rounded-xl aspect-[1.35/2] object-cover"
									/>
									<h3>Application météo</h3>
									<p>
										Application en{" "}
										<span className="font-semibold">ReactJS</span> et{" "}
										<span className="font-semibold">Typescript</span> faisant
										appel à une <span className="font-semibold">API</span>
										pour afficher la météo du jour ainsi que les 2 suivants.
									</p>
								</a>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="relative w-full bg-feijoa rounded-2xl aspect-[1/2] overflow-hidden">
								<a
									href="https://simple-calculator-gamma-coral.vercel.app/"
									className="absolute inset-0 p-4"
									target="_blank"
								>
									<Image
										width={462}
										height={437}
										src="/simple-calculator.png"
										alt="Prévisualisation du projet calculatrice"
										className="rounded-xl aspect-[1.35/2] object-cover"
									/>
									<h3>Application calculatrice</h3>
									<p>
										Application de calcul utilisant{" "}
										<span className="font-semibold">ReactJS</span> et{" "}
										<span className="font-semibold">Typescript</span> avec les{" "}
										<span className="font-semibold">évenements</span>.
									</p>
								</a>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="relative w-full bg-feijoa rounded-2xl aspect-[1/2] overflow-hidden">
								<a
									href="https://staem-app.vercel.app/"
									className="absolute inset-0 p-4"
									target="_blank"
								>
									<Image
										width={462}
										height={437}
										src="/staem.png"
										alt="Prévisualisation du projet Staem"
										className="rounded-xl aspect-[1.35/2] object-cover"
									/>
									<h3>Page web Staem</h3>
									<p>
										Intégration de la page web d&rsquo;une application fictive
										en utilisant <span className="font-semibold">ReactJS</span>{" "}
										et <span className="font-semibold">Typescript</span> ainsi
										que les <span className="font-semibold">hooks</span>.
									</p>
								</a>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
		</>
	);
};
