let timeItem1 = document.querySelector(".time-item1")
let timeItem2 = document.querySelector(".time-item2")
let timeItem3 = document.querySelector(".time-item3")

let scrollBarTop =document.querySelector("#scrollBarTop")
let body =document.body
//نوار اسکرول بالای صفحه 
window.addEventListener("scroll",function(){
    let clientBody =body.clientHeight
    let topScroll = document.documentElement.scrollTop / (clientBody-window.innerHeight ) *100
    scrollBarTop.style.width =topScroll+"%"; 
})
//برای نشان دادن زمان
setInterval(() => {
    let time = new Date()
    timeItem1.innerHTML = time.getHours()
    timeItem2.innerHTML = time.getMinutes()
    timeItem3.innerHTML = time.getSeconds()
}, 1000)

let dayItem = document.querySelector(".day-item")

setInterval(() => {
    const faDate = new Intl.DateTimeFormat("fa", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format(new Date()).split(" ");

    dayItem.innerHTML = faDate[3] + " " + faDate[2].replace(",","") + " " + faDate[1] + " " + faDate[0]
}, 1000)

//اضافه کردن ایتم ها به جای خود؟
//آرایه های ساخت کتاب در فایل دیگری است به نام projectObject.js

let slideParent = document.querySelector("#class-all");
let class1 = document.querySelector("#class-1");

// متغیر های class1 تا class9 در فایل مجزا تعریف شده
class1.addEventListener("click",()=>{
    if(!document.querySelector("#slide-one")){
    slideParent.insertAdjacentHTML("beforeend",`<h3 id="class-one" class="bg-success text-light rounded-3 p-2 h3-card">کلاس اول</h3>
    <hr><div id="slide-one" class="slide border-3"></div>`)
    let slideOne = document.querySelector("#slide-one");
    bookOne.forEach((book => {
        slideOne.insertAdjacentHTML("beforeend", `<div class="card display-flex flex-nowrap col-lg-3 col-md-4 col-sm-4 m-2"><div id="code-bar">کد کتاب:${book.code}</div><div class="card-img text-center">
    <img src="${book.img}" id="img-card" class="px-3" alt="${book.name}"></div>
    <h5 class="card-title text-center pt-3">${book.name}</h5>
    <button id="button-download" class="bg-info border-0 w-50 rounded-3 p-1 m-auto my-3">
        <a href="${book.file}" onclick="downloadItem()" download>دانلود</a></button>
    </div>`)
    }))
}
})

let slideTow = document.querySelector("#slide-tow");
let class2 = document.querySelector("#class-2");

// متغیر های class1 تا class9 در فایل مجزا تعریف شده
class2.addEventListener("click",()=>{
    if(!document.querySelector("#slide-tow")){
    slideParent.insertAdjacentHTML("beforeend",`<h3 id="class-tow" class="bg-success text-light rounded-3 p-2 h3-card">کلاس دوم</h3>
    <hr><div id="slide-tow" class="slide border-3"></div>`)
    let slideTow = document.querySelector("#slide-tow");
    bookTow.forEach((book => {
        slideTow.insertAdjacentHTML("beforeend", `<div class="card display-flex flex-nowrap col-lg-3 col-md-4 col-sm-4 m-2"><div id="code-bar">کد کتاب:${book.code}</div><div class="card-img text-center">
    <img src="${book.img}" id="img-card" class="px-3" alt="${book.name}"></div>
    <h5 class="card-title text-center pt-3">${book.name}</h5>
    <button id="button-download" class="bg-info border-0 w-50 rounded-3 p-1 m-auto my-3">
        <a href="${book.file}" onclick="downloadItem()" download>دانلود</a></button>
    </div>`)
    }))
}
})

let slideThree = document.querySelector("#slide-three");
let class3 = document.querySelector("#class-3");

// متغیر های class1 تا class9 در فایل مجزا تعریف شده
class3.addEventListener("click",()=>{
    if(!document.querySelector("#slide-three")){
    slideParent.insertAdjacentHTML("beforeend",`<h3 id="class-three" class="bg-success text-light rounded-3 p-2 h3-card">کلاس سوم</h3>
    <hr><div id="slide-three" class="slide border-3"></div>`)
    let slideThree = document.querySelector("#slide-three");
    bookThree.forEach((book => {
        slideThree.insertAdjacentHTML("beforeend", `<div class="card display-flex flex-nowrap col-lg-3 col-md-4 col-sm-4 m-2"><div id="code-bar">کد کتاب:${book.code}</div><div class="card-img text-center">
    <img src="${book.img}" id="img-card" class="px-3" alt="${book.name}"></div>
    <h5 class="card-title text-center pt-3">${book.name}</h5>
    <button id="button-download" class="bg-info border-0 w-50 rounded-3 p-1 m-auto my-3">
        <a href="${book.file}" onclick="downloadItem()" download>دانلود</a></button>
    </div>`)
    }))
}
})

let slideFour = document.querySelector("#slide-four");
let class4 = document.querySelector("#class-4");

// متغیر های class1 تا class9 در فایل مجزا تعریف شده
class4.addEventListener("click",()=>{
    if(!document.querySelector("#slide-four")){
    slideParent.insertAdjacentHTML("beforeend",`<h3 id="class-four" class="bg-success text-light rounded-3 p-2 h3-card">کلاس چهارم</h3>
    <hr><div id="slide-four" class="slide border-3"></div>`)
    let slideFour = document.querySelector("#slide-four");
    bookFour.forEach((book => {
        slideFour.insertAdjacentHTML("beforeend", `<div class="card display-flex flex-nowrap col-lg-3 col-md-4 col-sm-4 m-2"><div id="code-bar">کد کتاب:${book.code}</div><div class="card-img text-center">
    <img src="${book.img}" id="img-card" class="px-3" alt="${book.name}"></div>
    <h5 class="card-title text-center pt-3">${book.name}</h5>
    <button id="button-download" class="bg-info border-0 w-50 rounded-3 p-1 m-auto my-3">
        <a href="${book.file}" onclick="downloadItem()" download>دانلود</a></button>
    </div>`)
    }))
}
})

let slideFive = document.querySelector("#slide-five");
let class5 = document.querySelector("#class-5");

// متغیر های class1 تا class9 در فایل مجزا تعریف شده
class5.addEventListener("click",()=>{
    if(!document.querySelector("#slide-five")){
    slideParent.insertAdjacentHTML("beforeend",`<h3 id="class-five" class="bg-success text-light rounded-3 p-2 h3-card">کلاس پنجم</h3>
    <hr><div id="slide-five" class="slide border-3"></div>`)
    let slideFive = document.querySelector("#slide-five");
    bookFive.forEach((book => {
        slideFive.insertAdjacentHTML("beforeend", `<div class="card display-flex flex-nowrap col-lg-3 col-md-4 col-sm-4 m-2"><div id="code-bar">کد کتاب:${book.code}</div><div class="card-img text-center">
    <img src="${book.img}" id="img-card" class="px-3" alt="${book.name}"></div>
    <h5 class="card-title text-center pt-3">${book.name}</h5>
    <button id="button-download" class="bg-info border-0 w-50 rounded-3 p-1 m-auto my-3">
        <a href="${book.file}" onclick="downloadItem()" download>دانلود</a></button>
    </div>`)
    }))
}
})

let slideSix = document.querySelector("#slide-six");
let class6 = document.querySelector("#class-6");

// متغیر های class1 تا class9 در فایل مجزا تعریف شده
class6.addEventListener("click",()=>{
    if(!document.querySelector("#slide-six")){
    slideParent.insertAdjacentHTML("beforeend",`<h3 id="class-six" class="bg-success text-light rounded-3 p-2 h3-card">کلاس ششم</h3>
    <hr><div id="slide-six" class="slide border-3"></div>`)
    let slideSix = document.querySelector("#slide-six");
    bookSix.forEach((book => {
        slideSix.insertAdjacentHTML("beforeend", `<div class="card display-flex flex-nowrap col-lg-3 col-md-4 col-sm-4 m-2"><div id="code-bar">کد کتاب:${book.code}</div><div class="card-img text-center">
    <img src="${book.img}" id="img-card" class="px-3" alt="${book.name}"></div>
    <h5 class="card-title text-center pt-3">${book.name}</h5>
    <button id="button-download" class="bg-info border-0 w-50 rounded-3 p-1 m-auto my-3">
        <a href="${book.file}" onclick="downloadItem()" download>دانلود</a></button>
    </div>`)
    }))
}
})

let slideSeven = document.querySelector("#slide-seven");
let class7 = document.querySelector("#class-7");

// متغیر های class1 تا class9 در فایل مجزا تعریف شده
class7.addEventListener("click",()=>{
    if(!document.querySelector("#slide-seven")){
    slideParent.insertAdjacentHTML("beforeend",`<h3 id="class-seven" class="bg-success text-light rounded-3 p-2 h3-card">کلاس هفتم</h3>
    <hr><div id="slide-seven" class="slide border-3"></div>`)
    let slideSeven = document.querySelector("#slide-seven");
    bookSeven.forEach((book => {
        slideSeven.insertAdjacentHTML("beforeend", `<div class="card display-flex flex-nowrap col-lg-3 col-md-4 col-sm-4 m-2"><div id="code-bar">کد کتاب:${book.code}</div><div class="card-img text-center">
    <img src="${book.img}" id="img-card" class="px-3" alt="${book.name}"></div>
    <h5 class="card-title text-center pt-3">${book.name}</h5>
    <button id="button-download" class="bg-info border-0 w-50 rounded-3 p-1 m-auto my-3">
        <a href="${book.file}" onclick="downloadItem()" download>دانلود</a></button>
    </div>`)
    }))
}
})

let slideEight = document.querySelector("#slide-eight");
let class8 = document.querySelector("#class-8");

// متغیر های class1 تا class9 در فایل مجزا تعریف شده
class8.addEventListener("click",()=>{
    if(!document.querySelector("#slide-eight")){
    slideParent.insertAdjacentHTML("beforeend",`<h3 id="class-eight" class="bg-success text-light rounded-3 p-2 h3-card">کلاس هشتم</h3>
    <hr><div id="slide-eight" class="slide border-3"></div>`)
    let slideEight = document.querySelector("#slide-eight");
    bookEight.forEach((book => {
        slideEight.insertAdjacentHTML("beforeend", `<div class="card display-flex flex-nowrap col-lg-3 col-md-4 col-sm-4 m-2"><div id="code-bar">کد کتاب:${book.code}</div><div class="card-img text-center">
    <img src="${book.img}" id="img-card" class="px-3" alt="${book.name}"></div>
    <h5 class="card-title text-center pt-3">${book.name}</h5>
    <button id="button-download" class="bg-info border-0 w-50 rounded-3 p-1 m-auto my-3">
        <a href="${book.file}" onclick="downloadItem()" download>دانلود</a></button>
    </div>`)
    }))
}
})

let slideNine = document.querySelector("#slide-nine");
let class9 = document.querySelector("#class-9");

// متغیر های class1 تا class9 در فایل مجزا تعریف شده
class9.addEventListener("click",()=>{
    if(!document.querySelector("#slide-nine")){
    slideParent.insertAdjacentHTML("beforeend",`<h3 id="class-nine" class="bg-success text-light rounded-3 p-2 h3-card">کلاس نهم</h3>
    <hr><div id="slide-nine" class="slide border-3"></div>`)
    let slideNine = document.querySelector("#slide-nine");
    bookNine.forEach((book => {
        slideNine.insertAdjacentHTML("beforeend", `<div class="card display-flex flex-nowrap col-lg-3 col-md-4 col-sm-4 m-2"><div id="code-bar">کد کتاب:${book.code}</div><div class="card-img text-center">
    <img src="${book.img}" id="img-card" class="px-3" alt="${book.name}"></div>
    <h5 class="card-title text-center pt-3">${book.name}</h5>
    <button id="button-download" class="bg-info border-0 w-50 rounded-3 p-1 m-auto my-3">
        <a href="${book.file}" onclick="downloadItem()" download>دانلود</a></button>
    </div>`)
    }))
}
})

let select = document.querySelector("#select-item")
let parentSelect = document.querySelector("#parent-select")

//انتخاب اول
select.addEventListener("change",()=>{
    document.querySelectorAll(".sel1")?.forEach(o=>o.remove());
    document.querySelectorAll(".sel2")?.forEach(o=>o.remove());
    document.querySelectorAll(".sel3")?.forEach(o=>o.remove());
    document.querySelectorAll(".sel4")?.forEach(o=>o.remove());
    if(select.value == "متوسطه نظری"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="nazari(this.value)" id="select-item" class="form-select sel1 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="ریاضی و فیزیک">ریاضی و فیزیک</option>
        <option value="علوم تجربی">علوم تجربی</option>
        <option value="علوم انسانی">علوم انسانی</option>
        <option value="علوم و معارف اسلامی">علوم و معارف اسلامی</option>
        <option value="هنر">هنر</option>
        </select><br class="sel1">
     `)
    }
    else if(select.value == "فنی و حرفه ای"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="fani(this.value)" id="select-item" class="form-select sel1 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دروس مشترک فنی و حرفه ای">دروس مشترک فنی و حرفه ای</option>
        <option value="صنعت">صنعت</option>
        <option value="خدمات">خدمات</option>
        <option value="کشاورزی">کشاورزی</option>
        <option value="هنر">هنر</option>
        </select><br class="sel1">
     `)
    }
    else if(select.value == "کار و دانش"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="danesh(this.value)" id="select-item" class="form-select sel1 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دروس مشترک">دروس مشترک </option>
        <option value="صنعت">صنعت</option>
        <option value="خدمات">خدمات</option>
        <option value="کشاورزی">کشاورزی</option>
        <option value="هنر">هنر</option>
        </select><br class="sel1">
     `)
    }
})

//ریاضی و فیزیک انتخاب شده
function nazari(item){
    document.querySelectorAll(".sel2")?.forEach(o=>o.remove());
    document.querySelectorAll(".sel3")?.forEach(o=>o.remove());
    document.querySelectorAll(".sel4")?.forEach(o=>o.remove());
    if(item == "ریاضی و فیزیک"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeReazi(this.value)" id="select-item" class="form-select sel2 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        <option value="پیش دانشگاهی">پیش دانشگاهی</option>
        </select><br class="sel2">
     `)
    }
   else if(item == "علوم تجربی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeOlomTajrobi(this.value)" id="select-item" class="form-select sel2 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        <option value="پیش دانشگاهی">پیش دانشگاهی</option>
        </select><br class="sel2">
     `)
    }
   else if(item == "علوم انسانی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeEnsani(this.value)" id="select-item" class="form-select sel2 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        <option value="پیش دانشگاهی">پیش دانشگاهی</option>
        </select><br class="sel2">
     `)
    }
    else if(item == "علوم و معارف اسلامی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="Changeislame(this.value)" id="select-item" class="form-select sel2 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        <option value="پیش دانشگاهی">پیش دانشگاهی</option>
        </select><br class="sel2">
     `)
    }
    else if(item == "هنر"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeHonar(this.value)" id="select-item" class="form-select sel2 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="پیش دانشگاهی">پیش دانشگاهی</option>
        </select><br class="sel2">
        `)
    }
}  

