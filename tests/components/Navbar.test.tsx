
import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "@/../components/Navbar";

describe("Navbar", () => {
    // render Navbar 
    render(<Navbar />);

    it('should render Navbar component', () => {
        const navbarElement = screen.getByRole("navigation");
        console.log("navbarElement", navbarElement);
        expect(navbarElement).toBeDefined();
        // expect(navbarElement).toHaveTextContent("Home");
    });
    
    it("should have logo image", ()=>{
        // Check for logo image
        const logoImage = screen.getByRole("img", { name: /logo/i });
        expect(logoImage).toBeDefined();
    })

    // check for navigation links
    // home, about, services, contact
    it("should have navigation link:Home", ()=>{
        const link_array = [/Home/i, /About/i, /Services/i, /Contact/i];
        link_array.forEach((link_text)=>{
            const navLink = screen.getByLabelText(link_text);
            expect(navLink).toBeDefined();
        })
    })


})
