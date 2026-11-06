
/*
 * Safe Home - Product Catalog
 *
 * Independent pre-purchase product information.
 * Purchases are completed on Best Buy.
 *
 * IMPORTANT:
 * 1. Verify current product specifications before publishing.
 * 2. Verify all affiliate tracking parameters with your program.
 * 3. Do not present these descriptions as independent lab tests.
 */

const products = {
    "mcafee-total": {
        id: "mcafee-total",
        brand: "McAfee",
        name: "McAfee Total Protection (1 Device) with Scam Protection",

        // Original image incorrectly pointed to a Norton product.
        // Add a verified McAfee image path here when available.
        image: "",

        shortDesc:
            "A one-device security subscription with antivirus and scam-protection features.",

        description:
            "McAfee Total Protection is a consumer security package designed to help protect compatible devices against malware and online threats. The featured Best Buy listing references scam protection and support for several operating systems. Feature availability can differ by device and edition, so confirm the exact specifications before purchasing.",

        features: [
            "Antivirus and online security tools",
            "Scam-protection features referenced in the retailer listing",
            "One-device subscription",
            "One-year subscription",
            "Auto-renewal referenced in the listing",
            "Platform-specific features should be confirmed before purchase"
        ],

        whyBuy: [
            "Compare antivirus and additional online safety features in one package",
            "Review compatibility with your intended operating system",
            "Consider the subscription terms and renewal charges before buying"
        ],

        requirements:
            "Retailer listing references Windows, macOS, Chrome, iOS and Android. Confirm exact compatibility and supported versions.",

        license: "1 Device, 1 Year",
        delivery: "Digital product; fulfillment handled by Best Buy",

        displayPrice: "Check Current Price at Best Buy",
        priceNote:
            "Prices and renewal terms may change. Verify current details on the retailer's website.",

        buyLink:
            "https://www.bestbuy.com/product/mcafee-total-protection-1-device-antivirus-software-with-scam-protection-1-year-subscription-with-auto-renewal-windows-mac-os-chrome-apple-ios-android-digital/JXKFJ26RH3?utm_medium=referral&utm_source=safehomedevice.vercel.app&partner=SafeHomeDevice&partner_id=PF-1024"
    },

    "mcafee-antivirus": {
        id: "mcafee-antivirus",
        brand: "McAfee",
        name: "McAfee AntiVirus (1 Device) for Windows",

        image:
            "image/McAfee - AntiVirus (1-Device) Antivirus & Internet Security Software (1-Year Subscription with Auto-Renewal) - Windows [Digital].webp",

        shortDesc:
            "A Windows-focused antivirus and internet security subscription for one device.",

        description:
            "McAfee AntiVirus is designed for shoppers seeking antivirus and internet security software for a compatible Windows computer. Compare its included features with broader McAfee packages and verify system requirements, subscription duration and renewal conditions before buying.",

        features: [
            "Antivirus and internet security software",
            "Windows-focused retailer listing",
            "One-device subscription",
            "One-year subscription",
            "Auto-renewal referenced in the listing",
            "Exact included tools depend on the product edition"
        ],

        whyBuy: [
            "Consider it when protecting a single Windows PC",
            "Compare its features against broader security subscriptions",
            "Review the current retailer price and renewal terms"
        ],

        requirements:
            "Windows. Verify the supported Windows versions and system requirements.",

        license: "1 Device, 1 Year",
        delivery: "Digital product; fulfillment handled by Best Buy",

        displayPrice: "Check Current Price at Best Buy",
        priceNote:
            "Prices and renewal terms may change. Verify current details on the retailer's website.",

        buyLink:
            "https://www.bestbuy.com/product/mcafee-antivirus-1-device-antivirus-internet-security-software-1-year-subscription-with-auto-renewal-windows-digital/JXKFJ26PCJ?utm_medium=referral&utm_source=safehomedevice.vercel.app&partner=SafeHomeDevice&partner_id=PF-1024"
    },

    "norton-plus": {
        id: "norton-plus",
        brand: "Norton",
        name: "Norton AntiVirus Plus (1 Device)",

        image: "image/norton-plus.webp",

        shortDesc:
            "Antivirus software with scam-protection, firewall and PC cloud-backup features referenced in the listing.",

        description:
            "Norton AntiVirus Plus is a one-device security subscription. The featured retailer listing references antivirus software, scam protection, a Smart Firewall and PC Cloud Backup. Some features, including PC backup, may be limited to particular operating systems. Review the exact edition and system requirements before purchase.",

        features: [
            "Antivirus and malware-protection tools",
            "Scam-protection features referenced in the listing",
            "Smart Firewall referenced in the listing",
            "PC Cloud Backup referenced in the listing",
            "One-device subscription",
            "One-year subscription"
        ],

        whyBuy: [
            "Compare antivirus and additional security features",
            "Check which tools are available on your operating system",
            "Review the included PC backup terms and limitations"
        ],

        requirements:
            "Retailer listing references Windows, macOS, Android and iOS. Features vary by platform.",

        license: "1 Device, 1 Year",
        delivery: "Digital product; fulfillment handled by Best Buy",

        displayPrice: "Check Current Price at Best Buy",
        priceNote:
            "Verify current pricing, feature availability and subscription conditions before purchase.",

        buyLink:
            "https://www.bestbuy.com/product/norton-antivirus-plus-1-device-antivirus-software-scam-protection-smart-firewall-pc-cloud-backup-1-year-subscription-android-apple-ios-mac-os-windows-digital/J78X33QVVT?utm_medium=referral&utm_source=safehomedevice.vercel.app&partner=SafeHomeDevice&partner_id=PF-1024"
    },

    "bitdefender-plus-multi": {
        id: "bitdefender-plus-multi",
        brand: "Bitdefender",
        name: "Bitdefender Antivirus Plus (1 Device) Multi-Platform Listing",

        image:
            "image/Bitdefender - Antivirus Plus 1 Device 1 year - Windows, Apple iOS, Mac OS, Android, Linux [Digital].webp",

        shortDesc:
            "A one-device Antivirus Plus listing referencing several operating systems.",

        description:
            "This Bitdefender Antivirus Plus retailer listing references Windows, macOS, iOS, Android and Linux. Because platform support and included features may differ by edition, verify that the specific subscription is suitable for your device before buying. Multi-platform compatibility does not mean multi-device coverage.",

        features: [
            "Antivirus Plus product listing",
            "Several operating systems referenced in the retailer title",
            "One-device subscription",
            "One-year subscription",
            "Features and eligibility require platform-specific verification",
            "Current subscription terms should be reviewed at checkout"
        ],

        whyBuy: [
            "Explore the listed compatibility options",
            "Compare with the Windows-specific Bitdefender listing",
            "Confirm whether the exact edition supports your device"
        ],

        requirements:
            "Retailer listing references Windows, macOS, iOS, Android and Linux. Confirm actual eligibility with Best Buy and Bitdefender.",

        license: "1 Device, 1 Year",
        delivery: "Digital product; fulfillment handled by Best Buy",

        displayPrice: "Check Current Price at Best Buy",
        priceNote:
            "Verify current price, platform compatibility and subscription terms with the retailer.",

        buyLink:
            "https://www.bestbuy.com/product/bitdefender-antivirus-plus-1-device-1-year-windows-apple-ios-mac-os-android-linux-digital/J3LXGJL763?utm_medium=referral&utm_source=safehomedevice.vercel.app&partner=SafeHomeDevice&partner_id=PF-1024"
    },

    "bitdefender-plus-windows": {
        id: "bitdefender-plus-windows",
        brand: "Bitdefender",
        name: "Bitdefender Antivirus Plus (1 Device) Windows",

        image:
            "image/Bitdefender - Antivirus Plus (1-Device) (1-Year Subscription) - Windows.jpg",

        shortDesc:
            "A Windows-focused Antivirus Plus subscription for one compatible PC.",

        description:
            "Bitdefender Antivirus Plus for Windows is an antivirus product intended for compatible Windows computers. Compare the exact included protection tools, supported Windows versions and subscription conditions before purchasing. Additional security and privacy features should be confirmed for the specific edition.",

        features: [
            "Antivirus Plus software for Windows",
            "Malware and online threat-protection tools",
            "One-device subscription",
            "One-year subscription",
            "Windows system requirements apply",
            "Exact additional features should be verified"
        ],

        whyBuy: [
            "Compare it when shopping for Windows antivirus",
            "Review its features against other security packages",
            "Confirm compatibility and renewal conditions"
        ],

        requirements:
            "Windows. Confirm the supported Windows versions and hardware requirements.",

        license: "1 Device, 1 Year",
        delivery: "Digital product; fulfillment handled by Best Buy",

        displayPrice: "Check Current Price at Best Buy",
        priceNote:
            "Check current pricing and product terms directly with Best Buy.",

        buyLink:
            "https://www.bestbuy.com/product/bitdefender-antivirus-plus-1-device-1-year-subscription-windows/J3LXGJGFW2/sku/6302089?utm_medium=referral&utm_source=safehomedevice.vercel.app&partner=SafeHomeDevice&partner_id=PF-1024"
    },

    "norton-360-standard": {
        id: "norton-360-standard",
        brand: "Norton",
        name: "Norton 360 Standard (1 Device)",

        image: "image/norton-360-standard.webp",

        shortDesc:
            "A broader security subscription with VPN and dark web monitoring referenced in the listing.",

        description:
            "Norton 360 Standard is a one-device security package. The featured retailer listing references antivirus and internet security, scam protection, a VPN and dark web monitoring. Available features and their operation may differ by platform, location and subscription conditions.",

        features: [
            "Antivirus and internet security",
            "Scam-protection features referenced in the listing",
            "VPN referenced in the listing",
            "Dark web monitoring referenced in the listing",
            "One-device subscription",
            "One-year subscription"
        ],

        whyBuy: [
            "Compare a broader security package with basic antivirus",
            "Consider whether VPN and monitoring features are useful to you",
            "Check availability and eligibility for your device and region"
        ],

        requirements:
            "Retailer listing references Windows, macOS, Android and iOS. Features may differ by platform.",

        license: "1 Device, 1 Year",
        delivery: "Digital product; fulfillment handled by Best Buy",

        displayPrice: "Check Current Price at Best Buy",
        priceNote:
            "Check current pricing, renewal conditions and feature eligibility with the retailer.",

        buyLink:
            "https://www.bestbuy.com/product/norton-360-standard-1-device-antivirus-internet-security-scam-protection-vpn-dark-web-monitoring-1-year-subscription-android-apple-ios-mac-os-windows-digital/J78X33H77L?utm_medium=referral&utm_source=safehomedevice.vercel.app&partner=SafeHomeDevice&partner_id=PF-1024"
    },

    "norton-360-mobile": {
        id: "norton-360-mobile",
        brand: "Norton",
        name: "Norton 360 Plus for Mobile (1 Device)",

        image: "image/norton-360-mobile.webp",

        shortDesc:
            "Mobile-focused security software with scam protection, VPN and dark web monitoring referenced in the listing.",

        description:
            "Norton 360 Plus for Mobile is intended for compatible Android and iOS devices. The featured listing references scam protection, a secure VPN and dark web monitoring. The availability and operation of individual tools may differ between Android and iOS.",

        features: [
            "Mobile-focused security tools",
            "Scam-protection features referenced in the listing",
            "Secure VPN referenced in the listing",
            "Dark web monitoring referenced in the listing",
            "One-device subscription",
            "One-year subscription"
        ],

        whyBuy: [
            "Compare security subscriptions designed for mobile devices",
            "Review differences between Android and iOS features",
            "Check subscription conditions and supported versions"
        ],

        requirements:
            "Android and iOS. Confirm the supported OS versions and feature availability.",

        license: "1 Device, 1 Year",
        delivery: "Digital product; fulfillment handled by Best Buy",

        displayPrice: "Check Current Price at Best Buy",
        priceNote:
            "Check current pricing, availability and platform-specific features.",

        buyLink:
            "https://www.bestbuy.com/product/norton-360-plus-for-mobile-1-device-scam-protection-secure-vpn-dark-web-monitoring-1-year-subscription-android-apple-ios-digital/J78X33TLSW?utm_medium=referral&utm_source=safehomedevice.vercel.app&partner=SafeHomeDevice&partner_id=PF-1024"
    },

    "norton-antitrack": {
        id: "norton-antitrack",
        brand: "Norton",
        name: "Norton AntiTrack for Windows and Mac",

        image:
            "image/Norton - AntiTrack For Blocking Trackers and Protecting Privacy Online - Mac OS, Windows [Digital].webp",

        shortDesc:
            "A privacy-focused product designed to help reduce certain forms of online tracking.",

        description:
            "Norton AntiTrack is a privacy-focused product intended to help reduce online tracking on supported Windows and Mac devices. It is not a replacement for antivirus software. The effectiveness of tracker blocking and available features may vary depending on browser, operating system and website behavior.",

        features: [
            "Online tracker-blocking features",
            "Privacy-focused browsing tools",
            "Designed to reduce certain tracking techniques",
            "Windows and macOS referenced in the listing",
            "Check supported browsers and system requirements",
            "Review current subscription and renewal conditions"
        ],

        whyBuy: [
            "Explore additional online privacy tools",
            "Consider it alongside, rather than instead of, antivirus software",
            "Review browser compatibility and limitations before buying"
        ],

        requirements:
            "Windows and macOS. Verify supported browsers and system requirements.",

        license:
            "Review current device coverage and subscription duration at Best Buy",

        delivery: "Digital product; fulfillment handled by Best Buy",

        displayPrice: "Check Current Price at Best Buy",
        priceNote:
            "Verify the current price, license coverage and renewal conditions.",

        buyLink:
            "https://www.bestbuy.com/product/norton-antitrack-for-blocking-trackers-and-protecting-privacy-online-mac-os-windows-digital/J78X33H4VT?utm_medium=referral&utm_source=safehomedevice.vercel.app&partner=SafeHomeDevice&partner_id=PF-1024"
    }
};
