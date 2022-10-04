const getProductsForCategory = (category, limit = 100) => {
    category = escape(category);
    return fetch(
      `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
    ).then((response) => response.json());
};

export {getProductsForCategory}