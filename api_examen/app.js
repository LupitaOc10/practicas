const obtenerClima=()=>{
    let icon
    let lat
    let temp=document.querySelector('#temp')
    let des=document.querySelector('#desc')
    let ubicacion=document.querySelector('#ubicacion')
    let iconoAnimado=document.querySelector ('#icono')
    let velo=document.querySelector ('#velo')

if(navigator.geolocation){
    var success =async function(position){
    var latitud = position.coords.latitude,
    longitud = position.coords.longitude;
    console.log("latitud" +latitud + ",longitud" + longitud);
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apikey}&units=metric&lang=es`
    console.log(url);
    const data=await api.json();
    console.log(data)
    const api=await fetch(url);
    const urlIcon=`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    divRes.innerHTML=`
    <h1>${data.name.toUpperCase()},${data.sys.country}</h1>
    <p>Temeperatura:${data.main.temp} °c</p>
    <img src"${urlIcon}">
    <h2>${data.weather[0].description.toUpperCase()}</h2>

    }