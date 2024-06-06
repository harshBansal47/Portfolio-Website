import { cn } from "@/lib/utils";
import { Facebook, Home, Instagram, Mail, Phone, Send, Twitter, User, Youtube } from "lucide-react";
import { Oswald } from "next/font/google";
import { Button } from "../ui/button";

const HeadingFont = Oswald({
    weight: "600",
    subsets: ["latin"]
});

export default function Footer() {
    return (
        <footer className="px-10 bg-primary/50 w-full py-20 flex flex-col space-y-10 text-center text-secondary border-t-2 border-t-secondary/20">
            <div className="flex flex-col lg:flex-row space-y-5 justify-between sm:items-center">
                <div className="flex flex-col space-y-4 justify-evenly">
                    <div className="flex gap-2 items-center">
                        <div className="w-5 h-5 flex">
                            <div className="w-3 h-5 bg-teal-400"></div>
                            <div className="w-2 h-5 bg-secondary"></div>
                        </div>
                        <h1 className={cn("font-bold text-3xl", HeadingFont.className)}>Harsh Bansal</h1>
                    </div>
                    <h2 className="flex items-center text-md gap-2"><Phone className="h-4 w-4 text-secondary" aria-label="Phone" />+91 9649269385</h2>
                    <h2 className="flex items-center text-md gap-2"><Mail className="h-4 w-4 text-secondary" aria-label="Email" />harsh.sde2@gmail.com</h2>
                </div>
                <div className="w-4/5 m-auto my-4 h-1 bg-teal-600 lg:hidden"></div>
                <div className="text-left flex flex-col gap-2">
                    <h2 className="text-xl font-bold">Address:</h2>
                    <h2 className="text-md">Tulsi Residency, Near Deeg Road</h2>
                    <h2 className="text-md">Goverdhan, Mathura</h2>
                    <h2 className="text-md">Uttar Pradesh, 281502</h2>
                </div>
                <div className="w-4/5 m-auto my-4 h-1 bg-gray-600 lg:hidden"></div>
                <div className="flex flex-col space-y-5">
                    <div className="flex flex-col space-y-4">
                        <h1 className="flex items-center text-md gap-2"><Home className="h-4 w-4 text-secondary" aria-label="Home" /> Home</h1>
                        <h1 className="flex items-center text-md gap-2"><User className="h-4 w-4 text-secondary" aria-label="About me" /> About me</h1>
                        <h1 className="flex items-center text-md gap-2"><Send className="h-4 w-4 text-secondary" aria-label="Contact" /> Contact</h1>
                    </div>
                    <div className="py-2 flex gap-5">
                        <Button size="icon" variant="default" className="rounded bg-slate-700" aria-label="Twitter">
                            <Twitter />
                        </Button>
                        <Button size="icon" variant="default" className="rounded bg-slate-700" aria-label="Facebook">
                            <Facebook />
                        </Button>
                        <Button size="icon" variant="default" className="rounded bg-slate-700" aria-label="Instagram">
                            <Instagram />
                        </Button>
                        <Button size="icon" variant="default" className="rounded bg-slate-700" aria-label="YouTube">
                            <Youtube />
                        </Button>
                    </div>
                </div>
                <div className="w-4/5 m-auto my-4 h-1 bg-gray-600 lg:hidden"></div>
            </div>
            {/* <div className="flex flex-col space-y-4">
                <h2 className="text-xl font-bold">Subscribe to our Newsletter</h2>
                <form className="flex justify-center gap-2">
                    <input
                        type="email"
                        className="px-4 py-2 rounded border-2 border-secondary/20"
                        placeholder="Enter your email"
                        required
                    />
                    <Button type="submit" variant="default" className="rounded bg-slate-700 text-secondary">Subscribe</Button>
                </form>
            </div> */}
            <div className="flex flex-col space-y-2">
                <div className="flex justify-center gap-4">
                    <a href="/terms" className="text-md text-secondary hover:underline">Terms of Service</a>
                    <a href="/privacy" className="text-md text-secondary hover:underline">Privacy Policy</a>
                </div>
                <p className="text-md text-secondary">© 2024 Harsh Bansal. All rights reserved.</p>
            </div>
        </footer>
    );
}
