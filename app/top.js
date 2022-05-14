
// ----------sakura-------------//
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 30,//この数値を変更すると桜の数が増減できる
      "density": {
        "enable": true,
        "value_area": 1121.6780303333778
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape":{
      "type":"image",//形状は画像を指定
      "stroke":{
        "width":0,
      },
      "image": {
        "src": "http://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/move02/5-6/img/flower.png",//画像を指定
        "width": 120,
        "height": 120
      }
    },
    "opacity":{
      "value":0.06409588744762158,
      "random":true,
      "anim":{
        "enable":false,
        "speed":1,
        "opacity_min":0.1,
        "sync":false
      }
    },
    "size":{
      "value":8.011985930952697,
      "random":true,//サイズをランダムに
      "anim":{
        "enable":false,
        "speed":4,
        "size_min":0.1,
        "sync":false
      }
    },
    "line_linked": {
      "enable": false,
    },
    "move":{
      "enable":true,
      "speed":7,//この数値を小さくするとゆっくりな動きになる
      "direction":"bottom-right",//右下に向かって落ちる
      "random":false,//動きはランダムにしない
      "straight":false,//動きをとどめない
      "out_mode":"out",//画面の外に出るように描写
      "bounce":false,//跳ね返りなし
      "attract":{
        "enable":false,
        "rotateX":281.9177489524316,
        "rotateY":127.670995809726
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
      },
      "onclick": {
        "enable": false,
      },
      "resize": true
    }
  },
  "retina_detect": true
});

//---------------テキストアニメーション-----------------//
const animationTagetElements = document.querySelectorAll(".textAnimation");
console.log(animationTagetElements);

// textsは、targetElementからテキストを抽出する

for (let i = 0; i < animationTagetElements.length; i++) {
    const targetElement = animationTagetElements[i],
    texts = targetElement.textContent,
    textsArray = [];
    targetElement.textContent = ""; //一度中身を消す
    
    console.log(textsArray);

    for(let j = 0; j < texts.split("").length; j++){
        const t = texts.split("")[j];
        //取得した文字列tが空白だったら空白を返す
        if (t === " "){
            textsArray.push(" ");
        } else {
            // 0.2秒後に次の文字が表示される
        textsArray.push('<span><span style="animation-delay: '+ (j * .2) +'s;">' + t + '</span></span>')
        }
    }

    for( let k = 0; k <textsArray.length; k++) {
        targetElement.innerHTML += textsArray[k]
    }
}

// ---------production modal-------------

$('.js-modal-open').on('click', function(){
  let target = $(this).data('target');
  let modal = document.getElementById(target);

  const productionTop = $('.production-item').offset().top;
  $('html').animate({scrollTop: productionTop});
  $(modal).fadeIn();
  return false;
  });

// モーダルウィンドウを閉じる
$('.js-modal-close').on('click', function(){
  $('.js-modal').fadeOut();
  const productionTop = $('.production-item').offset().top;
  $('html').animate({scrollTop: productionTop});
  return false;
});


//---------------swiper-----------------//


  const swiper = new Swiper(".mySwiper", {

    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,

    breakpoints: {
      768: {
        slidesPerView: 2,
      }
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
});
 


  