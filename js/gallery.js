const galleryData = [
            { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800', title: 'Portrait Study 1', category: 'portraits' },
            { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', title: 'Mountain Vista', category: 'landscapes' },
            { src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800', title: 'City Lines', category: 'urban' },
            { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', title: 'Portrait Study 2', category: 'portraits' },
            { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800', title: 'Forest Path', category: 'landscapes' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', title: 'Abstract Forms', category: 'abstract' },
            { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800', title: 'Portrait Study 3', category: 'portraits' },
            { src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800', title: 'Urban Geometry', category: 'urban' },
            { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800', title: 'Coastal Beauty', category: 'landscapes' },
            { src: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800', title: 'Light and Shadow', category: 'abstract' },
            { src: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=800', title: 'Street Architecture', category: 'urban' },
            { src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800', title: 'Portrait Study 4', category: 'portraits' }
        ];

        let currentCategory = 'all';
        let currentImageIndex = 0;
        let filteredImages = [...galleryData];

        function renderGallery() {
            const grid = document.getElementById('galleryGrid');
            grid.innerHTML = '';
            
            filteredImages = currentCategory === 'all' 
                ? [...galleryData] 
                : galleryData.filter(item => item.category === currentCategory);

            filteredImages.forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'gallery-item';
                div.innerHTML = `<img src="${item.src}" alt="${item.title}">`;
                div.addEventListener('click', () => openLightbox(index));
                grid.appendChild(div);
            });
        }

        function openLightbox(index) {
            currentImageIndex = index;
            updateLightbox();
            document.getElementById('lightbox').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            document.getElementById('lightbox').classList.remove('active');
            document.body.style.overflow = '';
        }

        function updateLightbox() {
            const image = filteredImages[currentImageIndex];
            document.getElementById('lightboxImage').src = image.src;
            document.getElementById('lightboxTitle').textContent = image.title;
            document.getElementById('lightboxCategory').textContent = image.category.charAt(0).toUpperCase() + image.category.slice(1);
        }

        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
            updateLightbox();
        }

        function prevImage() {
            currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
            updateLightbox();
        }

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentCategory = this.dataset.category;
                renderGallery();
            });
        });

        document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
        document.getElementById('nextImage').addEventListener('click', nextImage);
        document.getElementById('prevImage').addEventListener('click', prevImage);

        document.getElementById('lightbox').addEventListener('click', function(e) {
            if (e.target === this) closeLightbox();
        });

        document.addEventListener('keydown', function(e) {
            const lightbox = document.getElementById('lightbox');
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') nextImage();
                if (e.key === 'ArrowLeft') prevImage();
            }
        });

        renderGallery();