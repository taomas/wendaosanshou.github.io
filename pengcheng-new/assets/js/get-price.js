;(function() {
  let scrollTimer = ''
  function initScroll() {
    let scrollDom = $('.record-list-content')
    clearTimeout(scrollTimer)
    scrollTimer = setInterval(function() {
      autoScroll(scrollDom)
    }, 2000)
  }

  function autoScroll(obj) {
    var $self = obj.find('.record-list')
    var lineHeight = $self.find('.record-item:first').height()
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
          .find('.record-item:first')
          .appendTo($self)
      }
    )
  }

  function initAnswerEvent(className) {
    let allItem = $(className).find('.answer-item')
    allItem.on('click', function(item) {
      let $this = $(this)
      allItem.removeClass('active')
      $this.addClass('active')
    })
  }

  function initCountup() {
    let tid = null
    let index = 0
    let radomNumber = [6980, 12053, 8992]
    let numAnim = new CountUp('price-number', 6980, 12053)
    numAnim.start()
    clearInterval(tid)
    tid = setInterval(function() {
      if (index < radomNumber.length) {
        index += 1
      } else {
        index = 0
      }
      numAnim.update(radomNumber[index])
    }, 3000)
  }

  $(function() {
    initAnswerEvent('.question-1')
    initAnswerEvent('.question-2')
    initAnswerEvent('.question-3')
    initAnswerEvent('.question-4')
    initCountup()
    initScroll()
  })
})()
