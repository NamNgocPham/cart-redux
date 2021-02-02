var initialState = [
    {
        id : 1,
        name : 'Iphone 7 plus',
        image : 'https://cdn.tgdd.vn/Products/Images/42/87839/iphone-7-plus-128gb-hh-600x600.jpg',
        description : 'Sản phẩm do Apple sản xuất',
        price : 500,
        inventory : 10,
        rating : 4
    },

    {
        id : 2,
        name : 'Samsung Galaxy S7',
        image : 'https://images.mobilefun.co.uk/graphics/450pixelp/57143.jpg',
        description : 'Sản phẩm do Samsung sản xuất',
        price : 400,
        inventory : 15,
        rating : 3
    },

    {
        id : 3,
        name : 'Oppo F1s',
        image : 'https://cf.shopee.vn/file/894b51ef8d58c6aacf3daa37cfcd3633',
        description : 'Sản phẩm do China sản xuất',
        price : 450,
        inventory : 5,
        rating : 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default : return [...state];
    }
}

export default products;