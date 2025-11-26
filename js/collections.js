const collections = [
            {
                id: 1,
                title: 'Urban Solitude',
                description: 'Exploring the quiet moments in bustling cityscapes, where architecture meets emotion',
                cover: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
                count: 12,
                images: [
                    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800',
                    'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800',
                    'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=800',
                    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
                    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
                    'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800'
                ]
            },
            {
                id: 2,
                title: 'Natural Light',
                description: 'A journey through landscapes painted by golden hour and the magic of natural illumination',
                cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
                count: 15,
                images: [
                    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
                    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
                    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
                    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
                    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
                    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800'
                ]
            },
            {
                id: 3,
                title: 'Human Stories',
                description: 'Intimate portraits capturing the essence, emotion, and unique character of individuals',
                cover: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800',
                count: 18,
                images: [
                    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
                    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800',
                    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800',
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800'
                ]
            },
            {
                id: 4,
                title: 'Abstract Visions',
                description: 'Playing with form, texture, and perspective to create thought-provoking compositions',
                cover: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                count: 10,
                images: [
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800',
                    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
                    'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800',
                    'https://images.unsplash.com/photo-1557672199-6951e40f1c55?w=800'
                ]
            }
        ];

        function renderCollections() {
            const grid = document.getElementById('collectionsGrid');
            grid.innerHTML = '';

            collections.forEach(collection => {
                const card = document.createElement('div');
                card.className = 'collection-card';
                card.innerHTML = `
                    <div class="collection-image">
                        <img src="${collection.cover}" alt="${collection.title}">
                        <div class="collection-count">${collection.count} Photos</div>
                    </div>
                    <div class="collection-info">
                        <h3>${collection.title}</h3>
                        <p>${collection.description}</p>
                    </div>
                `;
                card.addEventListener('click', () => openCollection(collection));
                grid.appendChild(card);
            });
        }

        function openCollection(collection) {
            document.getElementById('modalTitle').textContent = collection.title;
            document.getElementById('modalDescription').textContent = collection.description;
            
            const gallery = document.getElementById('modalGallery');
            gallery.innerHTML = '';
            
            collection.images.forEach(img => {
                const item = document.createElement('div');
                item.className = 'modal-gallery-item';
                item.innerHTML = `<img src="${img}" alt="${collection.title}">`;
                gallery.appendChild(item);
            });

            document.getElementById('collectionModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('collectionModal').classList.remove('active');
            document.body.style.overflow = '';
        }

        document.getElementById('closeModal').addEventListener('click', closeModal);

        document.getElementById('collectionModal').addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeModal();
        });

        renderCollections();