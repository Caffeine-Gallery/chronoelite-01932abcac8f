import { backend } from 'declarations/backend';

let brands = [];

async function initializeApp() {
    try {
        showLoading();
        brands = await backend.getBrands();
        renderBrands(brands);
        initializeLazyLoading();
        hideLoading();
    } catch (error) {
        console.error('Error initializing app:', error);
        hideLoading();
    }
}

function renderBrands(brandsData) {
    const brandsContainer = document.getElementById('brandsList');
    brandsContainer.innerHTML = brandsData.map((brand, index) => `
        <div class="col-md-6 col-lg-4">
            <div class="brand-card">
                <div class="card-body">
                    <div class="text-center">
                        <img src="${fetchLogoUrl(brand.name)}" alt="${brand.name} logo" class="brand-logo lazy" loading="lazy">
                        <h3 class="card-title mt-3">#${index + 1} ${brand.name}</h3>
                    </div>
                    <div class="key-product">
                        <h5>Signature Model: ${brand.keyProduct}</h5>
                    </div>
                    <div class="image-container">
                        <img src="${fetchWatchImageUrl(brand.keyProduct)}" alt="${brand.keyProduct}" class="brand-image lazy" loading="lazy">
                    </div>
                    <p class="card-text mt-3">${brand.description}</p>
                    <h5 class="mt-4">Key Features:</h5>
                    <ul class="list-unstyled">
                        ${brand.features.map(feature => `
                            <li><i class="fas fa-check text-success me-2"></i>${feature}</li>
                        `).join('')}
                    </ul>
                    <div class="text-center mt-4">
                        <a href="${brand.websiteUrl}" class="btn btn-gold" target="_blank">
                            Visit Official Website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function fetchLogoUrl(brandName) {
    const logos = {
        "Rolex": "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Rolex_logo.svg/1200px-Rolex_logo.svg.png",
        "Omega": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Omega_Logo.svg/2560px-Omega_Logo.svg.png",
        "Patek Philippe": "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Patek_Philippe_SA_logo.svg/1200px-Patek_Philippe_SA_logo.svg.png",
        "Audemars Piguet": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Audemars_Piguet_Logo.svg/2560px-Audemars_Piguet_Logo.svg.png",
        "TAG Heuer": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/TAG_Heuer_201x_logo.svg/2560px-TAG_Heuer_201x_logo.svg.png",
        "Cartier": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Cartier_logo.svg/2560px-Cartier_logo.svg.png",
        "Breitling": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Breitling_logo.svg/2560px-Breitling_logo.svg.png",
        "IWC Schaffhausen": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/IWC_Schaffhausen_logo.svg/2560px-IWC_Schaffhausen_logo.svg.png",
        "Panerai": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Officine_Panerai_logo.svg/2560px-Officine_Panerai_logo.svg.png",
        "Jaeger-LeCoultre": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Jaeger-LeCoultre_logo.svg/2560px-Jaeger-LeCoultre_logo.svg.png"
    };
    return logos[brandName] || '';
}

function fetchWatchImageUrl(keyProduct) {
    const images = {
        "Rolex Submariner": "https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0012_m126610ln-0001-submariner_portrait.jpg",
        "Omega Speedmaster Professional (Moonwatch)": "https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-speedmaster-moonwatch-31030425001001-l.png",
        "Patek Philippe Nautilus": "https://www.patek.com/resources/img/home/banner-home-5711.jpg",
        "Audemars Piguet Royal Oak": "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR00405/importer/standup.png",
        "TAG Heuer Carrera": "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw4b631c8e/TAG_Heuer_Carrera/CBN2A1B.FC6492_/CBN2A1B.FC6492_1000.png",
        "Cartier Tank": "https://www.cartier.com/variants/images/44733502651435015/img1/w400.jpg",
        "Breitling Navitimer": "https://www.breitling.com/media/image/1/gallery_square/asset-version-53c357c475/ab0138241g1p1-navitimer-b01-chronograph-43-soldier.png",
        "IWC Portugieser": "https://www.iwc.com/content/dam/rcq/iwc/19/51/69/1/1951691.png.transform.global_square_image_500_2x.png",
        "Panerai Luminor": "https://www.panerai.com/content/dam/panerai/products/watch/pam01312/PAM01312_Front.png",
        "Jaeger-LeCoultre Reverso": "https://www.jaeger-lecoultre.com/sites/default/files/2022-03/JLC_Reverso-Tribute_Q397846J_Front.png"
    };
    return images[keyProduct] || '';
}

function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('img.lazy');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

function showLoading() {
    document.getElementById('loading').classList.add('active');
}

function hideLoading() {
    document.getElementById('loading').classList.remove('active');
}

// Search functionality
document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredBrands = brands.filter(brand => 
        brand.name.toLowerCase().includes(searchTerm) ||
        brand.description.toLowerCase().includes(searchTerm) ||
        brand.keyProduct.toLowerCase().includes(searchTerm)
    );
    renderBrands(filteredBrands);
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        showLoading();
        await backend.submitContact(formData);
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset();
        hideLoading();
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your message. Please try again.');
        hideLoading();
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize the app
document.addEventListener('DOMContentLoaded', initializeApp);
