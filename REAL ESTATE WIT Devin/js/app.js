// MA-ROYAL Real Estate Website - JavaScript

// Data Arrays
const properties = [
    {
        id: 1,
        title: "Luxury 5 Bedroom Duplex",
        location: "Diamond City Estate, Enugu",
        price: "₦400,000,000",
        type: "For Sale",
        beds: 5,
        baths: 5,
        parking: 3,
        sqft: 450,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        featured: true,
        description: "A stunning 5-bedroom luxury duplex featuring modern architecture, premium finishes, and spacious living areas. Perfect for families seeking elegance and comfort.",
        agent: "Chukwuma Okafor",
        agentPhone: "+234 810 615 3316"
    },
    {
        id: 2,
        title: "Modern 4 Bedroom Villa",
        location: "Trans-Ekulu, Enugu",
        price: "₦250,000,000",
        type: "For Sale",
        beds: 4,
        baths: 4,
        parking: 2,
        sqft: 380,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        featured: true,
        description: "Elegant 4-bedroom villa with contemporary design, private garden, and state-of-the-art amenities. Located in a prime residential area.",
        agent: "Adaobi Nwosu",
        agentPhone: "+234 810 615 3316"
    },
    {
        id: 3,
        title: "Premium Duplex",
        location: "Independence Layout, Enugu",
        price: "₦170,000,000",
        type: "For Sale",
        beds: 4,
        baths: 3,
        parking: 2,
        sqft: 320,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        featured: true,
        description: "Beautiful duplex in the heart of Independence Layout. Features modern kitchen, spacious rooms, and excellent security.",
        agent: "Emeka Okonkwo",
        agentPhone: "+234 810 615 3316"
    },
    {
        id: 4,
        title: "Luxury Airbnb Apartment",
        location: "Owerri, Imo",
        price: "From ₦85,000/night",
        type: "Airbnb",
        beds: 3,
        baths: 2,
        parking: 1,
        sqft: 280,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        featured: true,
        description: "Premium furnished apartment perfect for short stays. Fully equipped with modern amenities and close to city center.",
        agent: "Chinedu Eze",
        agentPhone: "+234 810 615 3316"
    },
    {
        id: 5,
        title: "Executive 3 Bedroom Apartment",
        location: "Lekki, Lagos",
        price: "₦180,000,000",
        type: "For Sale",
        beds: 3,
        baths: 2,
        parking: 1,
        sqft: 250,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        featured: false,
        description: "Luxurious 3-bedroom apartment in Lekki with stunning views, modern finishes, and access to exclusive amenities.",
        agent: "Fatima Abdullahi",
        agentPhone: "+234 810 615 3316"
    },
    {
        id: 6,
        title: "Commercial Office Space",
        location: "Abuja",
        price: "₦300,000,000",
        type: "Commercial",
        beds: 0,
        baths: 4,
        parking: 10,
        sqft: 800,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        featured: false,
        description: "Prime commercial office space in Abuja's business district. Modern facilities, ample parking, and excellent accessibility.",
        agent: "Ibrahim Musa",
        agentPhone: "+234 810 615 3316"
    },
    {
        id: 7,
        title: "Beachfront Villa",
        location: "Victoria Island, Lagos",
        price: "₦500,000,000",
        type: "For Sale",
        beds: 6,
        baths: 6,
        parking: 4,
        sqft: 600,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        featured: false,
        description: "Exquisite beachfront villa with panoramic ocean views, private pool, and world-class amenities. A true luxury retreat.",
        agent: "Ngozi Okafor",
        agentPhone: "+234 810 615 3316"
    },
    {
        id: 8,
        title: "Cozy 2 Bedroom Apartment",
        location: "Port Harcourt",
        price: "₦45,000,000",
        type: "For Sale",
        beds: 2,
        baths: 2,
        parking: 1,
        sqft: 180,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        featured: false,
        description: "Comfortable 2-bedroom apartment perfect for young professionals or small families. Well-maintained and in a secure location.",
        agent: "Chinyere Eze",
        agentPhone: "+234 810 615 3316"
    }
];

