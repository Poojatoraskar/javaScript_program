// font size increase or decrease
$('.inc-fontsize ').click(function() {
    curSize = parseFloat($('#demo').css('font-size')) +4;
    if (curSize <= 32)
        $('#demo').css('font-size', curSize);
});

$('.default-fontsize').click(function() {
curSize = parseFloat($('#demo').css('font-size'));
    if (curSize != 18)
        $('#demo').css('font-size', 18);
});

$('.dec-fontsize').click(function() {
    curSize = parseFloat($('#demo').css('font-size')) -2;
    if (curSize >= 16)
        $('#demo').css('font-size', curSize);
});





//  change color try two
let bgHead = document.getElementById('bgHead');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');



btn1.addEventListener('click', function() {
    // bgHead.style.backgroundColor = "#265781";
    bgHead.style.color = "#265781";
});

btn2.addEventListener('click', function() {
    // bgHead.style.backgroundColor = "#52B27B";
    bgHead.style.color = "#52B27B";
});

btn3.addEventListener('click', function() {
    // bgHead.style.backgroundColor = "#F2E162";
     bgHead.style.color = "#F2E162";
});

// bgHead.addEventListener('click', function() {
//     bgHead.style.backgroundColor = "#FFF";
//     bgHead.style.color = "black";
// });













///////////////   serch bar ///////////////////
let menu = document.getElementById("menu");
let y = document.getElementById("line");
let searchModal = document.getElementById("search-modal");
let searchIcon = document.getElementById("search-icon");


function myFunction() {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        y.classList.remove("close");
    } else {
        menu.style.display = "flex";
        y.classList.add("close");
    }
    console.log(y);
}

function searchBarOpen() {
    searchModal.style.display = "flex"
}

    function searchBarClose() {
        searchModal.style.display = "none"

    }

    function aboutVideoOpen() {
        aboutModal.style.display = "block"
       
    }
    

//   togglebuton ************************

function toggleNavBar(){

    console.log("hii")
    var headerRight =  document.getElementById('headerRightformobile');

    console.log(headerRight.style.display,'headerRight.style.display')

    headerRight.classList.toggle("header-for-mobile");
}



