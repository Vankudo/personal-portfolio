document.addEventListener('DOMContentLoaded', function () {
    var navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            var targetSectionId = link.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    document.getElementById('skillsBtn').addEventListener('click', function () {
        var skillsSection = document.getElementById('skills');
        skillsSection.classList.toggle('hidden');
    });
});
