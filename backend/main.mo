import Time "mo:base/Time";

import Array "mo:base/Array";
import Text "mo:base/Text";
import Buffer "mo:base/Buffer";

actor {
    public type Brand = {
        name: Text;
        description: Text;
        logoUrl: Text;
        imageUrl: Text;
        keyProduct: Text;
        features: [Text];
        websiteUrl: Text;
    };

    public type ContactForm = {
        name: Text;
        email: Text;
        message: Text;
    };

    private let brands : [Brand] = [
        {
            name = "Rolex";
            description = "Founded in 1905, Rolex is iconic for its luxury, precision, and timeless design. Known for its durability and heritage, Rolex remains a top choice for collectors and enthusiasts.";
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Rolex_logo.svg/1200px-Rolex_logo.svg.png";
            imageUrl = "https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0012_m126610ln-0001-submariner_portrait.jpg";
            keyProduct = "Rolex Submariner";
            features = ["Precision engineering", "Iconic design recognized globally", "Durability and waterproof standards"];
            websiteUrl = "https://www.rolex.com/";
        },
        {
            name = "Omega";
            description = "A legendary Swiss brand known for its involvement in space exploration, sports, and James Bond movies. Omega combines innovation with a strong legacy of craftsmanship.";
            logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Omega_Logo.svg/2560px-Omega_Logo.svg.png";
            imageUrl = "https://www.omegawatches.com/media/catalog/product/cache/a5c37fddc1a529a1a44fea55d527b9a116f3738da3a2cc38006fcc613c37c391/o/m/omega-speedmaster-moonwatch-31030425001001-l.png";
            keyProduct = "Omega Speedmaster Professional (Moonwatch)";
            features = ["Space-tested reliability", "Co-axial escapement", "Master Chronometer certification"];
            websiteUrl = "https://www.omegawatches.com/";
        },
        {
            name = "Patek Philippe";
            description = "Renowned for its sophisticated craftsmanship and high value, Patek Philippe is one of the oldest watchmakers. Its elegant designs are favorites among royalty and celebrities.";
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Patek_Philippe_SA_logo.svg/1200px-Patek_Philippe_SA_logo.svg.png";
            imageUrl = "https://www.patek.com/resources/img/home/banner-home-5711.jpg";
            keyProduct = "Patek Philippe Nautilus";
            features = ["Handcrafted excellence", "Perpetual calendar complications", "Generational value"];
            websiteUrl = "https://www.patek.com/";
        },
        {
            name = "Audemars Piguet";
            description = "Known for breaking conventions with designs like the Royal Oak, Audemars Piguet is respected for its daring aesthetics and superior technical prowess.";
            logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Audemars_Piguet_Logo.svg/2560px-Audemars_Piguet_Logo.svg.png";
            imageUrl = "https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR00405/importer/standup.png";
            keyProduct = "Audemars Piguet Royal Oak";
            features = ["Innovative design", "Superior craftsmanship", "Mechanical excellence"];
            websiteUrl = "https://www.audemarspiguet.com/";
        },
        {
            name = "TAG Heuer";
            description = "TAG Heuer has a strong connection to sports, particularly motorsports, making it popular for its precise chronographs and rugged style.";
            logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/TAG_Heuer_201x_logo.svg/2560px-TAG_Heuer_201x_logo.svg.png";
            imageUrl = "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw4b631c8e/TAG_Heuer_Carrera/CBN2A1B.FC6492_/CBN2A1B.FC6492_1000.png";
            keyProduct = "TAG Heuer Carrera";
            features = ["Motorsport heritage", "Precision chronographs", "Sporty elegance"];
            websiteUrl = "https://www.tagheuer.com/";
        },
        {
            name = "Cartier";
            description = "Known as the \"Jeweler of Kings,\" Cartier blends luxury jewelry with watchmaking expertise, producing some of the most elegant and refined timepieces.";
            logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Cartier_logo.svg/2560px-Cartier_logo.svg.png";
            imageUrl = "https://www.cartier.com/variants/images/44733502651435015/img1/w400.jpg";
            keyProduct = "Cartier Tank";
            features = ["Jewelry expertise", "Elegant design", "Timeless style"];
            websiteUrl = "https://www.cartier.com/";
        },
        {
            name = "Breitling";
            description = "Famous for its aviation-inspired watches, Breitling is recognized for its precision and durability, with models that serve both pilots and adventurers.";
            logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Breitling_logo.svg/2560px-Breitling_logo.svg.png";
            imageUrl = "https://www.breitling.com/media/image/1/gallery_square/asset-version-53c357c475/ab0138241g1p1-navitimer-b01-chronograph-43-soldier.png";
            keyProduct = "Breitling Navitimer";
            features = ["Aviation heritage", "Chronograph precision", "Professional grade"];
            websiteUrl = "https://www.breitling.com/";
        },
        {
            name = "IWC Schaffhausen";
            description = "IWC combines Swiss precision with American engineering influences. Known for its minimalist, functional designs and exceptional quality.";
            logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/IWC_Schaffhausen_logo.svg/2560px-IWC_Schaffhausen_logo.svg.png";
            imageUrl = "https://www.iwc.com/content/dam/rcq/iwc/19/51/69/1/1951691.png.transform.global_square_image_500_2x.png";
            keyProduct = "IWC Portugieser";
            features = ["Engineering excellence", "Pilot watch expertise", "Technical innovation"];
            websiteUrl = "https://www.iwc.com/";
        },
        {
            name = "Panerai";
            description = "Originating in Italy and now Swiss-made, Panerai is loved for its bold, oversized designs and connection to the Italian Navy.";
            logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Officine_Panerai_logo.svg/2560px-Officine_Panerai_logo.svg.png";
            imageUrl = "https://www.panerai.com/content/dam/panerai/products/watch/pam01312/PAM01312_Front.png";
            keyProduct = "Panerai Luminor";
            features = ["Military heritage", "Distinctive design", "Luminous technology"];
            websiteUrl = "https://www.panerai.com/";
        },
        {
            name = "Jaeger-LeCoultre";
            description = "Known as the \"watchmaker's watchmaker,\" Jaeger-LeCoultre has an exceptional reputation for intricate movements and innovation.";
            logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Jaeger-LeCoultre_logo.svg/2560px-Jaeger-LeCoultre_logo.svg.png";
            imageUrl = "https://www.jaeger-lecoultre.com/sites/default/files/2022-03/JLC_Reverso-Tribute_Q397846J_Front.png";
            keyProduct = "Jaeger-LeCoultre Reverso";
            features = ["Movement innovation", "Reversible case design", "Haute horlogerie"];
            websiteUrl = "https://www.jaeger-lecoultre.com/";
        }
    ];

    private let contacts = Buffer.Buffer<ContactForm>(0);

    public query func getBrands() : async [Brand] {
        brands
    };

    public func submitContact(form: ContactForm) : async () {
        contacts.add(form);
    };
}
