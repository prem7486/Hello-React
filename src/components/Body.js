import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";



const Body = () => {
  const [listOfRestaurant, setlistofRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState(""); 
  const RestaurantCardWithPromoted = withPromotedLabel(RestaurantCard);

  useEffect( ()=>{
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.693627&lng=76.7879304&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setlistofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false)
    return(
      <h1>seems you are offline</h1>
    );

  const {loggedInUser, setuserName} = useContext(UserContext)

  if(listOfRestaurant.length === 0){
    return <h1>Loading...</h1>
  }return (
        <div className="body">
          {/*console.log("hi")*/}
            <div className="filter flex items-center">
              <div className="search m-4 p-4">
                <input type="text" data-testid="searchInput" className=" border border-solid border-black" value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value);
                }}/>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
                onClick={() =>{
                    //console.log(searchText);
                    const filteredres = filteredRestaurant.filter(
                      (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                      );
                      setfilteredRestaurant(filteredres);
                }}>
                Search</button>
              </div>
                <div className="search m-4 p-4">
                <button className="filter-btn bg-gray-100 px-4 py-2 rounded-lg"
                onClick={() => {
                    let filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.3);
                    //console.log(listOfRestaurant);
                    setfilteredRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
                </div>
                <div className="search m-4 p-4">
                  <label>UserName: </label>
                <input className="border border-black p-2" value={loggedInUser} onChange={(e)=> setuserName(e.target.value)}/>
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {
                  filteredRestaurant.map((restaurant) =>
                   <Link key = {restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                    {
                      restaurant.info.promoted ? <RestaurantCardWithPromoted myData = {restaurant}/> : <RestaurantCard  myData = {restaurant}/>
                    }
                    </Link>)
                }
            </div>
        </div>
    )
}



export default Body;