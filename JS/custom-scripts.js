function newItem() {
  //❗ adding new item to the list of items
  let li = $('<li></li>'); // this creates a new element
  let inputValue = $('#input').val(); // saves in a variable what we write in input field
  li.append(inputValue); // adds value from input field to the li element

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
  }

  // crossing item with double click
  li.on('dblclick', function () {
    li.toggleClass('strike'); // adds strike class to the li element on double click
  });

  //Adding the delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>'); // this creates a new element
  crossOutButton.append(document.createTextNode('X')); // this creates X on document
  li.append(crossOutButton); //  adds X to li element on list

  crossOutButton.on('click', deleteListItem); // event listener on click X delete item
  function deleteListItem() {
    li.addClass('delete'); // adding class to li of display: none
  }
  $('#list').sortable();
}
