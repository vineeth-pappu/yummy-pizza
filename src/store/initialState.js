export const items = [{
        id: 1,
        name: 'Margherita Pizza',
        description: 'Tomato sauce, mozzarella, fresh basil.',
        price: 10,
        image: 'https://www.freeiconspng.com/uploads/pizza-png-15.png'
    },
    {
        id: 2,
        name: 'Margherita Pizza',
        description: 'Tomato sauce, mozzarella, fresh basil.',
        price: 20,
        image: 'https://www.freeiconspng.com/uploads/pizza-png-15.png'
    },
    {
        id: 3,
        name: 'Margherita Pizza',
        description: 'Tomato sauce, mozzarella, fresh basil.',
        price: 30,
        image: 'https://www.freeiconspng.com/uploads/pizza-png-15.png'
    },
    {
        id: 4,
        name: 'Margherita Pizza',
        description: 'Tomato sauce, mozzarella, fresh basil.',
        price: 40,
        image: 'https://www.freeiconspng.com/uploads/pizza-png-15.png'
    },
    {
        id: 5,
        name: 'Margherita Pizza',
        description: 'Tomato sauce, mozzarella, fresh basil.',
        price: 50,
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
    selectedCurrency: {
        code: '$',
        name: 'USD'
    },
    currencies: [{
        code: '$',
        name: 'USD'
    }, {
        code: 'E',
        name: 'EURO'
    }, ]
};