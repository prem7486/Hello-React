import { useContext } from "react";
import {CDN_URL} from "../utils/constants"
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { myData } = props;

    console.log(myData);
    const { name, cuisines, avgRating } = myData?.info;
    const { loggedInUser } = useContext(UserContext);
        return (
        <div data-testid="rescard" className="w-[220px] res-card m-4 p-4 bg-gray-200 rounded-lg">
            <img src={
              CDN_URL + myData.info.cloudinaryImageId
            }
            className="res-logo rounded-lg"
            alt="res-logo" />
            <h3 className="font-bold py-4 text-xl">{name}</h3>
            <h4 className="h">{cuisines.join(", ")}</h4>
            <h4 className="h">{avgRating}</h4>
            <h4 className="h">3 minutes</h4>
            <h4 className="h">User: {loggedInUser}</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props)=>{
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;