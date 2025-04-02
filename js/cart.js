const products = [
    {
        name: "LED Desk Lamp",
        description: "Wooum Rechargeable Led Desk Lamp Touch Control On/Off Student Study Table Lamp Night Lamp for Children - Eye Protection Lamp, Pack of 1, Colour- Light Color - White",
        image: "images/lamp1_379.jpg",
        price: "₹379"
    },
    
    {
        name: "JioBook 11",
        description: "JioBook 11 (2023) NB1112MM(BLU) (Mediatek 8788 Octa-core 2 GHz/ARM Mali G72 MP3 @800 MHz/29.5cms 60 Hz/Thin and Light Laptop/ 4 GB LPDDR4/ 64 GB eMMC/JioOS 4G LTE, Dual Band Wi-Fi/Blue/ 990 GMS)",
        image: "images/lap2_14701.jpg",
        price: "₹14701"
    },
  
  
    {
        name: "Aparna Mist Ceiling Fan",
        description: "Aparna Mist 600 mm (24 inch) High-Speed Ceiling Fan (White)",
        image: "images/Fan2_1270.jpg",
        price: "₹1270"
    },
    {
        name: "Bajaj Frore Neo Table Fan",
        description: "Bajaj Frore Neo Table Fan 400 MM | Table fans for Home & Office |Aerodynamically Balanced Blades| 100% CopperMotor| HighAir Delivery|3-Speed Control| 2-Yr Warranty Blue",
        image: "images/Fan1_1899.jpg",
        price: "₹1899"
    },
   
    {
        name: "MI Xiaomi",
        description: "MI Xiaomi 108 cm (43 inches) X Series 4K Ultra HD Smart Android LED TV L43M7-A2IN (Black)",
        image: "images/TV2_25999.jpg",
        price: "₹25999"
    },
    {
        name: "Sony Bravia",
        description: "Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74K (Black)",
        image: "images/TV3_53990.jpg",
        price: "₹53990"
    }
]
;

const productContainer = document.getElementById('product-container');
const productModal = document.getElementById('product-modal');
let selectedProduct = null;

products.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${product.name}</h3>
        <img src="${product.image}" alt="${product.name} Image">
        <p>${product.description}</p>
        <h2>${product.price}</h2>
        <button>Buy Now</button>
    `;
    card.addEventListener('click', () => openModal(product));
    productContainer.appendChild(card);
});

function openModal(product) {
    selectedProduct = product;
    const content = `
        <h3>${product.name}</h3>
        <img src="${product.image}" alt="${product.name} Image">
        <p>${product.description}</p>
        <button onclick="addToCart()">Add to Cart</button>
        <button>Buy Now</button>
    `;
    productModal.innerHTML = content;
    productModal.showModal();
}

function closeModal() {
    productModal.close();
}

function addToCart() {
    if (selectedProduct) {
        // Store the selected product in the cart
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(selectedProduct);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
        closeModal();
    }
}
        function closeIfOutside(event) {
            // Check if the click target is the dialog itself
            if (event.target === productModal) {
                closeModal();
            }
    }
