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
        el: '.swiper-pagination-2'
      }
    })
  }

  window.onload = function() {
    initSwiper1()
    initSwiper2()
  }
})()
