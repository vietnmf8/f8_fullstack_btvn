
/* Access to productContainer */
const productsContainer = document.querySelector('.products-container');

/* Call API by Fetch */
 const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    console.log("Data: ", products);

    // Run function
    renderProducts(products)
}

fetchProducts()


const product = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}


/* Function: Create Card */
const createProductCard = (product) => {
    // Product Card
    const card = document.createElement('div');
    card.className = 'product-card';

    // Product Img
    const img = document.createElement('img');
    img.className = 'product-img';
    img.src = product.image
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




