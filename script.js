const itens = [
  {
    tipo: "mochila",
    cor: "rosa",
    local: "quadra interna",
    data: "25/10",
    nome: "Mochila Rosa",
    descricao: "Encontrada na quadra interna em 25/10",
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
  },
  {
    tipo: "acessorios",
    cor: "azul",
    local: "refeitório",
    data: "26/10",
    nome: "Pulseira Azul",
    descricao: "Encontrada no refeitório em 26/10",
    imagem: "imagens/pulseira-azul.jpg"
  },
  {
    tipo: "roupa",
    cor: "estampa",
    local: "corredor 01",
    data: "25/10",
    nome: "Camisa Estampada",
    descricao: "Encontrada no corredor 01 em 25/10",
    imagem: "imagens/camisa-estampada.jpg"
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

  if (filtrados.length === 0) {
    container.innerHTML = "<p>Nenhum item encontrado com esses filtros.</p>";
    return;
  }

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
}
