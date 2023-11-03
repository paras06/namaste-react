import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-list">
        {restaurantList.map((rest) => (
          <RestaurantCard key={rest.data.id} restData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
