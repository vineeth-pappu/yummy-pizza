export const items = [{
        name: 'Margherita Pizza',
        description: 'Tomato sauce, mozzarella, fresh basil.',
        price: 10
    },
    {
        name: 'Margherita Pizza',
        description: 'Tomato sauce, mozzarella, fresh basil.',
        price: 10
    },
    {
        name: 'Margherita Pizza',
        description: 'Tomato sauce, mozzarella, fresh basil.',
        price: 10
    },
    {
        name: 'Margherita Pizza',
        description: 'Tomato sauce, mozzarella, fresh basil.',
        price: 10
    },
    {
        name: 'Margherita Pizza',
        description: 'Tomato sauce, mozzarella, fresh basil.',
        price: 10
    },
]

export default {
    products: [...items],
    cart: {
        items: {}
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