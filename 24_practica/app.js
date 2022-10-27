const apiRick=async(pagina)=>{
  let url="https://rickandmortyapi.com/api/character/?page="+pagina;
  const api=await fetch(url);
  const data=await api.json();
  console.log(data);
  divRes=document.querySelector("#resultado");
  divRes.innerHTML=""
  data.results.map(item=>{
      divItem=document.createElement('div')
      divItem.innerHTML=`
      <div class="card" style="width: 18rem;">
          <img src="${item.image}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text"><b>Estatus: </b>${item.status}</p>
          <p class="card-text"><b>Especie: </b>${item.species}</p>
          <p class="card-text"><b>Genero: </b>${item.gender}</p>
      </div>
      </div>
      `
      divRes.appendChild(divItem);
      
  });
}
const apiEpi=async(pagin)=>{
  let ur="https://rickandmortyapi.com/api/episode?page="+pagin;
  const api=await fetch(ur);
  const data=await api.json();
  console.log(data);
  divRes=document.querySelector("#resultado");
  divRes.innerHTML=""
  data.results.map(item=>{
      divItem=document.createElement('div')
      divItem.innerHTML=`
      <div class="card" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">${item.id}</h5>
          <p class="card-text"><b>Estatus: </b>${item.name}</p>
          <p class="card-text"><b>Estatus: </b>${item.episode}</p>
          <p class="card-text"><b>Especie: </b>${item.air_date}</p>
          <p class="card-text"><b>Estatus: </b>${item.created}</p>
      </div>
      </div>
      `
      divRes.appendChild(divItem);
      
  });
}
const apiLoc=async(pagin)=>{
  let ur="https://rickandmortyapi.com/api/location?page="+pagin;
  const api=await fetch(ur);
  const data=await api.json();
  console.log(data);
  divRes=document.querySelector("#resultado");
  divRes.innerHTML=""
  data.results.map(item=>{
      divItem=document.createElement('div')
      divItem.innerHTML=`
      <div class="card" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">${item.id}</h5>
          <p class="card-text"><b>Estatus: </b>${item.name}</p>
          <p class="card-text"><b>Estatus: </b>${item.type}</p>
          <p class="card-text"><b>Especie: </b>${item.dimension}</p>
          <p class="card-text"><b>Estatus: </b>${item.created}</p>
      </div>
      </div>
      `
      divRes.appendChild(divItem);
      
  });
}
