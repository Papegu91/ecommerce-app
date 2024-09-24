// Dummy product data
const products = [
    { id: 1, name: 'Product 1', price: '$10', description: 'Description of Product 1', image: 'images/product1.jpg' },
    { id: 2, name: 'Product 2', price: '$20', description: 'Description of Product 2', image: 'images/product2.jpg' },
];


const productList = document.getElementById('product-list');
if (productList) {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product'; 
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <a href="product.html?id=${product.id}">View Details</a>
        `;
        productList.appendChild(productDiv);
    });
}

// Handle login form
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        alert(`Logging in with email: ${email}`);
    });
}

// Load product details dynamically on product.html
const productDetails = document.getElementById('product-details');
if (productDetails) {
    // Get the product ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')); // Get the ID as an integer

    // Find the product that matches the ID
    const product = products.find(p => p.id === productId);

    
    if (product) {
        productDetails.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: ${product.price}</p>
            <img src="${product.image}" alt="${product.name}">
            <a href="index.html">Back to Products</a>
        `;
    } else {
        productDetails.innerHTML = `<p>Product not found.</p>`;
    }
}
