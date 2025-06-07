
/* Access to productContainer */
const productsContainer = document.querySelector('.products-container');

/* Call API by Fetch */
 const fetchProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        console.log("Data: ", products);

        // Run function
        renderProducts(products)
    } catch (error) {
        console.error(error);
    }
}

fetchProducts()




/* Function: Create Card */
const createProductCard = (product) => {
    // Product Card
    const card = document.createElement('div');
    card.className = 'product-card';

    // Product Img
    const img = document.createElement('img');
    img.className = 'product-img';
    img.src = product.image;
    img.alt = product.title;
    card.appendChild(img)

    // Product Title
    const title = document.createElement('h3');
    title.className = 'product-title';
    title.innerText = product.title;
    card.appendChild(title)

    // Product Price
    const price = document.createElement('div');
    price.className = 'product-price';
    price.textContent = `$${product.price}`;
    card.appendChild(price)

    // Product Description
    const description = document.createElement('p');
    description.className = 'product-description';
    description.innerText = product.description;
    card.appendChild(description)

    // Product Category
    const category = document.createElement('span');
    category.className = 'product-category';
    category.innerText = `Category: ${product.category}`;
    card.appendChild(category)

    // Product Rating
    const rating = document.createElement('div');
    rating.className = 'product-rating';
    rating.innerText = `Rating: ⭐ ${product.rating.rate} (${product.rating.count} reviews)`;
    card.appendChild(rating)

    // RETURN
    return card;
};

/* Function: Render Products */
const renderProducts = (products) => {
    // Iterate through PRODUCT in the PRODUCTS ARRAY
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    })
}




