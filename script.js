<!-- JavaScript -->
<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Skill animation
        const skills = document.querySelectorAll('.skill');
        skills.forEach(skill => {
            skill.addEventListener('mouseover', () => {
                skill.style.animation = 'skillPulse 0.5s ease-in-out';
            });
            skill.addEventListener('animationend', () => {
                skill.style.animation = '';
            });
        });

        // Project details toggle
        const projectDetailsBtn = document.querySelector('.project-details-btn');
        const projectDetails = document.querySelector('.project-details');
        projectDetailsBtn.addEventListener('click', () => {
            projectDetails.style.display = projectDetails.style.display === 'none' ? 'block' : 'none';
            projectDetailsBtn.textContent = projectDetails.style.display === 'none' ? 'Learn More' : 'Hide Details';
        });

        // Scroll reveal animation
        window.addEventListener('scroll', reveal);

        function reveal() {
            var reveals = document.querySelectorAll('.section');

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var revealTop = reveals[i].getBoundingClientRect().top;
                var revealPoint = 150;

                if (revealTop < windowHeight - revealPoint) {
                    reveals[i].classList.add('active');
                } else {
                    reveals[i].classList.remove('active');
                }
            }
        }
    });
</script>
