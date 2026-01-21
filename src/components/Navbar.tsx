"use client";
import { JSX, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// 1. Import SplitText (Ensure you have installed/configured it)
import { SplitText } from "gsap/SplitText"; 

// 2. Register both plugins
gsap.registerPlugin(useGSAP, SplitText);

export default function Navbar(): JSX.Element {
    const navRef = useRef<HTMLElement>(null);

    const { contextSafe } = useGSAP(() => {
        // --- Entrance Animation (Original) ---
        const nav_timeline = gsap.timeline();
        
        nav_timeline.from(navRef.current, { opacity: 0, duration: 0.4, delay: 0.1 });
        nav_timeline.from("#logo", { opacity: 0, scale: 0, duration: 0.5, delay: 0.2 });
        nav_timeline.from("#nav_links li", { opacity: 0, y: -20, duration: 0.5, delay: 0.2, stagger: 0.2 });

        // --- SplitText Setup ---
        // We target the class .nav-text inside our scope
        const split = new SplitText(".nav-text", { type: "chars", charsClass: "char" });

        // React Cleanup: Revert the split when component unmounts
        return () => {
            split.revert();
        };
    }, { scope: navRef });

    // --- Hover Handlers ---
    const onEnter = contextSafe((e: React.MouseEvent<HTMLLIElement>) => {
        // Find the characters inside the hovered element
        const chars = e.currentTarget.querySelectorAll(".char");
        
        // Animate the characters (Wave effect)
        gsap.to(chars, {
            y: -5,
            stagger: 0.05,
            color: "#666", // Optional color change
            duration: 0.3,
            ease: "back.out(1.7)"
        });
    });

    const onLeave = contextSafe((e: React.MouseEvent<HTMLLIElement>) => {
        const chars = e.currentTarget.querySelectorAll(".char");
        console.log(chars);
        // Reset characters
        gsap.to(chars, {
            y: 0,
            stagger: 0.05,
            color: "black",
            duration: 0.3,
            ease: "power1.out"
        });
    });

    return (
        <nav className="block" ref={navRef}>
            <div className="py-1 px-4 flex justify-between items-center">
                <div id="logo">
                    <Link href="/">
                        <Image src="/original_logo_nobg.png" alt="Logo" width="150" height="100" className="object-fill" />
                    </Link>
                </div>
                
                <ul id="nav_links" className="flex justify-between align-middle gap-4">
                    {/* Add onEnter/onLeave and the 'nav-text' class to the text container */}
                    
                    <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link href="/" className="px-2 text-black font-bold cursor-pointer inline-block">
                            <span className="nav-text">Home</span>
                        </Link>
                    </li>
                    
                    <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link href="/about" className="px-2 text-black font-bold cursor-pointer inline-block">
                            <span className="nav-text">About</span>
                        </Link>
                    </li>
                    
                    <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link href="/contact" className="px-2 text-black font-bold cursor-pointer inline-block">
                            <span className="nav-text">Contact</span>
                        </Link>
                    </li>
                    
                    <li onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link href="/services" className="px-2 text-black font-bold cursor-pointer inline-block">
                            <span className="nav-text">Services</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}