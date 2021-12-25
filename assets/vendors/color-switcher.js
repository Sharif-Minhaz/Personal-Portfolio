// -----------colors switch--------------//
var switchs = document.getElementsByClassName('colors')[0];
function colorSwitch() {
    switchs.classList.toggle("go-in");
}
$(document).ready(function(){
    var n = 0;
    var root = $(':root');
    var changeColor = ['#33DDFF','#DC3545','#E83E8C','#007BFF','#00FFFF','#6610F2','#FD7E14', '#42EBA4', '#71FD14'],
    focusColor = ['rgb(0, 172, 238)','rgba(220, 53, 69, 0.8)','rgba(232, 61, 140, 0.7)','rgba(0, 123, 255, 0.8)','rgba(0, 255, 255, 0.8)','rgba(102, 16, 242, 0.8)','rgba(253, 126, 20, 0.8)','rgba(66, 235, 164, 0.8)','rgba(113, 253, 20, 0.8)'],
    indicators = ['#00ffff2d','#6e2a31','#6e2a21','#5e9bdc','#2dffff','#a181d6','#885429','#79f5c1cc','#687f58'],
    hoverIndicators = ['#1A4B59','#c93c4b','#c93c3b','#69aef7','#52c5c5','#6331b5','#ff7300','#4bf7afcc','#9bd870'],
    lowColor = ['rgba(51,221,255,0.1)','rgba(220, 53, 69, 0.1)','rgba(232, 62, 140, 0.1)','rgba(0, 123, 255, 0.1)','rgba(0, 255, 255, 0.1)','rgba(102, 16, 242, 0.1)','rgba(253, 126, 20, 0.1)','rgba(66, 235, 164, 0.1)','rgba(113, 253, 20, 0.1)'];
    $(".four-color span").click(function(){
        $(this).css('transform' , 'scale(0.88)');
    })
    //default-color
    $('.default').click(function(){
        $("#red, #pink, #blue, #cyan, #purple, #green, #light-green, #yellow").css("transform" , "scale(1)");
        rootAccess(n = 0);
    });
    // red color
    $('#red').click(function(){
        $("#pink, #blue, #cyan, #purple, #green, #light-green, #yellow").css("transform" , "scale(1)");
        rootAccess(n = 1);
    });
    //pink-color
    $('#pink').click(function(){
        $("#red, #blue, #cyan, #purple, #green, #light-green, #yellow").css("transform" , "scale(1)");
        rootAccess(n = 2);
    });
    // blue-color
    $('#blue').click(function(){
        $("#pink, #red, #cyan, #purple, #green, #light-green, #yellow").css("transform" , "scale(1)");
        rootAccess(n = 3);
    });
    // cyan-color
    $('#cyan').click(function(){
        $("#pink, #blue, #red, #purple, #green, #light-green, #yellow").css("transform" , "scale(1)");
        rootAccess(n = 4);
    });
    // purple-color
    $('#purple').click(function(){
        $("#pink, #blue, #cyan, #red, #green, #light-green, #yellow").css("transform" , "scale(1)");
        rootAccess(n = 5);
    });
    // yellow-color
    $('#yellow').click(function(){
        $("#pink, #blue, #cyan, #purple, #green, #light-green, #red").css("transform" , "scale(1)");
        rootAccess(n = 6);
    });
    // green-color
    $('#green').click(function(){
        $("#pink, #blue, #cyan, #purple, #yellow, #light-green, #red").css("transform" , "scale(1)");
        rootAccess(n = 7);
    });
    // light-green-color
    $('#light-green').click(function(){
        $("#pink, #blue, #cyan, #purple, #green, #yellow, #red").css("transform" , "scale(1)");
        rootAccess(n = 8);
    });
    function rootAccess() {
        root.css({
            '--change-color' : changeColor[n],
            '--focus-color' : focusColor[n],
            '--indicators' : indicators[n],
            '--hover-indicators' : hoverIndicators[n],
            '--low-color' : lowColor[n]
        });
    }
    var navLink = ['#292929e6','#ffffffe6'],
    asideColor = ['#ffffff','#111419'],
    sectionLBg = ['#f3f3f3','#343A40'],
    sectionDBg = ['#eaeaea','#212528'],
    sectionLHead = ['#e4e4e4','#394045'],
    sectionDHead = ['#dcdcdc','#282D30'],
    headingColor = ['#343a39','#ffffff'],
    silverColor = ['#505050','#9a9da0'],
    extraLight = ['rgb(19 19 19 / 70%)','rgba(255,255,255,0.7)'],
    boxIcon = ['#ffffff','#343A40'],
    normalColor = ['#4a4a4a','#ffffff'],
    normalLColor = ['#3c3c3ccc','rgba(255, 255, 255, 0.7)'],
    messageBox = ['#ffffff','#212528'],
    footer = ['#ffffff','#212528'];
    function rootAccessV2(c) {
        root.css({
            '--nav-link' : navLink[c],
            '--aside-color' : asideColor[c],
            '--sectionL-bg' : sectionLBg[c],
            '--sectionD-bg' : sectionDBg[c],
            '--sectionL-heading' : sectionLHead[c],
            '--sectionD-heading' : sectionDHead[c],
            '--heading-color' : headingColor[c],
            '--silver-color' : silverColor[c],
            '--extra-light' : extraLight[c],
            '--box-icon' : boxIcon[c],
            '--normal-color' : normalColor[c],
            '--normal-lColor' : normalLColor[c],
            '--messages-box-bg' : messageBox[c],
            '--footer-bg' : footer[c]
        });
    }
    var count = 0;
    $('#toggle').click(function() {
        count++;
        if(count%2 == 0) {
            rootAccessV2(1);
            $('#spy').removeClass('box-shadows');
            $('#textBox, #email, #msg').removeClass('light-box-shadows');
        }
        else {
            rootAccessV2(0);
            $('#spy').addClass('box-shadows');
            $('#textBox, #email, #msg').addClass('light-box-shadows');
        }
    });
});