const agents = [
    {
        id: 1,
        name: "Chukwuma Okafor",
        position: "Senior Real Estate Consultant",
        location: "Enugu",
        specialization: "Luxury Properties",
        properties: 45,
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        phone: "+234 810 615 3316"
    },
    {
        id: 2,
        name: "Adaobi Nwosu",
        position: "Property Marketing Specialist",
        location: "Lagos",
        specialization: "Commercial Properties",
        properties: 38,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        phone: "+234 810 615 3316"
    },
    {
        id: 3,
        name: "Emeka Okonkwo",
        position: "Investment Advisor",
        location: "Abuja",
        specialization: "Property Investment",
        properties: 52,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        phone: "+234 810 615 3316"
    },
    {
        id: 4,
        name: "Fatima Abdullahi",
        position: "Airbnb & Short-Let Manager",
        location: "Owerri",
        specialization: "Short-Term Rentals",
        properties: 28,
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        phone: "+234 810 615 3316"
    }
];

const testimonials = [
    {
        id: 1,
        name: "Dr. Nnamdi Okafor",
        role: "Business Executive",
        location: "Lagos",
        rating: 5,
        review: "MA-ROYAL helped me find the perfect property for my family. Their professionalism and attention to detail exceeded my expectations. Highly recommended!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 2,
        name: "Chioma Eze",
        role: "Entrepreneur",
        location: "Enugu",
        rating: 5,
        review: "I've been using MA-ROYAL's Airbnb services for my business trips. The properties are always clean, well-maintained, and perfectly located. Exceptional service!",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 3,
        name: "Alhaji Ibrahim Musa",
        role: "Property Investor",
        location: "Abuja",
        rating: 5,
        review: "MA-ROYAL's investment advisory services have been invaluable. They've helped me build a profitable real estate portfolio with strategic guidance.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 4,
        name: "Adaeze Nwankwo",
        role: "Medical Doctor",
        location: "Owerri",
        rating: 5,
        review: "The team at MA-ROYAL made my property purchase seamless. From viewing to closing, they handled everything professionally. A trustworthy company indeed.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
];

const faqs = [
    {
        id: 1,
        question: "What types of properties do you offer?",
        answer: "We offer a wide range of properties including residential houses, apartments, villas, duplexes, commercial properties, land, and premium Airbnb/short-let accommodations across Nigeria."
    },
    {
        id: 2,
        question: "Can I schedule a property inspection?",
        answer: "Absolutely! You can schedule a property inspection by clicking the 'Book Inspection' button or contacting us directly. Our team will arrange a convenient time for you to view any property of interest."
    },
    {
        id: 3,
        question: "Do you offer Airbnb management?",
        answer: "Yes, we provide comprehensive Airbnb and short-let management services including property listing, guest communication, cleaning coordination, and maintenance to maximize your rental income."
    },
    {
        id: 4,
        question: "Can you help me sell my property?",
        answer: "Yes, we offer professional property marketing services to help you sell your property quickly and at the best price. Our team handles everything from valuation to marketing to closing."
    },
    {
        id: 5,
        question: "Do you work with property agents?",
        answer: "Yes, we partner with real estate agents across Nigeria. If you're an agent interested in collaborating with us, we welcome partnerships that benefit our clients."
    },
    {
        id: 6,
        question: "Can I invest through MA-ROYAL?",
        answer: "Yes, we offer real estate investment advisory services. Our team provides strategic guidance on property investments, helping you identify opportunities that align with your financial goals."
    },
    {
        id: 7,
        question: "How can I become a partner/agent?",
        answer: "To become a partner or agent with MA-ROYAL, please contact us through our website or email. We review applications and look for professionals who share our commitment to excellence and client satisfaction."
    }
];

const advertisements = [
    {
        id: 1,
        title: "LIVE ROYAL",
        subtitle: "Luxury Duplexes in Prime Locations",
        cta: "Explore Luxury Homes →",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        color: "#F5B942"
    },
    {
        id: 2,
        title: "INVEST SMART",
        subtitle: "Premium Real Estate Investment Opportunities",
        cta: "View Opportunities →",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        color: "#E9C46A"
    },
    {
        id: 3,
        title: "STAY ROYAL",
        subtitle: "Luxury Airbnb & Short-Let Apartments",
        cta: "Book Your Stay →",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        color: "#F5B942"
    },
    {
        id: 4,
        title: "LAND WITH POTENTIAL",
        subtitle: "Verified Land & Property Opportunities",
        cta: "Explore Land →",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        color: "#E9C46A"
    }
];

const airbnbProperties = [
    {
        id: 1,
        title: "Luxury City Apartment",
        location: "Lekki, Lagos",
        price: "₦85,000/night",
        rating: 4.9,
        guests: 4,
        amenities: ["WiFi", "Pool", "Kitchen", "Parking"],
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "Beachfront Villa",
        location: "Victoria Island, Lagos",
        price: "₦150,000/night",
        rating: 5.0,
        guests: 8,
        amenities: ["Ocean View", "Pool", "Kitchen", "Parking"],
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        title: "Cozy Garden Suite",
        location: "Enugu",
        price: "₦45,000/night",
        rating: 4.8,
        guests: 2,
        amenities: ["Garden", "WiFi", "Kitchen"],
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

// State
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentTestimonial = 0;
let testimonialInterval;

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMobileMenu();
    initBioDropdown();
    initCustomCursor();
    initScrollProgress();
    initParallax();
    initProperties();
    initAgents();
    initTestimonials();
    initFAQ();
    initAdSlider();
    initAirbnb();
    initCounters();
    initScrollAnimations();
    initContactWidget();
    initSearch();
    initPropertyModal();
    initFavorites();
});

// Navigation
function initNavigation() {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');

    // Glass effect on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('glass');
        } else {
            header.classList.remove('glass');
        }
    });

    // Active navigation indicator
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                document.getElementById('mobile-menu').classList.remove('show');
            }
        });
    });
}

