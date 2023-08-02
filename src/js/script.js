jQuery(function ($) {

    //====================ハンバーガーメニュー====================
    $('.js-hamburger').on('click', function () {
      if ($('.js-hamburger').hasClass('is-open')) {
        $('.js-drawer-menu').removeClass("is-open");
        $(this).removeClass('is-open');
      } else {
        $('.js-drawer-menu').addClass("is-open");
        $(this).addClass('is-open');
      }
    });
  
    //====================mvのswiper====================
    var swiper = new Swiper(".js-fv-swiper", {
      loop:true,
      speed: 4000, 
      autoplay: {
      delay: 4000, 
      },
      effect: "fade",
    });
  
  
    //====================Campaign スライド設定====================
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
  
  
    //====================スクロールトップ====================
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
  
  
    //====================スクロールで背景色の後に画像やテキスト====================
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
  });  