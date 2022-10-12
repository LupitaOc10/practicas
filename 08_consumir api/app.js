const consumirAPI= async ()=>{
    const respuesta= await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const json=await respuesta.json();
    console.log("USER ID:"+json.userId);
    console.log("ID:"+json.id);
    console.log("TITULO: "+json. title);
    console.log("COMPLETADO: "+json. completed);
    let div=document.createElement("div");
    div.className="cajita";
    div.innerHTML=` <p><span>User Id:</span> ${json.userId}</p>
<p><span>ID: </span>${json.id}</p>
<p><span>Titulo:</span>${json.title} </p>
<p><span>Completado:</span>${json.completed}</p>`;
document.body.appendChild(div);

}