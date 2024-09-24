document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;

    const productItem = document.createElement('li');
    productItem.textContent = `${productName} - $${productPrice}`;

    const buyButton = document.createElement('button');
    buyButton.textContent = 'Comprar';
    buyButton.classList.add('buy');
    buyButton.addEventListener('click', function() {
        document.getElementById('confirmation-message').textContent = `Has comprado ${productName} por $${productPrice}.`;
        document.getElementById('purchase-confirmation').style.display = 'block';
    });

    productItem.appendChild(buyButton);
    document.getElementById('products').appendChild(productItem);

    document.getElementById('product-form').reset();
});
