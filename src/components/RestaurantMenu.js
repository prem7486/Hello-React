
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
    
    const {resId} = useParams();

    const dummy = "Dummy Data";
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setshowIndex] = useState(null);
    

    if(resInfo === null) return <h1>Loading...</h1>;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    //console.log(categories);
    return(
        <div className="menu text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {
                categories.map((category, index) => (
                <RestaurantCategory key={category?.card?.card.title} 
                data={category?.card?.card} 
                showItems={index === showIndex ? true : false} 
                setshowIndex={()=>{setshowIndex(index)}}
                dummy ={dummy}
                />
                
                ))
            }
            
        </div>
    )
}

export default RestaurantMenu;