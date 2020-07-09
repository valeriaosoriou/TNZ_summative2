/*OBJECTS*/

var accommodations = [

//AUCKLAND//
      {
      Name: 'Heritage Hotel',
      id: 100,
      type: 'hotel',
      city: 'Auckland',
      island: 'North Island',
      lat: -36.845725,
      lng: 174.761807,
      address: '35 Hobson Street, Auckland CBD, Auckland 1010',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12771.3053451303!2d174.7619141!3d-36.846635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x43b0961bb62cef91!2sHeritage%20Auckland!5e0!3m2!1sen!2snz!4v1575425044424!5m2!1sen!2snz" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
      phoneNumber: '09-379 8553',
      website: 'https://www.heritagehotels.co.nz/heritage-auckland',
      description: 'Choose from two distinctive wings; The Hotel wing honours the building\'s heritage by maintaining a traditional art deco style, while the Tower wing\'s contemporary design best fits the practical demands of the modern traveller.', 
      image: 'images/heritageRoom.jpg',
      price: 157,
      guestMin: 1,
      guestMax: 2,
      nightsMin: 1,
      nightsMax: 5,
      //meals
      breakfast: 25,
      lunch: 30,
      dinner: 35,
      all: 70,
      none: 0
         
      },

      {
      Name: 'Copthorne Hotel Auckland',
      id: 101,
      type: 'hotel',
      city: 'Auckland',
      island: 'North Island',
      lat: -36.848769,
      lng: 174.773769,
      address: '150 Anzac Avenue, Auckland CBD, Auckland 1010',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12770.799796997553!2d174.7736406!3d-36.8496615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee60fcc5d59ae8cc!2sCopthorne%20Hotel%20Auckland%20City!5e0!3m2!1sen!2snz!4v1575428117752!5m2!1sen!2snz" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
      phoneNumber: '09-379 8509',
      website: 'www.milleniumhotels.com',
      description: 'Offering 110 rooms, Copthorne Hotel Auckland City is a tranquil accommodation in Auckland, which provides an outdoor swimming pool. Since 1972, it has been hosting guests in Auckland. It features 24-hour room service, newspaper service and wake up service as well as bureau de change, a storage room and a news stand.', 
      image: 'images/copthorneRoom.jpg',
      price: 157,
      guestMin: 1,
      guestMax: 2,
      nightsMin: 1,
      nightsMax: 5,
      // meals 
      breakfast: 25,
      lunch: 30,
      dinner: 35,
      all: 70,
      none: 0
      },
      
      {
      Name: 'Hilton Hotel',
      id: 102,
      type: 'hotel',
      city: 'Auckland',
      island: 'North Island',
      lat: -36.838666,
      lng: 174.766021,
      address: '147 Quay Street, Auckland CBD, Auckland 1010',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12772.492963236557!2d174.765806!3d-36.8395244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc797af5c706f9874!2sHilton%20Auckland!5e0!3m2!1sen!2snz!4v1575429117271!5m2!1sen!2snz" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
      phoneNumber: '+64-9-978-2000',
      website: 'www.hilton.com',
      description: 'This nautical-style waterfront hotel is 0.4 km from Voyager New Zealand Maritime Museum and 0.7 km from Auckland Ferry Terminal.\ Contemporary rooms with floor-to-ceiling windows offer balconies, flat-screen TVs, WiFi, and tea and coffeemaking facilities. Bathrooms feature separate showers and baths. Some rooms feature harbour views. Suites add separate living areas.\ A seafood restaurant and a sleek bar overlook the harbour. Other amenities include an outdoor heated lap pool and an exercise room. There are also 7 meeting rooms.', 
      image: 'images/hiltonRoom.jpg',
      price: 157,
      guestMin: 1,
      guestMax: 2,
      nightsMin: 1,
      nightsMax: 5,
      // meals 
      breakfast: 25,
      lunch: 30,
      dinner: 35,
      all: 70,
      none: 0
      },

      {
      Name: 'Cordis Hotel',
      id: 103,
      type: 'hotel',
      city: 'Auckland',
      island: 'North Island',
      lat: -36.857118,
      lng: 174.763354,
      address: '83 Symonds Street, Grafton, Auckland 1010',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.3887069515085!2d174.76116531601383!3d-36.85711368768163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUxJzI1LjYiUyAxNzTCsDQ1JzQ4LjEiRQ!5e0!3m2!1sen!2snz!4v1575430135466!5m2!1sen!2snz" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
      phoneNumber: '09-379 5132',
      website: 'www.cordishotels.com',
      description: 'This elegant hotel is a 15-minute walk from the SkyCity Auckland casino and 1 km from the landmark Sky Tower.\ Classic rooms come with free Wi-Fi and flat-screen TVs, plus desks, minibars, and tea and coffeemaking facilities. Upgraded rooms and suites feature access to a private lounge with free butler service, continental breakfast, snacks and evening drinks. Suites add separate living areas; some have kitchenettes. Room service is available.\ There\'s a polished international restaurant, and a luxe lobby bar offering afternoon tea. Other amenities include a spa, a gym, and an outdoor pool with a hot tub.', 
      image: 'images/cordisRoom.jpg',
      price: 157,
      guestMin: 1,
      guestMax: 2,
      nightsMin: 1,
      nightsMax: 5,
      // meals 
      breakfast: 25,
      lunch: 30,
      dinner: 35,
      all: 70,
      none: 0
      },

      {
      Name: 'Parnell Pines Hotel',
      id: 104,
      type: 'motel',
      city: 'Auckland',
      island: 'North Island',
      lat: -36.855255,
      lng: 174.781623,
      address: '320 Parnell Road, Parnell, Auckland 1052',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.6389562348913!2d174.77321195102255!3d-36.85112197983958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4808650f121d%3A0x5674961e72cd510c!2sSwan%20Hotel!5e0!3m2!1sen!2snz!4v1575835204955!5m2!1sen!2snz" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
      phoneNumber: '09-358 0642',
      website: 'https://parnell-pines.aucklandcityhotels.net/en/',
      description: 'Set in a residential neighbourhood, this unassuming motel is a 1-minute walk from a bus stop, 1.1 km from Auckland War Memorial Museum and 6 km from Eden Park.', 
      image: 'images/parnellRoom.jpg',
      price: 90,
      guestMin: 2,
      guestMax: 4,
      nightsMin: 3,
      nightsMax: 10,
      // meals 
      breakfast: 25,
      lunch: 30,
      dinner: 35,
      all: 70,
      none: 0
      },

       {
      Name: 'YHA Auckland City Backpackers',
      id: 105,
      type: 'hostel',
      city: 'Auckland',
      island: 'North Island',
      lat: -36.856602,
      lng: 174.762875,
      address: '490 Queen Street, Auckland CBD, Auckland 1010',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.4111662486!2d174.76056295102262!3d-36.85657597983842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47e89dbef893%3A0xbe76dcae007e05a8!2sYHA%20Auckland%20City%20Backpackers!5e0!3m2!1sen!2snz!4v1575835543988!5m2!1sen!2snz" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
      phoneNumber: '09-309 2802',
      website: 'https://parnell-pines.aucklandcityhotels.net/en/',
      description: 'Set in a residential neighbourhood, this unassuming motel is a 1-minute walk from a bus stop, 1.1 km from Auckland War Memorial Museum and 6 km from Eden Park.', 
      image: 'images/YHARoom.jpg',
      price: 30,
      guestMin: 1,
      guestMax: 1,
      nightsMin: 1,
      nightsMax: 10,
      // meals 
      breakfast: 25,
      lunch: 30,
      dinner: 35,
      all: 70,
      none: 0
      },


//WELLINGTON//
      {
      Name: 'QT Hotel',
      id: 104,
      type: 'hotel',
      city: 'Wellington',
      island: 'North Island',
      lat: -41.291577,
      lng: 174.782443,
      address: '63-67 Cable Street, Te Aro, Wellington 6011',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.784286679529!2d174.7803942161209!3d-41.291798998669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afd03f2b453d%3A0x687bcd10ca9e0dd1!2sQT%20Wellington!5e0!3m2!1sen!2snz!4v1575431167232!5m2!1sen!2snz" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
      phoneNumber: '04-802 8900',
      website: 'www.qthotelsandresorts.com',
      description: 'Opposite the Museum of New Zealand Te Papa Tongarewa, this quirky boutique hotel is 6.1 km from Wellington International Airport.\ All rooms feature 42-inch flat-screen TVs, free Wi-Fi and iPod docks, as well as Nespresso coffeemakers. Room decor ranges from classic to contemporary. Some rooms add balconies or patios, and suites offer kitchens.\ Decorated with chandeliers and dramatic artwork, a luxurious restaurant with a cocktail bar serves classic French fare. Other amenities include an indoor lap pool, an exercise room and a sauna, plus 7 meeting rooms.', 
      image: 'images/qtRoom.jpg',
      price: 157,
      guestMin: 1,
      guestMax: 2,
      nightsMin: 1,
      nightsMax: 5,
      // meals 
      breakfast: 25,
      lunch: 30,
      dinner: 35,
      all: 70,
      none: 0
      },

      {
      Name: 'Boulcott Suites',
      id: 105,
      type: 'house',
      city: 'Wellington',
      island: 'North Island',
      lat: -41.288911,
      lng: 174.773937,
      address: '5 O\'Reily Avenue, Te Aro, Wellington 6011',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.9075336540973!2d174.77179161612088!3d-41.28911684850359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afd617f72a65%3A0xa98a390bbf6787c2!2sBoulcott%20Suites!5e0!3m2!1sen!2snz!4v1575431836937!5m2!1sen!2snz" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
      phoneNumber: '0800 508 025',
      website: 'www.villagegroup.com',
      description: 'On a side street off a bustling road in the city centre, this relaxed apartment hotel is a 13-minute walk from history exhibits at the Museum of New Zealand Te Papa Tongarewa and 1 km from Wellington Railway Station.\ Casual apartments range from studios to 4-bedroom units, and feature living areas, and kitchens with Nespresso machines and dishwashers. All offer free Wi-Fi, flat-screen TVs, fans and washer/dryers. Some have balconies or patios with city views, and/or sleep up to 4 people.\ Parking is available for a surcharge.', 
      image: 'images/boulcottRoom.jpg',
      price: 240,
      guestMin: 1,
      guestMax: 4,
      nightsMin: 2,
      nightsMax: 15,
      // meals 
      breakfast: 25,
      lunch: 30,
      dinner: 35,
      all: 70,
      none: 0
      },
      
      {
      Name: 'Trek Global Backpackers',
      id: 106,
      type: 'hostel',
      city: 'Wellington',
      island: 'North Island',
      lat: -41.288699,
      lng: 174.773533,
      address: '9 O\'Reily Avenue, Te Aro, Wellington 6141',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.9150647794513!2d174.77139831612092!3d-41.288952948493424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afd618dce6f9%3A0xf63e177802247b71!2sTrek%20Global%20Backpackers!5e0!3m2!1sen!2snz!4v1575438896905!5m2!1sen!2snz" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
      phoneNumber: '04-471 3480',
      website: 'www.trekglobal.net',
      description: 'Set 1 km from the Museum of New Zealand Te Papa Tongarewa, this relaxed hostel close to restaurants is also 5 km from the Wellington Zoo. Wellington train station is 1 km away.', 
      image: 'images/hiltonRoom.jpg',
      price: 30,
      guestMin: 1,
      guestMax: 1,
      nightsMin: 1,
      nightsMax: 10,
      // meals 
      breakfast: 25,
      lunch: 30,
      dinner: 35,
      all: 70,
      none: 0
      },

//QUEENSTOWN//
      {
      Name: 'Heritage Queenstwon',
      id: 107,
      type: 'Motel',
      city: 'Queenstwon',
      island: 'South Island',
      lat: -45.036810,
      lng: 168.642061,
      address: '91 Fernhill Road, Queenstown 9300',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11277.457834756387!2d168.6420179!3d-45.03782549999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf2bf89a539d8924!2sHeritage%20Queenstown!5e0!3m2!1sen!2snz!4v1575440207270!5m2!1sen!2snz" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
      phoneNumber: '03-450 1500',
      website: 'www.heritageshotels.com',
      description: 'Overlooking Lake Wakatipu and the Remarkables mountain range, this upscale alpine hotel is 18 km from the Coronet Peak Ski Area and 9 km from Queenstown Airport.', 
      image: 'images/qtnMotelRoom.jpg',
      price: 90,
      guestMin: 1,
      guestMax: 4,
      nightsMin: 3,
      nightsMax: 10,
      // meals 
      breakfast: 25,
      lunch: 30,
      dinner: 35,
      all: 70,
      none: 0
      },

      {
      Name: 'Colonial Village',
      id: 108,
      type: 'Motel',
      city: 'Queenstown',
      island: 'South Island',
      lat: -45.033886,
      lng: 168.676817,
      address: '136 Frankton Road, Queenstown 9300',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.5490417147435!2d168.6741023162176!3d-45.034079188136474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51d8b6e500ce5%3A0x5fdbb624cba6bd7f!2sColonial%20Village%20Motel!5e0!3m2!1sen!2snz!4v1575441131546!5m2!1sen!2snz" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
      phoneNumber: '03-442 7629',
      website: 'www.colonialvillage.co.nz',
      description: '', 
      image: 'images/colonialMotelRoom.jpg',
      price: 90,
      guestMin: 1,
      guestMax: 4,
      nightsMin: 3,
      nightsMax: 10,
      // meals 
      breakfast: 25,
      lunch: 30,
      dinner: 35,
      all: 70,
      none: 0
      },

];


