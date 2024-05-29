import axios from "axios";

const API_URL = "http://localhost:3002/orders";

const createOrder = async (cart) => {
    const token = localStorage.getItem("token");
    try {
        console.log({ cart });
        const productsIds = cart.map((product) => product.id);

        await axios.post(
            API_URL + "/",
            { ProductId: productsIds },
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

const OrderService = {
    createOrder,
};

export default OrderService;
