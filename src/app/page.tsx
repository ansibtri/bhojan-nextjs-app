import { Button } from "components/Button";
import Image from "next/image";
import Navbar from "@/../components/Navbar";
import Home from "@/../components/Home";
export default function Page() {
    return (
        <>
            <div className="bg-yellow-300 px-12 pt-4 h-screen">
                <Navbar />
                <Home/>
            </div>
            
        </>
    )
}