"use client";
import React, { useState, useEffect } from "react";

const NameSearch: React.FC = () => {
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

    const handleNameSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFilteredRestaurants(
            restaurants.filter((restaurant: { 餐廳名稱: string }) =>
                restaurant.餐廳名稱
                    .toLowerCase()
                    .includes(searchKeyword.toLowerCase())
            )
        );
        setSearchKeyword("");
    };

    return (
        <div>
            <h2>Search Restaurants</h2>
            <form onSubmit={handleNameSearch}>
                <input
                    type="text"
                    placeholder="Enter a restaurant or a name keyword..."
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <button>Search</button>
            </form>

            <ul>
                {filteredRestaurants.map(
                    (restaurant: {
                        _id: number;
                        餐廳名稱: string;
                        餐廳地址: string;
                    }) => (
                        <li key={restaurant._id}>
                            <a
                                href={`https://www.google.com/maps/search/${restaurant.餐廳名稱}`}
                                target="_blank"
                            >
                                {restaurant.餐廳名稱}
                            </a>
                            <br />
                            {restaurant.餐廳地址}
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};

export default NameSearch;
