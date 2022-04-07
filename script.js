//----SideNav------------------------------------------------------------------
function openNav() {
    document.getElementById("mySidenav").style.width = "230px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
//-----Gallery---------------------------------------------------------------------
const container = document.querySelector('.main-gallery__column');
const modalContainer = document.querySelector('.modal__contentPic')
const modal = document.querySelector(".modalPic"),
    modalCloseBtnSubmit = document.querySelector(".btn_minPic"),
    formSubmit = document.querySelector("#formSubmit")

const portativeGenDB = [{
        src: "https://avatars.mds.yandex.net/get-mpic/195452/img_id1942341914086442624/9hq",
        info: "infoMedia/B-2500.jpeg",
        power: "2,5",
        model: "ALM/ B-2500",
        type: "benzin"
    },
    {
        src: "https://www.kuzayenerji.com/kullanici/icerik/urun_resimleri/kucuk/benzinli_alm_b_7500et180418022127-d5e60.jpg",
        info: "infoMedia/B-3000.jpeg",
        power: "2,8",
        model: "ALM/ B-3000",
        type: "benzin"
    },
    {
        src: "infoMedia/G_B-3500.jpg",
        info: "infoMedia/B-3500.jpeg",
        power: "3,5",
        model: "ALM/ B-3500",
        type: "benzin"
    },
    {
        src: "https://www.kuzayenerji.com/kullanici/icerik/urun_resimleri/kucuk/benzinli_alm_b_7500et180418022127-d5e60.jpg",
        info: "infoMedia/B-6500.jpeg",
        power: "6,2",
        model: "ALM / B-6500",
        type: "benzin"
    },
    {
        src: "https://wwwi.globalpiyasa.com/lib/Urun/670/7716d548a6e40ef98d69855065e55df8.jpg",
        info: "infoMedia/B-7500E.jpeg",
        power: "7,5",
        model: "ALM / B-7500E",
        type: "benzin"
    },
    {
        src: "https://wwwi.globalpiyasa.com/lib/Urun/670/7716d548a6e40ef98d69855065e55df8.jpg",
        info: "infoMedia/B-7500ET.jpeg",
        power: "7,5",
        model: "ALM / B-7500E/T",
        type: "benzin"
    },
    {
        src: "infoMedia/G_B11000E.jpg",
        info: "infoMedia/B11000E.jpeg",
        power: "10",
        model: "ALM / B-11000/E",
        type: "benzin"
    },
    {
        src: "infoMedia/G_B11000ES.png",
        info: "infoMedia/B-11000ETS.jpeg",
        power: "10",
        model: "ALM / B-11000/E/T/S",
        type: "benzin"
    },
    {
        src: "infoMedia/G_B11000ES.png",
        info: "infoMedia/B-11000ES.jpeg",
        power: "10",
        model: "ALM / B-11000/E/S",
        type: "benzin"
    },
    {
        src: "infoMedia/G_D-3600.jpg",
        info: "infoMedia/D-3600.jpeg",
        power: "3,6",
        model: "ALM/ D-3600",
        type: "dizel"
    },
    {
        src: "infoMedia/G_D-5000.jpg",
        info: "infoMedia/D-5000.jpeg",
        power: "5",
        model: "ALM/ D-5000",
        type: "dizel"
    },
    {
        src: "infoMedia/G_D-5000.jpg",
        info: "infoMedia/D-5000E.jpeg",
        power: "5",
        model: "ALM/ D-5000E",
        type: "dizel"
    },
    {
        src: "infoMedia/G_DS-5000E.jpg",
        info: "infoMedia/DS-5000E.jpeg",
        power: "5,6",
        model: "ALM/ DS-5000E",
        type: "dizel"
    },
    {
        src: "infoMedia/G_SDS-6000E.png",
        info: "infoMedia/SDS-6000E.jpeg",
        power: "5",
        model: "ALM/ SDS (DS)-6000E",
        type: "dizel"
    },
    {
        src: "infoMedia/G_SDS-6000E.png",
        info: "infoMedia/SDS-7000TE.jpeg",
        power: "5,5",
        model: "ALM/ SDS (DS)-7000TE",
        type: "dizel"
    },
    {
        src: "infoMedia/G_SDS-6000E.png",
        info: "infoMedia/DS-7000TE.jpeg",
        power: "5,5",
        model: "ALM/ DS-7000TE",
        type: "dizel"
    },
    {
        src: "media/main-products_item.jpg",
        info: "infoMedia/D-7500TE.jpeg",
        power: "5",
        model: "ALM/ D-7500TE",
        type: "dizel"
    },
    {
        src: "infoMedia/G_D-13500ME.jpg",
        info: "infoMedia/D-13500ME.jpeg",
        power: "12,5",
        model: "ALM/ D-13500ME",
        type: "dizel"
    },
    {
        src: "infoMedia/G_D-13500ME.jpg",
        info: "infoMedia/D-13500TE.jpeg",
        power: "12,5",
        model: "ALM/ D-13500TE",
        type: "dizel"
    },
    {
        src: "infoMedia/G_DS-13500ME.jpg",
        info: "infoMedia/DS-13500ME.jpeg",
        power: "12,5",
        model: "ALM/ DS-13500ME",
        type: "dizel"
    },
    {
        src: "infoMedia/G_VDS-12000ME.png",
        info: "infoMedia/VDS-12000ME.jpeg",
        power: "10",
        model: "ALM/ VDS-12000ME",
        type: "dizel"
    },
    {
        src: "infoMedia/G_VDS-12000ME.png",
        info: "infoMedia/VDS-12000TE.jpeg",
        power: "12,5",
        model: "ALM/ VDS-12000TE",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-17,5.jpg",
        info: "infoMedia/ALIMAR-17,5.jpeg",
        power: "16",
        model: "ALMAR 17,5",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-17,5.jpg",
        info: "infoMedia/ALIMAR-22.jpeg",
        power: "20",
        model: "ALMAR 22",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-17,5.jpg",
        info: "infoMedia/ALIMAR-28.jpeg",
        power: "25",
        model: "ALMAR 28",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-17,5.jpg",
        info: "infoMedia/ALIMAR-33.jpeg",
        power: "30",
        model: "ALMAR 33",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-40.jpg",
        info: "infoMedia/ALIMAR-40.jpeg",
        power: "36",
        model: "ALMAR 40",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-40.jpg",
        info: "infoMedia/ALIMAR-45.jpeg",
        power: "41",
        model: "ALMAR 45",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-40.jpg",
        info: "infoMedia/ALIMAR-50.jpeg",
        power: "45",
        model: "ALMAR 50",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-62.jpg",
        info: "infoMedia/ALIMAR-62.jpeg",
        power: "56",
        model: "ALMAR 62",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-62.jpg",
        info: "infoMedia/ALIMAR-75.jpeg",
        power: "68",
        model: "ALMAR 75",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-62.jpg",
        info: "infoMedia/ALIMAR-82.jpeg",
        power: "75",
        model: "ALMAR 82",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-62.jpg",
        info: "infoMedia/ALIMAR-110.jpeg",
        power: "100",
        model: "ALMAR 110",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-62.jpg",
        info: "infoMedia/ALIMAR-125.jpeg",
        power: "115",
        model: "ALMAR 125",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-220.jpg",
        info: "infoMedia/ALIMAR-220.jpeg",
        power: "200",
        model: "ALMAR 220",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-220.jpg",
        info: "infoMedia/ALIMAR-275.jpeg",
        power: "250",
        model: "ALMAR 275",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-220.jpg",
        info: "infoMedia/ALIMAR-300.jpeg",
        power: "270",
        model: "ALMAR 300",
        type: "dizel"
}]

fillTemplate(portativeGenDB)
genFilterByValueTwo(300, 66);

const buttons = document.querySelectorAll('.main-gallery__button');
const kVa220 = document.querySelector('.btn1');
const kVa65 = document.querySelector('.btn2');
const kVa14 = document.querySelector('.btn3');
const benzinBtn = document.querySelector('.btn4');
const dizelBtn = document.querySelector('.btn5');

kVa220.addEventListener('click', (e)=> {
    e.preventDefault()
    genFilterByValueTwo(300, 66);
    toggleActive(kVa220)
})

kVa65.addEventListener('click', (e)=> {
    e.preventDefault()
    genFilterByValueTwo(66, 13);
    toggleActive(kVa65)
})

kVa14.addEventListener('click', (e)=> {
    e.preventDefault()
    genFilterByValue(13);
    toggleActive(kVa14)
})

benzinBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    genFilterByType("benzin")
    toggleActive(benzinBtn)
    
})


dizelBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    genFilterByType("dizel");
    toggleActive(dizelBtn)
})



function toggleActive (btn) {
    buttons.forEach(btn => {
        btn.classList.remove('_active')
    })
    btn.classList.add('_active')
}


function genFilterByType(fuelType) {
    let items = document.querySelectorAll('.main-gallery__item');

    items.forEach(item => {
        if(item.getAttribute("name") !== fuelType) {
            item.classList.add('galleryHide')
        } else {
            item.classList.remove('galleryHide')
        }
        
    })
}

function genFilterByValue(number) {
    let items = document.querySelectorAll('.main-gallery__item');

    items.forEach(item => {
        if(item.getAttribute("value") > number) {
            item.classList.add('galleryHide')
        } else {
            item.classList.remove('galleryHide')
        }
    }) 
   
}

function genFilterByValueTwo(number, num) {
    let items = document.querySelectorAll('.main-gallery__item');

    items.forEach(item => {
        if(item.getAttribute("value") < number && item.getAttribute("value") > num) {
            item.classList.remove('galleryHide')
        } else {
            item.classList.add('galleryHide')
        }
    }) 
   
}
function fillTemplate(DB) {
    DB.forEach((gen, index) => {
        container.innerHTML += createTemplate(gen.src, gen.power, gen.model, index, gen.type)
    
    })
}


