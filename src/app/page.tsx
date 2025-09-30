import Image from "next/image";
import { FiMoon, FiSun } from "react-icons/fi";
import { MdGTranslate } from "react-icons/md";

import logo from "../../public/logo-p.png";

export default function Home() {
	return (
		<div className="">
			<header
				className="fixed flex w-full border-b border-white p-2"
				style={{ height: "60px" }}
			>
				<Image
					className="h-full"
					src={logo}
					alt="Logo"
					style={{ width: "250px" }}
				/>
				<div className="flex flex-1 items-center justify-end gap-3">
					<FiMoon />
					<MdGTranslate />
					<nav className="flex items-center">
						<ul className="flex gap-6 ml-4">
							<li>
								<a href="#about-me">Sobre mim</a>
							</li>
							<li>
								<a href="#projects">Projetos</a>
							</li>
							<li>
								<a href="#skills">Skills</a>
							</li>
							<li>
								<a href="#services">Serviços</a>
							</li>
						</ul> 
					</nav>
						<button className= "ml-4 bg-pink-500 rounded-4xl p-1 pl-3 pr-3">Entrar em contato</button>
				</div>
			</header>
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section id="about-me"></section>
        <section id="project"></section>
        <section id="skills"></section>
        <section id="services"></section>
        <section id="contact"></section>

      </main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
		</div>
	);
}
