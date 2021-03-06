//----SideNav------------------------------------------------------------------


function toggleNavBar() {
    if(document.getElementById("mySidenav").style.width == 0 || document.getElementById("mySidenav").style.width == "0px"){
        openNav()
    } else {
        closeNav()
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "230px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//-----Gallery---------------------------------------------------------------------
const container = document.querySelector('.main-gallery__column');
const chargerContainer = document.querySelector('.chargers');
const buttons = document.querySelectorAll('.main-gallery__button');
const kVa220 = document.querySelector('.btn1');
const kVa65 = document.querySelector('.btn2');
const kVa14 = document.querySelector('.btn3');
const benzinBtn = document.querySelector('.btn4');
const dizelBtn = document.querySelector('.btn5');
const modalContainer = document.querySelector('.modal__contentPic')
const modal = document.querySelector(".modalPic"),
    modalCloseBtnSubmit = document.querySelector(".btn_minPic");
    
//---Generators DB-----------------------------------------------------------------
const portativeGenDB = [{
        src: "infoMedia/G_B-2500-min.jpg",
        info: "infoMedia/B-2500-min.jpeg",
        power: "2,8",
        model: "ALM/ B-2500",
        type: "benzin"
    },
    {
        src: "infoMedia/G_B-3000.webp",
        info: "infoMedia/B-3000-min.jpeg",
        power: "3",
        model: "ALM/ B-3000",
        type: "benzin"
    },
    {
        src: "infoMedia/G_B-3500-min.jpg",
        info: "infoMedia/B-3500-min.jpeg",
        power: "3,5",
        model: "ALM/ B-3500",
        type: "benzin"
    },
    {
        src: "infoMedia/G_B-3000.webp",
        info: "infoMedia/B-6500-min.jpeg",
        power: "6,8",
        model: "ALM / B-6500",
        type: "benzin"
    },
    {
        src: "infoMedia/G_B-2500-min.jpg",
        info: "infoMedia/B-7500E-min.jpeg",
        power: "8",
        model: "ALM / B-7500E",
        type: "benzin"
    },
    {
        src: "infoMedia/G_B-2500-min.jpg",
        info: "infoMedia/B-7500ET-min.jpeg",
        power: "8",
        model: "ALM / B-7500E/T",
        type: "benzin"
    },
    {
        src: "infoMedia/G_B11000E-min.jpg",
        info: "infoMedia/B-11000E-min.jpeg",
        power: "11",
        model: "ALM / B-11000/E",
        type: "benzin"
    },
    {
        src: "infoMedia/G_B11000ES-min.png",
        info: "infoMedia/B-11000ETS-min.jpeg",
        power: "11",
        model: "ALM / B-11000/E/T/S",
        type: "benzin"
    },
    {
        src: "infoMedia/G_B11000ES-min.png",
        info: "infoMedia/B-11000ES-min.jpeg",
        power: "11",
        model: "ALM / B-11000/E/S",
        type: "benzin"
    },
    {
        src: "infoMedia/G_D-3600-min.jpg",
        info: "infoMedia/D-3600ME-min.jpeg",
        power: "4",
        model: "ALM/ D-3600ME",
        type: "dizel"
    },
    {
        src: "infoMedia/G_D-5000-min.jpg",
        info: "infoMedia/D-5000-min.jpeg",
        power: "5.5",
        model: "ALM/ D-5000",
        type: "dizel"
    },
    {
        src: "infoMedia/G_D-5000-min.jpg",
        info: "infoMedia/D-5000TE-min.jpeg",
        power: "5.5",
        model: "ALM/ D-5000TE",
        type: "dizel"
    },
    {
        src: "infoMedia/G_DS-5000E-min.jpg",
        info: "infoMedia/DS-5000E-min.jpeg",
        power: "6.2",
        model: "ALM/ DS-5000E",
        type: "dizel"
    },
    {
        src: "infoMedia/G_SDS-6000E-min.png",
        info: "infoMedia/SDS-5000E-min.jpeg",
        power: "6",
        model: "ALM/ SDS (DS)-6000E",
        type: "dizel"
    },
    {
        src: "infoMedia/G_SDS-6000E-min.png",
        info: "infoMedia/SDS-7000TE-min.jpeg",
        power: "6,5",
        model: "ALM/ SDS (DS)-7000TE",
        type: "dizel"
    },
    {
        src: "infoMedia/G_SDS-6000E-min.png",
        info: "infoMedia/DS-7000TE-min.jpeg",
        power: "6,5",
        model: "ALM/ DS-7000TE",
        type: "dizel"
    },
    {
        src: "media/main-products_item.jpg",
        info: "infoMedia/D-7500TE-min.jpeg",
        power: "6",
        model: "ALM/ D-7500TE",
        type: "dizel"
    },
    {
        src: "infoMedia/G_D-13500ME-min.jpg",
        info: "infoMedia/D-13500ME-min.jpeg",
        power: "13,5",
        model: "ALM/ D-13500ME",
        type: "dizel"
    },
    {
        src: "infoMedia/G_D-13500ME-min.jpg",
        info: "infoMedia/D-13500TE-min.jpeg",
        power: "13,5",
        model: "ALM/ D-13500TE",
        type: "dizel"
    },
    {
        src: "infoMedia/G_DS-13500ME-min.jpg",
        info: "infoMedia/DS-13500ME-min.jpeg",
        power: "13,5",
        model: "ALM/ DS-13500ME",
        type: "dizel"
    },
    {
        src: "infoMedia/G_VDS-12000ME-min.png",
        info: "infoMedia/VDS-12000ME-min.jpeg",
        power: "11",
        model: "ALM/ VDS-12000ME",
        type: "dizel"
    },
    {
        src: "infoMedia/G_VDS-12000ME-min.png",
        info: "infoMedia/VDS-12000TE-min.jpeg",
        power: "13,5",
        model: "ALM/ VDS-12000TE",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-17,5-min.jpg",
        info: "infoMedia/ALIMAR 17,5-min.jpeg",
        power: "17.5",
        model: "ALMAR 17,5",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-17,5-min.jpg",
        info: "infoMedia/ALIMAR 22-min.jpeg",
        power: "22",
        model: "ALMAR 22",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-17,5-min.jpg",
        info: "infoMedia/ALIMAR 28-min.jpeg",
        power: "28",
        model: "ALMAR 28",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-17,5-min.jpg",
        info: "infoMedia/ALIMAR 33-min.jpeg",
        power: "33",
        model: "ALMAR 33",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-40-min.jpg",
        info: "infoMedia/ALIMAR 40-min.jpeg",
        power: "40",
        model: "ALMAR 40",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-40-min.jpg",
        info: "infoMedia/ALIMAR 45-min.jpeg",
        power: "45",
        model: "ALMAR 45",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-40-min.jpg",
        info: "infoMedia/ALIMAR 50-min.jpeg",
        power: "50",
        model: "ALMAR 50",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-62-min.jpg",
        info: "infoMedia/ALIMAR 62-min.jpeg",
        power: "62",
        model: "ALMAR 62",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-62-min.jpg",
        info: "infoMedia/ALIMAR 75-min.jpeg",
        power: "75",
        model: "ALMAR 75",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-62-min.jpg",
        info: "infoMedia/ALIMAR 82-min.jpeg",
        power: "82",
        model: "ALMAR 82",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-62-min.jpg",
        info: "infoMedia/ALIMAR 110-min.jpeg",
        power: "110",
        model: "ALMAR 110",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-62-min.jpg",
        info: "infoMedia/ALIMAR 125-min.jpeg",
        power: "125",
        model: "ALMAR 125",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-220-min.jpg",
        info: "infoMedia/ALIMAR 220-min.jpeg",
        power: "220",
        model: "ALMAR 220",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-220-min.jpg",
        info: "infoMedia/ALIMAR 275-min.jpeg",
        power: "275",
        model: "ALMAR 275",
        type: "dizel"
    },
    {
        src: "infoMedia/G_ALIMAR-220-min.jpg",
        info: "infoMedia/ALIMAR 300-min.jpeg",
        power: "300",
        model: "ALMAR 300",
        type: "dizel"
    }
    
]
//---Chargers DB-----------------------------------------------------------------
const chargersDB = [
    {
        src: "media/Circontrol-WallBox-eHome.jpg",
        info: "infoMedia/EHOME1-min.jpeg",
        info2: "infoMedia/EHOME2-min.jpeg",
        power: "",
        model: "eHome AC Wall Box",
        type: "charger"
    },
    {
        src: "infoMedia/M_ENEXT-AC-min.jpg",
        info: "infoMedia/ENEXT1-min.jpeg",
        info2: "infoMedia/ENEXT2-min.jpeg",
        power: "",
        model: "CIRCONTROL ENEXT AC",
        type: "charger"
    },
    {
        src: "infoMedia/EVE.webp",
        info: "infoMedia/EVE1-min.jpeg",
        info2: "infoMedia/EVE2-min.jpeg",
        power: "",
        model: "ALFEN EVE SINGLE PRO-LINE AC",
        type: "charger"
    },
    {
        src: "infoMedia/M_INCH-min.png",
        info: "infoMedia/INCH1-min.jpeg",
        info2: "infoMedia/INCH2-min.jpeg",
        power: "",
        model: "ETREL INCH",
        type: "charger"
    },
]
//---------------------------------------------------------------------------------




fillTemplate(portativeGenDB, chargersDB)
genFilterByValueTwo(301, 66);




//----Gallery buttons ---------------------------
kVa220.addEventListener('click', (e)=> {
    e.preventDefault()
    genFilterByValueTwo(301, 66);
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
        if(item.getAttribute("name") !== fuelType ) {
            item.classList.add('galleryHide')
        } else {
            item.classList.remove('galleryHide')
        }

        item.getAttribute('name') == "charger" ? item.classList.remove('galleryHide') : ""
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

        item.getAttribute('name') == "charger" ? item.classList.remove('galleryHide') : ""
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

        item.getAttribute('name') == "charger" ? item.classList.remove('galleryHide') : ""
    }) 
   
}
//-------Gallery fill---------------------------------------------
function fillTemplate(DB,DB1) {

    DB.forEach((gen, index) => {
        container.innerHTML += createTemplate(gen.src, gen.power, gen.model, index, gen.type)
    })
    DB1.forEach((charg,index) => {
        chargerContainer.innerHTML += createTemplate(charg.src, charg.power, charg.model, index, charg.type)
    })
}


function createTemplate(src, power, model, index, name) {
    return `<div class="main-gallery__item gallery__item" id="${index}" name="${name}" value="${power}" ${name =="charger" ? `onclick="checker2(${index})"` : `onclick="checker(${index})"`}>
    <div class="gallery__item_image" >
      
        <img  class="main-gallery_image" src="${src}"  alt="[object Object]" >
      
    </div>
    <div class="gallery__item_link">${power+"kVa" + " "}${name}</div>
    <div class="gallery__item_title"><p>${model}</p></div>
  </div>`
}
//--------GalleryModal------------------------------------------------------------------

function checker2(index) {

    let pics = document.querySelector('.imagesS')
    let pics2 = document.querySelector('.imagesSS')
    openModal();

    for(let i = 0; i < chargersDB.length; i++){

        let charger = chargersDB[i]

        if(i === index) {
            pics.src = charger.info 
            pics2.src = charger.info2
            pics2.classList.remove('hide')
        }
                
               
            
    }

}

function checker(j) {

    let pics = document.querySelector('.imagesS')
    let pics2 = document.querySelector('.imagesSS')
    openModal();
    
    for (let i = 0; i < portativeGenDB.length; i++) {
        let gen = portativeGenDB[i];
        
        if (i === j) {
            pics.src = gen.info
            pics2.classList.add('hide')
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

const mainBlock = document.querySelector('.main-block__body')
const titleMainText = document.querySelector('.title-main__firstCol');
const titleMainSubText = document.querySelector('.title-main__secondCol');
const serviceItemCards = document.querySelectorAll('.services__item_card');
const mainServicesText = document.querySelectorAll('.main-services__body_texts');
const galleryBtns = document.querySelector('.main-gallery__button_container')
const galleryItems = document.querySelectorAll('.main-gallery__item')
const formBtns = document.querySelectorAll('.formBtn')
const productsTitle = document.querySelector('.products-main__text_container')
const productsCards = document.querySelectorAll('.products-main__cards')
const pageCounter = document.querySelector('.page__counter')
const aboutUsPhotos = document.querySelectorAll('.aboutUs-main__photo')
const aboutUsText = document.querySelector('.aboutUs-main__text')
const aboutUsSubtext = document.querySelector('.aboutUs-main__subtext')
const ratingIcons = document.querySelectorAll('.rating-main__item')
const accordionItems = document.querySelectorAll('.accordion-item')
const formTitle = document.querySelector('.body__container')
const formBody = document.querySelector('.form-main__body')
const footerPart1 = document.querySelector('.footer-left')
const footerPart2 = document.querySelector('.footer-center')
const footerPart3 = document.querySelector('.footer-right')


let qSelector = [ 
    titleMainText, 
    titleMainSubText, 
    galleryBtns, 
    productsTitle,
    pageCounter,
    aboutUsText,
    aboutUsSubtext,
    formTitle,
    formBody,
    footerPart1,
    footerPart2,
    footerPart3
];

let qSelectorAll = [
    serviceItemCards, 
    mainServicesText,
    galleryItems, 
    formBtns, 
    productsCards,
    aboutUsPhotos,
    ratingIcons,
    accordionItems,   
];

textReveal(mainBlock)

function textReveal (element) {

    let windowHeight = window.innerHeight;

    let position = element.getBoundingClientRect().top
    
     if(position - windowHeight <= 0) {
        element.classList.add('title-reveal');
        window.removeEventListener('scroll', textReveal);
    }

}


window.addEventListener('scroll', check);

function callWindowEventSingle(arr) {
    arr.forEach(element => {
        window.addEventListener('scroll', ()=> {
            textReveal(element)
        })
    })
}

function callWindowEventNotSingle(arr) {
    arr.forEach(element => {
        element.forEach(item => {
            window.addEventListener('scroll', ()=> {
            textReveal(item)
        })
        })       
    })
}

callWindowEventSingle(qSelector)
callWindowEventNotSingle(qSelectorAll)

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
//-------Form Send-------------------------------------------
let submitFormBtns = document.querySelectorAll('.submitFormBtn');

let modalFormWindow = document.querySelector('.modal__contentForm');
let formWindowMain = document.querySelector('.form-main__form');



function changeTemplateSuccess(window){
    window.classList.add('successWindow')
    window.innerHTML = `???????????? ?????????????? ????????????????! ???????????????? ?? ???????? ????'??????????????. ??????????????!`
}

function changeTemplateFailed(window){
    window.classList.add('successWindow')
    window.innerHTML = `?????????????? ??'?????????????? ?? ????????????????, ?????????????????? ??????????????. ??????????????!`
}

function FormSend(data) {
    
    fetch("send.php", {
        method: "POST",
        body: data,
    }).then(res => res.json())
    .then(data=> {
        if( data.status === 0) {
            changeTemplateSuccess(modalFormWindow) 
            changeTemplateSuccess(formWindowMain) 
        } else {
            changeTemplateFailed(modalFormWindow) 
            changeTemplateFailed(formWindowMain) 
        }
    })
}



submitFormBtns.forEach((btn, index) => {
    if(index === 0) {
        btn.addEventListener('click',(e)=> {
        e.preventDefault();
        checkDataInput()
        })
    }
    if(index === 1) {
            btn.addEventListener('click',(e)=> {
            e.preventDefault();
            checkDataInputModal()
        })
    }
})

function inputChecker(func, inputName) {
    if(!func(inputName.value)){
        inputName.style.borderBottom = "solid red";
        inputName.classList.add("invalidInput")
        return false

    } else {
        inputName.style.borderBottom = "solid green";
        return true
    }
    
}

function textInputChecker(inputName) {
    let field = inputName.value

    if(field.length < 1) {
        return "?????????? ???????????????????????????? ???????? ?? ?????????????? ????????????????????????"
    } else {
        return field
    }
}



function checkDataInputModal() {
    const formInputs = document.querySelectorAll('.form-main__input');
    const formInputsText = document.querySelectorAll('.form-main__input_bottom');

    let trueOrFalse;
    
    formInputs.forEach((inputField,index) => {
        if( index === 3){
            inputChecker(nameCheck,inputField)? trueOrFalse = true : trueOrFalse = false
        }
         if ( index === 4){
            inputChecker(validateEmail,inputField)? trueOrFalse = true : trueOrFalse = false  
        } 
         if ( index === 5){
            inputChecker(numberChecker,inputField)? trueOrFalse = true : trueOrFalse = false
        }
        
    })

    let modalTextField = formInputsText[1];

    let textValue = textInputChecker(modalTextField)

    trueOrFalse? FormSend(
        JSON.stringify({
            name: formInputs[3].value,
            email: formInputs[4].value, 
            phone: formInputs[5].value, 
            text: textValue
    })) : console.log('error');
        
}

function checkDataInput() {
    const formInputs = document.querySelectorAll('.form-main__input');
    const formInputsText = document.querySelectorAll('.form-main__input_bottom');

    let trueOrFalse;

    formInputs.forEach((inputField,index) => {
        if(index === 0){
            inputChecker(nameCheck,inputField) ? trueOrFalse = true : trueOrFalse = false
        }
         if (index === 1){
            inputChecker(validateEmail,inputField) ? trueOrFalse = true : trueOrFalse = false
        } 
         if (index === 2){
            inputChecker(numberChecker,inputField) ? trueOrFalse = true : trueOrFalse = false
        }  

    })
    let modalTextField = formInputsText[0];

    let textValue = textInputChecker(modalTextField)

    trueOrFalse? FormSend(JSON.stringify({name: formInputs[0].value,email: formInputs[1].value, phone: formInputs[2].value, text: textValue})) : console.log('error');
}

//-----Validation RegeX-------------------------------------------------------------------------
const validateEmail = (email) => {
    let isEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    return isEmail; 
};

function telephoneCheck(str) {
    let isPhone = /^[+]\d+$/.test(str);
    let isPhones = /^\d+$/.test(str);

    if(isPhone || isPhones){  
        return true;
    } else {
        return false;
    }
}

function numberChecker(str){
    let isPhone = /^[+1-9]\d+$/.test(str);
    return isPhone
}

function nameCheck(str) {
    let isName = /^[??-????????????????????????A-Za-z??-????????????????????????.,'!?-]+/.test(str);
    return isName;
}

//---------------------------------------------------------------------------------------------------------

const modalTriggers = document.querySelectorAll(".formBtn"),
 modalTriggers2 = document.querySelectorAll(".formBtn2"),
  modalForm = document.querySelector(".modalForm"),
  modalCloseBtnForm = document.querySelector(".modal__closeForm");




modalTriggers.forEach(btn => {
    btn.addEventListener('click',(e)=> {
        e.preventDefault();
        openModalForm()
    })
})

modalTriggers2.forEach(btn => {
    btn.addEventListener('click',(e)=> {
        e.preventDefault();
        openModalForm()
    })
})
function closeModalForm() {
    modalForm.classList.add("hide");
    modalForm.classList.remove("show");
  document.body.style.overflow = "";
}

function openModalForm() {
    modalForm.classList.add("show");
    modalForm.classList.remove("hide");
  document.body.style.overflow = "hidden";
}

 modalCloseBtnForm.addEventListener("click", closeModalForm);

modalForm.addEventListener("click", (e) => {
  if (e.target === modalForm) {
    closeModalForm();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && modalForm.classList.contains("show")) {
    closeModalForm();
  }
});