/*LANDING PAGE BACKGROUNDS*/
function cycleBackgrounds() {
  var index = 0;
  $imageEls = $('.container-slides .slide'); // Get the images to be cycled.
  setInterval(function () {
    // Get the next index.  If at end, restart to the beginning.
    index = index + 1 < $imageEls.length ? index + 1 : 0;
    // Show the next
    $imageEls.eq(index).addClass('show');
    // Hide the previous
    $imageEls.eq(index - 1).removeClass('show');
  }, 4000);
}

// Document Ready.
$(function () {
  cycleBackgrounds();
});


/*TRANSITIONS*/
//BACK TO TOP
var backToTop = $("#backBtn");
//The pixel amount scrolled before back to top button appears
var scrollAmount = 150;
      $(window).scroll( function() {
      if ($(this).scrollTop() > scrollAmount) {
      backToTop.fadeIn();
      } else {
      backToTop.fadeOut();
      }
      });

      backToTop.click( function(e) {
      $("html, body").animate({scrollTop: 0}, 300);
      });


/*DATE PICKER*/
$("#checkInDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
  minDate: new Date(),
  maxDate: '+1y',
  onSelect: function(date){

      var selectedDate = new Date(date);
      var msecsInADay = 86400000;
      var stDate = new Date(selectedDate.getTime() + msecsInADay);

     //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
      $("#checkOutDate").datepicker( "option", "minDate", stDate );
      var enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);
      $("#checkOutDate").datepicker( "option", "maxDate", enDate );
  }
});

