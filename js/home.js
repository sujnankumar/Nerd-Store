const products = [
    {
        name: "LED Desk Lamp",
        description: "Wooum Rechargeable Led Desk Lamp Touch Control On/Off Student Study Table Lamp Night Lamp for Children - Eye Protection Lamp, Pack of 1, Colour- Light Color - White",
        image: "images/lamp1_379.jpg",
        price: "₹379"
    },
    {
        name: "Lenovo IdeaPad",
        description: "Lenovo [Smartchoice] Lenovo Ideapad 3 11Th Gen Intel Core I3 15.6\" Fhd Thin & Light Laptop(8Gb/512Gb Ssd/Windows 11/Office 2021/1Yr Warranty/3Months Xbox Game Pass/Platinum Grey/1.7Kg),81X800N2In",
        image: "images/lap1_35390.jpg",
        price: "₹35390"
    },
    {
        name: "JioBook 11",
        description: "JioBook 11 (2023) NB1112MM(BLU) (Mediatek 8788 Octa-core 2 GHz/ARM Mali G72 MP3 @800 MHz/29.5cms 60 Hz/Thin and Light Laptop/ 4 GB LPDDR4/ 64 GB eMMC/JioOS 4G LTE, Dual Band Wi-Fi/Blue/ 990 GMS)",
        image: "images/lap2_14701.jpg",
        price: "₹14701"
    },
    {
        name: "HP Chromebook",
        description: "2020 HP Chromebook x360 Laptop Computer 8th Gen Intel Core i3-8130U up to 3.4GHz (Beat i5-7200U) 8GB DDR4 RAM 64GB eMMC 14inch FHD 2-in-1 Touchscreen (Renewed)",
        image: "images/lap3_18500.jpg",
        price: "₹18500"
    },
    {
        name: "Crystal Lamp",
        description: "One94Store Crystal Lamp,16 Color Changing Rose Crystal Diamond Table Lamp,USB Rechargeable Touch Bedside Night Lamp with Remote Control for Bedroom, Living Room, Party Decor (Multicolor Pack of 1)",
        image: "images/lamp2_550.jpg",
        price: "₹550"
    },
    {
        name: "LED Emergency Light",
        description: "DOCOSS 3 in 1 LED Emergency Light Rechargeable Torch with Desk lamp & Camping Lantern Water Resistant, Black",
        image: "images/lamp3_1045.jpg",
        price: "₹1045"
    },
    {
        name: "Tacson Bluetooth Speaker",
        description: "Tacson S10 Mini Portable Wireless Bluetooth Speaker with Smart LED Light, for MP3 Music Player,connectivity SD Card, All Smartphone, Multicolor",
        image: "images/speaker1_285.jpg",
        price: "₹285"
    },
    {
        name: "FRONTECH 2.0 Multimedia Speakers",
        description: "FRONTECH 2.0 USB Powered Multimedia Speakers with RGB Lights | 2 x 3W Drivers (5.2 cm) | AUX Connectivity | for Laptop, PC, Mobile | 1 Year Warranty (SPK-0005, Black)",
        image: "images/speaker2_506.jpg",
        price: "₹506"
    },
    {
        name: "amazon basics Bluetooth Speaker",
        description: "amazon basics Bluetooth Speaker 5.0 Soundbar with 16W RMS, 2000mAh Battery, Upto 19 Hrs Playtime Aux/USB Port (Black)",
        image: "images/speaker3_999.jpg",
        price: "₹999"
    },
    {
        name: "Redmi A2",
        description: "Redmi A2 (Sea Green, 2GB RAM, 64GB Storage)",
        image: "images/phone1_5499.jpg",
        price: "₹5499"
    },
    {
        name: "Redmi 13C",
        description: "Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera",
        image: "images/phone3_8999.jpg",
        price: "₹8999"
    },
    {
        name: "Samsung Galaxy M04",
        description: "Samsung Galaxy M04 Dark Blue, 4GB RAM, 128GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor | 5000 mAh Battery | 13MP Dual Camera",
        image: "images/phone2_9028.jpg",
        price: "₹9028"
    },
    {
        name: "Amazon Basics IPS Monitor",
        description: "Amazon Basics 23.8 inches IPS Monitor with Borderless Design, FHD 1920 x 1080 Pixels, 16.7 M Colors, with inbuilt Speakers, HDMI & DP Port Connectivity (Black)Acer ED240Q S3 23.6 Inch Full HD 1500R Curve VA LCD Monitor with Backlit LED I 1 MS VRB, 180Hz Refresh I 250 Nits I 2xHDMI 1xDP Ports with HDMI & DP Cable I Eye Care Features I Stereo Speakers I Black",
        image: "images/monitor1_7999.jpg",
        price: "₹7999"
    },
    {
        name: "BenQ GW2780 Monitor",
        description: "BenQ GW2780 27 inch (68 cm) 1920 x 1080 Pixels IPS Full HD Ultra-Slim Bezel Monitor- Eye Care, Anti-Glare, Brightness Intelligence, Speakers, Low Blue Light, HDMI, DP, VESA Wall Mountable (Black)Acer ED240Q S3 23.6 Inch Full HD 1500R Curve VA LCD Monitor with Backlit LED I 1 MS VRB, 180Hz Refresh I 250 Nits I 2xHDMI 1xDP Ports with HDMI & DP Cable I Eye Care Features I Stereo Speakers I Black",
        image: "images/monitor3_11799.jpg",
        price: "₹11799"
    },
    {
        name: "Acer ED240Q LCD Monitor",
        description: "Acer ED240Q S3 23.6 Inch Full HD 1500R Curve VA LCD Monitor with Backlit LED I 1 MS VRB, 180Hz Refresh I 250 Nits I 2xHDMI 1xDP Ports with HDMI & DP Cable I Eye Care Features I Stereo Speakers I Black",
        image: "images/monitor2_7999.jpg",
        price: "₹7999"
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
        name: "Emergency LED Bulb",
        description: "Orient Electric Emergency LED Bulb 12W,rechargebale inverter led bulb, 6500K, Cool white, B22d, Pack of 1",
        image: "images/Bulb1_299.jpg",
        price: "₹299"
    },
    {
        name: "Tubelight",
        description: "Havells Stella Glamtube 20W- 4000K Neutral White Tubelight With Ambient Light And Eye Soft Technology, b22, LED",
        image: "images/Bulb2_1099.jpg",
        price: "₹1099"
    },
    {
        name: "Pedestal Fan",
        description: "IBELL STORM18 Pedestal Fan High Speed, 5 Leaf, 18\" / 457mm Long, 2 hour Timer, Stand fan with 100% Copper Motor (Black)",
        image: "images/Fan3_2599.jpg",
        price: "₹2599"
    },
    {
        name: "LED Cool White Bulb",
        description: "Halonix 40W B22D LED Cool White Bulb, Pack of 1, (F2MMN4EP9000000)",
        image: "images/Bulb2_1099.jpg",
        price: "₹1099"
    },
    {
        name: "Haier 1.6",
        description: "Haier 1.6 Ton 5 Star, WiFi, Inverter Split AC(Copper, Convertible 7 in 1 Cooling Modes, Antibacterial Filter, 2023 Model, HSU19U-PYFC5BE-INV, White)",
        image: "images/AC1_46490.jpg",
        price: "₹46490"
    },
    {
        name: "Mini Air Conditioner",
        description: "Personal Air Conditioners Portable AC Mini Air Conditioner for Office Dorm Room,Small AC Desktop Air Cooler Fan with Humidifier,3 Speed,7 Color light",
        image: "images/AC2_11675.jpg",
        price: "₹11675"
    },
    {
        name: "Personal Air Cooler",
        description: "Portable Air Conditioner-4000mAh Rechargeable Personal Air Cooler with 3 Speeds Duration 4-8 hrs, Quiet Mini Air Conditioner Fan, Desk Cooling Fan for Home, Bedroom, Travel, and Office",
        image: "images/AC3_5457.jpg",
        price: "₹5457"
    },
    {
        name: "ZEBRONICS K24",
        description: "ZEBRONICS K24 USB Keyboard with Long Life 8 Million Keystrokes, Silent & Comfortable Use, Slim Design, Retractable Stand, 1.5 Meter Textured Cable, Chiclet Keys and Uv Coated Keycaps",
        image: "images/Keyboard1_349.jpg",
        price: "₹349"
    },
    {
        name: "Gaming Keyboard",
        description: "EvoFox Deathray RGB Gaming Keyboard | 16 Million True Prism Colors | Seven Backlight Effects and One Custom Effect | Silent Membrane Keys | Anti Ghosting and Windows Lock Key | Braided Cable | (White)",
        image: "images/Keyboard2_999.jpg",
        price: "₹999"
    },
    {
        name: "Mechanical Gaming Keyboard",
        description: "Logitech G413 Tkl Se Wired Mechanical Gaming Keyboard - Compact Backlit Keyboard with Tactile Mechanical Switches, Anti-Ghosting, Compatible for Windows, Macos - Black",
        image: "images/Keyboard3_5995.jpg",
        price: "₹5995"
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

// Function to generate cards based on the provided products
function generateCards(products) {
    productContainer.innerHTML = '';
    products.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name} Image">
        `;
        card.addEventListener('click', () => openModal(product));
        productContainer.appendChild(card);
    });
}

// Initial card generation
generateCards(products);

// Function to filter products based on the search term
function filterProducts(searchTerm) {
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    generateCards(filteredProducts);
}

// Function to handle search input changes
function handleSearchInput() {
    const searchTerm = searchInput.value.toLowerCase();
    filterProducts(searchTerm);
}

// Search input element
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.id = 'searchInput';
searchInput.placeholder = 'Search products...';
searchInput.addEventListener('input', handleSearchInput);
document.querySelector('section').insertBefore(searchInput, productContainer);

// Function to open modal with product details
function openModal(product) {
    selectedProduct = product;
    const content = `
        <h3>${product.name}</h3>
        <img src="${product.image}" alt="${product.name} Image">
        <p>${product.description}</p>
        <h2>${product.price}</h2>
        <button onclick="addToCart()">Add to Cart</button>
        <button>Buy Now</button>
    `;
    productModal.innerHTML = content;
    productModal.showModal();
}

// Function to close the modal
function closeModal() {
    productModal.close();
}

// Function to add the selected product to the cart
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

// Function to close the modal if the click is outside
function closeIfOutside(event) {
    // Check if the click target is the dialog itself
    if (event.target === productModal) {
        closeModal();
    }
}

// Add event listener for modal click outside
productModal.addEventListener('click', closeIfOutside);
    
