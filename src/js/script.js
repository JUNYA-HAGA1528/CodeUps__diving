

jQuery(function ($) {

 

    //////////
    // info
    /////////
  
  // 同ページリンク sp
  $(function(){
      $('.js-tab-link a').click(function() {
      //押されたのが.リストの何番目か調べる
      var number = $('.js-tab-link a').index(this);
      //表示領域を全部非表示にする
      $('.page-imformation__tab-cards li').hide();
      //押されたのと同じ番目のを表示する
      $('.page-imformation__tab-cards li').eq(number).fadeIn();
      //.activeがついてるのを外す
      $('.js-tab-link a').removeClass('active');
      $('.js-tab-info li').removeClass('active');
      //押activeを付与してる      
      $('.js-tab-info li').eq(number).addClass('active');
      });
    });
    
    // 同ページリンク footer
    $(function(){
      $('.js-tab-link-footer a').click(function() {
      //押されたのが.リストの何番目か調べる
      var number = $('.js-tab-link-footer a').index(this);
      //表示領域を全部非表示にする
      $('.page-imformation__tab-cards li').hide();
      //押されたのと同じ番目のを表示する
      $('.page-imformation__tab-cards li').eq(number).fadeIn();
      //.activeがついてるのを外す
      $('.js-tab-link-footer a').removeClass('active');
      $('.js-tab-info li').removeClass('active');
      //押activeを付与してる      
      $('.js-tab-info li').eq(number).addClass('active');
      });
    });
  
    // タブ
    $(function(){
      $('.js-tab-info li').click(function() {
      //押されたのがリストの何番目か調べる
      var index = $('.js-tab-info li').index(this);
      //表示領域を全部非表示にする
      $('.page-imformation__tab-cards li').hide();
      //押されたのと同じ番目のを表示する
      $('.page-imformation__tab-cards li').eq(index).fadeIn();
      //.activeがついてるのを外す
      $('.js-tab-info li').removeClass('active');
      //押したやつにactiveを付与してる
      $(this).addClass('active');
      });
    });
  
    // 他ぺージ
    $(function(){
      //ハッシュタグ読み込み
      var hash = location.hash;
      if(hash.length){
      //ハッシュがあったら
      if(hash.match(/#info/)){
      //ハッシュタグが「#tab◯」ってなってたら
      //表示領域を全部非表示にする
      $('.page-imformation__tab-cards li').hide();
      //メニューに付いてる「class="active"」を削除
      $('.js-tab-info li').removeClass('active');
      //「#tab◯」を「◯」だけにする
      var tabname = hash.slice(5.1);
     
      tabname = tabname - 1;
      //n番目の内容を表示する
      $('.page-imformation__tab-cards li').eq(tabname).fadeIn();
      //n番目のメニューに「class="active"」を付与する
      $('.js-tab-info li').eq(tabname).addClass('active');
      }else{
      //ハッシュタグが「#tab◯」じゃなかったら
      //1番目のメニューに「class="active"」を付与する
      $('.js-tab-info li').eq(0).addClass('active');
      //内容部分を全部非表示にする
      $('.page-imformation__tab-cards li').hide();
      //1番目の内容を表示する
      $('.page-imformation__tab-cards li').eq(0).fadeIn();
      }
      }else{
      //ハッシュがなかったら（普通にページ開いたときとか）
      //1番目のメニューに「class="active"」を付与する
      $('.js-tab-info li').eq(0).addClass('active');
      //内容部分を全部非表示にする
      $('.page-imformation__tab-cards li').hide();
      //1番目の表示内容を表示する
      $('.page-imformation__tab-cards li').eq(0).fadeIn();
      }
    });
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
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
  
  
  
   

//about モーダル表示;
let scrollPosition;
$(".js-modal").click(function () {
    scrollPosition = $(window).scrollTop();
    $(".js-modal-window").html($(this).prop("outerHTML"));
    $(".js-modal-window").fadeIn(300);
    $(".js-header, .js-page-top").hide();
    $("html").addClass("is-fixed");
    var index = $(this).index();
        $('html, body').css('overflow', 'hidden');
        // 背景を固定してスクロールさせない
    return false;
});


//about モーダル非表示
$(".js-modal-window").click(function () {
    $(".js-modal-window").fadeOut(300, function () {
        $(".js-header, .js-page-top").fadeIn();
        $("html").removeClass("is-fixed");
        $(window).scrollTop(scrollPosition);
        
        $('html, body').removeAttr('style');
        // 背景の固定を解除する
    });
    return false;
});



  //accordion
    document.querySelectorAll(".js-accordion").forEach(function (elem) {
        elem.addEventListener("click", function () {
        elem.classList.toggle("open");
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
  
  



  ////////////
  // コンタクト 未入力エラー
  ////////////

  $(document).ready(function () {
    $(".js-submit").on("click", function (event) {
      var form = document.getElementById("form");
      var requiredElements = form.querySelectorAll("[required]");
      var hasRequiredFields = false;
      var inquiryCheckboxes = form.querySelectorAll(
        'input[name="お問合せ項目"]'
      );

      // 必須項目のクラスとチェックボックスの選択状態をチェック
      requiredElements.forEach(function (element) {
        if (element.type === "checkbox") {
          if (!element.checked) {
            element.classList.add("required");
            hasRequiredFields = true;
          } else {
            element.classList.remove("required");
          }
        } else {
          if (element.value.trim() === "") {
            element.classList.add("required");
            hasRequiredFields = true;
          } else {
            element.classList.remove("required");
          }
        }
      });

      // チェックボックスの選択状態をチェック
      var isAnyCheckboxSelected = false;
      inquiryCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
          isAnyCheckboxSelected = true;
        }
      });

      // チェックボックスの選択状態に応じて.requiredクラスを制御
      inquiryCheckboxes.forEach(function (checkbox) {
        if (!isAnyCheckboxSelected) {
          checkbox.classList.add("required");
          hasRequiredFields = true;
        } else {
          checkbox.classList.remove("required");
        }
      });

      // .requiredが一つでもあるかをチェック
      var hasAnyRequiredField = form.querySelector(".required") !== null;

      // .sub-contact__errorの表示制御
      var errorElement = $(".sub-contact__error");
      errorElement.toggleClass("active", hasAnyRequiredField);

      // .breadcrumb__item--errorの表示制御
      var breadcrumbErrorElement = $(".breadcrumb__item--error");
      breadcrumbErrorElement.toggleClass("active", hasAnyRequiredField);

      if (hasAnyRequiredField) {
        event.preventDefault(); // バリデーションエラー時はデフォルトの送信を阻止
      } else {
        // 未入力項目がない場合の処理
        window.location.href = "contact-thanks.html"; // ページ遷移
      }
    });
  });


  
});
// 消さない