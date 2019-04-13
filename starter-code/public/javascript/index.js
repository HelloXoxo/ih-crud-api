const charactersAPI = new APIHandler("http://localhost:8000")
const template = $("#template")


function displayCharacter(char) {
  let copy = template.clone()
  copy.removeAttr('id')
  copy.find(".name").html(char.name)
  copy.find(".occupation").html(char.occupation)
  copy.find(".cartoon").html(char.cartoon)
  copy.find(".weapon").html(char.weapon)
  $("#results").append(copy)  
}

function clearResults() {
  $("#results").html('')  

}
// getFullList
// getOneRegister
// createOneRegister
// updateOneRegister
// deleteOneRegister
$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    clearResults()
    charactersAPI.getFullList()
    .then(characters => {
      characters.forEach(char => {
        displayCharacter(char)
      })
    })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    clearResults()
    let id = $("[name='character-id']").val()
    charactersAPI.getOneRegister(id)
    .then(character => {
      displayCharacter(character)
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = $("[name='character-id']").val()
    charactersAPI.deleteOneRegister(id)
    .then(character => {

    })
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    charactersAPI.updateOneRegister('1', {
      "name": "Han Sola",
      "occupation": "Smuggler",
      "weapon": "Blaster Pistol",
      "cartoon": true
    })
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    charactersAPI.createOneRegister({
      "name": "Han Sola",
      "occupation": "Smuggler",
      "weapon": "Blaster Pistol",
      "cartoon": true
    })                
  }
})

var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

var map;
function initMap() {

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  const myMarker = new google.maps.Marker({
    position: {lat: -34.397, lng: 150.644},
    map: map,
    title: "Hello IronHack"
  });

  myMarker.addListener('click', function() {
    infowindow.open(map, myMarker);
  });
  
}