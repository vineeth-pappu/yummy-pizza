import { DELIVERY_RATE } from "../constants/deliveryRate";

export default {
    loading: false,
    products: [],
    cart: {
        items: [],
        subTotal: 0,
        grandTotal: 0,
        deliveryCharge: DELIVERY_RATE
    },
    userDetails: {
        name: '',
        email: '',
        address: ''
    },
    currency: {
        selectedCurrency: {},
        avilableCurrencies: []
    }

};