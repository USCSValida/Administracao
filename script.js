fetch("https://api.github.com/rate_limit")
.then(r=>{document.getElementById("hora").textContent=new Date(r.headers.get("date")).toLocaleString("pt-BR")})
.catch(()=>{document.getElementById("hora").textContent=new Date().toLocaleString("pt-BR")})