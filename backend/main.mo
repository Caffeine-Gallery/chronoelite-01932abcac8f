import Array "mo:base/Array";
import Text "mo:base/Text";
import Buffer "mo:base/Buffer";

actor {
    // Types
    public type Brand = {
        name: Text;
        description: Text;
        logoUrl: Text;
        imageUrl: Text;
        features: [Text];
        websiteUrl: Text;
    };

    public type ContactForm = {
        name: Text;
        email: Text;
        message: Text;
    };

    // State
    private let brands : [Brand] = [
        {
            name = "Rolex";
            description = "Founded in 1905, Rolex is synonymous with luxury and precision. Known for its iconic models, Rolex is the ultimate symbol of success.";
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Rolex_logo.svg/1200px-Rolex_logo.svg.png";
            imageUrl = "https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0012_m126711chnr-0002-gmt-master-ii_portrait.jpg";
            features = ["Precision engineering", "Iconic design recognized globally", "Durability and waterproof standards"];
            websiteUrl = "https://www.rolex.com/";
        },
        {
            name = "Omega";
            description = "Since 1848, Omega has been creating exceptional timepieces. Known for their precision and innovation, they were the first watch on the moon.";
            logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Omega_Logo.svg/2560px-Omega_Logo.svg.png";
            imageUrl = "https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-seamaster-diver-300m-21030422001001-l.png";
            features = ["Space-tested reliability", "Co-axial escapement", "Master Chronometer certification"];
            websiteUrl = "https://www.omegawatches.com/";
        },
        {
            name = "Patek Philippe";
            description = "Established in 1839, Patek Philippe represents the pinnacle of Swiss watchmaking. Each timepiece is a masterpiece of complications and craftsmanship.";
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Patek_Philippe_SA_logo.svg/1200px-Patek_Philippe_SA_logo.svg.png";
            imageUrl = "https://www.patek.com/resources/img/home/banner-home-5905-1.jpg";
            features = ["Handcrafted excellence", "Perpetual calendar complications", "Generational value"];
            websiteUrl = "https://www.patek.com/";
        }
        // Add more brands as needed
    ];

    private let contacts = Buffer.Buffer<ContactForm>(0);

    // Query calls
    public query func getBrands() : async [Brand] {
        brands
    };

    // Update calls
    public func submitContact(form: ContactForm) : async () {
        contacts.add(form);
    };
}
