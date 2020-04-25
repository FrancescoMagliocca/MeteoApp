
/* @Francesco Magliocca*/
function getWeather(){
    $('.weatherResponse').html('');
    $('.descrizionetempo').html('');
    $('.temperaturacittà').html('');
    $('.tempmax').html('');
    $('.tempmin').html('');
    $('.umidita').html('');
    $('.press').html('');
    $('.visibilita').html('');
    $('.vento').html('');
    var cityName = $('#cityName').val();
    var apiCall='http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=3cb11b1102707c112843ac191a5499df';
     if(cityName=" "){
        document.body.style.backgroundImage = "url('ImmaginiSfondo/sfondoprincipale.jpg')";
     }
    $.getJSON(apiCall, weatherCallback);
    

    function weatherCallback(weatherData){
    var cityName = weatherData.name;
   
    var country = weatherData.sys.country;
    var description = weatherData.weather[0].main;
    var temperature = weatherData.main.temp;
    var tempmassima = weatherData.main.temp_max;
    var tempminima = weatherData.main.temp_min;
    var umidi = weatherData.main.humidity;
    var pressione = weatherData.main.pressure;
    var visi = weatherData.visibility;
    var vento = weatherData.wind.speed;
    
   $('.weatherResponse').append(" " + cityName.toUpperCase() + " " + country + " is:");
   $('.descrizionetempo').append( description);
   $('.temperaturacittà').append(temperature+"°C");
   $('.tempmax').append( tempmassima+"°C");
   $('.tempmin').append( tempminima+"°C");
   $('.umidita').append( umidi+"%");
   $('.press').append( pressione+" hPa");
   $('.visibilita').append( visi);
   $('.vento').append( vento+" m/s");
   switch (description) {
    case 'Clear':
        document.body.style.backgroundImage = "url('ImmaginiSfondo/clearPicture.jpg')";
        break;
    
    case 'Clouds':
        document.body.style.backgroundImage = "url('ImmaginiSfondo/cloudy.jpg')";
        break;

    case 'Rain':
    case 'Drizzle':
        document.body.style.backgroundImage = "url('ImmaginiSfondo/Rain.jpg')";
        break;

    case 'Mist':
        document.body.style.backgroundImage = "url('ImmaginiSfondo/mistPicture.jpg')";
        break;    
    
    case 'Thunderstorm':
        document.body.style.backgroundImage = "url('ImmaginiSfondo/stormPicture.jpg')";
        break;
    
    case 'Snow':
        document.body.style.backgroundImage = "url('ImmaginiSfondo/snowPicture.jpg')";
        break;
        
    default:
        
        break;
}

   }
}

$("#cityName").keypress(function(e) {
    if (e.which == 13) {
      getWeather();
    }
  });

