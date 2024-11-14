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
                        <img src="${brand.logoUrl}" alt="${brand.name} logo" class="brand-logo lazy" loading="lazy">
                        <h3 class="card-title mt-3">#${index + 1} ${brand.name}</h3>
                    </div>
                    <div class="key-product">
                        <h5>Signature Model: ${brand.keyProduct}</h5>
                    </div>
                    <div class="image-container">
                        <img src="${brand.imageUrl}" alt="${brand.keyProduct}" class="brand-image lazy" loading="lazy">
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
