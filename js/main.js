// js/main.js

// Collection filter functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab filtering for collections page
    const tabs = document.querySelectorAll('.tab-btn');
    const items = document.querySelectorAll('#collection-grid .product-item');
    
    if (tabs.length && items.length) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active from all
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const category = tab.getAttribute('data-collection');
                
                items.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Video play/pause functionality
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hero-video');
    const controlBtn = document.getElementById('video-control-btn');
    
    if (video && controlBtn) {
        controlBtn.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                controlBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                video.pause();
                controlBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
    }
});

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Header active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Image error handling - replace with fallback images
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            const category = this.alt?.toLowerCase() || '';
            if (category.includes('gold')) {
                this.src = 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1887&auto=format&fit=crop';
            } else if (category.includes('diamond')) {
                this.src = 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1887&auto=format&fit=crop';
            } else {
                this.src = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1887&auto=format&fit=crop';
            }
        };
    });
});