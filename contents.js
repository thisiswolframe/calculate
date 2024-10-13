document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.slider-nav a').forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // предотвращаем скроллинг страницы

            // Находим слайдер и вычисляем нужное смещение
            const slider = document.querySelector('.slider');
            const slideWidth = slider.offsetWidth;

            // Прокручиваем слайдер к нужному изображению
            slider.scrollTo({
                left: slideWidth * index,
                behavior: 'smooth'
            });
        });
    });
});