// Mobile Menu
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });
}

// Bio Dropdown
function initBioDropdown() {
    const dropdownBtn = document.getElementById('bio-dropdown-btn');
    const dropdown = document.getElementById('bio-dropdown');

    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
        dropdownBtn.querySelector('svg').classList.toggle('rotate-180');
    });

    document.addEventListener('click', () => {
        dropdown.classList.remove('show');
        dropdownBtn.querySelector('svg').classList.remove('rotate-180');
    });

    dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Custom Cursor
function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .property-card, .category-card, .service-card, .agent-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// Scroll Progress Bar
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Parallax Effect
function initParallax() {
    const parallaxBg = document.querySelector('.parallax-bg');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (parallaxBg) {
            parallaxBg.style.transform = `scale(1.1) translateY(${scrolled * 0.3}px)`;
        }
    });
}

// Properties Grid
function initProperties() {
    const grid = document.getElementById('properties-grid');

    const featuredProperties = properties.filter(p => p.featured).slice(0, 4);

    grid.innerHTML = featuredProperties.map((property, index) => `
        <div class="property-card bg-secondary rounded-2xl overflow-hidden border border-border hover:border-royalGold transition-all duration-300 cursor-pointer scroll-animate stagger-${index + 1}" data-property-id="${property.id}">
            <div class="relative overflow-hidden">
                <img src="${property.image}" alt="${property.title}" class="property-image w-full h-48 object-cover">
                <div class="absolute top-4 left-4">
                    <span class="px-3 py-1 rounded-full text-xs font-semibold ${property.type === 'For Sale' ? 'bg-green-500' : property.type === 'Airbnb' ? 'bg-purple-500' : 'bg-blue-500'} text-white">
                        ${property.type}
                    </span>
                </div>
                <button class="favorite-btn absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-royalGold hover:text-primary transition-colors" data-property-id="${property.id}">
                    <svg class="w-5 h-5 ${favorites.includes(property.id) ? 'text-red-500 fill-current' : ''}" fill="${favorites.includes(property.id) ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                </button>
            </div>
            <div class="p-5">
                <h3 class="text-lg font-playfair font-bold text-white mb-2">${property.title}</h3>
                <p class="text-secondaryText text-sm mb-3 flex items-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    ${property.location}
                </p>
                <p class="text-royalGold text-xl font-bold mb-4">${property.price}</p>
                <div class="flex items-center justify-between text-secondaryText text-sm border-t border-border pt-4">
                    <div class="flex items-center space-x-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                        </svg>
                        <span>${property.beds}</span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
                        </svg>
                        <span>${property.baths}</span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                        </svg>
                        <span>${property.parking}</span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                        </svg>
                        <span>${property.sqft}m²</span>
                    </div>
                </div>
                <button class="view-property-btn w-full mt-4 bg-royalGold text-primary py-3 rounded-lg font-semibold hover:bg-champagneGold transition-colors" data-property-id="${property.id}">
                    View Property
                </button>
            </div>
        </div>
    `).join('');

    // Add click listeners for property cards
    document.querySelectorAll('.property-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.favorite-btn')) {
                const propertyId = parseInt(card.dataset.propertyId);
                openPropertyModal(propertyId);
            }
        });
    });
}

