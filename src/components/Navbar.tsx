"use client";
import { JSX, useRef } from "react";
import Link from "next/link";
import { Button } from "./Button";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Navbar(): JSX.Element {
    // animating navbar
    const navRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    // const 
    useGSAP(() => {
        const nav_timeline = gsap.timeline();
        
        nav_timeline.from(navRef.current, {
            opacity: 0,
            duration: .4,
            delay: 0.1,
        }
        );

        nav_timeline.from("#logo", {
            opacity: 0,
            scale: 0,
            duration: .5,
            delay: .2,
        })

        nav_timeline.from("#nav_links li",{
            opacity: 0,
            y:-20,
            duration: 0.5,
            delay: 0.2,
            stagger: 0.2,
        })
    }, {scope: navRef});
    return (
        <nav className="block" ref={navRef}>
            <div className="py-1 px-4  flex justify-between items-center">
                <div id="logo">
                    <Image src="/original_logo_nobg.png" alt="Logo" width="150" height="100" className="object-fill" />
                </div>
                <ul id="nav_links" className="flex justify-between align-middle gap-4">
                    <li></li>
                    <li></li>
                    <li className=""><Link href="/" className="  px-2 text-black font-bold cursor-pointer">Home</Link></li>
                    <li className=""><Link href="/about" className=" px-2  text-black font-bold cursor-pointer">About</Link></li>
                    <li className=""><Link href="/contact" className=" px-2  text-black font-bold cursor-pointer">Contact</Link></li>
                    <li className=""><Link href="/services" className=" px-2  text-black font-bold cursor-pointer">Services</Link></li>
                </ul>
                {/* <div className="flex justify-between align-middle gap-3">
                    <Button title="Login" className="px-8 py-2 rounded-full text-black bg-white cursor-pointer hover:bg-black hover:text-white transition delay-75 duration-500 ease-in-out hover:border-white " />
                    <Button title="Register" className="px-8 py-2 rounded-full text-white bg-black cursor-pointer hover:bg-white hover:text-black border-black border-2 transition delay-75 duration-500 ease-in-out hover:border-white " />
                </div> */}
            </div>
        </nav>
    )
}