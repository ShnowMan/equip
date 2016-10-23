'use strict';

var tripsArray = [];
var where, details, wish;
// TAKES INFO FROM LOCAL STORAGE
// function checkLS() {
//   if (localStorage.totalTrips) {
//     var z = localStorage.getItem('totalTrips');
//     var a = JSON.parse(z);
//     tripsArray = a;
//   }
// };
function checkLS() {
  if (localStorage.totalTrips){
    tripsArray = JSON.parse(localStorage.getItem('totalTrips'));
  }
};

checkLS();
// INPUT NAMES TO DROPDOWN
function dropInput() {
  var dropDown = document.getElementById('dropdown');
  for(var i = 0; i < tripsArray.length; i ++) {
    var dropNames = document.createElement("option");
    dropNames.textContent = tripsArray[i].names;
    dropNames.value = i;
    dropDown.appendChild(dropNames);
  }
};
function dropInput() {
  tripsArray.forEach(function(i){
    $('#dropdown').append('<option>' + i.names + '</option>')

  })
};



dropInput();
// CREATE DROP LIST
function createDropList() {
  var dropValue = document.getElementById('dropdown').value;
  var listArticle = document.getElementById('listArticle');
  var listContainer = document.getElementById('listContainer');
  listArticle.removeChild(listContainer);
  var listContainer = document.createElement('ul');
  listContainer.setAttribute('id', 'listContainer');
  listArticle.appendChild(listContainer);
  if (!dropValue) {
    alert('Head to the EQUIP tab to get a list started');
  } else {
    var emptyList = [];
    for (var i = 0; i < tripsArray[dropValue].lists.length; i++) {
      emptyList.push(tripsArray[dropValue].lists[i]);
      var equipEl = document.createElement('li');
      equipEl.textContent = emptyList[i];
      listContainer.appendChild(equipEl);
    }
  }
};
// PUT VALUES INTO LOCAL STORAGE
function newLS() {
  var dropValue = document.getElementById('dropdown').value;
  where = document.getElementById('where').value;
  tripsArray[dropValue].destination = where;
  details = document.getElementById('details').value;
  tripsArray[dropValue].details = details;
  wish = document.getElementById('wish').value;
  tripsArray[dropValue].wish = wish;
  // LS ARRAY
  var storeArray = JSON.stringify(tripsArray);
  localStorage.setItem('totalTrips', storeArray);
};
// PRINT FORM CONTENT
function makePastLists() {
  // event.preventDefault();
  var dropValue = document.getElementById('dropdown').value;
  var inputSection = document.getElementById('inputSection');
  var journalEntries = document.getElementById('journalEntries');
  inputSection.removeChild(journalEntries);
  var journalEntries = document.createElement('div');
  journalEntries.setAttribute('id', 'journalEntries');
  var destination = document.createElement('h5');
  destination.textContent = 'Destination:';
  journalEntries.appendChild(destination);
  var inputDestination = document.createElement('p');
  inputDestination.textContent = tripsArray[dropValue].destination;
  journalEntries.appendChild(inputDestination);
  var tripDetails = document.createElement('h5');
  tripDetails.textContent = 'Trip Details:';
  journalEntries.appendChild(tripDetails);
  var inputTripDetails = document.createElement('p');
  inputTripDetails.textContent = tripsArray[dropValue].details;
  journalEntries.appendChild(inputTripDetails);
  var wishIdBrought = document.createElement('h5');
  wishIdBrought.textContent = 'Wish I\'d Brought:'
  journalEntries.appendChild(wishIdBrought);
  var inputWish = document.createElement('p');
  inputWish.textContent = tripsArray[dropValue].wish;
  journalEntries.appendChild(inputWish);
  inputSection.appendChild(journalEntries);
};
// CHECK IF DROPDOWN HAS INFOMATION
var inputForm = document.getElementById('inputForm');
function clearForm() {
  where = null;
  details = null;
  wish = null;
};
function dropDownInfo() {
  var dropValue = document.getElementById('dropdown').value;
  var journalEntries = document.getElementById('journalEntries')
  if (tripsArray[dropValue].destination.length === 0 && tripsArray[dropValue].details.length === 0 && tripsArray[dropValue].wish.length === 0) {
    inputForm.removeAttribute('hidden');
    journalEntries.style.display = 'none';
    clearForm();
  } else {
    makePastLists();
    inputForm.setAttribute("hidden", true);
  }
};
// DROPDOWN SUBMIT BUTTON
submit.addEventListener('click', handleSubmitClick);
function handleSubmitClick(e) {
  e.preventDefault();
  createDropList();
  dropDownInfo();
};
// SAVE LISTS BUTTON
var pastListButton = document.getElementById('pastListButton');
var formArticle = document.getElementById('formArticle');
pastListButton.addEventListener('click', handleSaveClick);
function handleSaveClick(e) {
  e.preventDefault();
  console.log('THIS IS SAVED TO LOCAL STORAGE');
  newLS();
  makePastLists();
  location.reload(false);
};
// CLEAR ALL BUTTONS
deleted.addEventListener('click', handleDeleteClick);
function handleDeleteClick() {
  console.log('deleting local storage!');
  alert("Press 'OK' to delete ALL you past list entries.");
  location.reload(false);
  localStorage.clear();
};
