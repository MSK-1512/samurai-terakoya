// リンクホバーで不透明度変更：JavaScript
const hover = document.querySelectorAll('.hover');
hover.forEach(function(element){
    element.addEventListener('mouseover', () =>{
        element.style.opacity = 0.5;
});
element.addEventListener('mouseout', () =>{
    element.style.opacity = 1;
});
});


// カルーセル：Slack
$(function () {
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear'
    });
});


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
// -----------------------▲ここまで済▲-----------------------


// スムーススクロール

//querySelectorAllメソッドを使用してページ内のhref属性が#で始まるものを選択
//forEachメソッドを使って、各アンカータグにクリックされた時の処理
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

    // クリックされたときのデフォルトの挙動を防ぐ
    e.preventDefault();

    // クリックされたアンカータグのhref属性を取得
    const href = anchor.getAttribute('href');

    // href属性の#を取り除いた部分と一致するIDを取得
    const target = document.getElementById(href.replace('#', ''));

    //取得した要素の位置を取得するために、getBoundingClientRect()を呼び出し、ページ上の位置を計算。
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;

    // window.scrollTo()を呼び出して、スクロール位置を設定します。behaviorオプションをsmoothに設定することで、スムーズなスクロールを実現します。
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
  });
});


// 表示画面に入ったらフェードイン
const fadeinSection = document.querySelectorAll('.fade-in_section');

fadeinSection.forEach(function(fadeIn) {
    let windowHeight = window.innerHeight;
    window.addEventListener('scroll', function() {
        let offset = fadeIn.getBoundingClientRect().top;
        let scroll = window.scrollY;
        if(scroll > offset - windowHeight + 200){
        fadeIn.classList.add('fadein_animation_start');
        }
    });
});
// ⇒AboutとWorksの両方が同時にフェードインしてしまう…


// モーダルウィンドウ
let modalTrigger = document.querySelectorAll('.modal-open');
let modal = document.querySelectorAll('.overlay');

// 画像クリックでモーダルオープン
modalTrigger.forEach(x => {
    x.addEventListener('click', modalOpen);
    function modalOpen() {
        modal.forEach(y => {
            y.style.display = "block";
            y.classList.add('is-show');
        });
    }
});
// ⇒3つ目の画像しか表示されない…