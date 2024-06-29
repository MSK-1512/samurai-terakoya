// リンクホバーで不透明度変更：jQuery
$(function () {
    $('.hover').on('mouseover', function(){
        $(this).animate({
            opacity: .6,
        }, 150);
    });
    $('.hover').on('mouseout', function(){
        $(this).animate({
            opacity: 1,
        }, 150);
    });
});

// リンクホバーで不透明度変更：JavaScript
/*
const hover = document.querySelectorAll('.hover');
console.log(hover);
hover.forEach(function(element){
    element.addEventListener('mouseover', () =>{
        element.style.opacity = 0.5;
});
element.addEventListener('mouseout', () =>{
    element.style.opacity = 1;
});
});
*/

// カルーセル：Slack
/*
$('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear'
});
*/

// -------------▲ここまで完了▲-------------

//カルーセル：JavaScript
// 画像を配列として格納
const images = [
    'image/main.png',
    'image/main2.png',
    'image/main3.png'
];
//画像のindex番号の初期化
let i =0;
// 画像のsrcに配列の中身を挿入
const mainImage = document.getElementById('mainpic');
mainImage.src = images[i];

// 5秒後に画像を切り替える　←うまくいかない…forEach以外を使う？？
images.forEach(function(){
    setTimeout(() => {
        i++;
        mainImage.src = images[i];
    }, 3000);
    if(i === 2){
        setTimeout(() => {
            i = 0;
            mainImage.src = images[i];
        }, 3000);
    }
});

// setTimeout(() => {
//         i++;
//         mainImage.src = images[i];
//     }, 5000);
// // 3枚目の画像まで表示したら1枚目に戻す
//     if(i === 2){
//         i = 0;
//         mainImage.src = images[i];
//     }




// トップに戻るボタン表示・非表示：jQuery
// const pageTop = $('#pagetop');
// $(window).scroll(function() {
//     if($(this).scrollTop() > 100) {
//         pageTop.fadeIn();
//     } else {
//         pageTop.fadeOut();
//     }
// });

//トップに戻るボタン表示・非表示：JavaScript
window.addEventListener('scroll', () => {
    const pageTop = document.getElementById('pagetop');
    const scroll = window.scrollY;
    if(scroll > 100) {
        pageTop.style.opacity = '1';
    } else {
        pageTop.style.opacity = '0';
    }
});
// これだとリンクホバー時のopacityが効かなくなってしまう…



// スムーススクロール




// 表示画面に入ったらフェードイン




// モーダルウィンドウ