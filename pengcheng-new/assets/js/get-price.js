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
})