$("#checkOutDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true
});


/*INITIALIZE MAP*/
var hotelMap;
var hotelMarkers = [];
var hotelWindows = [];

$(document).ready(function() {

      //accesing apiKey from config.json
      var myKey = JSON.parse(apiKey); //convert JSON data into js object 

      //dynamically ctreating the script element and giving rc attribute to the google plugin with key from external json file
      var script = document.createElement('script');
      script.src ='https://maps.googleapis.com/maps/api/js?key='+ myKey[0].key + '&callback=initMap'; //copy the key from above "mykey[0}.key; dinamic key";
      document.getElementsByTagName('body')[0].appendChild(script);

});

function initMap() {
      var auckland = {lat:-36.8485  ,lng: 174.7633};
      var wellington = {lat: -41.2732596, lng: 174.7762};
      var queenstown = {lat: -45.0312, lng: 168.6626};

      hotelMap = new google.maps.Map(
            document.getElementById('map'), {zoom: 13, center: auckland});
                  
                  
}

function clearMarkers() {
      for (let i in hotelMarkers ){
            hotelMarkers[i].setMap(null);
            hotelMarkers[i] = null;
            hotelWindows[i] = null;
      }

      hotelMarkers = [];
      hotelWindows = [];
}

// hotelModal

// function hotelModal(id) {
//       result = accommodations.filter( element => element.id == id );

