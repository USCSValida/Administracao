fetch("https://worldtimeapi.org/api/timezone/America/Sao_Paulo")
  .then(res => res.json())
  .then(data => {
    const d = new Date(data.datetime);
    document.getElementById("hora").textContent =
      d.toLocaleString("pt-BR");
  })
  .catch(() => {
    document.getElementById("hora").textContent =
      new Date().toLocaleString("pt-BR");
  });
