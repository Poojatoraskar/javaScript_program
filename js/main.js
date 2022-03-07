$('.alpha3').click(function() {
    curSize = parseFloat($('#demo').css('font-size')) +4;
    if (curSize <= 32)
        $('#demo').css('font-size', curSize);
});

$('.alpha2').click(function() {
curSize = parseFloat($('#demo').css('font-size'));
    if (curSize != 18)
        $('#demo').css('font-size', 18);
});

$('.alpha').click(function() {
    curSize = parseFloat($('#demo').css('font-size')) -2;
    if (curSize >= 16)
        $('#demo').css('font-size', curSize);
});


//////////////////////////////////
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