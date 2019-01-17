;(function() {
  function initSwiper1() {
    var mySwiper1 = new Swiper('.swiper-container-1', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination-1',
        clickable: true,
        renderBullet: function(index, className) {
          return `<span class="swiper-pagination-item swiper-pagination-item-${index} ${className}"></span>'`
        }
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
          return `<span class="swiper-pagination-item swiper-pagination-item-${index} ${className}"></span>'`
        }
      }
    })
  }

  $(document).ready(function() {
    initSwiper1()
    initSwiper2()
  })
})()
