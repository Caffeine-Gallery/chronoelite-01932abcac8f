import { backend } from 'declarations/backend';

let brands = [];

async function initializeApp() {
    try {
        showLoading();
        brands = await backend.getBrands();
        renderBrands(brands);
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
            <div class="card brand-card">
                <div class="card-body">
                    <img src="${brand.logoUrl}" alt="${brand.name} logo" class="brand-logo">
                    <h3 class="card-title">#${index + 1} ${brand.name}</h3>
                    <img src="${brand.imageUrl}" alt="${brand.name} watch" class="brand-image mb-3">
                    <p class="card-text">${brand.description}</p>
                    <h5>Key Features:</h5>
                    <ul class="list-unstyled">
                        ${brand.features.map(feature => `<li><i class="fas fa-check text-success me-2"></i>${feature}</li>`).join('')}
                    </ul>
                    <a href="${brand.websiteUrl}" class="btn btn-primary" target="_blank">Visit Official Website</a>
                </div>
            </div>
        </div>
    `).join('');
}

function showLoading() {
    document.getElementById('loading').classList.add('active');
}

function hideLoading() {
    document.getElementById('loading').classList.remove('active');
}

// Search functionality
document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredBrands = brands.filter(brand => 
        brand.name.toLowerCase().includes(searchTerm) || 
        brand.description.toLowerCase().includes(searchTerm)
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
