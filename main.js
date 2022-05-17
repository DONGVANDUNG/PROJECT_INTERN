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
const btnSelectImage = document.querySelector('.add-image-product');
const frameAddImg = document.querySelector('.add-image');
const productImage = document.querySelector('.product-image');
const iconAddImage = document.querySelector('.icon-add-img');
const labelAddImage = document.querySelector('.lable-add-img');
const subTitle = document.querySelector('.sub-title-add-image');
inputChangeImage.addEventListener("change", e => {
    if (e.target.files.length) {
        const src = URL.createObjectURL(e.target.files[0]);
        imageChange.style.backgroundImage = `url('${src}')`;
        frameAddImg.style.display = 'none';
        //add div change image
        btnSelectImage.style.backgroundColor = '#2E32380D';
        iconAddImage.className = 'fa-solid fa-circle-notch icon-change-image';
        labelAddImage.textContent = 'Thay ảnh';
        labelAddImage.className = 'label-change-image';
        //add div content when load image
        const frame = document.createElement('div');
        frame.classList = 'frame-load';
        const icon_load = document.createElement('i');
        setTimeout(function () {
            icon_load.style.animation = 'rotateIcon 2s linear';
        }, 0);
        icon_load.classList = 'fa-solid fa-circle-notch icon-load'
        const title = document.createElement('p');
        title.classList = 'title-load';
        title.textContent = 'Mehub đang upload thiết kế...'

        frame.appendChild(icon_load);
        frame.appendChild(title);
        productImage.insertBefore(frame, btnSelectImage);
        //add div download
        btnSelectImage.style.width = '61%'
        const frameDownload = document.createElement('div');
        frameDownload.classList = 'download';
        const icon_download = document.createElement('i');
        icon_download.classList = 'fa-solid fa-cloud-arrow-down icon-download';
        const titleDownload = document.createElement('p');
        titleDownload.classList = 'title-download';
        titleDownload.textContent = 'Tải về';

        frameDownload.appendChild(icon_download);
        frameDownload.appendChild(titleDownload);

        const frameControl = document.createElement('div');
        frameControl.classList = 'frame-control-image';
        frameControl.appendChild(btnSelectImage);
        frameControl.appendChild(frameDownload);

        productImage.insertBefore(frameControl, subTitle);
        frameDownload.addEventListener('click', function () {
            let imagePath = imageChange.style.backgroundImage;
            let imagePathAfterSlice = imagePath.slice(4, imagePath.length - 1);
            console.log(imagePathAfterSlice);
            let fileName = getFileName(imagePathAfterSlice);
            saveAs(imagePathAfterSlice, fileName);
        })
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
const frameTitleAddVideo = document.querySelector('.content-remind-add');
inputAddVideo.addEventListener("change", e => {
    if (e.target.files.length) {
        frameAddVideo.style.display = 'none';
        videoProduct.style.display = 'block';
        const src = URL.createObjectURL(e.target.files[0]);
        videoProduct.src = src;

        const frameChangeVideo = document.createElement('div');
        frameChangeVideo.classList = 'frame-change-video';
        const label = document.createElement('label');
        label.setAttribute('for', 'input-change');
        label.classList = 'label-change-video'
        const iconChangeVideo = document.createElement('i');
        iconChangeVideo.classList = 'fa-solid fa-circle-notch icon-change-image';
        const titleChangeVideo = document.createElement('p');
        titleChangeVideo.classList = 'title-change-video';
        titleChangeVideo.textContent = 'Thay video';
        const inputAddVideo = document.createElement('input');
        inputAddVideo.setAttribute('type', 'file');
        inputAddVideo.style.display = 'none';
        inputAddVideo.setAttribute('id', 'input-change');

        label.appendChild(frameChangeVideo);
        frameChangeVideo.appendChild(iconChangeVideo);
        frameChangeVideo.appendChild(titleChangeVideo);
        frameChangeVideo.appendChild(inputAddVideo);
        frameTitleAddVideo.appendChild(label);
    }
    const btnChangeVideo = document.getElementById('input-change');
    btnChangeVideo.addEventListener('change', e => {
        if (e.target.files.length) {
            console.log(e);
            const src = URL.createObjectURL(e.target.files[0]);
            videoProduct.src = src;
        }
    })
})


//add images for product
const frameAddImages = document.querySelector('.frame-add-image');

const inputAddImages = document.getElementById('add-images');

const labelImages = document.querySelector('.label-add-images');
const titleAddImages = document.querySelector('.span-title-add-img');
const titleImg = document.querySelector('.title-img');
inputAddImages.addEventListener("change", e => {
    const numberImage = e.target.files.length;
    if (numberImage > 0 && numberImage <= 9) {
        labelImages.style.display = 'none';
        titleAddImages.style.display = 'none';
        frameAddImages.style.border = 'none';
        frameAddImages.style.width = '100%';
        frameAddImages.style.flexDirection = 'row';
        frameAddImages.style.alignItems = 'flex-start';
        frameAddImages.style.justifyContent = 'flex-start';
        for (let i = 0; i < numberImage; i++) {
            const src = URL.createObjectURL(e.target.files[i]);

            const item = document.createElement("div");
            item.classList = 'list-images';
            item.style.backgroundImage = `url('${src}')`;
            //div exit
            const frameExit = document.createElement('div');
            frameExit.classList = 'frame-exit';
            const icon_exit = document.createElement('i');
            icon_exit.classList = 'fa-solid fa-xmark icon_exit'
            frameExit.appendChild(icon_exit);
            item.appendChild(frameExit);
            frameAddImages.appendChild(item);
        }
        titleImg.textContent = `Ảnh sản phẩm (${numberImage}/9)`
        //set event click exit
        const exit = document.querySelectorAll('.frame-exit');
        console.log(exit);
        Array.from(exit).forEach(e => {
            console.log(e);
            e.addEventListener('click', function () {
                e.parentElement.style.display = 'none';
            })
        })
    }
})

