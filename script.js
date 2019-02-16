
document.getElementById("playerSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("playerInput").value;
  if (value === "")
    return;
  console.log(value);


  const url = "https://www.balldontlie.io/api/v1/players?search=" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      let results = "";
      //console.log(json);
      //console.log(json.data[0].first_name);
      //console.log(json.data.last_name);
      //console.log(json.data.position);
      //console.log(json.data.team.abbreviation);
      //document.getElementById("text").innerHTML = json.data[0].id;
      //document.getElementById("firstName").innerHTML = json.data[0].first_name; 
      //document.getElementById("lastName").innerHTML = json.data[0].last_name; 
      //document.getElementById("position").innerHTML = json.data[0].position;
      //document.getElementById("team").innerHTML = json.data[0].team.abbreviation;
      for (let i = 0; i < json.data.length; i++)
      {
      results += "<p>First Name: " + json.data[i].first_name + "</p>";
      results += "<p>Last Name: " + json.data[i].last_name + "</p>";
      results += "<p>Position: " + json.data[i].position + "</p>";
      results += "<p>Team Abbreviation: " + json.data[i].team.abbreviation + "</p>";
      }
      document.getElementById("playerResults").innerHTML = results;
      /*
      results
      results += '<h2>Weather in ' + json.name + "</h2>";
      results += '<h2>' + json.main.temp + " &deg;F</h2>"
      results += "<p>"
      for (let i=0; i < json.data.length; i++) {
	results += json.Weather[i].description
	if (i !== json.weather.length - 1)
	  results += ", "
      }
      results += "</p>";
      document.getElementById("restaurantResults").innerHTML = results;
      */
    });
  /*

    const url2 = "https://developers.zomato.com/api/v2.1/restaurant?res_id=16774318" + value + ", US&units=imperial" + "&APPID=ba5df144604a5aad9b8ad7ac66ba1004";
  fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
       let forecast = "";
      for (let i=0; i < json.list.length; i++) {
	forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
	forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
	forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
      }
      document.getElementById("forecastResults").innerHTML = forecast;
    });
});
*/
  
});