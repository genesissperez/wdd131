//Variables
const input = document.querySelector('favchap');
const button = document.querySelector('button');
const list= document.querySelector('_____');

//Create a li element that will hold each entry's chapter title.
const li = document.createElement('li');

//Create a delete button.
const deleteButton = document.createElement('button');

//Populate the li element variable's textContent or innerHTML with the input value.
li.textContent = input.value;

//Set the delete button's textContent to ❌
deleteButton.textContent = '❌';

//Append the delete button to the li element.
li.append(deleteButton);

list.append(li);