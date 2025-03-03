const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    on: {
        slideChange: function () {
            changeBackground(this.realIndex);
        }
    }
});

function changeBackground(index) {
    const colors = ["#f5c199", "#d3d3d3", "#3cb371", "#ff6b6b"]; // Фон для каждого слайда
    document.body.style.backgroundColor = colors[index % colors.length];
}