// Agents Grid
function initAgents() {
    const grid = document.getElementById('agents-grid');

    grid.innerHTML = agents.map((agent, index) => `
        <div class="agent-card bg-secondary rounded-2xl overflow-hidden border border-border hover:border-royalGold transition-all duration-300 scroll-animate stagger-${index + 1}">
            <div class="relative overflow-hidden">
                <img src="${agent.image}" alt="${agent.name}" class="w-full h-64 object-cover">
                <div class="agent-info absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent flex items-end p-5">
                    <div class="w-full">
                        <a href="tel:${agent.phone}" class="w-full bg-royalGold text-primary py-2 rounded-lg font-semibold hover:bg-champagneGold transition-colors text-center block">
                            Contact Agent
                        </a>
                    </div>
                </div>
            </div>
            <div class="p-5">
                <h3 class="text-lg font-playfair font-bold text-white mb-1">${agent.name}</h3>
                <p class="text-royalGold text-sm mb-2">${agent.position}</p>
                <p class="text-secondaryText text-sm mb-3 flex items-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    ${agent.location}
                </p>
                <div class="flex items-center justify-between text-secondaryText text-sm border-t border-border pt-3">
                    <span>${agent.specialization}</span>
                    <span>${agent.properties} Properties</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Testimonials Carousel
function initTestimonials() {
    const track = document.getElementById('testimonials-track');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');

    track.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="bg-secondary border border-border rounded-2xl p-8">
                <div class="flex items-center mb-6">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-16 h-16 rounded-full object-cover mr-4">
                    <div>
                        <h4 class="text-white font-semibold">${testimonial.name}</h4>
                        <p class="text-secondaryText text-sm">${testimonial.role}, ${testimonial.location}</p>
                    </div>
                </div>
                <div class="flex mb-4">
                    ${Array(testimonial.rating).fill('<svg class="w-5 h-5 text-royalGold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>').join('')}
                </div>
                <p class="text-secondaryText leading-relaxed">"${testimonial.review}"</p>
            </div>
        </div>
    `).join('');

    // Auto-play
    testimonialInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonialPosition();
    }, 5000);

    // Manual controls
    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        updateTestimonialPosition();
        resetInterval();
    });

    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonialPosition();
        resetInterval();
    });

    // Pause on hover
    track.addEventListener('mouseenter', () => clearInterval(testimonialInterval));
    track.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateTestimonialPosition();
        }, 5000);
    });

    function updateTestimonialPosition() {
        track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    }

    function resetInterval() {
        clearInterval(testimonialInterval);
        testimonialInterval = setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateTestimonialPosition();
        }, 5000);
    }
}

