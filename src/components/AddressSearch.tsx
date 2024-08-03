"use client";
import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import eventBus from "./eventBus";

const AddressSearch: React.FC = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/restaurants");
                const data = await res.json();
                const results = data.result.results;
                setRestaurants(results);
            } catch (err) {
                console.error("Failed to fetch data: ", err);
            }
        };
        fetchData();
    }, []);

    const handleAddressSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        eventBus.emit("clearSearchResults");
        setFilteredRestaurants(
            restaurants.filter((restaurant: { 餐廳地址: string }) =>
                restaurant.餐廳地址.includes(searchKeyword)
            )
        );
        setSearchKeyword("");
    };

    useEffect(() => {
        const handleClearSearchResults = () => {
            setFilteredRestaurants([]);
        };

        eventBus.on("clearSearchResults", handleClearSearchResults);

        return () => {
            eventBus.off("clearSearchResults", handleClearSearchResults);
        };
    }, []);

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Search Restaurants By Address</h3>
            <form onSubmit={handleAddressSearch} className={styles.form}>
                <input
                    type="text"
                    placeholder="Address, district or street..."
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <button>Search</button>
            </form>

            <div className={styles.grid}>
                {filteredRestaurants.map(
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
                    )
                )}
            </div>
        </div>
    );
};

export default AddressSearch;
