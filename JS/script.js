// Dummy product data with reviews and ratings
const products = [
    {
        id: 1, name: 'Product 1', price: 10, discount: 10, description: 'Description of Product 1',
        image: 'https://images.unsplash.com/photo-1727192807128-0cee790dcc83?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.5, reviews: [
            { user: 'Habbes', comment: 'Great product!', rating: 5 },
            { user: 'Paul', comment: 'Very satisfied.', rating: 4 }
        ]
    },
    {
        id: 2, name: 'Product 2', price: 20, discount: 15, description: 'Description of Product 2',
        image: 'https://images.unsplash.com/photo-1719937206109-7f4e933230c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.0, reviews: [
            { user: 'Gudoi', comment: 'Good quality.', rating: 4 },
            { user: 'Daudi', comment: 'Worth the price.', rating: 4 }
        ]
    }
];

// Load products dynamically on index.html
const productList = document.getElementById('product-list');
if (productList) {
    products.forEach(product => {
        const discountedPrice = product.price - (product.price * (product.discount / 100));

        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <span class="discount-badge">${product.discount}% OFF</span>
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h2>${product.name}</h2>
            <div class="price-container">
                <span class="original-price">$${product.price.toFixed(2)}</span>
                <span class="discounted-price">$${discountedPrice.toFixed(2)}</span>
            </div>
            <div class="rating">
                ${'★'.repeat(Math.floor(product.rating))} ${product.rating % 1 !== 0 ? '½' : ''}
                <span class="rating-text">(${product.rating.toFixed(1)})</span>
            </div>
            <a href="product.html?id=${product.id}" class="product-link">View Details</a>
        `;
        productList.appendChild(productDiv);
    });
}


// Load product details dynamically on product.html
const productDetails = document.getElementById('product-details');
if (productDetails) {
    const product = products.find(p => p.id === productId);

    if (product) {
        const discountedPrice = product.price - (product.price * (product.discount / 100));

        productDetails.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h2>${product.name}</h2>
            <div class="price-container">
                <span class="original-price">$${product.price.toFixed(2)}</span>
                <span class="discounted-price">$${discountedPrice.toFixed(2)}</span>
            </div>
            <div class="rating">
                ${'★'.repeat(Math.floor(product.rating))} ${product.rating % 1 !== 0 ? '½' : ''}
                <span class="rating-text">(${product.rating.toFixed(1)})</span>
            </div>
            <p>${product.description}</p>
            <a href="index.html" class="back-link">Back to Products</a>

            <div class="reviews">
                <h3>Customer Reviews:</h3>
                ${product.reviews.map(review => `
                    <div class="review">
                        <h4>${review.user}</h4>
                        <p>${review.comment}</p>
                        <div class="rating">
                            ${'★'.repeat(review.rating)}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        productDetails.innerHTML = `<p>Product not found.</p>`;
    }
}

