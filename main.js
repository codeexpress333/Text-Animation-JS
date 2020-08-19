anime.timeline({ loop: true })
    .add({
        targets: '.text .circle-white',
        scale: [0, 3],
        opacity: [1, 0],
        easing: "easeInOutExpo",
        rotateZ: 360,
        duration: 1100
    }).add({
        targets: '.text .circle-container',
        scale: [0, 1],
        duration: 1100,
        easing: "easeInOutExpo",
        offset: '-=1000'
    }).add({
        targets: '.text .circle-dark',
        scale: [0, 1],
        duration: 1100,
        easing: "easeOutExpo",
        offset: '-=600'
    }).add({
        targets: '.text .letters-left',
        scale: [0, 1],
        duration: 1200,
        offset: '-=550'
    }).add({
        targets: '.text .bang',
        scale: [0, 1],
        rotateZ: [45, 15],
        duration: 1200,
        offset: '-=1000'
    }).add({
        targets: '.text',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1400
    });

anime({
    targets: '.text .circle-dark-dashed',
    rotateZ: 360,
    duration: 8000,
    easing: "linear",
    loop: true
});
