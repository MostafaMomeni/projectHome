let allBook = []
//ابتدایی و متوسطه اول
let bookOne = [
    {
        id: 1,
        name: "آموزش قرآن (اول)",
        code:101,
        caption:"قرآن اول  آموزش قرآن  قرآن  قران  قران اول  اموزش قرآن  اموزش قران  آموزش قرآن اول  اموزش قرآن اول  اموزش قرآن اول  اموزش قران اول",
        img: "image/one/qoran1.jpg",
        file: "file/one/qoran.pdf"
    },
    {
        id: 2,
        name: "فارسی (اول)",
        code:103,
        img: "image/one/farse1.jpg",
        file: "file/one/farse.pdf"
    },
    {
        id: 3,
        name: "نگارش (اول)",
        code:104,
        img: "image/one/negaresh1.jpg",
        file: "file/one/negaresh.pdf"
    },
    {
    id: 4,
        name: "ریاضی (اول)",
        code:105,
        img: "image/one/reaze1.jpg",
        file: "file/one/reaza.pdf"
    },
    {
        id: 5,
        name: "علوم (اول)",
        code:106,
        img: "image/one/olom1.gif",
        file: "file/one/olom.pdf"
    },
    
]
let bookTow = [
    {
        id: 1,
        name: "آموزش قرآن (دوم)",
        code:201,
        caption:"قرآن دوم  آموزش قرآن  قرآن  قران  قران دوم  اموزش قرآن  اموزش قران  آموزش قرآن دوم  اموزش قرآن دوم  اموزش قرآن دوم  اموزش قران دوم",
        img: "image/tow/قرآن.jpg",
        file: "file/tow/قرآن.pdf"
    },
    {
        id: 2,
        name: "هدیه های آسمانی (دوم)",
        code:202,
        img: "image/tow/هدیه های آسمانی.gif",
        file: "file/tow/هدیه های آسمانی.pdf"
    },
    {
        id: 3,
        name: "فارسی (دوم)",
        code:203,
        img: "image/tow/فارسی.jpg",
        file: "file/tow/فارسی.pdf"
    },
    {
        id: 4,
        name: "نگارش (دوم)",
        code:204,
        img: "image/tow/نگارش.gif",
        file: "file/tow/نگارش.pdf"
    },
    {
        id: 5,
        name: "ریاضی (دوم)",
        code:205,
        img: "image/tow/ریاضی.gif",
        file: "file/tow/ریاضی.pdf"
    },
    {
        id: 6,
        name: "علوم تجربی(دوم)",
        code:206,
        img: "image/tow/علوم.gif",
        file: "file/tow/علوم.pdf"
    },
    {
        id: 7,
        name: "هدیه های آسمانی ویژه اهل سنت (دوم)",
        code:219,
        img: "image/tow/هدیه های آسمانی(ویژه اهل سنت).gif",
        file: "file/tow/هدیه های آسمانی (ویژه اهل سنت).pdf"
    },
    {
        id: 8,
        name: "هدیه های آسمانی ویژه اقلیت های دینی (دوم)",
        code:220,
        img: "image/tow/هدیه های آسمانی(ویژه اقلیت های دینی).jpg",
        file: "file/tow/هدیه های آسمانی (ویژه اقلیت های دینی).pdf"
    },
]
let bookThree = [
    {
        id: 1,
        name: "آموزش قرآن (سوم)",
        code:301,
        caption:"قرآن سوم  آموزش قرآن  قرآن  قران  قران سوم  اموزش قرآن  اموزش قران  آموزش قرآن سوم  اموزش قرآن سوم  اموزش قرآن سوم  اموزش قران سوم",
        img: "image/three/قرآن.jpg",
        file: "file/three/قرآن.pdf"
    },
    {
        id: 2,
        name: "هدیه های آسمانی(سوم)",
        code:302,
        img: "image/three/هدیه های آسمانی.gif",
        file: "file/three/هدیه های آسمانی.pdf"
    },
    {
        id: 4,
        name: "نگارش (سوم)",
        code:304,
        img: "image/three/نگارش.gif",
        file: "file/three/نگارش.pdf"
    },
    {
        id: 3,
        name: "فارسی (سوم)",
        code:303,
        img: "image/three/فارسی.gif",
        file: "file/three/فارسی.pdf"
    },
    {
        id: 5,
        name: "ریاضی (سوم)",
        code:305,
        img: "image/three/ریاضی.gif",
        file: "file/three/ریاضی.pdf"
    },
    {
        id: 6,
        name: "علوم تجربی(سوم)",
        code:306,
        img: "image/three/علوم.jpg",
        file: "file/three/علوم.pdf"
    },
    {
        id: 7,
        name: "مطالعات اجتماعی(سوم)",
        code:307,
        img: "image/three/مطالعات اجتماعی.gif",
        file: "file/three/مطالعات اجتماعی.pdf"
    },
    {
        id: 8,
        name: "هدیه های آسمانی ویژه اهل سنت (سوم)",
        code:319,
        img: "image/three/هدیه های آسمانی(ویژه اهل سنت).gif",
        file: "file/three/هدیه های آسمانی(ویژه اهل سنت).pdf"
    },
    {
        id: 9,
        name: " هدیه های آسمانی ویژه اقلیت های دینی (سوم)",
        code:320,
        img: "image/three/هدیه های آسمانی(ویژه اقلیت های دینی).gif",
        file: "file/three/هدیه های آسمانی(ویژه اقلیت های دینی).pdf"
    },
    
]
let bookFour = [
    {
        id: 1,
        name: "آموزش قرآن (چهارم)",
        code:401,
        caption:"قرآن چهارم  آموزش قرآن  قرآن  قران  قران چهارم  اموزش قرآن  اموزش قران  آموزش قرآن چهارم  اموزش قرآن چهارم  اموزش قرآن چهارم  اموزش قران چهارم",
        img: "image/four/قرآن.jpg",
        file: "file/four/قرآن.pdf"
    },
    {
        id: 2,
        name: "هدیه های آسمانی(چهارم)",
        code:402,
        img: "image/four/هدیه های آسمانی.gif",
        file: "file/four/هدیه های آسمانی.pdf"
    },
    {
        id: 3,
        name: "فارسی (چهارم)",
        code:403,
        img: "image/four/فارسی.gif",
        file: "file/four/فارسی.pdf"
    },
    {
        id: 4,
        name: "نگارش (چهارم)",
        code:404,
        img: "image/four/نگارش.gif",
        file: "file/four/نگارش.pdf"
    },
    {
        id: 5,
        name: "ریاضی (چهارم)",
        code:405,
        img: "image/four/ریاضی.gif",
        file: "file/four/ریاضی.pdf"
    },
    {
        id: 6,
        name: "علوم تجربی(چهارم)",
        code:406,
        img: "image/four/علوم.jpg",
        file: "file/four/علوم.pdf"
    },
    {
        id: 7,
        name: "مطالعات اجتماعی(چهارم)",
        code:407,
        img: "image/four/مطالعات اجتماعی.gif",
        file: "file/four/مطالعات اجتماعی.pdf"
    },
    {
        id: 8,
        name: "هدیه های آسمانی ویژه اهل سنت (چهارم)",
        code:419,
        img: "image/four/هدیه های آسمانی(ویژه اهل سنت).gif",
        file: "file/four/هدیه های آسمانی(ویژه اهل سنت).pdf"
    },
    {
        id: 9,
        name: " هدیه های آسمانی ویژه اقلیت های دینی (چهارم)",
        code:420,
        img: "image/four/هدیه های آسمانی(ویژه اقلیت های دینی).gif",
        file: "file/four/هدیه های آسمانی(ویژه اقلیت های دینی).pdf"
    },
]
let bookFive = [{
    id: 1,
    name: "آموزش قرآن (پنجم)",
    code:401,
    caption:"قرآن پنجم  آموزش قرآن  قرآن  قران  قران پنجم  اموزش قرآن  اموزش قران  آموزش قرآن پنجم  اموزش قرآن پنجم  اموزش قرآن پنجم  اموزش قران پنجم",
    img: "image/five/قرآن.jpg",
    file: "file/five/قرآن.pdf"
},
{
    id: 2,
    name: "هدیه های آسمانی(پنجم)",
    code:402,
    img: "image/five/هدیه های آسمانی.gif",
    file: "file/five/هدیه های آسمانی.pdf"
},
{
    id: 3,
    name: "فارسی (پنجم)",
    code:403,
    img: "image/five/فارسی.gif",
    file: "file/five/فارسی.pdf"
},
{
    id: 4,
    name: "نگارش (پنجم)",
    code:404,
    img: "image/five/نگارش.gif",
    file: "file/five/نگارش.pdf"
},
{
    id: 5,
    name: "ریاضی (پنجم)",
    code:405,
    img: "image/five/ریاضی.gif",
    file: "file/five/ریاضی.pdf"
},
{
    id: 6,
    name: "علوم تجربی(پنجم)",
    code:406,
    img: "image/five/علوم.gif",
    file: "file/five/علوم.pdf"
},
{
    id: 7,
    name: "مطالعات اجتماعی(پنجم)",
    code:407,
    img: "image/five/مطالعات اجتماعی.gif",
    file: "file/five/مطالعات اجتماعی.pdf"
},
{
    id: 8,
    name: "هدیه های آسمانی ویژه اهل سنت (پنجم)",
    code:419,
    img: "image/five/هدیه های آسمانی(ویژه اهل سنت).gif",
    file: "file/five/هدیه های آسمانی(ویژه اهل سنت).pdf"
},
{
    id: 9,
    name: " هدیه های آسمانی ویژه اقلیت های دینی (پنجم)",
    code:420,
    img: "image/five/هدیه های آسمانی(ویژه اقلیت های دینی).gif",
    file: "file/five/هدیه های آسمانی(ویژه اقلیت های دینی).pdf"
},
]
let bookSix = [{
    id: 1,
    name: "آموزش قرآن (ششم)",
    code:401,
    caption:"قرآن ششم  آموزش قرآن  قرآن  قران  قران ششم  اموزش قرآن  اموزش قران  آموزش قرآن ششم  اموزش قرآن ششم  اموزش قرآن ششم  اموزش قران ششم",
    img: "image/six/قرآن.jpg",
    file: "file/six/قرآن.pdf"
},
{
    id: 2,
    name: "هدیه های آسمانی(ششم)",
    code:402,
    img: "image/six/هدیه های آسمانی.gif",
    file: "file/six/هدیه های آسمانی.pdf"
},
{
    id: 3,
    name: "فارسی (ششم)",
    code:403,
    img: "image/six/فارسی.gif",
    file: "file/six/فارسی.pdf"
},
{
    id: 4,
    name: "نگارش (ششم)",
    code:404,
    img: "image/six/نگارش.gif",
    file: "file/six/نگارش.pdf"
},
{
    id: 5,
    name: "ریاضی (ششم)",
    code:405,
    img: "image/six/ریاضی.gif",
    file: "file/six/ریاضی.pdf"
},
{
    id: 6,
    name: "علوم تجربی(ششم)",
    code:406,
    img: "image/six/علوم.gif",
    file: "file/six/علوم.pdf"
},
{
    id: 7,
    name: "مطالعات اجتماعی(ششم)",
    code:407,
    img: "image/six/مطالعات اجتماعی.gif",
    file: "file/six/مطالعات اجتماعی.pdf"
},
{
    id: 8,
    name: "تفکر و پژوهش(ششم)",
    code:412,
    img: "image/six/تفکر.gif",
    file: "file/six/تفکر.pdf"
},
{
    id: 9,
    name: "کار و فناوری(ششم)",
    code:417,
    img: "image/six/کار و فناوری.gif",
    file: "file/six/کار و فناوری.pdf"
},
{
    id: 10,
    name: "هدیه های آسمانی ویژه اهل سنت (ششم)",
    code:419,
    img: "image/six/هدیه های آسمانی(ویژه اهل سنت).gif",
    file: "file/six/هدیه های آسمانی(ویژه اهل سنت).pdf"
},
{
    id: 11,
    name: " هدیه های آسمانی ویژه اقلیت های دینی (ششم)",
    code:420,
    img: "image/six/هدیه های آسمانی(ویژه اقلیت های دینی).gif",
    file: "file/six/هدیه های آسمانی(ویژه اقلیت های دینی).pdf"
},
]
let bookSeven = [{
    id: 1,
    name: "آموزش قرآن (هفتم)",
    code:701,
    caption:"قرآن هفتم  آموزش قرآن  قرآن  قران  قران هفتم  اموزش قرآن  اموزش قران  آموزش قرآن هفتم  اموزش قرآن هفتم  اموزش قرآن هفتم  اموزش قران هفتم",
    img: "image/seven/قرآن.gif",
    file: "file/seven/قرآن.pdf"
},
{
    id: 2,
    name: "پیام های آسمانی(هفتم)",
    code:702,
    img: "image/seven/پیام های آسمان.jpg",
    file: "file/seven/پیام های آسمان.pdf"
},
{
    id: 3,
    name: "فارسی (هفتم)",
    code:703,
    img: "image/seven/فارسی.gif",
    file: "file/seven/فارسی.pdf"
},
{
    id: 4,
    name: "نگارش (هفتم)",
    code:704,
    img: "image/seven/نگارش.gif",
    file: "file/seven/نگارش.pdf"
},
{
    id: 5,
    name: "ریاضی (هفتم)",
    code:705,
    img: "image/seven/ریاضی.gif",
    file: "file/seven/ریاضی.pdf"
},
{
    id: 6,
    name: "علوم تجربی(هفتم)",
    code:706,
    img: "image/seven/علوم.gif",
    file: "file/seven/علوم.pdf"
},
{
    id: 7,
    name: "مطالعات اجتماعی(هفتم)",
    code:707,
    img: "image/seven/مطالعات اجتماعی.gif",
    file: "file/seven/مطالعات اجتماعی.pdf"
},
{
    id: 8,
    name: "فرهنگ و هنر (هفتم)",
    code:708,
    img: "image/seven/هنر.gif",
    file: "file/seven/هنر.pdf"
},
{
    id: 9,
    name: "عربی (هفتم)",
    code:709,
    img: "image/seven/عربی.jpg",
    file: "file/seven/عربی.pdf"
},
{
    id: 10,
    name: "انگلیسی (هفتم)",
    code:710,
    img: "image/seven/انگلیسی.gif",
    file: "file/seven/انگلیسی.pdf"
},
{
    id: 11,
    name: "کتاب کار انگلیسی (هفتم)",
    code:711,
    img: "image/seven/کتاب کار انگلیسی.gif",
    file: "file/seven/کتاب کار انگلیسی.pdf"
},
{
    id: 12,
    name: "تفکر و سبک زندگی پسران (هفتم)",
    code:712,
    img: "image/seven/تفکر(پسران).jpg",
    file: "file/seven/تفکر(پسران).pdf"
},
{
    id: 13,
    name: "تفکر و سبک زندگی دختران (هفتم)",
    code:713,
    img: "image/seven/تفکر(دختران).jpg",
    file: "file/seven/تفکر(دختران).pdf"
},
{
    id: 14,
    name: "کار و فناوری (هفتم)",
    code:717,
    img: "image/seven/کار و فناوری.gif",
    file: "file/seven/کار و فناوری.pdf"
},
{
    id: 15,
    name: "ضمیمه پیام های آسمان اهل سنت (هفتم)",
    code:719,
    img: "image/seven/پیام های آسمان(اهل سنت).gif",
    file: "file/seven/پیام های آسمان(اهل سنت).pdf"
},
{
    id: 16,
    name: "تعلیمات ادیان الهی و اخلاق ویژه اقلیت های دینی (هفتم)",
    code:720,
    img: "image/seven/پیام های آسمان(اقلیت های دینی).gif",
    file: "file/seven/پیام های آسمان(اقلیت های دینی).pdf"
},
]
let bookEight = [{
    id: 1,
    name: "آموزش قرآن (هشتم)",
    code:801,
    caption:"قرآن هشتم  آموزش قرآن  قرآن  قران  قران هشتم  اموزش قرآن  اموزش قران  آموزش قرآن هشتم  اموزش قرآن هشتم  اموزش قرآن هشتم  اموزش قران هشتم",
    img: "image/eight/قرآن.gif",
    file: "file/eight/قرآن.pdf"
},
{
    id: 2,
    name: "پیام های آسمانی(هشتم)",
    code:802,
    img: "image/eight/پیام های آسمان.gif",
    file: "file/eight/پیام های آسمان.pdf"
},
{
    id: 3,
    name: "فارسی (هشتم)",
    code:803,
    img: "image/eight/فارسی.gif",
    file: "file/eight/فارسی.pdf"
},
{
    id: 4,
    name: "نگارش (هشتم)",
    code:804,
    img: "image/eight/نگارش.gif",
    file: "file/eight/نگارش.pdf"
},
{
    id: 5,
    name: "ریاضی (هشتم)",
    code:805,
    img: "image/eight/ریاضی.gif",
    file: "file/eight/ریاضی.pdf"
},
{
    id: 6,
    name: "علوم تجربی(هشتم)",
    code:806,
    img: "image/eight/علوم.gif",
    file: "file/eight/علوم.pdf"
},
{
    id: 7,
    name: "مطالعات اجتماعی(هشتم)",
    code:807,
    img: "image/eight/مطالعات اجتماعی.gif",
    file: "file/eight/مطالعات اجتماعی.pdf"
},
{
    id: 8,
    name: "فرهنگ و هنر (هشتم)",
    code:808,
    img: "image/eight/هنر.gif",
    file: "file/eight/هنر.pdf"
},
{
    id: 9,
    name: "عربی (هشتم)",
    code:809,
    img: "image/eight/عربی.jpg",
    file: "file/eight/عربی.pdf"
},
{
    id: 10,
    name: "انگلیسی (هشتم)",
    code:810,
    img: "image/eight/انگلیسی.gif",
    file: "file/eight/انگلیسی.pdf"
},
{
    id: 11,
    name: "کتاب کار انگلیسی (هشتم)",
    code:811,
    img: "image/eight/کتاب کار انگلیسی.gif",
    file: "file/eight/کتاب کار انگلیسی.pdf"
},
{
    id: 12,
    name: "تفکر و سبک زندگی (هشتم)",
    code:812,
    img: "image/eight/تفکر.jpg",
    file: "file/eight/تفکر.pdf"
},
{
    id: 13,
    name: "تفکر و سبک زندگی پسران (هشتم)",
    code:814,
    img: "image/eight/تفکر(پسران).jpg",
    file: "file/eight/تفکر(پسران).pdf"
},
{
    id: 14,
    name: "کار و فناوری (هشتم)",
    code:817,
    img: "image/eight/کار و فناوری.gif",
    file: "file/eight/کار و فناوری.pdf"
},
{
    id: 15,
    name: "ضمیمه پیام های آسمان اهل سنت (هشتم)",
    code:819,
    img: "image/eight/پیام های آسمان(اهل سنت).gif",
    file: "file/eight/پیام های آسمان(اهل سنت).pdf"
},
{
    id: 16,
    name: "تعلیمات ادیان الهی و اخلاق ویژه اقلیت های دینی (هشتم)",
    code:820,
    img: "image/eight/پیام های آسمان(اقلیت های دینی).gif",
    file: "file/eight/پیام های آسمان(اقلیت های دینی).pdf"
},
]
let bookNine = [{
    id: 1,
    name: "آموزش قرآن (نهم)",
    code:901,
    caption:"قرآن نهم  آموزش قرآن  قرآن  قران  قران نهم  اموزش قرآن  اموزش قران  آموزش قرآن نهم  اموزش قرآن نهم  اموزش قرآن نهم  اموزش قران نهم",
    img: "image/nine/قرآن.gif",
    file: "file/nine/قرآن.pdf"
},
{
    id: 2,
    name: "پیام های آسمانی(نهم)",
    code:902,
    img: "image/nine/پیام های آسمان.gif",
    file: "file/nine/پیام های آسمان.pdf"
},
{
    id: 3,
    name: "فارسی (نهم)",
    code:903,
    img: "image/nine/فارسی.gif",
    file: "file/nine/فارسی.pdf"
},
{
    id: 4,
    name: "نگارش (نهم)",
    code:904,
    img: "image/nine/نگارش.gif",
    file: "file/nine/نگارش.pdf"
},
{
    id: 5,
    name: "ریاضی (نهم)",
    code:905,
    img: "image/nine/ریاضی.gif",
    file: "file/nine/ریاضی.pdf"
},
{
    id: 6,
    name: "علوم تجربی(نهم)",
    code:906,
    img: "image/nine/علوم.jpg",
    file: "file/nine/علوم.pdf"
},
{
    id: 7,
    name: "مطالعات اجتماعی(نهم)",
    code:907,
    img: "image/nine/مطالعات اجتماعی.gif",
    file: "file/nine/مطالعات اجتماعی.pdf"
},
{
    id: 8,
    name: "فرهنگ و هنر (نهم)",
    code:908,
    img: "image/nine/هنر.jpg",
    file: "file/nine/هنر.pdf"
},
{
    id: 9,
    name: "عربی (نهم)",
    code:909,
    img: "image/nine/عربی.jpg",
    file: "file/nine/عربی.pdf"
},
{
    id: 10,
    name: "انگلیسی (نهم)",
    code:910,
    img: "image/nine/انگلیسی.gif",
    file: "file/nine/انگلیسی.pdf"
},
{
    id: 11,
    name: "کتاب کار انگلیسی (نهم)",
    code:911,
    img: "image/nine/کتاب کار انگلیسی.gif",
    file: "file/nine/کتاب کار انگلیسی.pdf"
},
{
    id: 12,
    name: "آمادگی دفاعی(نهم)",
    code:915,
    img: "image/nine/دفاعی.gif",
    file: "file/nine/دفاعی.pdf"
},
{
    id: 13,
    name: "کار و فناوری (نهم)",
    code:917,
    img: "image/nine/کار و فناوری.gif",
    file: "file/nine/کار و فناوری.pdf"
},
{
    id: 14,
    name: "ضمیمه پیام های آسمان اهل سنت (نهم)",
    code:919,
    img: "image/nine/پیام های آسمان(اهل سنت).gif",
    file: "file/nine/پیام های آسمان(اهل سنت).pdf"
},
{
    id: 15,
    name: "تعلیمات ادیان الهی و اخلاق ویژه اقلیت های دینی (نهم)",
    code:920,
    img: "image/nine/پیام های آسمان(اقلیت های دینی).gif",
    file: "file/nine/پیام های آسمان(اقلیت های دینی).pdf"
},
]
//متوسطه دوم
let ostan = [
    {
        id: 1,
        name: "استان شناسی آذربایجان شرقی",
        code:110301,
        caption:"",
        img: "image/جغرافیای استان/آذربایجان شرقی.jpg",
        file: "file/جغرافیای استان/آذربایجان شرقی.pdf"
    },
    {
        id: 2,
        name: "استان شناسی آذربایجان غربی",
        code:110302,
        caption:"",
        img: "image/جغرافیای استان/آذربایجان غربی.jpg",
        file: "file/جغرافیای استان/آذربایجان غربی.pdf"
    },
    {
        id: 3,
        name: "استان شناسی اردبیل",
        code:110303,
        caption:"",
        img: "image/جغرافیای استان/اردبیل.jpg",
        file: "file/جغرافیای استان/اردبیل.pdf"
    },
    {
        id: 4,
        name: "استان شناسی اصفهان",
        code:110304,
        caption:"",
        img: "image/جغرافیای استان/اصفهان.jpg",
        file: "file/جغرافیای استان/اصفهان.pdf"
    },
    {
        id: 5,
        name: "استان شناسی البرز",
        code:110305,
        caption:"",
        img: "image/جغرافیای استان/البرز.jpg",
        file: "file/جغرافیای استان/البرز.pdf"
    },
    {
        id: 6,
        name: "استان شناسی ایلام",
        code:110306,
        caption:"",
        img: "image/جغرافیای استان/ایلام.jpg",
        file: "file/جغرافیای استان/ایلام.pdf"
    },
    {
        id: 7,
        name: "استان شناسی بوشهر",
        code:110307,
        caption:"",
        img: "image/جغرافیای استان/بوشهر.jpg",
        file: "file/جغرافیای استان/بوشهر.pdf"
    },
    {
        id: 8,
        name: "استان شناسی تهران",
        code:110308,
        caption:"",
        img: "image/جغرافیای استان/تهران.jpg",
        file: "file/جغرافیای استان/تهران.pdf"
    },
    {
        id: 9,
        name: "استان شناسی چهارمحال و بختیاری",
        code:110309,
        caption:"",
        img: "image/جغرافیای استان/چهارمحال  و بختیاری.jpg",
        file: "file/جغرافیای استان/چهارمحال و بختیاری.pdf"
    },
    {
        id: 10,
        name: "استان شناسی خراسان جنوبی",
        code:110310,
        caption:"",
        img: "image/جغرافیای استان/خراسان جنوبی.jpg",
        file: "file/جغرافیای استان/خراسان جنوبی.pdf"
    },
    {
        id: 11,
        name: "استان شناسی خراسان رضوی",
        code:110311,
        caption:"",
        img: "image/جغرافیای استان/خراسان رضوی.jpg",
        file: "file/جغرافیای استان/خراسان رضوی.pdf"
    },
    {
        id: 12,
        name: "استان شناسی خراسان شمالی",
        code:110312,
        caption:"",
        img: "image/جغرافیای استان/خراسان شمالی.jpg",
        file: "file/جغرافیای استان/خراسان شمالی.pdf"
    },
    {
        id: 13,
        name: "استان شناسی خوزستان",
        code:110313,
        caption:"",
        img: "image/جغرافیای استان/خوزستان.jpg",
        file: "file/جغرافیای استان/خوزستان.pdf"
    },
    {
        id: 14,
        name: "استان شناسی زنجان",
        code:110314,
        caption:"",
        img: "image/جغرافیای استان/زنجان.jpg",
        file: "file/جغرافیای استان/زنجان.pdf"
    },
    {
        id: 15,
        name: "استان شناسی سمنان",
        code:110315,
        caption:"",
        img: "image/جغرافیای استان/سمنان.jpg",
        file: "file/جغرافیای استان/سمنان.pdf"
    },
    {
        id: 16,
        name: "استان شناسی سیستان و بلوچستان",
        code:110316,
        caption:"",
        img: "image/جغرافیای استان/سیستان و بلوچستان.jpg",
        file: "file/جغرافیای استان/سیستان و بلوچستان.pdf"
    },
    {
        id: 17,
        name: "استان شناسی فارس",
        code:110317,
        caption:"",
        img: "image/جغرافیای استان/فارس.jpg",
        file: "file/جغرافیای استان/فارس.pdf"
    },
    {
        id: 18,
        name: "استان شناسی قزوین",
        code:110318,
        caption:"",
        img: "image/جغرافیای استان/قزوین.jpg",
        file: "file/جغرافیای استان/قزوین.pdf"
    },
    {
        id: 19,
        name: "استان شناسی قم",
        code:110319,
        caption:"",
        img: "image/جغرافیای استان/قم.jpg",
        file: "file/جغرافیای استان/قم.pdf"
    },
    {
        id: 20,
        name: "استان شناسی کردستان",
        code:110320,
        caption:"",
        img: "image/جغرافیای استان/کردستان.jpg",
        file: "file/جغرافیای استان/کردستان.pdf"
    },
    {
        id: 21,
        name: "استان شناسی کرمان",
        code:110321,
        caption:"",
        img: "image/جغرافیای استان/کرمان.jpg",
        file: "file/جغرافیای استان/کرمان.pdf"
    },
    {
        id: 22,
        name: "استان شناسی کرمانشاه",
        code:110322,
        caption:"",
        img: "image/جغرافیای استان/کرمانشاه.jpg",
        file: "file/جغرافیای استان/کرمانشاه.pdf"
    },
    {
        id: 23,
        name: "استان شناسی کهگیلویه و بویراحمد",
        code:110323,
        caption:"",
        img: "image/جغرافیای استان/کهگیلویه و بویراحمد.jpg",
        file: "file/جغرافیای استان/کهگیلویه و بویراحمد.pdf"
    },
    {
        id: 24,
        name: "استان شناسی گلستان",
        code:110324,
        caption:"",
        img: "image/جغرافیای استان/گلستان.jpg",
        file: "file/جغرافیای استان/گلستان.pdf"
    },
    {
        id: 25,
        name: "استان شناسی گیلان",
        code:110325,
        caption:"",
        img: "image/جغرافیای استان/گیلان.jpg",
        file: "file/جغرافیای استان/گیلان.pdf"
    },
    {
        id: 26,
        name: "استان شناسی لرستان",
        code:110326,
        caption:"",
        img: "image/جغرافیای استان/لرستان.jpg",
        file: "file/جغرافیای استان/لرستان.pdf"
    },
    {
        id: 27,
        name: "استان شناسی مازندران",
        code:110327,
        caption:"",
        img: "image/جغرافیای استان/مازندران.jpg",
        file: "file/جغرافیای استان/مازندران.pdf"
    },
    {
        id: 28,
        name: "استان شناسی مرکزی",
        code:110328,
        caption:"",
        img: "image/جغرافیای استان/مرکزی.jpg",
        file: "file/جغرافیای استان/مرکزی.pdf"
    },
    {
        id: 29,
        name: "استان شناسی هرمزگان",
        code:110329,
        caption:"",
        img: "image/جغرافیای استان/هرمزگان.jpg",
        file: "file/جغرافیای استان/هرمزگان.pdf"
    },
    {
        id: 30,
        name: "استان شناسی همدان",
        code:110330,
        caption:"",
        img: "image/جغرافیای استان/همدان.jpg",
        file: "file/جغرافیای استان/همدان.pdf"
    },
    {
        id: 31,
        name: "استان شناسی یزد",
        code:110331,
        caption:"",
        img: "image/جغرافیای استان/یزد.jpg",
        file: "file/جغرافیای استان/یزد.pdf"
    },
]
let nazariReaze10 = [
    {
        id: 1,
        name: "فارسی(1)",
        code:110201,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/دهم/فارسی.gif",
        file: "file/متوسطه نظری/ریاضی و فیزیک/دهم/فارسی.pdf"
    },
    {
        id: 2,
        name: "نگارش(1)",
        code:110202,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/دهم/نگارش.gif",
        file: "file/متوسطه نظری/ریاضی و فیزیک/دهم/نگارش.pdf"
    },
    {
        id: 3,
        name: "دین و زندگی(1)",
        code:110204,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/دهم/دین و زندگی.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/دهم/دینی.pdf"
    },
    {
        id: 4,
        name: "عربی(1)",
        code:110206,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/دهم/عربی.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/دهم/عربی.pdf"
    },
    {
        id: 5,
        name: "فیزیک(1)",
        code:110209,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/دهم/فیزیک.gif",
        file: "file/متوسطه نظری/ریاضی و فیزیک/دهم/فیزیک.pdf"
    },
    {
        id: 6,
        name: "شیمی(1)",
        code:110210,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/دهم/شیمی.gif",
        file: "file/متوسطه نظری/ریاضی و فیزیک/دهم/شیمی.pdf"
    },
    {
        id: 7,
        name: "ریاضی(1)",
        code:110211,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/دهم/ریاضی.gif",
        file: "file/متوسطه نظری/ریاضی و فیزیک/دهم/ریاضی.pdf"
    },
    {
        id: 8,
        name: "هندسه(1)",
        code:110213,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/دهم/هندسه.gif",
        file: "file/متوسطه نظری/ریاضی و فیزیک/دهم/هندسه.pdf"
    },
    {
        id: 9,
        name: "آمادگی دفاعی",
        code:110215,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/دهم/آمادگی دفاعی.gif",
        file: "file/متوسطه نظری/ریاضی و فیزیک/دهم/آمادگی دفاعی.pdf"
    },
    {
        id: 10,
        name: "آزمایشگاه علوم تجربی(1)",
        code:110217,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/دهم/آزمایشگاه علوم تجربی.gif",
        file: "file/متوسطه نظری/ریاضی و فیزیک/دهم/آزمایشگاه علوم تجربی.pdf"
    },
    {
        id: 11,
        name: "جغرافیای ایران",
        code:110218,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/دهم/جغرافیای ایران.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/دهم/جغرافیای ایران.pdf"
    },
    {
        id: 12,
        name: "هنر",
        code:110222,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/دهم/هنر.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/دهم/هنر.pdf"
    },
    {
        id: 13,
        name: "کارگاه کارآفرینی و تولید",
        code:110224,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/دهم/کار آفرینی.gif",
        file: "file/متوسطه نظری/ریاضی و فیزیک/دهم/کارآفرینی.pdf"
    },
    {
        id: 14,
        name: "تفکر و سواد رسانه ای",
        code:110225,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/دهم/تفکر.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/دهم/تفکر.pdf"
    },
    {
        id: 15,
        name: "تعلیمات ادیان(ویژه اقلیت های دینی)(1)",
        code:110228,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/دهم/دینی(ویژه اقلیت های دینی).jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/دهم/دینی(ویژه اقلیت های دینی).pdf"
    },
    {
        id: 16,
        name: "انگلیسی(1)",
        code:110230,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/دهم/انگلیسی.gif",
        file: "file/متوسطه نظری/ریاضی و فیزیک/دهم/انگلیسی.pdf"
    },
    {
        id: 17,
        name: "کتاب کار انگلیسی(1)",
        code:110231,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/دهم/کتاب کار انگلیسی.gif",
        file: "file/متوسطه نظری/ریاضی و فیزیک/دهم/کتاب کار انگلیسی.pdf"
    },
]
let nazariReaze11 = [
    {
        id: 1,
        name: "فارسی(2)",
        code:111201,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/یازدهم/فارسی.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/یازدهم/فارسی.pdf"
    },
    {
        id: 2,
        name: "نگارش(2)",
        code:111202,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/یازدهم/نگارش.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/یازدهم/نگارش.pdf"
    },
    {
        id: 3,
        name: "دین و زندگی(2)",
        code:111204,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/یازدهم/دینی.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/یازدهم/دینی.pdf"
    },
    {
        id: 4,
        name: "عربی(2)",
        code:111206,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/یازدهم/عربی.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/یازدهم/عربی.pdf"
    },
    {
        id: 5,
        name: "فیزیک(2)",
        code:111209,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/یازدهم/فیزیک.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/یازدهم/فیزیک.pdf"
    },
    {
        id: 6,
        name: "شیمی(2)",
        code:111210,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/یازدهم/شیمی.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/یازدهم/شیمی.pdf"
    },
    {
        id: 7,
        name: "هندسه(2)",
        code:111213,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/یازدهم/هندسه.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/یازدهم/هندسه.pdf"
    },
    {
        id: 8,
        name: "حسابان(1)",
        code:111214,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/یازدهم/حسابان.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/یازدهم/حسابان.pdf"
    },
    {
        id: 9,
        name: "آمار و احتمال",
        code:111215,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/یازدهم/آمار و احتمال.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/یازدهم/آمار و احتمال.pdf"
    },
    {
        id: 10,
        name: "آزمایشگاه علوم تجربی(2)",
        code:111217,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/یازدهم/آزمایشگاه علوم تجربی.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/یازدهم/آزمایشگاه علوم تجربی.pdf"
    },
    {
        id: 11,
        name: "تاریخ معاصر ایران",
        code:111220,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/یازدهم/تاریخ.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/یازدهم/تاریخ.pdf"
    },
    {
        id: 12,
        name: "هنر",
        code:111222,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/یازدهم/هنر.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/یازدهم/هنر.pdf"
    },
    {
        id: 13,
        name: "تعلیمات ادیان ویژه اقلیت های دینی(2)",
        code:111228,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/یازدهم/دینی(ویژه اقلیت های دینی).jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/یازدهم/دینی(ویژه اقلیت های دینی).pdf"
    },
    {
        id: 14,
        name: "انگلیسی(2)",
        code:111230,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/یازدهم/انگلیسی.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/یازدهم/انگلیسی.pdf"
    },
    {
        id: 15,
        name: "(2)کتاب کار انگلیسی",
        code:111231,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/یازدهم/کتاب کار انگلیسی.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/یازدهم/کتاب کار انگلیسی.pdf"
    },
    {
        id: 16,
        name: "زمین شناسی",
        code:111237,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/یازدهم/زمین شناسی.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/یازدهم/زمین شناسی.pdf"
    },
    {
        id: 17,
        name: "(2)ضمیمه تعالیم دینی ویژه اهل سنت",
        code:111238,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/یازدهم/دینی(ویژه اهل سنت).jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/یازدهم/دینی(ویژه اهل سنت).pdf"
    },
    {
        id: 18,
        name: "انسان و محیط زیست",
        code:111268,
        caption:"",
        img: "image/متوسطه نظری/ریاضی و فیزیک/یازدهم/انسان و محیط زیست.jpg",
        file: "file/متوسطه نظری/ریاضی و فیزیک/یازدهم/انسان و محیط زیست.pdf"
    },
]