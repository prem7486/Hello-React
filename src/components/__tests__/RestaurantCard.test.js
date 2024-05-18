import RestaurantCard, {withPromotedLabel}from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import xyz from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";

it("should render RestaurantCard with props data", () => {
    render(<RestaurantCard myData={xyz} />);

   const name = screen.getByText("Vijay Dairy");

   expect(name).toBeInTheDocument();
});

it("should load hoc component", () => {

    const ResaurantCardWithPromoted = withPromotedLabel(RestaurantCard);
    render( <ResaurantCardWithPromoted myData={xyz}/>);

    const label = screen.getByText("Promoted");

    expect(label).toBeInTheDocument();
})