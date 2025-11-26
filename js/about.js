window.addEventListener('scroll', function() {
            const stats = document.querySelectorAll('.stat-item h3');
            stats.forEach(stat => {
                const position = stat.getBoundingClientRect().top;
                const screenHeight = window.innerHeight;
                if (position < screenHeight - 100 && !stat.classList.contains('counted')) {
                    stat.classList.add('counted');
                    animateValue(stat);
                }
            });
        });

        function animateValue(element) {
            const endValue = element.textContent;
            const numericValue = parseInt(endValue.replace(/\D/g, ''));
            const suffix = endValue.replace(/[0-9]/g, '');
            let current = 0;
            const increment = numericValue / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    element.textContent = numericValue + suffix;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current) + suffix;
                }
            }, 30);
        }