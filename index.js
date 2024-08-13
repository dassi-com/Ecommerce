document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginLink = document.getElementById('login');
    const logoutLink = document.getElementById('logout');
    const authSection = document.getElementById('auth-section');
    const productSection = document.getElementById('product-section');
    const cartSection = document.getElementById('cart-section');
    const checkoutSection = document.getElementById('checkout-section');
    const productList = document.getElementById('product-list');
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    const checkoutForm = document.getElementById('checkout-form');

    let isAuthenticated = false;
    let cart = [];
    let products = [
        { id: 1, image:"c1.jpg", name: 'NEWCOMMING SHOES', price: 10 ,description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit iste nemo, molestias dolores recusandae necessitatibus deserunt natus praesentium in ex."},
        { id: 2, image:"c2.jpg",name: 'NEWCOMMING SHOES', price: 25, description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit iste nemo, molestias dolores recusandae necessitatibus deserunt natus praesentium in ex." },
        { id: 3, image:"c3.jpg", name: 'NEWCOMMING SHOES', price: 40 ,description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit iste nemo, molestias dolores recusandae necessitatibus deserunt natus praesentium in ex."},
        { id: 4, image:"s1.jpg",name: 'NEWCOMMING BACS', price: 22, description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit iste nemo, molestias dolores recusandae necessitatibus deserunt natus praesentium in ex." },
        { id: 5, image:"s2.jpg", name: 'NEWCOMMING BACS', price: 15 ,description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit iste nemo, molestias dolores recusandae necessitatibus deserunt natus praesentium in ex."},
        { id: 6, image:"s3.jpg",name: 'NEWCOMMING BACS', price: 30, description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit iste nemo, molestias dolores recusandae necessitatibus deserunt natus praesentium in ex." },

    ];

    function renderProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.innerHTML = `
               <div class="products">
                  <div class="content">
                   <img src="${product.image}"
                   <h3 class="bold">${product.name}</h3>
                   <p class="bold">Price: $${product.price}</p>
                   <p >${product.description}</p>
                   <button onclick="addToCart(${product.id})">Add to Cart</button>

                   </div>
               </div>
            `;
            productList.appendChild(productItem);
        });
    }

    function renderCart() {
        cartList.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${item.name} - $${item.price}`;
            cartList.appendChild(cartItem);
            total += item.price;
        });
        cartTotal.textContent = total;
    }

    window.addToCart = function (productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            renderCart();
        }
    }

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        isAuthenticated = true;
        authSection.style.display = 'none';
        loginLink.style.display = 'none';
        logoutLink.style.display = 'block';
    });

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        isAuthenticated = true;
        authSection.style.display = 'none';
        loginLink.style.display = 'none';
        logoutLink.style.display = 'block';
    });

    logoutLink.addEventListener('click', function () {
        isAuthenticated = false;
        authSection.style.display = 'block';
        loginLink.style.display = 'block';
        logoutLink.style.display = 'none';
    });

    checkoutForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        alert('Checkout successful!');
        cart = [];
        renderCart();
    });

    renderProducts();
});
