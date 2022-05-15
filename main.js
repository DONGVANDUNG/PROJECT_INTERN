//change option color of product;

const selectColor = document.querySelector('.select-color');
const imageProduct = document.querySelector('.product-image-demo');
selectColor.addEventListener("change", function () {
    if (selectColor.value == 'black') {
        imageProduct.style.backgroundImage = "url('./images/black_short.webp')"
    }
    else
        imageProduct.style.backgroundImage = "url('./images/white-front\ 2.png')";
})


//change url of product image;
const inputChangeImage = document.getElementById('select-img');
const imageChange = document.querySelector('.product-image-demo');
const frameAddImg = document.querySelector('.add-image');
inputChangeImage.addEventListener("change", e => {
    if (e.target.files.length) {
        const src = URL.createObjectURL(e.target.files[0]);
        imageChange.style.backgroundImage = `url('${src}')`;
        frameAddImg.style.display = 'none';
    }
})

// change image front or back of product;

const btnFront = document.querySelector('.btn-view-front');
const btnBack = document.querySelector('.btn-view-back');

btnFront.addEventListener("click", function () {
    imageChange.style.backgroundImage = "url('./images/white-front\ 2.png')";
})
btnBack.addEventListener("click", function () {
    imageChange.style.backgroundImage = "url('./images/back_short.webp')"
})


// add video for product
const videoProduct = document.querySelector('.video-product');
const inputAddVideo = document.getElementById('add-video');
const frameAddVideo = document.querySelector('.frame-add-video');
inputAddVideo.addEventListener("change", e => {
    if (e.target.files.length) {
        console.log(e);
        frameAddVideo.style.display = 'none';
        videoProduct.style.display = 'block';
        const src = URL.createObjectURL(e.target.files[0]);
        videoProduct.src = src;
    }
})


//add images for product
const frameAddImages = document.querySelector('.frame-add-image');

const inputAddImages = document.getElementById('add-images');

const labelImages = document.querySelector('.label-add-images');
const titleAddImages = document.querySelector('.span-title-add-img');

inputAddImages.addEventListener("change", e => {
    const numberVideo = e.target.files.length;
    console.log(numberVideo);
    if (numberVideo > 0 && numberVideo <= 9) {
        labelImages.style.display = 'none';
        titleAddImages.style.display = 'none';
        frameAddImages.style.border = 'none';
        frameAddImages.style.width = '100%';
        frameAddImages.style.flexDirection = 'row';
        frameAddImages.style.alignItems = 'flex-start';
        frameAddImages.style.justifyContent = 'flex-start';
        for (let i = 0; i < numberVideo; i++) {
            const src = URL.createObjectURL(e.target.files[i]);
            const item = document.createElement("div");
            item.classList = 'video';
            item.style.backgroundImage = `url('${src}')`;
            frameAddImages.appendChild(item);
        }
    }
})

