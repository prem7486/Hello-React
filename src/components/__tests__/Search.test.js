import Body from "../Body";
import { render, screen, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../../components/mocks/mockResListData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn( () => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("should render the body component with search button", async () =>{
    await act(async () =>  render(<BrowserRouter><Body /></BrowserRouter>))

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: "pizza"}});

    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("rescard");

    expect(cards.length).toBe(2);
   
});


it("should render top rated restaurant", async () =>{
    await act(async () =>  render(<BrowserRouter><Body /></BrowserRouter>))

    const totalRes = screen.getAllByTestId("rescard");

    expect(totalRes.length).toBe(9);

    const filterbtn = screen.getByRole("button", {name: "Top Rated Restaurants"});

    fireEvent.click(filterbtn);

    const afterClick = screen.getAllByTestId("rescard");

    expect(afterClick.length).toBe(4);


   
})