// FAQ Accordion
function initFAQ() {
    const container = document.getElementById('faq-container');

    container.innerHTML = faqs.map(faq => `
        <div class="faq-item bg-secondary border border-border rounded-xl overflow-hidden scroll-animate">
            <button class="faq-question w-full px-6 py-5 text-left flex items-center justify-between">
                <span class="text-white font-semibold">${faq.question}</span>
                <svg class="faq-icon w-5 h-5 text-royalGold transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
            </button>
            <div class="faq-answer px-6 overflow-hidden">
                <p class="text-secondaryText pb-5">${faq.answer}</p>
            </div>
        </div>
    `).join('');

    // Add click listeners
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const isActive = item.classList.contains('active');

            // Close all items
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Ad Slider
function initAdSlider() {
    const slider = document.getElementById('ad-slider');
    const prevBtn = document.getElementById('ad-prev');
    const nextBtn = document.getElementById('ad-next');
    const progress = document.getElementById('ad-progress');

    slider.innerHTML = advertisements.map(ad => `
        <div class="ad-card w-80 bg-gradient-to-br from-secondary to-primary border border-border rounded-2xl overflow-hidden">
            <img src="${ad.image}" alt="${ad.title}" class="w-full h-40 object-cover">
            <div class="p-6">
                <h3 class="text-2xl font-playfair font-bold text-white mb-2" style="color: ${ad.color}">${ad.title}</h3>
                <p class="text-secondaryText mb-4">${ad.subtitle}</p>
                <a href="#" class="text-royalGold hover:text-champagneGold transition-colors font-semibold">${ad.cta}</a>
            </div>
        </div>
    `).join('');

    // Progress dots
    progress.innerHTML = advertisements.map((_, i) => `
        <button class="w-2 h-2 rounded-full ${i === 0 ? 'bg-royalGold' : 'bg-white/30'} transition-colors" data-ad-index="${i}"></button>
    `).join('');

    let currentAd = 0;
    const adCount = advertisements.length;

    function updateAdPosition() {
        const cardWidth = 320 + 24; // card width + gap
        slider.scrollLeft = currentAd * cardWidth;

        // Update progress dots
        progress.querySelectorAll('button').forEach((dot, i) => {
            dot.classList.toggle('bg-royalGold', i === currentAd);
            dot.classList.toggle('bg-white/30', i !== currentAd);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentAd = (currentAd - 1 + adCount) % adCount;
        updateAdPosition();
    });

    nextBtn.addEventListener('click', () => {
        currentAd = (currentAd + 1) % adCount;
        updateAdPosition();
    });

    progress.querySelectorAll('button').forEach(dot => {
        dot.addEventListener('click', () => {
            currentAd = parseInt(dot.dataset.adIndex);
            updateAdPosition();
        });
    });

    // Touch/drag support
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => isDown = false);
    slider.addEventListener('mouseup', () => isDown = false);

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
}

// Airbnb Properties
function initAirbnb() {
    const grid = document.getElementById('airbnb-grid');

    grid.innerHTML = airbnbProperties.map((property, index) => `
        <div class="bg-secondary rounded-2xl overflow-hidden border border-border hover:border-royalGold transition-all duration-300 scroll-animate stagger-${index + 1}">
            <div class="relative overflow-hidden">
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover transition-transform duration-500 hover:scale-110">
                <div class="absolute top-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span class="text-white text-sm font-semibold flex items-center">
                        <svg class="w-4 h-4 mr-1 text-royalGold" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        ${property.rating}
                    </span>
                </div>
            </div>
            <div class="p-5">
                <h3 class="text-lg font-playfair font-bold text-white mb-2">${property.title}</h3>
                <p class="text-secondaryText text-sm mb-3 flex items-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    ${property.location}
                </p>
                <p class="text-royalGold text-xl font-bold mb-4">${property.price}</p>
                <div class="flex items-center justify-between text-secondaryText text-sm border-t border-border pt-3 mb-4">
                    <span class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                        ${property.guests} guests
                    </span>
                </div>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${property.amenities.map(amenity => `
                        <span class="px-2 py-1 bg-white/10 rounded-full text-xs text-secondaryText">${amenity}</span>
                    `).join('')}
                </div>
                <button class="w-full bg-royalGold text-primary py-3 rounded-lg font-semibold hover:bg-champagneGold transition-colors">
                    Book Stay
                </button>
            </div>
        </div>
    `).join('');
}

// Counters Animation
function initCounters() {
    const counters = document.querySelectorAll('.counter');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString() + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, stepTime);
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animatedElements.forEach(el => observer.observe(el));
}

