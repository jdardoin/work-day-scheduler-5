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
    })
  }
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
