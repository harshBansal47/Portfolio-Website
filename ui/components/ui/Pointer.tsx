"use client"
import { MoveDown, MoveUp } from "lucide-react";
import { Button } from "./button";
import { useEffect, useState } from "react";

export default function ScrollPointer(){
    const [isBottom, setIsBottom] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const isBottomReached = scrollPosition >= document.documentElement.scrollHeight;
            const isTopReached = window.scrollY === 0;
    
            setIsBottom(isBottomReached && !isTopReached);
        };
    
        const debounceScroll = debounce(handleScroll, 100);
        window.addEventListener('scroll', debounceScroll);
        return () => window.removeEventListener('scroll', debounceScroll);
    }, []);

    const handleClick = () => {
        if (isBottom) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        }
    }

    return (
        <Button 
        onClick={handleClick} 
        variant="secondary" 
        size="sm" 
        className="fixed bottom-16 left-[277px] z-40 cursor-pointer bg-teal-600 text-white rounded-lg px-4 py-2 hover:bg-teal-400 transition-all duration-200 ease-in-out shadow-neon hover:shadow-neon-hover active:shadow-neon-active transform hover:scale-105 active:scale-95"
        aria-label={isBottom ? "Scroll to top" : "Scroll down"}
      >
        {isBottom ? <MoveUp /> : <MoveDown />}
      </Button>
    );
}

// Debounce function to improve performance
function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null;

    return function (...args: Parameters<T>) {
        const later = () => {
            if (timeout) clearTimeout(timeout);
            func(...args);
        };

        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}