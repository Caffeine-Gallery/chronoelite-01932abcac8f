import Time "mo:base/Time";

import Array "mo:base/Array";
import Text "mo:base/Text";
import Buffer "mo:base/Buffer";

actor {
    public type Brand = {
        name: Text;
        description: Text;
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
            keyProduct = "Rolex Submariner";
            features = ["Precision engineering", "Iconic design recognized globally", "Durability and waterproof standards"];
            websiteUrl = "https://www.rolex.com/";
        },
        {
            name = "Omega";
            description = "A legendary Swiss brand known for its involvement in space exploration, sports, and James Bond movies. Omega combines innovation with a strong legacy of craftsmanship.";
            keyProduct = "Omega Speedmaster Professional (Moonwatch)";
            features = ["Space-tested reliability", "Co-axial escapement", "Master Chronometer certification"];
            websiteUrl = "https://www.omegawatches.com/";
        },
        {
            name = "Patek Philippe";
            description = "Renowned for its sophisticated craftsmanship and high value, Patek Philippe is one of the oldest watchmakers. Its elegant designs are favorites among royalty and celebrities.";
            keyProduct = "Patek Philippe Nautilus";
            features = ["Handcrafted excellence", "Perpetual calendar complications", "Generational value"];
            websiteUrl = "https://www.patek.com/";
        },
        {
            name = "Audemars Piguet";
            description = "Known for breaking conventions with designs like the Royal Oak, Audemars Piguet is respected for its daring aesthetics and superior technical prowess.";
            keyProduct = "Audemars Piguet Royal Oak";
            features = ["Innovative design", "Superior craftsmanship", "Mechanical excellence"];
            websiteUrl = "https://www.audemarspiguet.com/";
        },
        {
            name = "TAG Heuer";
            description = "TAG Heuer has a strong connection to sports, particularly motorsports, making it popular for its precise chronographs and rugged style.";
            keyProduct = "TAG Heuer Carrera";
            features = ["Motorsport heritage", "Precision chronographs", "Sporty elegance"];
            websiteUrl = "https://www.tagheuer.com/";
        },
        {
            name = "Cartier";
            description = "Known as the \"Jeweler of Kings,\" Cartier blends luxury jewelry with watchmaking expertise, producing some of the most elegant and refined timepieces.";
            keyProduct = "Cartier Tank";
            features = ["Jewelry expertise", "Elegant design", "Timeless style"];
            websiteUrl = "https://www.cartier.com/";
        },
        {
            name = "Breitling";
            description = "Famous for its aviation-inspired watches, Breitling is recognized for its precision and durability, with models that serve both pilots and adventurers.";
            keyProduct = "Breitling Navitimer";
            features = ["Aviation heritage", "Chronograph precision", "Professional grade"];
            websiteUrl = "https://www.breitling.com/";
        },
        {
            name = "IWC Schaffhausen";
            description = "IWC combines Swiss precision with American engineering influences. Known for its minimalist, functional designs and exceptional quality.";
            keyProduct = "IWC Portugieser";
            features = ["Engineering excellence", "Pilot watch expertise", "Technical innovation"];
            websiteUrl = "https://www.iwc.com/";
        },
        {
            name = "Panerai";
            description = "Originating in Italy and now Swiss-made, Panerai is loved for its bold, oversized designs and connection to the Italian Navy.";
            keyProduct = "Panerai Luminor";
            features = ["Military heritage", "Distinctive design", "Luminous technology"];
            websiteUrl = "https://www.panerai.com/";
        },
        {
            name = "Jaeger-LeCoultre";
            description = "Known as the \"watchmaker's watchmaker,\" Jaeger-LeCoultre has an exceptional reputation for intricate movements and innovation.";
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