// Contact Widget
function initContactWidget() {
    const toggle = document.getElementById('contact-toggle');
    const menu = document.getElementById('contact-menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
}

// Search Functionality
function initSearch() {
    const searchBtn = document.getElementById('search-btn');

    searchBtn.addEventListener('click', () => {
        const type = document.getElementById('search-type').value;
        const location = document.getElementById('search-location').value;
        const propertyType = document.getElementById('search-property-type').value;
        const price = document.getElementById('search-price').value;

        // Filter properties based on search criteria
        let filtered = properties;

        if (type === 'airbnb') {
            filtered = properties.filter(p => p.type === 'Airbnb');
        } else if (type === 'commercial') {
            filtered = properties.filter(p => p.type === 'Commercial');
        } else if (type === 'buy' || type === 'rent') {
            filtered = properties.filter(p => p.type === 'For Sale');
        }

        if (location) {
            filtered = filtered.filter(p => p.location.toLowerCase().includes(location.toLowerCase()));
        }

        if (propertyType) {
            filtered = filtered.filter(p => p.title.toLowerCase().includes(propertyType.toLowerCase()));
        }

        // Update properties grid with filtered results
        updatePropertiesGrid(filtered);

        // Scroll to properties section
        document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
    });
}

function updatePropertiesGrid(filteredProperties) {
    const grid = document.getElementById('properties-grid');

    if (filteredProperties.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-secondaryText text-lg">No properties found matching your criteria.</p>
                <button onclick="initProperties()" class="mt-4 text-royalGold hover:text-champagneGold">View All Properties</button>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredProperties.map((property, index) => `
        <div class="property-card bg-secondary rounded-2xl overflow-hidden border border-border hover:border-royalGold transition-all duration-300 cursor-pointer" data-property-id="${property.id}">
            <div class="relative overflow-hidden">
                <img src="${property.image}" alt="${property.title}" class="property-image w-full h-48 object-cover">
                <div class="absolute top-4 left-4">
                    <span class="px-3 py-1 rounded-full text-xs font-semibold ${property.type === 'For Sale' ? 'bg-green-500' : property.type === 'Airbnb' ? 'bg-purple-500' : 'bg-blue-500'} text-white">
                        ${property.type}
                    </span>
                </div>
                <button class="favorite-btn absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-royalGold hover:text-primary transition-colors" data-property-id="${property.id}">
                    <svg class="w-5 h-5 ${favorites.includes(property.id) ? 'text-red-500 fill-current' : ''}" fill="${favorites.includes(property.id) ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                </button>
            </div>
            <div class="p-5">
                <h3 class="text-lg font-playfair font-bold text-white mb-2">${property.title}</h3>
                <p class="text-secondaryText text-sm mb-3 flex items-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    ${property.location}
                </p>
                <p class="text-royalGold text-xl font-bold mb-4">${property.price}</p>
                <div class="flex items-center justify-between text-secondaryText text-sm border-t border-border pt-4">
                    <div class="flex items-center space-x-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                        </svg>
                        <span>${property.beds}</span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
                        </svg>
                        <span>${property.baths}</span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                        </svg>
                        <span>${property.parking}</span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                        </svg>
                        <span>${property.sqft}m²</span>
                    </div>
                </div>
                <button class="view-property-btn w-full mt-4 bg-royalGold text-primary py-3 rounded-lg font-semibold hover:bg-champagneGold transition-colors" data-property-id="${property.id}">
                    View Property
                </button>
            </div>
        </div>
    `).join('');

    // Re-attach event listeners
    document.querySelectorAll('.property-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.favorite-btn')) {
                const propertyId = parseInt(card.dataset.propertyId);
                openPropertyModal(propertyId);
            }
        });
    });

    initFavorites();
}