function createTemplate(src, power, model, index, name) {
    return `<div class="main-gallery__item gallery__item" id="${index}" name="${name}" value="${power}">
    <div class="gallery__item_image">
      
        <img  class="main-gallery_image" src="${src}" onclick="checker()" alt="[object Object]">
      
    </div>
    <div class="gallery__item_link">${power+"kVa" + " "}${name}</div>
    <div class="gallery__item_title"><p>${model}</p></div>
  </div>`
}



function checker() {
    let items = document.querySelectorAll('.main-gallery__item')
    let pics = document.querySelector('.imagesS')

    for (let i = 0; i < portativeGenDB.length; i++) {
        let gen = portativeGenDB[i];

        for (let j = 0; j < items.length; j++) {
            items[i].addEventListener('click', () => {
                openModal();
                if (i === j) {
                    pics.src = gen.info
                }
            })
        }
    }
}



function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
}

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
}


modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
        closeModal();
    }
});


//-----Counter----------------------------------------------------------------
const arr = document.querySelectorAll('.counter-item__number')

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function check() {

    let windowHeight = window.innerHeight;

    for (let i = 0; i < arr.length; i++) {
        let el1 = arr[0];
        let el2 = arr[1];
        let el3 = arr[2];
        let el4 = arr[3];
        let position = el1.getBoundingClientRect().top

        if (position - windowHeight <= 0) {
            animateValue(el1, 0, 400, 2000);
            animateValue(el2, 0, 8, 2000);
            animateValue(el3, 0, 12, 2000);
            animateValue(el4, 0, 100, 2000);
            window.removeEventListener('scroll', check);
        }
    }
}

window.addEventListener('scroll', check);

//-----Accordion--------------------------------------------------------------------------

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


//----------Slider-Quotes--------------------------------------------------------------------
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}