// فنی و حرفه ای انتخاب شده
function fani(item){
    document.querySelectorAll(".sel2")?.forEach(o=>o.remove());
    document.querySelectorAll(".sel3")?.forEach(o=>o.remove());
    document.querySelectorAll(".sel4")?.forEach(o=>o.remove());
    if(item == "دروس مشترک فنی و حرفه ای"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniMoshtarak1(this.value)" id="select-item" class="form-select sel2 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel2">
     `)
    }
   else if(item == "صنعت"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniSaneat1(this.value)" id="select-item" class="form-select sel2 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="گروه برق و رایانه">گروه برق و رایانه</option>
        <option value="گروه تعمیر و نگهداری ماشین آلات">گروه تعمیر و نگهداری ماشین آلات</option>
        <option value="گروه معماری و ساختمان">گروه معماری و ساختمان</option>
        <option value="گروه مواد و فراوری">گروه مواد و فراوری</option>
        <option value="گروه مکانیک">گروه مکانیک</option>
        </select><br class="sel2">
     `)
    }
    else if(item == "خدمات"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniKhadamat1(this.value)" id="select-item" class="form-select sel2 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="گروه بازرگانی و امور اداری">گروه بازرگانی و امور اداری</option>
        <option value="گروه بهداشت و سلامت">گروه بهداشت و سلامت</option>
        <option value="گروه خدمات">گروه خدمات</option>
        <option value="گروه مدیریت خانواده">گروه مدیریت خانواده</option>
        </select><br class="sel2">
     `)
    }
    else if(item == "کشاورزی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniKeshavarze1(this.value)" id="select-item" class="form-select sel2 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="امور باغی">امور باغی</option>
        <option value="امور زراعی">امور زراعی</option>
        <option value="امور دامی">امور دامی</option>
        <option value="ماشین های کشاورزی">ماشین های کشاورزی</option>
        <option value="صنایع غذایی">صنایع غذایی</option>
        </select><br class="sel2">
     `)
    }
    else if(item == "هنر"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniHonar1(this.value)" id="select-item" class="form-select sel2 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="فتو-گرافیک">فتو-گرافیک</option>
        <option value="طراحی و دوخت">طراحی و دوخت</option>
        <option value="معماری داخلی">معماری داخلی</option>
        <option value="صنایع دستی">صنایع دستی</option>
        <option value="انیمیشن(پویانمایی)">انیمیشن(پویانمایی)</option>
        <option value="تولید برنامه تلویزیونی">تولید برنامه تلویزیونی</option>
        <option value="گرافیک">گرافیک</option>
        <option value="نقاشی">نقاشی</option>
        <option value="موسیقی نوازندگی ساز جهانی">موسیقی نوازندگی ساز جهانی</option>
        <option value="موسیقی نوازندگی ساز ایرانی">موسیقی نوازندگی ساز ایرانی</option>
        <option value="نمایش">نمایش</option>
        <option value="سینما">سینما</option>
        <option value="نقشه کشی معماری">نقشه کشی معماری</option>
        <option value="طراحی زبان بصری">طراحی زبان بصری</option>
        <option value="مرمت آثار فرهنگی">مرمت آثار فرهنگی</option>
        <option value="موسیقی مبانی آهنگ سازی">موسیقی مبانی آهنگ سازی</option>
        <option value="پشتیبانی صحنه">پشتیبانی صحنه</option>
        <option value="چاپ دستی">چاپ دستی</option>
        </select><br class="sel2">
     `)
    }
}  

// کار و دانش انتخاب شده
function danesh(item){
    document.querySelectorAll(".sel2")?.forEach(o=>o.remove());
    document.querySelectorAll(".sel3")?.forEach(o=>o.remove());
    document.querySelectorAll(".sel4")?.forEach(o=>o.remove());
    if(item == "دروس مشترک"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeDaneshMoshtarak1(this.value)" id="select-item" class="form-select sel2 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel2">
     `)
    }
   else if(item == "صنعت"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeDaneshSaneat1(this.value)" id="select-item" class="form-select sel2 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="تعمیر و نگهداری ماشین آلات">تعمیر و نگهداری ماشین آلات</option>
        <option value="گروه برق">گروه برق </option>
        <option value="معماری و ساختمان">معماری و ساختمان</option>
        <option value="گروه مواد">گروه مواد </option>
        <option value="گروه مکانیک">گروه مکانیک</option>
        </select><br class="sel2">
     `)
    }
    else if(item == "خدمات"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeDaneshKhadamat1(this.value)" id="select-item" class="form-select sel2 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value=" خدمات"> خدما</option>
        <option value="بازرگانی و امور اداری"> بازرگانی و امور اداری</option>
        <option value=" بهداشت و سلامت"> بهداشت و سلامت</option>
        </select><br class="sel2">
     `)
    }
    else if(item == "کشاورزی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeDaneshKeshavarze1(this.value)" id="select-item" class="form-select sel2 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="کشت و کار مکانیزه">کشت و کار مکانیزه</option>
        <option value="پرورش پرندگان زینتی">پرورش پرندگان زینتی</option>
        <option value="تعمیر ماشین های ثابت کشاورزی">تعمیر ماشین های ثابت کشاورزی</option>
        <option value="تعمیر موتور های سبک کشاورزی">تعمیر موتور های سبک کشاورزی</option>
        <option value="تعمیر سیستم انتقال نیرو و هیدرولیک تراکتور">تعمیر سیستم انتقال نیرو و هیدرولیک تراکتور</option>
        <option value="ایجاد و نگهداری فضای سبز">ایجاد و نگهداری فضای سبز</option>
        <option value="تکثیر ماهیان گرم آبی">تکثیر ماهیان گرم آبی</option>
        <option value="پرورش صنعتی دام های سنگین(گاو و گاومیش)">پرورش صنعتی دام های سنگین(گاو و گاومیش)</option>
        <option value="پرورش صنعتی دام های سبک (گوسفند و بز)">پرورش صنعتی دام های سبک (گوسفند و بز)</option>
        <option value="پرورش درختان گرم سیر و نیمه گرم سیر">پرورش درختان گرم سیر و نیمه گرم سیر</option>
        <option value="پرورش وتولیدات زنبور عسل و کرم ابریشم">پرورش وتولیدات زنبور عسل و کرم ابریشم</option>
        <option value="پرورش و نگهداری اسب">پرورش و نگهداری اسب</option>
        <option value="پرورش میگو">پرورش میگو</option>
        <option value="پرورش ماکیان">پرورش ماکیان</option>
        <option value="مکانیک تراکتور و تیلر">مکانیک تراکتور و تیلر</option>
        <option value="دریانوردی صیادی">دریانوردی صیادی</option>
        <option value="پرورش و تکثیر ماهیان سرد آبی">پرورش و تکثیر ماهیان سرد آبی</option>
        <option value="تکثیر میگو">تکثیر میگو</option>
        <option value="زراعت گیاهان علوفه ای و غده ای">زراعت گیاهان علوفه ای و غده ای</option>
        <option value="مرغ داری صنعتی">مرغ داری صنعتی</option>
        <option value="کشت گیاهان دارویی و زعفران">کشت گیاهان دارویی و زعفران</option>
        <option value="پرورش گیاهان جالیزی و سبزی">پرورش گیاهان جالیزی و سبزی</option>
        <option value="تولید نهال و جنگل کاری">تولید نهال و جنگل کاری</option>
        <option value="پرورش درخت و درختچه زینتی">پرورش درخت و درختچه زینتی</option>
        <option value="پرورش گل و گیاهان آپارتمانی">پرورش گل و گیاهان آپارتمانی</option>
        <option value="پرورش قارچ خوراکی">پرورش قارچ خوراکی</option>
        <option value="پرورش میوه های دانه دار و دانه ریز">پرورش میوه های دانه دار و دانه ریز</option>
        <option value="زراعت غلات و حبوبات">زراعت غلات و حبوبات</option>
        <option value="پرورش میوه های هسته دار">پرورش میوه های هسته دار</option>
        <option value="تولید صنعتی فراورده های لبنی">تولید صنعتی فراورده های لبنی</option>
        <option value="تولید فراورده های گوشتی">تولید فراورده های گوشتی</option>
        <option value="فرآوری آبزیان و تولید کنسرو فرآورده های گوشتی">فرآوری آبزیان و تولید کنسرو فرآورده های گوشتی</option>
        </select><br class="sel2">
     `)
    }
    else if(item == "هنر"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeDaneshHonar1(this.value)" id="select-item" class="form-select sel2 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="معماری داخلی">معماری داخلی</option>
        <option value="تولید محتوا و انیمیشن">تولید محتوا و انیمیشن</option>
        <option value="گرافیک رایانه ای">گرافیک رایانه ای</option>
        <option value="تصویر برداری">تصویر برداری</option>
        <option value="تصویر سازی و جلوه های ویژه رایانه ای">تصویر سازی و جلوه های ویژه رایانه ای</option>
        <option value="دستیاری طراحی لباس">دستیاری طراحی لباس</option>
        <option value="صفحه آرایی">صفحه آرایی</option>
        <option value="خیاطی لباس زنانه">خیاطی لباس زنانه</option>
        <option value="طراحی بسته بندی">طراحی بسته بندی</option>
        <option value="خیاطی لباس شب و عروس">خیاطی لباس شب و عروس</option>
        <option value="طراحی طلا و جواهر">طراحی طلا و جواهر</option>
        <option value="خیاطی لباس مردانه">خیاطی لباس مردانه</option>
        <option value="عکاسی دیجیتال">عکاسی دیجیتال</option>
        <option value="دوخت لباس های محلی">دوخت لباس های محلی</option>
        <option value="دستیاری تهیه لباس های نمایشی">دستیاری تهیه لباس های نمایشی</option>
        <option value="هنر فرش">هنر فرش</option>
        <option value="طراحی و نقاشی فرش">طراحی و نقاشی فرش</option>
        <option value="عکاسی">عکاسی</option>
        <option value="سفال و لعاب">سفال و لعاب</option>
        <option value="سفالگری">سفالگری</option>
        <option value="کاشی سازی هفت رنگ">کاشی سازی هفت رنگ</option>
        <option value="تراش سنگ های قیمتی">تراش سنگ های قیمتی</option>
        <option value="تراش و تزیین شیشه و کریستال">تراش و تزیین شیشه و کریستال</option>
        <option value="خاتم سازی">خاتم سازی</option>
        <option value="خاتم کاری">خاتم کاری</option>
        <option value="ساز سازی">ساز سازی</option>
        <option value="طلا و جواهر سازی">طلا و جواهر سازی</option>
        <option value="قلمزنی روی فلز">قلمزنی روی فلز</option>
        <option value="منبت کاری">منبت کاری</option>
        <option value="صحافی و جلد سازی">صحافی و جلد سازی</option>
        <option value="هنر معرقکاری">هنر معرقکاری</option>
        <option value="چاپ باتیک و سیلیک اسکرین">چاپ باتیک و سیلیک اسکرین</option>
        <option value="چاپ باتیک و قلمکار">چاپ باتیک و قلمکار</option>
        <option value="چاپ دستی">چاپ دستی</option>
        <option value="کاغد سازی">کاغد سازی</option>
        <option value="آواز جهانی">آواز جهانی</option>
        <option value="آواز ایرانی">آواز ایرانی</option>
        <option value="نوازندگی ساز ایرانی">نوازندگی ساز ایرانی</option>
        <option value="تذهیب و تشعیر">تذهیب و تشعیر</option>
        <option value="نوازندگی ساز جهانی">نوازندگی ساز جهانی</option>
        <option value="نقاشی ایرانی">نقاشی ایرانی</option>
        <option value="نگار گری">نگار گری</option>
        <option value="چهره سازی">چهره سازی</option>
        <option value="گرافیک رایانه ای">گرافیک رایانه ای</option>
        <option value="سراجی کفش">سراجی کفش</option>
        <option value="معرق کاشی">معرق کاشی</option>
        <option value="مدیریت آشپزی و قنادی">مدیریت آشپزی و قنادی</option>
        <option value="خیاطی دوخت های تزیینی">خیاطی دوخت های تزیینی</option>
        <option value="هنر آیینه کاری">هنر آیینه کاری</option>
        </select><br class="sel2">
     `)
    }
}

