import { cn } from "@/lib/utils";
import { Lightbulb, Music } from "lucide-react";
import bgSquare from '../../public/items-sq-dark.svg';
import svg2 from '../../public/svg-3.svg';
import { Poppins, Roboto } from "next/font/google";
import Image from "next/image";
import SideSvg2 from "../../public/side-svg-2.svg";

const headingFont = Poppins({
    weight: ["600", "800"],
    subsets: ["latin"]
});

const textFont = Roboto({
    weight: ["400"],
    subsets: ["latin"]
});

export default function AboutPage() {
    return (
        <div id="about" className="w-full min-h-screen bg-primary/50 px-6 py-10 lg:px-20 lg:py-20 text-secondary border-t-2 border-t-secondary/20 flex flex-col lg:flex-row lg:justify-between gap-6 overflow-hidden">
            <div className="flex flex-col lg:flex-col justify-center items-center lg:w-1/2 lg:-translate-y-10 space-y-6 lg:space-y-0">
                <Music className="transform rotate-45 h-8 w-6 text-emerald-400 mb-6 lg:mb-0" />
                <div className="flex flex-col gap-4 p-2 lg:items-start">
                    <h1 className={cn("font-bold text-2xl sm:text-3xl md:text-4xl flex gap-3 items-center", headingFont.className)}>
                        About <span className="text-teal-400">me</span>
                        <Lightbulb className="text-orange-500 w-8 h-8 rotate-45 shadow-lg" />
                    </h1>
                    <p className={cn("text-base sm:text-lg", textFont.className)}>
                        I am a highly motivated and skilled professional with extensive experience in web development and quality assurance. My passion lies in delivering high-quality solutions and enhancing user experiences through robust development practices and thorough testing. With a solid foundation in both front-end and back-end development, I strive to create seamless, efficient, and user-friendly applications.
                    </p>
                </div>
                <Image src={SideSvg2} alt="Decorative SVG" className="mx-auto lg:rotate-180" />
            </div>
            <div className="relative lg:w-1/2 flex justify-center items-center z-10 overflow-hidden">
                <Image src={bgSquare} alt="Background Square" className="lg:-translate-y-28 object-contain max-w-full h-auto" />
                <div className="absolute top-0 flex flex-col items-center w-full z-0">
                    <Image src={svg2} alt="Decorative SVG" className="z-10 object-contain max-w-full h-auto" />
                    <svg width="100%" height="150" viewBox="0 0 1440 320" className="z-0 max-w-full h-auto">
                        <path fill="#557A79" fillOpacity="1" d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,74.7C672,53,768,43,864,74.7C960,107,1056,181,1152,186.7C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}
