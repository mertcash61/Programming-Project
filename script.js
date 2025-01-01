document.addEventListener('DOMContentLoaded', function() {
    // Sayfa yüklendiğinde smooth scroll özelliği ekle
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href');
            const section = document.querySelector(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Bölümlere animasyonlu giriş efekti ekle
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(section);
    });

    // Programlama dili başlıklarına hover efekti ekle
    const titles = document.querySelectorAll('h2');
    titles.forEach(title => {
        title.addEventListener('mouseover', () => {
            title.style.color = '#e74c3c';
        });
        title.addEventListener('mouseout', () => {
            title.style.color = '#2c3e50';
        });
    });
}); 