// Property Modal
function initPropertyModal() {
    const modal = document.getElementById('property-modal');
    const overlay = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('modal-close');

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function openPropertyModal(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;

    const modal = document.getElementById('property-modal');
    const content = document.getElementById('modal-content');

    content.innerHTML = `
        <img src="${property.image}" alt="${property.title}" class="w-full h-64 object-cover">
        <div class="p-8">
            <div class="flex items-start justify-between mb-6">
                <div>
                    <span class="px-3 py-1 rounded-full text-xs font-semibold ${property.type === 'For Sale' ? 'bg-green-500' : property.type === 'Airbnb' ? 'bg-purple-500' : 'bg-blue-500'} text-white mb-2 inline-block">
                        ${property.type}
                    </span>
                    <h2 class="text-2xl font-playfair font-bold text-white mb-2">${property.title}</h2>
                    <p class="text-secondaryText flex items-center">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        ${property.location}
                    </p>
                </div>
                <p class="text-royalGold text-2xl font-bold">${property.price}</p>
            </div>

            <p class="text-secondaryText mb-6 leading-relaxed">${property.description}</p>

            <div class="grid grid-cols-4 gap-4 mb-6">
                <div class="bg-primary rounded-lg p-4 text-center">
                    <svg class="w-6 h-6 text-royalGold mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                    <p class="text-white font-semibold">${property.beds} Beds</p>
                </div>
                <div class="bg-primary rounded-lg p-4 text-center">
                    <svg class="w-6 h-6 text-royalGold mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
                    </svg>
                    <p class="text-white font-semibold">${property.baths} Baths</p>
                </div>
                <div class="bg-primary rounded-lg p-4 text-center">
                    <svg class="w-6 h-6 text-royalGold mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                    </svg>
                    <p class="text-white font-semibold">${property.parking} Parking</p>
                </div>
                <div class="bg-primary rounded-lg p-4 text-center">
                    <svg class="w-6 h-6 text-royalGold mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                    </svg>
                    <p class="text-white font-semibold">${property.sqft}m²</p>
                </div>
            </div>

            <div class="bg-primary rounded-lg p-6 mb-6">
                <h3 class="text-white font-semibold mb-4">Contact Agent</h3>
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-white font-semibold">${property.agent}</p>
                        <p class="text-secondaryText text-sm">Real Estate Consultant</p>
                    </div>
                    <div class="flex space-x-3">
                        <a href="tel:${property.agentPhone}" class="bg-royalGold text-primary px-4 py-2 rounded-lg font-semibold hover:bg-champagneGold transition-colors">
                            Call
                        </a>
                        <a href="https://wa.me/2348106153316" target="_blank" class="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <div class="flex space-x-4">
                <a href="#contact" class="flex-1 bg-royalGold text-primary py-3 rounded-lg font-semibold hover:bg-champagneGold transition-colors text-center" onclick="closeModal()">
                    Book Inspection
                </a>
                <button onclick="closeModal()" class="flex-1 border border-royalGold text-royalGold py-3 rounded-lg font-semibold hover:bg-royalGold hover:text-primary transition-colors">
                    Close
                </button>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('property-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Favorites System
function initFavorites() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const propertyId = parseInt(btn.dataset.propertyId);
            toggleFavorite(propertyId, btn);
        });
    });
}

function toggleFavorite(propertyId, btn) {
    const index = favorites.indexOf(propertyId);
    const svg = btn.querySelector('svg');

    if (index > -1) {
        favorites.splice(index, 1);
        svg.classList.remove('text-red-500', 'fill-current');
        svg.setAttribute('fill', 'none');
    } else {
        favorites.push(propertyId);
        svg.classList.add('text-red-500', 'fill-current');
        svg.setAttribute('fill', 'currentColor');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}
