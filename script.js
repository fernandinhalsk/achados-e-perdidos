const itens = [
  {
    tipo: "mochila",
    cor: "rosa",
    local: "sala 203",
    data: "25/10",
    nome: "Mochila Rosa",
    descricao: "Encontrada na sala 203 em 25/10",
    imagem: "imagens/mochila-rosa.jpg"
  },
  {
    tipo: "estojo",
    cor: "rosa",
    local: "biblioteca",
    data: "27/10",
    nome: "Estojo com glitter",
    descricao: "Encontrado na biblioteca em 27/10",
    imagem: "imagens/estojo-glitter.jpg"
  }
];

function filtrarItens() {
  const tipo = document.getElementById("tipoFiltro").value;
  const cor = document.getElementById("corFiltro").value;
  const local = document.getElementById("localFiltro").value;
  const data = document.getElementById("dataFiltro").value;
  const container = document.getElementById("itensContainer");
  container.innerHTML = "";

  const filtrados = itens.filter(item =>
    (tipo === "" || item.tipo === tipo) &&
    (cor === "" || item.cor === cor) &&
    (local === "" || item.local === local) &&
    (data === "" || item.data === data)
  );

  filtrados.forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";
    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}">
      <h3>${item.nome}</h3>
      <p>${item.descricao}</p>
      <button onclick="alert('Solicitação enviada!')">Solicitar Retirada</button>
    `;
    container.appendChild(card);
  });

  if (filtrados.length === 0) {
    container.innerHTML = "<p>Nenhum item encontrado com esses filtros.</p>";
  }
}
