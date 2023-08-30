jQuery(function ($) {

    //ハンバーガーメニュー
    $('.js-hamburger').on('click', function () {
        if ($('.js-hamburger').hasClass('is-open')) {
            $('.js-drawer-menu').removeClass("is-open");
            $(this).removeClass('is-open');
        } else {
            $('.js-drawer-menu').addClass("is-open");
            $(this).addClass('is-open');
        }
    });
  

    //mv swiper
    var swiper = new Swiper(".js-fv-swiper", {
        loop: true,
        effect: "fade",
        speed: 3000,
        allowTouchMove: false,
        autoplay: {
        delay: 5000,
        },
    });
  
  
    //Campaign swiper
    var swiper = new Swiper(".js-campaign-swiper", {
      
        slidesPerView: "auto", //スライド枚数 1.26枚
    
        //〇〇以上の画面幅で〇〇枚のスライドと幅が〇〇pxと設定する
        breakpoints: { 
            768: {
                spaceBetween: 40,
            },
        },
  
        spaceBetween: 24, 
        speed: 1000, 
        loop: true, 
        autoplay: {
            delay: 5000, 
            disableOnInteraction: false 
        },
        // ボタンを押した際の、スライド
        navigation: {
            nextEl: ".js-campaign-button-next",
            prevEl: ".js-campaign-button-prev"
        }
    });
  
  
    //スクロールトップ
    $(function () {
      // スクロールしたら「トップに戻る」ボタンが表示される
        const toTopButton = $(".js-scroll-top");
        const scrollHeight = 100;
        toTopButton.hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                toTopButton.fadeIn();
            } else {
                toTopButton.fadeOut();
            }
        
            // ページの一番下でトップに戻るボタンが消える
            const doch = $(document).innerHeight();
            const winh = $(window).innerHeight();
            const bottom = doch - winh;
            if (bottom <= $(window).scrollTop()) {
                toTopButton.fadeOut();
            }
        });
        
        // 「トップに戻る」ボタンをクリックしたらスクロールで戻る
        toTopButton.click(function () {
            $("body,html").animate({ scrollTop: 0 }, 800);
            return false;
        });
    });
  
  
    //スクロールで背景色の後に画像やテキスト(colorbox)
    var box = $('.js-colorbox'),
    speed = 700;  
  
    //.colorboxの付いた全ての要素に対して下記の処理を行う
    box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;
  
    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
            $(this).delay(200).animate({'width':'100%'},speed,function(){
                image.css('opacity','1');
                $(this).css({'left':'0' , 'right':'auto'});
                $(this).animate({'width':'0%'},speed);
            })
                counter = 1;
            }
        });
    });


    //====================下層ページ====================
    //campaign タブ
    $(function () {
        // 最初のコンテンツは表示
        $(".js-campaign-wrapper:first-of-type").css("display", "block");
    });



       ////////////
    // about　モーダル
    ////////////
    // コース画像モーダル表示イベント
    $(".js-modal").click(function () {
        // まず、クリックした画像の HTML(<img>タグ全体)を#frayDisplay内にコピー
        $(".js-background").html($(this).prop("outerHTML"));
        //そして、fadeInで表示する。
        $(".js-background").fadeIn(200);
        $("body").addClass("loading__no-scroll");
        return false;
    });

    // コース画像モーダル非表示イベント
    // モーダル画像背景 または 拡大画像そのものをクリックで発火
    $(".js-background").click(function () {
        // 非表示にする
        $(".js-background").fadeOut(200);
        $("body").removeClass("loading__no-scroll");
        return false;
    });


    //accordion
    $(function () {
        $(".accordion__content").css("display", "block");
        $(".accordion__title").addClass("show");
        $(".accordion__title").on("click", function () {
            $(this).next().slideToggle();
            $(this).toggleClass("show");
        });
    });


    // information タブ
    $(function () {
        // 最初のコンテンツは表示
        $(".js-information-wrapper:first-of-type").css("display", "block");
        // タブをクリックすると
        $(".js-information-tab").on("click", function () {
          // 現在選択されているタブからcurrentを外す
          $(".current").removeClass("current");
          // クリックされたタブにcurrentクラスを付与
          $(this).addClass("current");
          // クリックされた要素が何番目か取得（クリックしたタブのインデックス番号を取得）
          const index = $(this).index();
          // クリックしたタブのインデックス番号と同じコンテンツを表示
          $(".js-information-wrapper").hide().eq(index).fadeIn(300);
        });
    });


    //voice タブ
    $(function () {
        // 最初のコンテンツは表示
        $(".js-voice-wrapper:first-of-type").css("display", "block");
    });

     //aside archiveタブ
    function toggleAccordion(accordionElement) {
        var findElm = accordionElement
        .closest(".aside-archive__items")
        .find(".aside-archive__item");
        $(findElm).slideToggle();

        if (accordionElement.hasClass("close")) {
        accordionElement.removeClass("close");
        } else {
        accordionElement.addClass("close");
        }
    }
    $(document).ready(function () {
        $(".js-archive-accordion.open").each(function () {
        toggleAccordion($(this));
        });

        $(".js-archive-accordion").on("click", function () {
        toggleAccordion($(this));
        });
    });





























    
});  