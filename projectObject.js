let allBook = []

let bookOne = [
    {
        id: 1,
        name: "آموزش قرآن (اول)",
        code:101,
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