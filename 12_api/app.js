var divResults= document.querySelector("#Resultado");
const verFotos= async ()=>{
    const respuesta=await fetch ("https://jsonplaceholder.typicode.com/photos")
    const json=await respuesta.json();
    console.log(json)
    var i=0;
    json.map(foto=>{
        if(i==10){
            return;
        }
        let divFoto=document.createElement("div");
        divFoto.className="user";
        divFoto.innerHTML=`
        <img src="${foto.url}"width=100%" height="">
        <p>${foto.tittle}</p>
    `;
    divResults.appendChild(divFoto);
    i++;
    });
}
const clearfoto=async()=>{
    divResults.innerHTML="";
}