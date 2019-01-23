;(function() {
  function initSwiper1() {
    var mySwiper1 = new Swiper('.swiper-container-1', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      pagination: {
        el: '.swiper-pagination-1'
      }
    })
  }

  function initSwiper2() {
    var mySwiper2 = new Swiper('.swiper-container-2', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination-2',
        clickable: true,
        renderBullet: function(index, className) {
          switch (index) {
            case 0:
              text = '荣誉资质'
              break
            case 1:
              text = '公益活动'
              break
            case 2:
              text = '医院环境'
              break
            case 3:
              text = '最新学术'
              break
          }
          return (
            '<li class="swiper-pagination-item ' +
            className +
            '">' +
            text +
            '</li>'
          )
        }
      }
    })
  }

  function initSwiper3() {
    var mySwiper1 = new Swiper('.swiper-container-3', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: {
        delay: 20000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      }
    })
  }

  $(document).ready(function() {
    initSwiper1()
    initSwiper2()
    initSwiper3()
  })
})()
