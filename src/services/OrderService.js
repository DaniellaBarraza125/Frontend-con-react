import axios from "axios";

const API_URL = "http://localhost:3002/orders";

const createOrder = async (cart) => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
        await axios.post(
            API_URL + "/orders",
            { productIds: cart },
            {
                headers: {
                    authorization: token,
                },
            },
        );
    } catch (error) {
        console.error(error);
    }
};

const orderService = {
    createOrder,
};

export default orderService;
