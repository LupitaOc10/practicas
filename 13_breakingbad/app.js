const obtenerFrase=async()=>{
    const api=await fetch("https://api.breakingbadquotes.xyz/v1/quotes/5");
    const json=await api.json();
    console.log(json);
    let frase=document.querySelector("#frase");
    frase.innerHTML=`
    <h1>${json[0].quote}</h1>
    <p>-${json[0].author}</p>`;
}