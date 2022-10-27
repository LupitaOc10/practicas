
/**
 * Created by zsq on 2016/11/13.
 */
// Llama a la función jsonp para solicitar la ciudad actual
jsonp('https://api.map.baidu.com/api?v=2.0&ak=Dv1NMU23dh1sGS9n2tUouDEYY96Dfzh3&s=1&callback=getCity');
window.onload = function () {
         // Solicitar datos del vehículo meteorológico
    btn.addEventListener('click',function () {
        jsonp(createUrl()[0]);
        jsonp(createUrl()[1]);
    });
    text.addEventListener('keydown', function (e){
        if (e.keyCode == 13) {
            jsonp(createUrl()[0]);
            jsonp(createUrl()[1]);
        }
    });
}

function getCity() {
    function city(result) {
                 // Eliminar la "ciudad" después del nombre de la ciudad
        var city = result.name.substring(0, result.name.length - 1);
                 // Solicitar datos meteorológicos para la ciudad actual
        jsonp(createUrl(city)[0]);
        jsonp(createUrl(city)[1]);
    }
    var cityName = new BMap.LocalCity();
    cityName.get(city);
}

 // Función de solicitud de datos
function jsonp(url) {
    var script = document.createElement('script');
    script.src = url;
    document.body.insertBefore(script, document.body.firstChild);
    document.body.removeChild(script);
}

 // Función de devolución de llamada para solicitud de datos exitosa, utilizada para colocar los datos obtenidos en la posición correspondiente en la página
function getWeather(response) {
    var oSpan = document.getElementsByClassName('info');
    var data = response.result;
    oSpan[0].innerHTML = data[0].citynm;
    oSpan[1].innerHTML = data[0].days;
    oSpan[2].innerHTML = data[0].week;
    oSpan[3].innerHTML = data[0].weather;
    oSpan[4].innerHTML = data[0].temperature;
    oSpan[5].innerHTML = data[0].winp;
    oSpan[6].innerHTML = data[0].wind;

    var aDiv = document.getElementsByClassName('future_box');
    for (var i = 0; i < aDiv.length; i++) {
        var aSpan = aDiv[i].getElementsByClassName('future_info');
        aSpan[0].innerHTML = data[i + 1].days;
        aSpan[1].innerHTML = data[i + 1].week;
        aSpan[2].innerHTML = data[i + 1].weather;
        aSpan[3].innerHTML = data[i + 1].temperature;
    }
         // Reemplazar diferentes imágenes del clima en función de los datos devueltos
    changeImg(response);
}

function getTodayWeather(response) {
    var oSpan = document.getElementsByClassName('info');
    var data = response.results;
    oSpan[7].innerHTML = data[0].pm25;
    oSpan[8].innerHTML = data[0].index[4].zs;
    oSpan[9].innerHTML = data[0].index[1].zs;
    oSpan[10].innerHTML = data[0].index[2].zs;
    oSpan[11].innerHTML = data[0].index[0].zs;
}

 // Cambia la imagen correspondiente en la página de acuerdo con los datos obtenidos
function changeImg(data) {
    var firstImg = document.getElementsByTagName("img")[0];
    var firstWeatherId = data.result[0].weatid;
    chooseImg(firstWeatherId, firstImg);

    var aImg = document.getElementById('future_container').getElementsByTagName('img');
    for (var j = 0; j < aImg.length; j++) {
        var weatherId = data.result[j + 1].weatid;
        chooseImg(weatherId, aImg[j]);
    }
}

 // Seleccionar imagen
function chooseImg(id, index) {
    switch (id) {
        case '1':
            index.src = 'images/weather_icon/1.png';
            break;
        case '2':
            index.src = 'images/weather_icon/2.png';
            break;
        case '3':
            index.src = 'images/weather_icon/3.png';
            break;
        case '4':
        case '5':
        case '6':
        case '8':
        case '9':
        case '10':
        case '11':
        case '12':
        case '13':
        case '20':
        case '22':
        case '23':
        case '24':
        case '25':
        case '26':
            index.src = 'images/weather_icon/4.png';
            break;
        case '7':
            index.src = 'images/weather_icon/6.png';
            break;
        case '14':
        case '15':
        case '16':
        case '17':
        case '18':
        case '27':
        case '28':
        case '29':
            index.src = 'images/weather_icon/5.png';
            break;
        case '19':
        case '21':
        case '30':
        case '31':
        case '32':
        case '33':
            index.src = 'images/weather_icon/7.png';
            break;
        default:
            index.src = 'images/weather_icon/8.png';
    }
}

 // Crear datos de solicitud y url basados ​​en el nombre de la ciudad
function createUrl() {
    var cityName = '';
    if (arguments.length == 0) {
        cityName = document.getElementById('text').value;
    } else {
        cityName = arguments[0];
    }
    var urls = [];
    urls[0] = 'https://sapi.k780.com/?app=weather.future&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json&jsoncallback=getWeather&weaid=' + encodeURI(cityName);
    urls[1] = 'https://api.map.baidu.com/telematics/v3/weather?output=json&ak=FK9mkfdQsloEngodbFl4FeY3&callback=getTodayWeather&location=' + encodeURI(cityName);
    return urls;
}