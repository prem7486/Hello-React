import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("test cases for contact page", () =>{
    test("this will return a heading", ()=>{
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    test("this will check how many input box is there", () =>{
        render(<Contact />);
    
        const input = screen.getAllByRole("textbox");
    
        expect(input.length).toBe(2);
    });
    
    test("this will check to load submit btton", () =>{
        render(<Contact />);
    
        const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
    });
});

