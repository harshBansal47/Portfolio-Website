"use client";
import React from "react";
import SideSvg from '../../public/side-svg.svg';
import RoundBgSvg from '../../public/round-bg.svg';
import SVG1 from '../../public/svg-2.svg';

import { Gloria_Hallelujah, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const wierd_font = Gloria_Hallelujah({
    weight: "400",
    subsets: ["latin"]
});

const Title_Font = Poppins({
    weight: "800",
    subsets: ["latin"],
    style: 'normal'
});

export default function HomePage({ ...props }): React.ReactNode {
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/HB-Resume.pdf'; // Adjust this path to the actual CV file path
        link.download = 'resume.pdf'; // Adjust the filename as needed
        link.click();
    };

    return (
        <div className="w-full sm:h-full md:min-h-screen bg-primary/50 pt-20 sm:pt-60 lg:pt-20 flex justify-center items-center">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-4 items-center relative px-4 md:px-16 w-full">
                <div className="flex flex-col lg:flex-row items-center sm:items-start lg:space-x-4">
                    <div className="mr-0 lg:mr-4 mb-4 lg:mb-0">
                        <Image src={SideSvg} alt='' className="fill-emerald-400 scale-75 md:scale-100 lg:scale-110" />
                    </div>
                    <div className="text-center sm:text-left z-20">
                        <h1 className={cn("text-2xl sm:text-4xl lg:text-6xl text-white font-bold", Title_Font.className)}>Full Stack Developer</h1>
                        <h1 className={cn("text-2xl sm:text-4xl lg:text-6xl text-emerald-400 font-bold", Title_Font.className)}>&</h1>
                        <h1 className={cn("text-2xl sm:text-4xl lg:text-6xl text-white font-bold", Title_Font.className)}>QA Automation Engineer</h1>
                        <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center lg:justify-start">
                            <Button variant="secondary" className="font-bold">Contact Me</Button>
                            <Button className="bg-emerald-400 font-bold flex items-center" onClick={downloadCV}>
                                Download CV
                                <DownloadIcon className="h-4 w-4 ml-3" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="relative mt-10 lg:mt-0 lg:ml-16 flex justify-center">
                    <div className="relative">
                        <Image src={RoundBgSvg} alt="" className="scale-75 md:scale-100 lg:scale-125" />
                        <Image src={SVG1} alt="" className="absolute inset-0 top-32 mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}
