;(function() {
  function onNavToogle() {
    document
      .querySelector('.js-planting')
      .addEventListener('click', function() {
        location.href = 'https://www.baidu.com'
      })
  }

  function initSwiper() {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
  window.onload = function() {
    initSwiper()
    // onNavToogle()
  }
})()
