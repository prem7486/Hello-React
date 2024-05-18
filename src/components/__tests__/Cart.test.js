import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn( () => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    })
);


it("should load RestaurantMenu component", async () =>{
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <RestaurantMenu />
                <Header />
            </Provider>
    </BrowserRouter>));

    const accodianHeader = screen.getByText("Veg Pizza (14)");
    fireEvent.click(accodianHeader);

    const foodlist = screen.getAllByTestId("foodItems");

    expect(foodlist.length).toBe(14);

    fireEvent.click(foodlist[0]);

    const addBtns = screen.getAllByRole("button", {name: "Add +"});

    expect(addBtns.length).toBe(14);

    fireEvent.click(addBtns[0]);

    const headerText = screen.getByText("Cart (1 items)");

    expect(headerText).toBeInTheDocument();
    


});