export const smoothScroll = (e, target) => {
    e.preventDefault();
    localStorage.setItem('isLearning', 'false');

    if (target === "#home") {
        const offsetTop = 0;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
        });
    } else {
        const targetElement = document.querySelector(target);
        const rect = targetElement.getBoundingClientRect();
        const offsetTop = rect.top + window.pageYOffset - 100;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
        });
    };
}