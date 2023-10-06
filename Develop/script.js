// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.




$(function () {
  $('.saveBtn').on('click', function () {
    let text = $(this).siblings('.description').val()
    let hour = $(this).parent().attr('id')
    localStorage.setItem(hour, text)
  })

  for (let i = 9; i <= 18; i++) {
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
  }

  function pastpresentfuture() {
    let thisHour = dayjs().hour()
    console.log(thisHour)
    $('.time-block').each(function () {
      var timeBlock = parseInt($(this).attr('id').split('-')[1])
      console.log(timeBlock)
      if (timeBlock < thisHour) {
        $(this).addClass('past')
      } else if (timeBlock === thisHour) {
        $(this).addClass('present')
      } else {
        $(this).addClass('future')
      }
    })
  }
  pastpresentfuture()

  $('#currentDay').text(dayjs().format('DD/MM/YYYY'))
  // TODO: Add code to display the current date in the header of the page.
});