// دسته صنعت داخل کار و دانش انتخاب شده
function ChangeDaneshSaneat1(item){
    document.querySelectorAll(".sel3")?.forEach(o=>o.remove());
    document.querySelectorAll(".sel4")?.forEach(o=>o.remove());
    if(item == "تعمیر و نگهداری ماشین آلات"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeDaneshMashenAlat1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "گروه برق"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeDaneshBarqe1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="برنامه نویسی پایگاه داده">برنامه نویسی پایگاه داده</option>
        <option value="برق ساختمان">برق ساختمان</option>
        <option value="تصویر سازی دیجیتالی">تصویر سازی دیجیتالی</option>
        <option value="عیب یابی و مونتاژ سیستم های رایانه ای">عیب یابی و مونتاژ سیستم های رایانه ای</option>
        <option value="ماشین های الکتریکی">ماشین های الکتریکی</option>
        <option value="تولید و توسعه دهنده پایگاه های اینترنتی">تولید و توسعه دهنده پایگاه های اینترنتی</option>
        <option value="تولید کننده و چند رسانه ای">تولید کننده و چند رسانه ای</option>
        <option value="الکترونیک صنعتی">الکترونیک صنعتی</option>
        <option value="برنامه نویسی بازی های رایانه ای">برنامه نویسی بازی های رایانه ای</option>
        <option value="اتوماسیون صنعتی">اتوماسیون صنعتی</option>
        <option value="تعمیر ابزار دقیق">تعمیر ابزار دقیق</option>
        <option value="برق صنعتی">برق صنعتی</option>
        <option value="تولید محتوا الکترونیکی">تولید محتوا الکترونیکی</option>
        <option value="تعمیر دستگاه های پزشکی">تعمیر دستگاه های پزشکی</option>
        <option value="تابلو سازی برق صنعتی">تابلو سازی برق صنعتی</option>
        <option value="تعمیر لوازم خانگی برقی">تعمیر لوازم خانگی برقی</option>
        <option value="تعمیر تلفن های رومیزی و همراه">تعمیر تلفن های رومیزی و همراه</option>
        <option value="سیستم های صوتی و تصویری">سیستم های صوتی و تصویری</option>
        <option value="طراحی و توسعه صفحات وب">طراحی و توسعه صفحات وب</option>
        <option value="نصب و سرویس آسانسور">نصب و سرویس آسانسور</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "معماری و ساختمان"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeDaneshMashenAlat1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "گروه مواد"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeDaneshMashenAlat1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "گروه مکانیک"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeDaneshMashenAlat1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
}

// دسته صنعت داخل فنی و حرفه ای
function ChangeFaniSaneat1(item){
    document.querySelectorAll(".sel3")?.forEach(o=>o.remove());
    document.querySelectorAll(".sel4")?.forEach(o=>o.remove());
    if(item == "گروه برق و رایانه"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFanibarg1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="الکتروتکنیک">الکتروتکنیک</option>
        <option value="الکترونیک">الکترونیک</option>
        <option value="شبکه و نرم افزار رایانه">شبکه و نرم افزار رایانه</option>
        <option value="الکترونیک و مخابرات دریایی">الکترونیک و مخابرات دریایی</option>
        </select><br class="sel3">
     `)
    }
   else if(item == "گروه تعمیر و نگهداری ماشین آلات"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeMashenAlat1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="مکانیک موتور های دریایی">مکانیک موتور های دریایی</option>
        </select><br class="sel3">
     `)
    }
   else if(item == "گروه معماری و ساختمان"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeSakhteman1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="ساختمان">ساختمان</option>
        <option value="نقشه برداری">نقشه برداری</option>
        </select><br class="sel3">
     `)
    }
   else if(item == "گروه مواد و فراوری"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeMavad1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="سرامیک">سرامیک</option>
        <option value="صنایع شیمیایی">صنایع شیمیایی</option>
        <option value="صنایع نساجی">صنایع نساجی</option>
        <option value="متالورژی">متالورژی</option>
        <option value="معدن">معدن</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "گروه مکانیک"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeMecanic1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="مکاترونیک">مکاترونیک</option>
        <option value="صنایع فلزی">صنایع فلزی</option>
        <option value="تاسیسات مکانیکی">تاسیسات مکانیکی</option>
        <option value="مکانیک موتور های دریایی">مکانیک موتور های دریایی</option>
        <option value="مکانیک خودرو">مکانیک خودرو</option>
        <option value="ماشین ابزار">ماشین ابزار</option>
        <option value="صنایع چوب و مبلمان">صنایع چوب و مبلمان</option>
        <option value="چاپ">چاپ</option>
        <option value="تاسیسات">تاسیسات</option>
        <option value="صنایع چوب و کاغذ">صنایع چوب و کاغذ</option>
        <option value="ساخت و تولید">ساخت و تولید</option>
        <option value="نقشه کشی عمومی">نقشه کشی عمومی</option>
        </select><br class="sel3">
     `)
    }
}

