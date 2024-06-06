"use client";

import { cn } from "@/lib/utils";
import { AlignRight, X } from "lucide-react";
import { Oswald } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const HeadingFont = Oswald({
    weight: "600",
    subsets: ["latin"]
});

export default function Navbar({ ...props }): JSX.Element {
    const [scroll, setScroll] = useState<number>(0);
    const [expand, setExpand] = useState<boolean>(false);
    const pathname = usePathname();

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={cn("w-full bg-primary/50 flex justify-between items-center py-4 px-6 lg:px-20 text-primary-foreground fixed z-50 top-0 left-0 border-b-2 border-b-secondary/20 transition-all", scroll > 50 && "bg-primary/80 backdrop-blur-md")}>
            <h1 className={cn("font-bold text-3xl", HeadingFont.className)}>Harsh Bansal</h1>
            <div className="hidden lg:flex gap-5">
                <Link href="/">
                    <p className={cn("font-medium text-md hover:text-primary-foreground/50 transition-colors", pathname === "/" && "text-primary-foreground/50")}>Home</p>
                </Link>
                <Link href="/#about">
                    <p className={cn("font-medium text-md hover:text-primary-foreground/50 transition-colors", pathname === "/about" && "text-primary-foreground/50")}>About Me</p>
                </Link>
                <Link href="/#contact">
                    <p className={cn("font-medium text-md hover:text-primary-foreground/50 transition-colors", pathname === "/contact" && "text-primary-foreground/50")}>Contact</p>
                </Link>
            </div>
            {expand ? (
                <X className="lg:hidden cursor-pointer" onClick={() => setExpand(!expand)} />
            ) : (
                <AlignRight className="lg:hidden cursor-pointer" onClick={() => setExpand(!expand)} />
            )}
            {expand && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-primary/50 py-4 px-6 pl-10">
                    <Link href="/">
                        <p className={cn("font-bold text-md mb-2 hover:text-primary-foreground/50 transition-colors", pathname === "/" && "text-primary-foreground/50")}>Home</p>
                    </Link>
                    <Link href="/#about">
                        <p className={cn("font-bold text-md mb-2 hover:text-primary-foreground/50 transition-colors", pathname === "/about" && "text-primary-foreground/50")}>About Me</p>
                    </Link>
                    <Link href="/#contact">
                        <p className={cn("font-bold text-md hover:text-primary-foreground/50 transition-colors", pathname === "/contact" && "text-primary-foreground/50")}>Contact</p>
                    </Link>
                </div>
            )}
        </div>
    );
}
