          // the hard way


// $('li').click(function() {
//   if ($(this).css('color') === 'rgb(128, 128, 128)') {
//       $(this).css({
//         textDecoration: 'none',
//         color: 'black'
//       });
//   } else {
//     $(this).css({
//       textDecoration: 'line-through',
//       color: 'gray'
//     });
//   }
// });
//


    //  the easy way

          //chek off speficif todo on click
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

// click on X to delete todo
$('ul').on('click', 'span', function(event) {
  $(this).parent().fadeOut(function() {
    $(this).remove();
  });
  event.stopPropagation();
});


          // add new todo in javascript
// var newToDo = document.querySelector('.addNewTodoInput');
// $('.addNewTodoButton').click(function() {
//   var ul = document.querySelector('ul');
//   var li = document.createElement('li');
//   li.textContent = newToDo.value;
//   ul.appendChild(li);
//   newToDo.value = "";
// });
//

$('.addNewTodoInput').keypress(function(event) {
  if (event.which === 13) {
    //grabbing new to do and store it inside a variable
    var newTodo = $(this).val();
    // create a new li and add it to uneval
    $('.addNewTodoInput').val("");
    $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span>' + newTodo + '</li>');
  }
});

$('h1 i').click(function() {
  $('.addNewTodoInput').fadeToggle(300);
});
