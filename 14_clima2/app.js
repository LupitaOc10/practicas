const verClima=async()=>{
    let apikey="a9cf18b4a4e777fbe6998aa3eb8f42ea";
    let divRes=document.querySelector("#res");
    if(navigator.geolocation){
        var success =async function(position){
        var latitud = position.coords.latitude,
        longitud = position.coords.longitude;
        console.log("latitud" +latitud + ",longitud" + longitud);
        let url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apikey}&units=metric&lang=es`
        console.log(url);
        const api=await fetch(url);
        const data=await api.json();
        console.log(data)
        const urlIcon=`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        divRes.innerHTML=`
        <h1>${data.name}</h1>
        <p>TEMPERATURA:${data.main.temp}°C</p>
        <img src="${urlIcon}">
        <h2>${data.weather[0].description.toUpperCase()}</h2>
        <p>MIN:${data.main.temp_min}</p>
        <p>MAX:${data.main.temp_max}</p>
        <p>PRESION:${data.main.pressure}</p>
        `;
    }
        navigator.geolocation.getCurrentPosition(success, function(msg){
        console.error( msg );
        });
        }
}
