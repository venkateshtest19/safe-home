// js/products.js

const products = {
  "quickheal": {
    id: "quickheal",
    brand: "Quick Heal",
    name: "Quick Heal AntiVirus Pro",
    price: "$18",
    image: "image/QuickHeal.png",
    shortDesc: "Reliable, lightweight antivirus protection for everyday users.",
    description: "Quick Heal AntiVirus Pro provides robust, real-time protection against viruses, malware, ransomware, and online threats. Designed for users who want strong security without slowing down their PC, it's the perfect balance of performance and protection.",
    features: [
      "Real-time virus and malware protection",
      "Ransomware shield to protect important files",
      "Safe browsing and phishing protection",
      "Low system impact – runs smoothly in background",
      "Automatic updates for latest threat definitions",
      "Email and network threat scanning"
    ],
    whyBuy: [
      "Affordable entry-level protection for home users",
      "Trusted Indian cybersecurity brand with global presence",
      "Simple, clean interface – no technical knowledge needed",
      "Excellent detection rates for common threats"
    ],
    requirements: "Windows 10/11 (32-bit & 64-bit), 1GB RAM, 1.5GB free disk space",
    license: "1 User, 1 Year License Key",
    delivery: "Instant Email Delivery"
  },
  "mcafee": {
    id: "mcafee",
    brand: "McAfee",
    name: "McAfee AntiVirus 1 User 1 Year",
    price: "$19",
    image: "image/McAfee AntiVirus.png",
    shortDesc: "Industry-leading protection from one of the most trusted names in cybersecurity.",
    description: "McAfee AntiVirus delivers comprehensive protection against viruses, spyware, ransomware, and other online threats. With its powerful real-time scanning and web protection features, your PC stays safe while you browse, shop, and bank online.",
    features: [
      "100% virus protection guarantee",
      "Real-time threat detection and removal",
      "Web advisor for safe browsing",
      "Firewall protection against hackers",
      "Password manager included",
      "PC optimization tools for better performance"
    ],
    whyBuy: [
      "Globally recognized and trusted brand",
      "Excellent ransomware protection",
      "Includes bonus tools like password manager",
      "Great value for single-user protection"
    ],
    requirements: "Windows 10/11, macOS 10.15+, 2GB RAM, 1.5GB free disk space",
    license: "1 User, 1 Year License Key",
    delivery: "Instant Email Delivery"
  },
  "bitdefender": {
    id: "bitdefender",
    brand: "Bitdefender",
    name: "Bitdefender Antivirus Plus",
    price: "$19",
    image: "image/Bitdefender Antivirus Plus.png",
    shortDesc: "Award-winning protection with minimal impact on system performance.",
    description: "Bitdefender Antivirus Plus consistently ranks among the top antivirus solutions worldwide. It offers multi-layer ransomware protection, advanced threat defense, and privacy features – all while keeping your PC running at full speed.",
    features: [
      "Multi-layer ransomware protection",
      "Advanced threat defense with behavioral detection",
      "Wi-Fi security advisor",
      "Vulnerability scanner for outdated software",
      "Anti-phishing and anti-fraud protection",
      "Bitdefender VPN (200MB/day included)"
    ],
    whyBuy: [
      "Consistently #1 rated by independent testing labs",
      "Extremely low impact on PC performance",
      "Includes free VPN for basic privacy",
      "Excellent value for premium protection"
    ],
    requirements: "Windows 10/11, 2GB RAM, 2.5GB free disk space",
    license: "1 User, 1 Year License Key",
    delivery: "Instant Email Delivery"
  },
  "norton-plus": {
    id: "norton-plus",
    brand: "Norton",
    name: "Norton AntiVirus Plus",
    price: "$20",
    image: "image/Norton AntiVirus Plus.webp",
    shortDesc: "Essential antivirus protection with cloud backup from Norton.",
    description: "Norton AntiVirus Plus provides powerful antivirus protection along with 2GB of secure cloud backup for your important files. It blocks viruses, malware, ransomware, and other online threats before they can harm your PC.",
    features: [
      "Powerful antivirus and malware protection",
      "2GB PC cloud backup for important files",
      "Smart firewall for network protection",
      "Email spam protection",
      "SONAR behavioral protection technology",
      "Password manager for secure logins"
    ],
    whyBuy: [
      "Includes valuable cloud backup feature",
      "Norton's legendary Virus Protection Promise",
      "Great for users who want backup + antivirus in one",
      "Trusted by millions worldwide"
    ],
    requirements: "Windows 10/11, 2GB RAM, 2GB free disk space",
    license: "1 User, 1 Year License Key",
    delivery: "Instant Email Delivery"
  },
  "norton-deluxe": {
    id: "norton-deluxe",
    brand: "Norton",
    name: "Norton 360 Deluxe 2026",
    price: "$29.99",
    image: "image/Norton 360 Deluxe 2026.webp",
    shortDesc: "Complete protection for multiple devices with advanced privacy tools.",
    description: "Norton 360 Deluxe 2026 is our most popular all-in-one security suite. It protects up to 5 devices with advanced antivirus, a secure VPN, dark web monitoring, and parental controls – everything you need for complete digital safety.",
    features: [
      "Protection for up to 5 devices (PC, Mac, Android, iOS)",
      "Secure VPN with no data cap for private browsing",
      "Dark web monitoring powered by LifeLock",
      "Parental controls to keep kids safe online",
      "PC Cloud Backup (50GB)",
      "Smart firewall and email spam protection",
      "Password manager for all your accounts"
    ],
    whyBuy: [
      "Best value for multi-device households",
      "Includes premium VPN with unlimited data",
      "Dark web monitoring alerts you to data breaches",
      "2026 edition with latest threat protection tech"
    ],
    requirements: "Windows 10/11, macOS 10.15+, Android 8+, iOS 14+",
    license: "5 Devices, 1 Year License Key",
    delivery: "Instant Email Delivery"
  },
  "norton-advanced": {
    id: "norton-advanced",
    brand: "Norton",
    name: "Norton 360 Advanced",
    price: "$19.99",
    image: "image/Norton 360 Advanced.webp",
    shortDesc: "Advanced security suite with identity protection for the whole family.",
    description: "Norton 360 Advanced takes security further with identity monitoring, credit monitoring, and advanced parental controls. Perfect for families who want comprehensive protection across all devices and online activities.",
    features: [
      "Protection for up to 10 devices",
      "Identity monitoring and alerts",
      "Credit monitoring and alerts",
      "Advanced parental controls with location tracking",
      "Secure VPN with no data cap",
      "PC Cloud Backup (50GB)",
      "Dark web monitoring"
    ],
    whyBuy: [
      "Covers up to 10 devices – perfect for large families",
      "Includes identity and credit monitoring",
      "Advanced parental controls with GPS tracking",
      "Excellent value for comprehensive family protection"
    ],
    requirements: "Windows 10/11, macOS 10.15+, Android 8+, iOS 14+",
    license: "10 Devices, 1 Year License Key",
    delivery: "Instant Email Delivery"
  },
  "norton-antitrack": {
    id: "norton-antitrack",
    brand: "Norton",
    name: "Norton AntiTrack",
    price: "$39.99",
    image: "image/Norton AntiTrack.webp",
    shortDesc: "Block online trackers and protect your privacy while browsing.",
    description: "Norton AntiTrack stops advertisers, data brokers, and websites from tracking your online activity. It masks your digital fingerprint, blocks tracking cookies, and helps you browse the web privately without targeted ads following you around.",
    features: [
      "Blocks 2000+ tracking technologies",
      "Masks your digital fingerprint",
      "Stops targeted advertising",
      "Protects against data broker profiling",
      "Works with all major browsers",
      "Real-time tracking alerts",
      "Privacy dashboard to see who's blocked"
    ],
    whyBuy: [
      "Essential for anyone concerned about online privacy",
      "Stops advertisers from building profiles on you",
      "Works silently in the background",
      "Complements your antivirus for complete protection"
    ],
    requirements: "Windows 10/11, macOS 10.14+, Chrome, Firefox, Edge, Safari",
    license: "1 User, 1 Year License Key",
    delivery: "Instant Email Delivery"
  },
  "norton-lifelock": {
    id: "norton-lifelock",
    brand: "Norton",
    name: "Norton LifeLock Ultimate Plus",
    price: "$42.99",
    image: "image/Norton LifeLock Ultimate Plus.webp",
    shortDesc: "The ultimate protection combining antivirus with identity theft protection.",
    description: "Norton LifeLock Ultimate Plus is the most comprehensive protection available. It combines Norton's award-winning antivirus with LifeLock's identity theft protection, including $1M in stolen funds reimbursement, credit monitoring, and dark web surveillance.",
    features: [
      "Full Norton 360 Advanced security suite",
      "LifeLock identity theft protection",
      "$1,000,000 stolen funds reimbursement",
      "Credit monitoring and alerts",
      "Dark web monitoring for personal info",
      "Social Security number alerts",
      "Bank and credit card activity alerts",
      "Court record monitoring",
      "Protection for up to 10 devices"
    ],
    whyBuy: [
      "The most complete protection package available",
      "$1M reimbursement guarantee for stolen funds",
      "Combines antivirus + identity theft in one solution",
      "Ideal for high-risk individuals and families",
      "Peace of mind with comprehensive monitoring"
    ],
    requirements: "Windows 10/11, macOS 10.15+, Android 8+, iOS 14+",
    license: "1 User, 1 Year (10 Devices)",
    delivery: "Instant Email Delivery"
  }
};
