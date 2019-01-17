;(function() {
  function initSwiper1() {
    var mySwiper1 = new Swiper('.swiper-container-1', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      pagination: {
        el: '.swiper-pagination-1',
        clickable: true,
        renderBullet: function(index, className) {
          switch (index) {
            case 0:
              text = '18-30岁的青年群体'
              break
            case 1:
              text = '30-50年的中年人群'
              break
            case 2:
              text = '50岁以上的老年人群'
              break
          }
          return (
            '<span class="swiper-pagination-item ' +
            className +
            '">' +
            text +
            '</span>'
          )
        }
      }
    })
  }

  $(document).ready(function() {
    initSwiper1()
  })
})()
