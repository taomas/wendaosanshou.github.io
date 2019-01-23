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
              text = '针对蛀牙'
              break
            case 1:
              text = '针对松动牙'
              break
            case 2:
              text = '针对畸形牙'
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
              text = '仿生美容冠'
              break
            case 1:
              text = '美学全瓷牙'
              break
            case 2:
              text = '3D烤瓷贴面'
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
    initSwiper2()
  })
})()
