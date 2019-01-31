;(function() {
  function initItemClick() {
    $('.info-answer-item').on('click', function() {
      $('.info-answer-item').removeClass('active')
      $(this).addClass('active')
    })
  }

  let timer = ''
  function initScroll() {
    let scrollDom = $('.record-list')
    clearTimeout(timer)
    timer = setInterval(function() {
      autoScroll(scrollDom)
    }, 2000)
  }

  function autoScroll(obj) {
    var $self = obj.find('ul')
    var lineHeight = $self.find('li:first').height()
    $self.animate(
      {
        marginTop: -lineHeight + 'px'
      },
      600,
      function() {
        $self
          .css({
            marginTop: 0
          })
          .find('li:first')
          .appendTo($self)
      }
    )
  }

  $(document).ready(function() {
    initItemClick()
    initScroll()
  })
})()
