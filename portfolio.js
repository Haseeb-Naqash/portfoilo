document.addEventListener('DOMContentLoaded', function() {
    // Portfolio modal functionality
    const readMoreButtons = document.querySelectorAll('.readMore');
    const portfolioModal = document.querySelector('.portfolio-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const projectTitle = document.querySelector('.project-title');
    const projectDescription = document.querySelector('.project-description');
    const activeSlide = document.querySelector('.active-slide');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    
    // Store project data
    const projects = {
        ecommerce: {
            title: "E-commerce Web",
            description: "Responsive online store with product listings, cart, and checkout features.",
            images: ["img/portfolio/uni project.webp", "img/portfolio/optimerz.webp"]
        },
        software: {
            title: "Software House Web",
            description: "Developed a user-friendly website for showcasing and downloading software, with secure links and responsive design.",
            images: ["img/portfolio/optimerz.webp"]
        },
        memar: {
            title: "Memar Mustaqbil Web",
            description: "A platform for students and professionals to find jobs and internships, with features like job listings, applications, and user profiles.",
            images: ["img/portfolio/Memar.webp"]
        },
        property: {
            title: "Meezab Property Web",
            description: "A real estate website for listing and exploring properties in Turkey. Features include property search, filters, image galleries, and contact forms for inquiries.",
            images: ["img/portfolio/Meezab Property.webp"]
        },
        hotel: {
            title: "Hotel Web",
            description: "A hotel booking site for Makkah and Madinah with room listings, booking forms, and location details for pilgrims and travelers.",
            images: ["img/portfolio/Hotel.webp"]
        },
        cleananing: {
            title: "House Cleaning Web",
            description: "A professional cleaning service site with service listings, online booking, and contact options for clients across the USA.",
            images: ["img/portfolio/Perfect Touch.webp"]
        },
        airuk: {
            title: "Meezab Air UK",
            description: "A dedicated site for Umrah packages, visa assistance, and travel bookings with detailed service info and easy inquiry options.",
            images: ["img/portfolio/Meezab UK.webp"]
        }
    };
    
    let currentProject = null;
    let currentSlideIndex = 0;
    
    // Open modal when "Explore More" is clicked
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            currentProject = projects[projectId];
            currentSlideIndex = 0;
            
            // Update modal content
            projectTitle.textContent = currentProject.title;
            projectDescription.textContent = currentProject.description;
            activeSlide.src = currentProject.images[0];
            activeSlide.alt = currentProject.title;
            
            // Show modal
            portfolioModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    function closePortfolioModal() {
        portfolioModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    closeModal.addEventListener('click', closePortfolioModal);
    modalOverlay.addEventListener('click', closePortfolioModal);
    
    // Keyboard events
    document.addEventListener('keydown', function(e) {
        if (portfolioModal.style.display === 'block') {
            if (e.key === 'Escape') {
                closePortfolioModal();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        }
    });
    
    // Slider navigation
    function prevSlide() {
        if (currentProject && currentProject.images.length > 1) {
            currentSlideIndex = (currentSlideIndex - 1 + currentProject.images.length) % currentProject.images.length;
            activeSlide.src = currentProject.images[currentSlideIndex];
        }
    }
    
    function nextSlide() {
        if (currentProject && currentProject.images.length > 1) {
            currentSlideIndex = (currentSlideIndex + 1) % currentProject.images.length;
            activeSlide.src = currentProject.images[currentSlideIndex];
        }
    }
    
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
});