//       console.log(result[0]);
// }

// INFO WINDOW
function createInfoWindow(marker, result, calculations) {

      var contentString = `
            <div id="content">
            <img class"text-center" src="${result.image}">
            <h1 id="firstHeading" class="firstHeading">${result.Name}</h1>
            <div id="bodyContent">
            <h3><b>${result.city} ${result.island}</b><h3>
            <h6><i class="fas fa-map-signs"></i>${result.address}</h6>
            <h6 class="btn-link"><i class="fas fa-globe"></i> ${result.website}</h6>
            <h6><i class="fas fa-phone"></i> ${result.phoneNumber}</h6>
            <h5><i class="fas fa-dollar-sign"></i> ${result.price}/night</h5>
            <p>${result.description}</p>
            <h5> Total Price: <i class="fas fa-dollar-sign"></i> ${calculations.total} NZD</h5>
            <div>${result.iframe}</div>
            <a href="#userFeedback"><button class="btn btn-blue btn-lg btn-block">Book Now</button></a>
            
      `;

      return new google.maps.InfoWindow({
            content: contentString
      });
}

//TOTAL CALCULATIONS: DAYS * GUESTS * (MEAL + PRICE)
function doCalculations(result) {

      return {
            total: daysBetween( searchData.checkin, searchData.checkout)  * parseInt(searchData.guests) * (result.price + parseInt(searchData.meals)) 
      };
}


