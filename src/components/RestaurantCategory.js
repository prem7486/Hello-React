import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setshowIndex, dummy}) =>{


    const handleClick = () => {
        setshowIndex()
    };
    
    return <div>
        {/*header*/}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span>{data.title} ({data.itemCards.length})</span>
                <span className="font-bold text-lg">↓</span>
            </div>

            {showItems && <ItemList items={data.itemCards} dummy={dummy}/>}
        </div>
        {/*body*/}
       
    </div>
}

export default RestaurantCategory;