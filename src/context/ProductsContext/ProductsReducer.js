const products = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        case "ADD_CART":
            return {
                ...state,
                cart: [action.payload, ...state.cart],
            };
        case "CLEAR_CART":
            return {
                ...state,
                cart: [],
            };
        case "SET_CART":
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (item.id == action.payload.id) {
                        return (item = action.payload);
                    }
                    return item;
                }),
            };
        case "ADD_LIKE":
            return {
                ...state,
                likes: [action.payload, ...state.likes],
            };
        case "REMOVE_LIKE":
            return {
                ...state,
                likes: action.payload,
            };
        case "PRODUCT_BY_NAME":
            return {
                ...state,
                products: action.payload,
            };
        case "ORDER_ASCEN":
            return {
                ...state,
                products: action.payload,
            };
        case "ORDER_DESC":
            return {
                ...state,
                products: action.payload,
            };
        case "GET_BY_PRICE":
            return {
                ...state,
                products: action.payload,
            };

        default:
            return state;
    }
};

export default products;