//MARKERS
function createMarker(result) {

      var marker = new google.maps.Marker({
            position: {
                  lat: result.lat,
                  lng: result.lng
            },
            map: hotelMap,
            title: result.Name
      });

      return marker;
}

function mapMarkers(results) {

      clearMarkers();

      for(let i in results) {
            result = results[i];
            hotelMarkers[i] = createMarker(result);
            hotelWindows[i] = createInfoWindow(hotelMarkers[i], result, doCalculations(result));
            
            hotelMarkers[i].addListener('click', function(){ 
                  hotelWindows[i].open(hotelMap, hotelMarkers[i]);
            });
      }

      // Animar o Mover el Mapa hacia donde estén los resultados

}

// SEARCH
var searchData = {};

$(document).ready(function() {
      //initMap();
      $('#searchForm').on('submit', function(e){
            e.preventDefault();

            searchData = {
                  location: $('#searchForm #location').val(),
                  guests: $('#searchForm #guests').val(),
                  checkin: $('#searchForm #checkInDate').val(),
                  checkout: $('#searchForm #checkOutDate').val(),
                  meals: $('#searchForm #meals').val(),
            };

            var results = searchObjects(searchData);

            //GO TO MAP
            $([document.documentElement, document.body]).animate({
                  scrollTop: $('#header').offset().top
            }, 500);

            //POPULATE MAP WITH RESULTS
            mapMarkers(results);

            // Habilitar un modal con cada uno de los resultados
            /// Calcular los datos que van en el modal
            
      });
});






//DAYS CALCULATION
var daysBetween = function(a,b) {
      console.log(a,b);
      var inDate = new Date(a);
      var outDate = new Date(b);

      return (outDate.getTime() - inDate.getTime()) / 86400000;

};


//FILTERS
function searchObjects(searchData) {
      console.log(searchData);
      function isGuestNumberLegit(guestNum, guestMin, guestMax) {
            return (!(guestNum <= guestMin || guestNum <= guestMax)); 

      }
      function choosenFood(guestFood, breakfast, lunch, dinner, all) {
            return (!(guestFood == breakfast || guestFood == lunch || guestFood == dinner || guestFood == all));
      }
      

      var results = [];
      console.log(results);
      for(let place of accommodations) {
            
            // LOCATION
            if ( place.city != searchData.location) {
                  continue;   
            }

            //GUESTS
            var guests = parseInt(searchData.guests);

            if (isGuestNumberLegit(guests, place.guestMin, place.guestMax)) {
                  continue;
            }

            // DATES RANGE
            var days = daysBetween( searchData.checkin, searchData.checkout);

            if( !(place.nightsMin <= days && days <= place.nightsMax) ) {
                  continue;
            }

            //MEALS

            var food = parseInt(searchData.meals);
           if (choosenFood(searchData.breakfast, searchData.lunch, searchData.dinner, searchData.all)){
                  continue;

           }
       






            results.push(place);
      }
      return results;
      

}


