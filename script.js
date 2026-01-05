fetch("https://api.github.com")
  .then(res => {
    const serverDate = res.headers.get("date");
    const d = new Date(serverDate);
    document.getElementById("hora").textContent =
      d.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  })
  .catch(() => {
    document.getElementById("hora").textContent =
      new Date().toLocaleString("pt-BR");
  });