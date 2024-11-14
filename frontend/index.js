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
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card brand-card h-100">
                <div class="card-body">
                    <div class="text-center mb-3">
                        <img src="${brand.logoUrl}" alt="${brand.name} logo" class="brand-logo">
                    </div>
                    <h3 class="card-title">#${index + 1} ${brand.name}</h3>
                    <div class="key-product mb-3">
                        <h5>Key Product: ${brand.keyProduct}</h5>
                    </div>
                    <div class="image-container mb-3">
                        <img src="${brand.imageUrl}" alt="${brand.keyProduct}" class="brand-image">
                    </div>
                    <p class="card-text">${brand.description}</p>
                    <h5>Key Features:</h5>
                    <ul class="list-unstyled mb-4">
                        ${brand.features.map(feature => `<li><i class="fas fa-check text-success me-2"></i>${feature}</li>`).join('')}
                    </ul>
                    <div class="text-center">
                        <a href="${brand.websiteUrl}" class="btn btn-primary" target="_blank">
                            Visit Official Website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// [Rest of the JavaScript code remains unchanged]
