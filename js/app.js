'use strict';
// FINAL ARRAY
var fullArray = [];
// DECLARING VARIABLES
var iconHike, iconMount, iconSnowboard, iconSki, iconCamp, iconSunny, iconRainy, iconCloudy, iconSnowy, iconOne, iconTwo, iconThree, essentials;
var active = document.getElementById('activities');
var weath = document.getElementById('weather');
var dur = document.getElementById('duration');
// ITEMS ARRAY
var activityItems = [
  ['Hiking Shoes/Boots', '1 Pair of Socks', '1 Pair of Underwear', '1 Shirt/Long­sleeve Shirt', '1 Pair of Shorts/Pants', '30-­40 Liter Backpack', 'Water Bottles', 'Swimsuit (if hiking to a lake)'],
  ['Mountaineering Boots', 'Crampons', 'Ice Axe or Ice Tools', 'Helmet', 'Dry­treated Single Rope (30­-60 meters) (if protecting any pitches or roping up for glacier travel)', 'Harness', 'Pickets', 'Crevasse Rescue Kit (if crossing a glacier)', 'Light Alpine Climbing Rack (if climbing any rock)', 'Gaiters', 'Glacier Sunglasses or Goggles', 'GPS (recommended)', 'Emergency Locator Beacon (recommended)'],
  ['Snowboard/Splitboard', 'Snowboard Boots', 'Helmet', 'Trekking Poles', 'Avalanche Beacon', 'Snow Shovel', 'Avalanche Probe', 'Snow Study Kit', 'Snow Saw', 'Rutschblock Cord', 'Snowshoes/Skins', 'Snow Jacket', 'Snow Pants', 'Snow Gloves/Liners', 'Balaclava', 'Base Layers', 'Insulation Layer'],
  ['Skis (Touring Setup)', 'Ski Boots', 'Helmet', 'Poles', 'Avalanche Beacon', 'Snow Shovel', 'Avalanche Probe', 'Snow Study Kit', 'Snow Saw', 'Rutschblock Cord', 'Skins', 'Snow Jacket', 'Snow Pants', 'Snow Gloves/Liners', 'Balaclava', 'Base Layers', 'Insulation Layer'],
  ['Tent', 'Sleeping Pad', 'Sleeping Bag', 'Tarp', 'Portable Camping Stove', 'Cookware', 'Utensils for Cooking and Eating', 'Paper Plates', 'Paper Towels', 'Garbage Bags', 'Cooler and Ice', 'Water', 'Firewood (if fires allowed)', 'Fire Starter (matches, newspaper)', 'Bug repellent', 'Warm clothing (sleep clothes)', 'Swimwear and Towel (if camping near water/beach)'],
  ['Extra Cool/Ventilating Layers', 'Electrolytes (tablets or liquid)'], ['Rain Jacket', 'Rain Pants', 'Wide-brimmed Hat', 'Dry Bags', 'Pack Cover'], ['Rain Jacket', 'Rain Pants', 'Waterproof Hat', 'Dry Bags', 'Pack Cover'], ['Snow Jacket', 'Snow Pants', 'Snow Gloves/Liners', 'Balaclava', 'Base Layers', 'Insulation Layer'], [],
  ['Sleeping Pad', 'Sleeping Bag', 'Pillow', 'Toiletries', 'Tent/Shelter', 'Stove/Pot', 'Fuel', 'Extra Batteries', 'Water Treatment (filter and/or chemical treatment)', 'Food Storage (bear canister or hanging system)', 'Camp Shoes']
];
var bwArray = [new Equip('Hiking', 'bwHiking.png'), new Equip('Mountaineering', 'bwMountaineering.png'), new Equip('Backcountry Snowboarding', 'bwSnowboard.png'), new Equip('Backcountry Skiing', 'bwSki.png'), new Equip('Car Camping', 'bwCarCamping.png'), new Equip('Sunny', 'bwSunny.png'),
new Equip('Rainy', 'bwRainy.png'), new Equip('Cloudy', 'bwCloudy.png'), new Equip('Snowy', 'bwSnow.png'), new Equip('1 Day', 'bwLessThan1.png'), new Equip('2-3 Days', 'bw2-3.png'), new Equip('3+ Days', 'bw3Plus.png')];
var colorArray = [new Equip('Hiking', 'hiking.png'), new Equip('Mountaineering', 'mountaineering.png'), new Equip('Backcountry Snowboarding', 'snowboard.png'), new Equip('Backcountry Skiing', 'ski.png'), new Equip('Car Camping', 'carCamping.png'), new Equip('Sunny', 'sunny.png'),
new Equip('Rainy', 'rainy.png'), new Equip('Cloudy', 'cloudy.png'), new Equip('Snowy', 'snow.png'), new Equip('1 Day', 'lessThan1.png'), new Equip('2-3 Days', '2-3.png'), new Equip('3+ Days', '3Plus.png')]
// ACTIVITY CONSTRUCTOR
function Equip(names, src) {
  this.names = names;
  this.src = 'img/icons/' + src;
  fullArray.push(this);
};
// CREATE ACTIVITY ICONS
function icons() {
  // HIKING
  iconHike = document.getElementById('hiking');
  hiking.src = bwArray[0].src;
  // MOUNTAINEERING
  iconMount = document.getElementById('mountaineering');
  mountaineering.src = bwArray[1].src;
  // SNOWBOARDING
  iconSnowboard = document.getElementById('backcountrySnowboarding');
  backcountrySnowboarding.src = bwArray[2].src;
  // SKIING
  iconSki = document.getElementById('backcountrySkiing');
  backcountrySkiing.src = bwArray[3].src;
  // CAMPING
  iconCamp = document.getElementById('carCamping');
  carCamping.src = bwArray[4].src;
  // SUNNY
  iconSunny = document.getElementById('sunny');
  sunny.src = bwArray[5].src;
  // RAINY
  iconRainy = document.getElementById('rainy');
  rainy.src = bwArray[6].src;
  // CLOUDY
  iconCloudy = document.getElementById('cloudy');
  cloudy.src = bwArray[7].src;
  // SNOWY
  iconSnowy = document.getElementById('snowy');
  snowy.src = bwArray[8].src;
  // ONE DAY
  iconOne = document.getElementById('lessThanOne');
  lessThanOne.src = bwArray[9].src;
  // TWO - THREE DAYS
  iconTwo = document.getElementById('twoThree');
  twoThree.src = bwArray[10].src;
  // THREE PLUS DAYS
  iconThree = document.getElementById('threePlus');
  threePlus.src = bwArray[11].src;
};
icons();
// ACTIVITY EVENT LISTENERS
iconHike.addEventListener('click', function() {
  handleIcon(activityItems[0]);
  hiking.src = colorArray[0].src;
  mountaineering.src = bwArray[1].src;
  backcountrySnowboarding.src = bwArray[2].src;
  backcountrySkiing.src = bwArray[3].src;
  carCamping.src = bwArray[4].src;
});
iconMount.addEventListener('click', function() {
  handleIcon(activityItems[1]);
  hiking.src = bwArray[0].src;
  mountaineering.src = colorArray[1].src;
  backcountrySnowboarding.src = bwArray[2].src;
  backcountrySkiing.src = bwArray[3].src;
  carCamping.src = bwArray[4].src;
});
iconSnowboard.addEventListener('click', function() {
  handleIcon(activityItems[2]);
  hiking.src = bwArray[0].src;
  mountaineering.src = bwArray[1].src;
  backcountrySnowboarding.src = colorArray[2].src;
  backcountrySkiing.src = bwArray[3].src;
  carCamping.src = bwArray[4].src;
});
iconSki.addEventListener('click', function() {
  handleIcon(activityItems[3]);
  hiking.src = bwArray[0].src;
  mountaineering.src = bwArray[1].src;
  backcountrySnowboarding.src = bwArray[2].src;
  backcountrySkiing.src = colorArray[3].src;
  carCamping.src = bwArray[4].src;
});
iconCamp.addEventListener('click', function() {
  handleIcon(activityItems[4]);
  hiking.src = bwArray[0].src;
  mountaineering.src = bwArray[1].src;
  backcountrySnowboarding.src = bwArray[2].src;
  backcountrySkiing.src = bwArray[3].src;
  carCamping.src = colorArray[4].src;
});
// ACTIVITY EVENT HANDLER
function handleIcon(icon) {
  var finalList = document.getElementById('finalList');
  // finalList.style.display = 'none';
  essentials = ['Knife or Multitool', 'Firestarter and Matches', 'Map', 'Compass', 'First Aid Kit', 'Flashlight', 'Sun Protection (hat, sunglasses, sunscreen)', 'Whistle', 'Extra Clothing (hat, gloves, socks, underwear)', 'Extra Food (Energy Bar or Gel)'];
  for (var i = 0; i < icon.length; i++) {
    essentials.push(icon[i]);
  }
  // console.log(essentials);
};
// WEATHER EVENT LISTENERS
iconSunny.addEventListener('click', function() {
  handleIcon2(activityItems[5]);
  sunny.src = colorArray[5].src;
  rainy.src = bwArray[6].src;
  cloudy.src = bwArray[7].src;
  snowy.src = bwArray[8].src;
});
iconRainy.addEventListener('click', function() {
  handleIcon2(activityItems[6]);
  sunny.src = bwArray[5].src;
  rainy.src = colorArray[6].src;
  cloudy.src = bwArray[7].src;
  snowy.src = bwArray[8].src;
});
iconCloudy.addEventListener('click', function() {
  handleIcon2(activityItems[7]);
  sunny.src = bwArray[5].src;
  rainy.src = bwArray[6].src;
  cloudy.src = colorArray[7].src;
  snowy.src = bwArray[8].src;
});
iconSnowy.addEventListener('click', function() {
  handleIcon2(activityItems[8]);
  sunny.src = bwArray[5].src;
  rainy.src = bwArray[6].src;
  cloudy.src = bwArray[7].src;
  snowy.src = colorArray[8].src;
});
// WEATHER EVENT HANDLER
function handleIcon2(icon) {
  var finalList = document.getElementById('finalList');
  // finalList.style.display = 'none';
  for (var i = 0; i < icon.length; i++) {
    essentials.push(icon[i]);
  }
};
// DURATION EVENT LISTENERS
iconOne.addEventListener('click', function() {
  handleIcon3(activityItems[9]);
  lessThanOne.src = colorArray[9].src;
  twoThree.src = bwArray[10].src;
  threePlus.src = bwArray[11].src;
});
iconTwo.addEventListener('click', function() {
  handleIcon3(activityItems[10]);
  lessThanOne.src = bwArray[9].src;
  twoThree.src = colorArray[10].src;
  threePlus.src = bwArray[11].src;
});
iconThree.addEventListener('click', function() {
  handleIcon3(activityItems[10]);
  lessThanOne.src = bwArray[9].src;
  twoThree.src = bwArray[10].src;
  threePlus.src = colorArray[11].src;
});
// DURATION EVENT HANDLER
var finalArray;
function handleIcon3(icon) {
  var finalList = document.getElementById('finalList');
  // finalList.style.display = 'none';
  for (var i = 0; i < icon.length; i++) {
    essentials.push(icon[i]);
  }
  finalArray = [];
  essentials.forEach(function(e) {
    if (finalArray.indexOf(e) === -1) {
      finalArray.push(e);
    }
  })
};
// ADD LS
var listEl = document.getElementById('tripName');
//var chartData = localStorage.getItem();
function getLocalStorage() {
  if (chartData) {
    finalArray = [];
    finalArray = JSON.parse(chartData);
  } else {
    console.log('Local storage empty!! Initializing!');
    localStorage.setItem(listName, JSON.stringify(finalArray));
  }
};
// EQUIP ME BUTTON
var listName;
results.addEventListener('click', handleButton);
function handleButton(e) {
  if (!listEl.value) {
    return;
  } else {
    e.preventDefault();
    var finalList = document.getElementById('finalList');
    var loadList = document.getElementById('loadList');
    listName = listEl.value;
    var nameEl = document.getElementById('nameEl');
    for (var j = 0; j < finalArray.length; j++) {
      nameEl.textContent = listName;
      var listArray = document.createElement('li');
      listArray.textContent = finalArray[j];
      loadList.appendChild(listArray);
    }
    finalList.appendChild(loadList);
  }
  tripName.style.display = 'none';
  active.style.display = 'none';
  weath.style.display = 'none';
  dur.style.display = 'none';
  results.style.display = 'none';
  saveButton.style.display = 'block';
  clearList.style.display = 'block';
};
function Trip(tripName, tripList, objDes, objDetails, objWish) {
 this.names = tripName;
 this.lists = tripList;
 this.destination = '';
 this.details = '';
 this.wish = '';
};
function checkLS() {
  if (localStorage.totalTrips) {
    var z = localStorage.getItem('totalTrips');
    var a = JSON.parse(z);
    totalTrips = a;
  }
};
checkLS();
// SAVE BUTTON
var totalTrips = [];
saveButton.addEventListener('click', handleSave);
function handleSave(e) {
  if (localStorage.totalTrips) {
    var z = localStorage.getItem('totalTrips');
    var a = JSON.parse(z);
    totalTrips = a;
  }
  var newTrip = new Trip(listName, finalArray, '', '', '');
  totalTrips.push(newTrip);
  console.log(totalTrips);

  var b = JSON.stringify(totalTrips);
  localStorage.setItem('totalTrips', b);
};
// CLEAR LIST BUTTON
clearList.addEventListener('click', handleClearList);
function handleClearList() {
  // lsClear.style.display = 'block';
  location.reload(false);
};
