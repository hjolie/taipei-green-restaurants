import RestaurantInfo from "@/components/RestaurantInfo";

const RestaurantDetailPage = () => {
    const restaurant = {
        title: "《扶風堂》披薩。義麵。吉拉朵",
        phone: "(02)27153377",
        address: "臺北市松山區敦化北路165巷5號1樓",
        website: "https://www.facebook.com/FoodFullTongue/",
        booking: "https://shop.ichefpos.com/store/mkEkmaBD/reserve",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.3872181657193!2d121.5503157!3d25.0548617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab28866a6c85%3A0x36758049a3f0dcd!2z5om26aKo5aCC5oqr6JapLue-qem6tS7lkInmi4nmnLU!5e0!3m2!1szh-TW!2stw!4v1722792096065!5m2!1szh-TW!2stw",
    };

    return (
        <div>
            <RestaurantInfo
                title={restaurant.title}
                phone={restaurant.phone}
                address={restaurant.address}
                website={restaurant.website}
                booking={restaurant.booking}
                map={restaurant.map}
            />
        </div>
    );
};

export default RestaurantDetailPage;