// دسته خدمات داخل فنی و حرفه ای
function ChangeFaniKhadamat1(item){
    document.querySelectorAll(".sel3")?.forEach(o=>o.remove());
    document.querySelectorAll(".sel4")?.forEach(o=>o.remove());
    if(item == "گروه بازرگانی و امور اداری"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniBazargani1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="حسابداری">حسابداری</option>
        </select><br class="sel3">
     `)
    }
   else if(item == "گروه بهداشت و سلامت"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniBehdasht1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="تربیت کودک">تربیت کودک</option>
        <option value="تربیت بدنی">تربیت بدنی</option>
        </select><br class="sel3">
     `)
    }
   else if(item == "گروه خدمات"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniKhadamat2(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="حمل و نقل">حمل و نقل</option>
        <option value="ناوبری">ناوبری</option>
        </select><br class="sel3">
     `)
    }
   else if(item == "گروه مدیریت خانواده"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFanikhanevadeh1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="مدیریت خانواده">مدیریت خانواده</option>
        </select><br class="sel3">
     `)
    }
}

// دسته کشاورزی داخل فنی و حرفه ای
function ChangeFaniKeshavarze1(item){
    document.querySelectorAll(".sel3")?.forEach(o=>o.remove());
    document.querySelectorAll(".sel4")?.forEach(o=>o.remove());
    if(item == "امور باغی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniBage1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
   else if(item == "امور زراعی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniZeraee1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
   else if(item == "امور دامی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniDame1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
   else if(item == "ماشین های کشاورزی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniMashenKeshavarxe1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
   else if(item == "صنایع غذایی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniGazaee1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
}

// دسته هنر داخل فنی و حرفه ای
function ChangeFaniHonar1(item){
    document.querySelectorAll(".sel3")?.forEach(o=>o.remove());
    document.querySelectorAll(".sel4")?.forEach(o=>o.remove());
    if(item == "فتو-گرافیک"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniFoto1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "طراحی و دوخت"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniDokht1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "معماری داخلی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniMemariDakhele1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "صنایع دستی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniSanaeeDasti1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "انیمیشن(پویانمایی)"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniAnimation1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "تولید برنامه تلویزیونی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniBarnamehTV1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "گرافیک"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniGerafic1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "نقاشی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniNagashe1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "موسیقی نوازندگی ساز جهانی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniMosegeJahane1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "موسیقی نوازندگی ساز ایرانی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniMosegeIrani1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "نمایش"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniNamaesh1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "سینما"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniSenema1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "نقشه کشی معماری"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniNagsheKeshe1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "طراحی زبان بصری"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniZabanBasari1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="سال دوم">سال دوم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "مرمت آثار فرهنگی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniAsarFarhange1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="سال دوم">سال دوم</option>
        <option value="سال سوم">سال سوم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "موسیقی مبانی آهنگ سازی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniAhangSaze1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="سال دوم">سال دوم</option>
        <option value="سال سوم">سال سوم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "پشتیبانی صحنه"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniPoshtebani1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="سال دوم">سال دوم</option>
        <option value="سال سوم">سال سوم</option>
        </select><br class="sel3">
     `)
    }
    else if(item == "چاپ دستی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniChapDaste1(this.value)" id="select-item" class="form-select sel3 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="سال دوم">سال دوم</option>
        <option value="سال سوم">سال سوم</option>
        </select><br class="sel3">
     `)
    }
}

// دسته برق و رایانه داخل دسته صنعت داخل فنی و حرفه ای
function ChangeFanibarg1(item){
    document.querySelectorAll(".sel4")?.forEach(o=>o.remove());
    if(item == "الکتروتکنیک"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniElecteroteknic1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "الکترونیک"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniElecteronic1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "شبکه و نرم افزار رایانه"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniShabake1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "الکترونیک و مخابرات دریایی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniMokhaberatDaryaye1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
}

// دسته گروه تعمیر و نگهداری ماشین آلات داخل دسته صنعت داخل دسته فنی و حرفه ای
function ChangeMashenAlat1(item){
    document.querySelectorAll(".sel4")?.forEach(o=>o.remove());
    if(item == "مکانیک موتور های دریایی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniMecanicMotorDaryaye1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
}

//دسته گروه معماری و ساختمان داخل دسته صنعت داخل دسته فنی و حرفه ای
function ChangeSakhteman1(item){
    document.querySelectorAll(".sel4")?.forEach(o=>o.remove());
    if(item == "ساختمان"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniSakhteman1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "نقشه برداری"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniNagsheBardare1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="سال دوم">سال دوم</option>
        <option value="سال سوم">سال سوم</option>
        </select><br class="sel4">
     `)
    }
}

// دسته گروه مواد و فراوری داخل دسته صنعت داخل فنی و حرفه ای
function ChangeMavad1(item){
    document.querySelectorAll(".sel4")?.forEach(o=>o.remove());
    if(item == "سرامیک"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniSeramic1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "صنایع شیمیایی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniShemeaye1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "صنایع نساجی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniNasaje1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "متالورژی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniMetalorje1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "معدن"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniMadan1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
}

// دسته گروه مکانیک داخل دسته صنعت داخل فنی و حرفه ای 
function ChangeMecanic1(item){
    document.querySelectorAll(".sel4")?.forEach(o=>o.remove());
    if(item == "مکاترونیک"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniMekateronic1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "صنایع فلزی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniFeleze1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "تاسیسات مکانیکی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniTasesatMecanici1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "مکانیک موتور های دریایی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniMecanicMotorDaryaye2(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "مکانیک خودرو"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniMecanicKhodro1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "ماشین ابزار"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniMashenAbzar1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "صنایع چوب و مبلمان"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniMobleman1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "چاپ"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniChap1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "تاسیسات"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniTasesat1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="سال دوم">سال دوم</option>
        <option value="سال سوم">سال سوم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "صنایع چوب و کاغذ"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniChobAndKagaz1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="سال دوم">سال دوم</option>
        <option value="سال سوم">سال سوم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "ساخت و تولید"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniSakhtAndToled1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="سال دوم">سال دوم</option>
        <option value="سال سوم">سال سوم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "نقشه کشی عمومی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniNagsheOmome1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="سال دوم">سال دوم</option>
        <option value="سال سوم">سال سوم</option>
        </select><br class="sel4">
     `)
    }
}

// دسته گروه بازرگانی و امور اداری داخل دسته خدمات داخل فنی و حرفه ای
function ChangeFaniBazargani1(item){
    document.querySelectorAll(".sel4")?.forEach(o=>o.remove());
    if(item == "حسابداری"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniHesabdari1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
}

// دسته گروه بهداشت و سلامت داخل دسته خدمات داخل فنی و حرفه ای
function ChangeFaniBehdasht1(item){
    document.querySelectorAll(".sel4")?.forEach(o=>o.remove());
    if(item == "تربیت کودک"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniTarbeatKodak1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "تربیت بدنی"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniTarbeatBadani1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
}

// دسته گروه خدمات داخل دسته خدمات داخل فنی و حرفه ای
function ChangeFaniKhadamat2(item){
    document.querySelectorAll(".sel4")?.forEach(o=>o.remove());
    if(item == "حمل و نقل"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniHamlAndNaql1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
    else if(item == "ناوبری"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniNavbary1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="دهم">دهم</option>
        <option value="یازدهم">یازدهم</option>
        <option value="دوازدهم">دوازدهم</option>
        </select><br class="sel4">
     `)
    }
}

// دسته گروه مدیریت خانواده داخل دسته خدمات داخل فنی و حرفه ای
function ChangeFanikhanevadeh1(item){
    document.querySelectorAll(".sel4")?.forEach(o=>o.remove());
    if(item == "مدیریت خانواده"){
        parentSelect.insertAdjacentHTML("beforeend",`<select onchange="ChangeFaniModereatKhanevadeh1(this.value)" id="select-item" class="form-select sel4 btn1">
        <option value="" selected>انتخاب کنید</option>
        <option value="سال دوم">سال دوم</option>
        <option value="سال سوم">سال سوم</option>
        </select><br class="sel4">
     `)
    }
}

//ساخت و نمایش آلرت دانلود
function downloadItem(){
    let randomAlert = Math.floor(Math.random()*(innerWidth-300))
    let someAlert = -document.documentElement.scrollTop
    let creatAlert = document.createElement("span")
    creatAlert.setAttribute("id","alert")
    creatAlert.innerHTML = "در حال دانلود"
    body.append(creatAlert)
    let intervalAlert=setInterval(()=>{
        creatAlert.style.left = randomAlert + "px"
        creatAlert.style.bottom = someAlert+"px"
        someAlert++
        if(someAlert > -document.documentElement.scrollTop + window.innerHeight ){
            console.log("hi")
            creatAlert.remove()
            clearInterval(intervalAlert)
        }
    },5)
}

let btnGoToTop = document.querySelector("#btn-go-to-top")
window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop>10){
        btnGoToTop.style.display = "inline"
    }
    else{
        btnGoToTop.style.display = "none"
    }
})

btnGoToTop.addEventListener("click",()=>{
    document.documentElement.scrollTop=0
})

let btnReset = document.querySelector("#btn-reset")
let alertReset = document.querySelector("#alert-reset")
btnReset.addEventListener("click",()=>{
    slideParent.innerHTML = ""
    alertReset.classList.add("animation-alert")
    setTimeout(()=>{
    alertReset.classList.remove("animation-alert")
    },4000)
})