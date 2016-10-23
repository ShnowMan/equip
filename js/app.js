'use strict';

(function(ctx) {
  const essentials = ['Knife or Multitool', 'Firestarter and Matches', 'Map', 'Compass', 'First Aid Kit', 'Flashlight', 'Sun Protection (hat, sunglasses, sunscreen)', 'Whistle', 'Extra Clothing (hat, gloves, socks, underwear)', 'Extra Food (Energy Bar or Gel)'];

  let totalTrips = [];
  let tripName = '';
  let finalItems = [];

  if (localStorage.totalTrips) {
    totalTrips = JSON.parse(localStorage.totalTrips);
  }

  function Icon(name, activityItems) {
    this.name = name;
    this.activityItems = activityItems;
    this.active = false;
  }

  Icon.prototype.getImgSrc = function() {
    if (this.active) {
      return './img/icons/' + this.name + '.png';
    }
    return './img/icons/bw' + this.name + '.png';
  };

  Icon.prototype.toggle = function() {
    this.active = !this.active;
    $('#' + this.name).attr('src', this.getImgSrc());
  };

  Icon.prototype.turnOff = function() {
    this.active = false;
    $('#' + this.name).attr('src', this.getImgSrc());
  };

  function IconSet(icons) {
    this.icons = icons;
    this.icons.forEach(function(icon) {
      icon.turnOff();
    });
  }

  IconSet.prototype.hasOneSelected = function() {
    for (let i = 0;i < this.icons.length;i++) {
      if (this.icons[i].active)
        return true;
    }
    return false;
  };

  IconSet.prototype.handleClick = function(name) {
    this.icons.forEach(function(icon) {
      if (icon.name == name)
        icon.toggle();
      else
        icon.turnOff();
    });
  };

  let iconSets = [
    new IconSet([
      new Icon('hike', ['Hiking Shoes/Boots', '1 Pair of Socks', '1 Pair of Underwear', '1 Shirt/Long­sleeve Shirt', '1 Pair of Shorts/Pants', '30-­40 Liter Backpack', 'Water Bottles', 'Swimsuit (if hiking to a lake)']),
      new Icon('mountain', ['Mountaineering Boots', 'Crampons', 'Ice Axe or Ice Tools', 'Helmet', 'Dry­treated Single Rope (30­-60 meters) (if protecting any pitches or roping up for glacier travel)', 'Harness', 'Pickets', 'Crevasse Rescue Kit (if crossing a glacier)', 'Light Alpine Climbing Rack (if climbing any rock)', 'Gaiters', 'Glacier Sunglasses or Goggles', 'GPS (recommended)', 'Emergency Locator Beacon (recommended)']),
      new Icon('snowboard', ['Snowboard/Splitboard', 'Snowboard Boots', 'Helmet', 'Trekking Poles', 'Avalanche Beacon', 'Snow Shovel', 'Avalanche Probe', 'Snow Study Kit', 'Snow Saw', 'Rutschblock Cord', 'Snowshoes/Skins', 'Snow Jacket', 'Snow Pants', 'Snow Gloves/Liners', 'Balaclava', 'Base Layers', 'Insulation Layer']),
      new Icon('ski', ['Skis (Touring Setup)', 'Ski Boots', 'Helmet', 'Poles', 'Avalanche Beacon', 'Snow Shovel', 'Avalanche Probe', 'Snow Study Kit', 'Snow Saw', 'Rutschblock Cord', 'Skins', 'Snow Jacket', 'Snow Pants', 'Snow Gloves/Liners', 'Balaclava', 'Base Layers', 'Insulation Layer']),
      new Icon('car', ['Tent', 'Sleeping Pad', 'Sleeping Bag', 'Tarp', 'Portable Camping Stove', 'Cookware', 'Utensils for Cooking and Eating', 'Paper Plates', 'Paper Towels', 'Garbage Bags', 'Cooler and Ice', 'Water', 'Firewood (if fires allowed)', 'Fire Starter (matches, newspaper)', 'Bug repellent', 'Warm clothing (sleep clothes)', 'Swimwear and Towel (if camping near water/beach)'])
    ]),
    new IconSet([
      new Icon('sunny', ['Extra Cool/Ventilating Layers', 'Electrolytes (tablets or liquid)']),
      new Icon('rainy', ['Rain Jacket', 'Rain Pants', 'Wide-brimmed Hat', 'Dry Bags', 'Pack Cover']),
      new Icon('cloudy', ['Rain Jacket', 'Rain Pants', 'Waterproof Hat', 'Dry Bags', 'Pack Cover']),
      new Icon('snowy', ['Snow Jacket', 'Snow Pants', 'Snow Gloves/Liners', 'Balaclava', 'Base Layers', 'Insulation Layer'])
    ]),
    new IconSet([
      new Icon('one', []),
      new Icon('two', ['Sleeping Pad', 'Sleeping Bag', 'Pillow', 'Toiletries', 'Tent/Shelter', 'Stove/Pot', 'Fuel', 'Extra Batteries', 'Water Treatment (filter and/or chemical treatment)', 'Food Storage (bear canister or hanging system)', 'Camp Shoes']),
      new Icon('three', ['Sleeping Pad', 'Sleeping Bag', 'Pillow', 'Toiletries', 'Tent/Shelter', 'Stove/Pot', 'Fuel', 'Extra Batteries', 'Water Treatment (filter and/or chemical treatment)', 'Food Storage (bear canister or hanging system)', 'Camp Shoes'])
    ])
  ];

  function populateList() {
    tripName = $('#tripName').val();
    $('#nameEl').text(tripName);
    finalItems = finalItems.concat(essentials);
    iconSets.forEach(function(set) {
      set.icons.forEach(function(icon) {
        if (icon.active) {
          finalItems = finalItems.concat(icon.activityItems);
        }
      });
    });
    finalItems.forEach(function(item) {
      $('#loadList').append('<li>' + item + '</li>');
    });
  }

  function hasSelectedOptions() {
    for (let i = 0;i < iconSets.length;i++) {
      if (!iconSets[i].hasOneSelected())
        return false;
    }
    return true;
  }

  $('.iconset').on('click', 'img', function() {
    iconSets[parseInt($(this).parent().attr('id').replace('set', ''))].handleClick($(this).attr('id'));
  });

  $('#bigFlex').on('submit', function(e) {
    e.preventDefault();
    if (!$('#tripName').val() || !hasSelectedOptions()) {
      return;
    } else {
      populateList();
      $('#bigFlex').toggle();
      $('#saveButton').css('display', 'block');
      $('#clearList').css('display', 'block');
    }
  });

  function Trip(tripName, tripList) {
    this.names = tripName;
    this.lists = tripList;
    this.destination = '';
    this.details = '';
    this.wish = '';
  }

  $('#saveButton').on('click', function() {
    var newTrip = new Trip(tripName, finalItems, '', '', '');
    totalTrips.push(newTrip);
    localStorage.totalTrips = JSON.stringify(totalTrips);
  });

  $('#clearList').on('click', function() {
    location.reload(false);
  });

})(window);
