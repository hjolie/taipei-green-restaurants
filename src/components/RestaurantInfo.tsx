import React from "react";

interface RestaurantInfoProps {
    title: string;
    phone: string;
    address: string;
    website: string;
    booking: string;
    map: string;
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({
    title,
    phone,
    address,
    website,
    booking,
    map,
}) => {
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.title}>{title}</h1>
            </div>
            <div style={styles.imageContainer}>
                <img src="/images/1.png" alt={title} style={styles.image} />
            </div>
            <div style={styles.details}>
                <p style={styles.detail}>
                    <strong style={styles.detailTitle}>Phone:</strong> {phone}
                </p>
                <p style={styles.detail}>
                    <strong style={styles.detailTitle}>Address:</strong>{" "}
                    {address}
                </p>
                <p style={styles.detail}>
                    <strong style={styles.detailTitle}>Website:</strong>{" "}
                    <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                    >
                        {website}
                    </a>
                </p>
                <p style={styles.detail}>
                    <strong style={styles.detailTitle}>Reservation:</strong>{" "}
                    <a
                        href={booking}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                    >
                        {booking}
                    </a>
                </p>
            </div>
            <div style={styles.mapContainer}>
                <iframe src={map} style={styles.map} loading="lazy"></iframe>
            </div>
        </div>
    );
};

const styles = {
    container: {
        color: "#656363",
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    header: {
        borderBottom: "2px solid #005433",
        paddingBottom: "10px",
        marginBottom: "20px",
    },
    title: {
        color: "#005433",
        fontSize: "24px",
        fontWeight: "bold",
        margin: 0,
    },
    imageContainer: {
        marginBottom: "20px",
    },
    image: {
        maxWidth: "100%",
        height: "auto",
        borderRadius: "8px",
    },
    details: {
        marginBottom: "50px",
    },
    detail: {
        marginBottom: "10px",
        fontSize: "18px",
    },
    detailTitle: {
        color: "#005433",
    },
    link: {
        color: "#656363",
        textDecoration: "none",
    },
    mapContainer: {
        marginTop: "20px",
    },
    map: {
        width: "480px",
        height: "360px",
        border: "0",
        borderRadius: "8px",
    },
};

export default RestaurantInfo;
