export const items = [{
        id: 1,
        name: 'Margherita Pizza',
        description: 'Tomato sauce, mozzarella, fresh basil.',
        price: 10,
        currency: 'USD',
        image: 'https://www.freeiconspng.com/uploads/pizza-png-15.png'
    },
    {
        id: 2,
        name: 'Diavola Pizza',
        description: 'Tomato sauce, mozzarella, spicy Italian salami, oregano.',
        price: 20,
        currency: 'USD',
        image: 'https://www.freeiconspng.com/uploads/pizza-png-15.png'
    },
    {
        id: 3,
        name: 'Italia Pizza',
        description: 'Tomato sauce, buffalo mozzarella, fresh rocket, Parmesan, cherry tomatoes.',
        price: 30,
        currency: 'USD',
        image: 'https://www.freeiconspng.com/uploads/pizza-png-15.png'
    },
    {
        id: 4,
        name: 'Bresaola Pizza',
        description: 'Tomato sauce, mozzarella, beef bresaola, fresh rocket and parmesan.',
        price: 40,
        currency: 'USD',
        image: 'https://www.freeiconspng.com/uploads/pizza-png-15.png'
    },
    {
        id: 5,
        name: 'Vegan Pizza',
        description: 'Vegan cheese, oven roasted peppers, mushroom, sliced onions, olives.',
        price: 50,
        currency: 'USD',
        image: 'https://www.freeiconspng.com/uploads/pizza-png-15.png'
    },
]

export default {
    products: [...items],
    cart: {
        items: [],
        subTotal: 0,
        deliveryCharge: 10
    },
    userDetails: {
        name: '',
        email: '',
        address: ''
    },
    currency: {
        selectedCurrency: {
            code: '$',
            name: 'USD'
        },
        avilableCurrencies: [{
            code: '$',
            name: 'USD'
        }, {
            code: '€',
            name: 'EURO'
        }]
    }

};