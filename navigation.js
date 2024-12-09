//index.heml
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", function (event) {
    event.preventDefault();
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigation.addEventListener('click', (e) => {
    // 如果点击的是半透明背景部分而不是菜单项
    if (e.target === navigation) {
        menuBtn.classList.toggle('active');
        navigation.classList.toggle('active');
    }
});

//videos.html
//for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll("#video-describe");


var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) =>{
    btn.addEventListener("click", () => {
        sliderNav(i);
        clearInterval(autoSlide); // 点击手动按钮时，清除自动切换的定时器
        autoSlide = setInterval(autoSliderNav, 30000); // 重新启动自动切换
    })
})

// 自动切换函数
let currentIndex = 0;
const autoSliderNav = () => {
    currentIndex = (currentIndex + 1) % btns.length;
    sliderNav(currentIndex);
}

// 启动自动切换，每30秒切换一次
let autoSlide = setInterval(autoSliderNav, 30000);


// img.html
let scrollBar = document.querySelector(".gallery");
// let backBtn = document.querySelector("#backBtn");
// let nextBtn = document.querySelector("#nextBtn");

scrollBar.addEventListener("wheel", (event) => {
    event.preventDefault(); 
    scrollBar.scrollLeft += event.deltaY; // 改为使用 deltaY
    scrollBar.style.scrollBehavior = "auto";
});

// nextBtn.addEventListener("click", () => {
//     scrollBar.style.scrollBehavior = "smooth";
//     scrollBar.scrollLeft += 900;
// });

// backBtn.addEventListener("click", () => {
//     scrollBar.style.scrollBehavior = "smooth";
//     scrollBar.scrollLeft -= 900;
// });

const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const isExpanded = thumbnail.classList.contains('expanded');
        // 重置所有缩略图的状态
        thumbnails.forEach(img => img.classList.remove('expanded'));
        
        if (!isExpanded) {
            // 如果当前图片没有放大，则放大它
            thumbnail.classList.add('expanded');
            // 更新图片为原图
            const fullSrc = thumbnail.src.replace('avif', 'jpeg');
            thumbnail.src = fullSrc;
        } else {
            // 如果当前图片已经放大，则恢复缩略图状态
            thumbnail.classList.remove('expanded');
            const thumbnailSrc = thumbnail.src.replace('jpeg', 'avif');
            thumbnail.src = thumbnailSrc;
        }
    });
});


function closeOverlay() {
    document.querySelector('.overlay').style.display = 'none';
}