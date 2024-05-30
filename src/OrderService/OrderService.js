import axios from "axios";

const API_URL = "http://localhost:3002/orders";

const createOrder = async (cart) => {
    const token = localStorage.getItem("token");
    try {
        console.log({ cart });
        const product = cart.map((product) => {
            return { ProductId: product.id, units: product.units };
        });

        await axios.post(API_URL + "/", product, {
            headers: {
                authorization: token,
            },
        });
    } catch (error) {
        console.error(error);
    }
};

const OrderService = {
    createOrder,
};

export default OrderService;
