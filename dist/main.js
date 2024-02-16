// mobile menu 
const hamburgerEl = document.querySelector('#hamburger-menu');
const mainMenu = document.querySelector('.main-menu');
const secondaryMenu = document.querySelector('.secondary-menu');

hamburgerEl.addEventListener('click', () => {
  hamburgerEl.classList.toggle('isActive')
  mainMenu.classList.toggle('show-menu');
})

// this is for showing active page 

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    document.querySelector('.nav-active')?.classList.remove('nav-active');
    e.target.classList.add('nav-active');
  })
})


// this is for showing searchbar
const searbarBtn = document.querySelectorAll('.searchBarBtn');
const searchbar = document.querySelectorAll('.searcbar')
searbarBtn.forEach((elem) => {
  elem.addEventListener('click', () => {
    searchbar.forEach(e => {
      e.classList.toggle('show-searchbar')
    })
  })
})

// genrate sugeest products
const slider = document.querySelectorAll('.slider');
console.log(slider);
const productsArr = [
  { id: 1, title: 'پیراهن مردانه مدل بونو ', imgSrc: '/images/jens1.jpeg', price: '768.000 ', },
  { id: 2, title: 'تیشرت برند MACHINEST', imgSrc: '/images/t-shirt-2.jpeg', price: '3.400.000' },
  { id: 3, title: 'کت جین CHAPTER', imgSrc: '/images/cahpter.jpeg', price: '3.400.000' },
  { id: 4, title: 'هودی های برند UBRAN', imgSrc: '/images/ubran-hoodi4.jpeg', price: '3.400.000' },
  { id: 5, title: 'کتونی JORDAN 4', imgSrc: '/images/jordan4.jpeg', price: '890.000' },
  { id: 6, title: 'کفش بالنسیگا 3xl', imgSrc: '/images/banelsiaga.jpeg', price: '3.400.000' },
  { id: 7, title: 'هودی یونی سکس پگادور', imgSrc: '/images/hoodi.jpeg', price: '890.000' },
  { id: 8, title: 'تی شرت برند amiri', imgSrc: '/images/t-shirt.jpeg', price: '650.000' }
]

// product-wrapper section
const newProductsArr = [
  { id: 6, title: 'شلوار جین از برند ZARA', imgSrc: '/images/jens2.jpeg', price: '768.000 ', },
  { id: 7, title: 'هودی طرح STOP WAR از ZARA', imgSrc: '/images/hooodi2.jpeg', price: '3.400.000' },
  { id: 8, title: 'کاپشن NORTH FACE', imgSrc: '/images/jakect.jpeg', price: '890.000' },
  { id: 9, title: 'کانورس برند AMIRI', imgSrc: '/images/conversAmiri.jpeg', price: '998.000' },
  { id: 10, title: 'شلوار جین از برند H & M', imgSrc: '/images/jens2.jpeg', price: '898.000' },
  { id: 11, title: 'هودی برند ZARA ', imgSrc: '/images/hoodi.jpeg', price: '750.000' },
  { id: 12, title: 'شلوار جین از برند FASHION NOVA', imgSrc: '/images/landing.jpeg', price: '650.000' },
  { id: 13, title: 'کتونی برند 3XL', imgSrc: '/images/banelsiaga.jpeg', price: '3.400.000' },
]
const prodouctsWrapper = document.querySelector('#product-wrapper');




const genrateProducts = function (prodoucts, container) {
  prodoucts.forEach(product => {
    container.insertAdjacentHTML('afterbegin', `
    <div class="suggest-product z-10 relative mx-auto sm:col-span-12 lg:col-span-4 xl:col-span-3">
    <!-- product image content -->
    <div class="product-img-content">
      <img class="product-img" src="${product.imgSrc}" alt="" />
    </div>
    <!-- product text content-->
    <div
      class="prodouct-text-content flex flex-col items-center bg-light-color w-full justify-center gap-y-4 pt-2"
    >
      <!-- product name -->
      <h3 class="product-name">
      ${product.title} <br />
        کد محصول <span id="productIdEl" class="mr-3">${product.id} </span>
      </h3>
      <!-- product price -->
      <p class="product-price">
        <span id="productPriceEl"> ${product.price}</span> تومان
      </p>
    </div>
    <!-- add to cart btn -->
    <div class="add-to-cart flex items-center justify-center gap-x-3 ">
    <p>افزودن</p>
    <i class="ri-add-line font-bold"></i>
    </div>
  </div>
    `)
  })

}

genrateProducts(productsArr, slider[0]);
genrateProducts(newProductsArr, prodouctsWrapper);

// create slider btns
const sliderBtns = document.querySelectorAll('.slider-btn');
const sliderAfter = getComputedStyle(document.querySelector('.slider'), 'slider::after')
let firstProduct = document.querySelector('.suggest-product').clientWidth + 100;
sliderBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    console.log(firstProduct);
    slider[0].scrollLeft += btn.id === 'next-btn' ? firstProduct : -firstProduct;
    slider[1].scrollLeft += btn.id === 'next-btn' ? firstProduct : -firstProduct;
    console.log(firstProduct);
    slider[0].style.setProperty('--slider-after-width',
      parseInt(sliderAfter.getPropertyValue('width'))
      + ((productsArr.length - 2) * firstProduct) + 'px');

    slider[1].style.setProperty('--slider-after-width',
      parseInt(sliderAfter.getPropertyValue('width'))
      + ((productsArr.length - 2) * firstProduct) + 'px');
  })
})





