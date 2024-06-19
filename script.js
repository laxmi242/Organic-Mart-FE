document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.querySelector('.products-container');

    const products = [
        { id: 1, name: 'Organic Apples', price: '$3.99', imgSrc: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Organic Bananas', price: '$2.99', imgSrc: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Organic Carrots', price: '$1.99', imgSrc: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Organic Lettuce', price: '$1.50', imgSrc: 'https://via.placeholder.com/150' },
    ];

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productsContainer.appendChild(productElement);
    });
});
