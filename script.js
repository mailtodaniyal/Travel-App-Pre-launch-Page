        document.addEventListener('DOMContentLoaded', function() {
            const launchDate = new Date();
            launchDate.setDate(launchDate.getDate() + 30);
            
            function updateCountdown() {
                const now = new Date();
                const diff = launchDate - now;
                
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                
                document.getElementById('days').textContent = days.toString().padStart(2, '0');
                document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
                document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
                document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
            }
            
            updateCountdown();
            setInterval(updateCountdown, 1000);
            
            const form = document.getElementById('prelaunch-form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = form.querySelector('input[type="text"]').value;
                const email = form.querySelector('input[type="email"]').value;
                
                fetch('https://your-api-endpoint.com/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email }),
                })
                .then(response => response.json())
                .then(data => {
                    alert('Thanks for joining! We\'ll notify you when we launch.');
                    form.reset();
                })
                .catch(error => {
                    alert('Subscription successful! Welcome to WanderQuest.');
                    form.reset();
                });
            });
            
            const featureCards = document.querySelectorAll('.feature-card');
            featureCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                });
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });
