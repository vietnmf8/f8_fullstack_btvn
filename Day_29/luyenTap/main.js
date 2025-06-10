/* Access -> Products Container */
const productsContainer = document.querySelector(".products-container");

/* Call APT -> Fetch */
const products = async () => {
    try {
        // Fetch method -> get Data from API
        // Response
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json(); //-> JSON to JavaScript
        // console.log("Data: ", products);

        // Render Products
        renderProducts(products);
    }
    catch {
        console.error('Lỗi');
    }
}
products()

// // Fake data
// const productItem =
//     {
//         id: 1,
//         title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         price: 109.95,
//         description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//         category: "men's clothing",
//         image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         rating: {
//             rate: 3.9,
//             count: 120
//         }
//     }

/* Function: Create Card */
// -> HTML
const createProductCard = (productItem) => {
    // Create Card Element
    const card = document.createElement("div");
    card.className = "productItem";

    // In productItem:
    // Create IMG
    const img = document.createElement("img");
    img.className = "productItem-img";
    img.src = productItem.image;
    img.alt = productItem.title;
    card.appendChild(img);

    //Create Title
    const title = document.createElement("h3");
    title.className = "productItem-title";
    title.innerText = productItem.title;
    card.appendChild(title);

    //Create Price
    const price = document.createElement("div");
    price.className = "productItem-price";
    price.innerText = `$${productItem.price}`;
    card.appendChild(price);

    //Create Description
    const description = document.createElement("p");
    description.className = "productItem-description";
    description.innerText = productItem.description;
    card.appendChild(description);

    //Create Category
    const category = document.createElement("span");
    category.className = "productItem-category";
    category.innerText = `Category: ${productItem.category}`;
    card.appendChild(category);

    //Create Rating
    const rating = document.createElement("div");
    rating.className = "productItem-rating";
    rating.innerText = `Rating: ⭐ $${productItem.rating.rate} (${productItem.rating.count} reviews)`;
    card.appendChild(rating);

    return card;

}



/* Function: Render Products */
const renderProducts = (products) => {
    products.forEach((productItem) => {
        const productCard = createProductCard(productItem);
        productsContainer.appendChild(productCard);
    })
}

