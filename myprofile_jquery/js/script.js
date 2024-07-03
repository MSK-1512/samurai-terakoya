// リンクホバーで不透明度変更
$(function () {
    $('.hover').on('mouseover', function(){
        $(this).animate({
            opacity: .6,
        }, 200);
    });
    $('.hover').on('mouseout', function(){
        $(this).animate({
            opacity: 1,
        }, 200);
    });
});

// カルーセル：Slick
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

// トップに戻るボタン表示・非表示
$(function(){
    $(window).scroll(function() {
        const pageTop = $('#pagetop');
        if($(this).scrollTop() > 100) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
});

// -----------------------▲ここまで済▲-----------------------


// スムーススクロール
$(function() {
    $('a[href^="#"]').click(function(){
        // ▼移動先の調整用。30にすると30px下にずれる
        const adjust = 0;
        // ▼スピードの指定
        const speed = 400;
        // ▼アンカーのリンク先（href）を取得
        let href = $(this).attr('href');
        // ▼hrefが#の時と空の時は('html'が、それ以外は(href)がtargetに挿入される。?は三項演算子
        let target = $(href == '#' || href =="" ? 'html' : href);
        // ▼offset().top;でドキュメントの左上の起点から、要素の左上までの距離（数値）を取得。適宜adjustで移動位置を調整する
        let position = target.offset().top + adjust;

        $('html, body').animate({scrollTop: position}, speed, 'swing');
        return false;
    });
});


// 表示画面に入ったらフェードイン
$(function() {
    $(window).scroll(function() {
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        $('.fade-in_section').each(function() {
            const position = $(this).offset().top;
            if( scroll > position - windowHeight + 200){
                $(this).addClass('fade-in');
            }
            
        });
    });
});


// モーダルウィンドウ
$(function() {
    $('.modal-open').click(function() {
        const overlay = $(this).parent().find('.overlay');
        overlay.fadeIn();
    });
    $('.close').click(function() {
        $(this).parent('.overlay').fadeOut();
    });
});