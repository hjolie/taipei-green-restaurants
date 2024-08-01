import React from "react";
import styles from "./Restaurants.module.css";

async function fetchRestaurants() {
    const res = await fetch(
        "https://data.taipei/api/v1/dataset/d706f428-b2c7-4591-9ebf-9f5cd7408f47?scope=resourceAquire&limit=20"
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

const Restaurants: React.FC = async () => {
    const data = await fetchRestaurants();
    console.log(data);

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Green Restaurants in Taipei</h3>
            <div className={styles.grid}>
                {data.result.results.map(
                    (restaurant: {
                        _id: number;
                        餐廳名稱: string;
                        餐廳電話: string;
                        餐廳地址: string;
                    }) => (
                        <a
                            key={restaurant._id}
                            href={`https://www.google.com/maps/search/${restaurant.餐廳名稱}`}
                            target="_blank"
                            className={styles.card}
                        >
                            <h2 className={styles.name}>
                                {restaurant.餐廳名稱}
                            </h2>
                            <p className={styles.phone}>
                                {restaurant.餐廳電話}
                            </p>
                            <p className={styles.address}>
                                {restaurant.餐廳地址}
                            </p>
                        </a>
                        // <li key={restaurant._id}>
                        //     {restaurant._id}
                        //     {restaurant.餐廳名稱}
                        // </li>
                    )
                )}
            </div>
        </div>
    );
};

export default Restaurants;
