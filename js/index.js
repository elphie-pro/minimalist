        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        window.addEventListener('load', () => {
            document.querySelector('.hero-content').style.opacity = '0';
            document.querySelector('.hero-content').style.transform = 'translateY(30px)';
            document.querySelector('.hero-content').style.transition = 'all 1s ease';
            
            setTimeout(() => {
                document.querySelector('.hero-content').style.opacity = '1';
                document.querySelector('.hero-content').style.transform = 'translateY(0)';
            }, 100);
        });