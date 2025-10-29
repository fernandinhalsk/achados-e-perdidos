const itens = [
  {
    nome: "Mochila Rosa",
    descricao: "Encontrada na sala 203 em 25/10",
    imagem: "imagens/mochila-rosa.jpg"
  },
  {
    nome: "Estojo com glitter",
    descricao: "Encontrado na biblioteca em 27/10",
    imagem: "imagens/estojo-glitter.jpg"
  }
];

function buscarItens() {
  const container = document.getElementById("itensContainer");
  const termo = document.getElementById("searchInput").value.toLowerCase();
  container.innerHTML = "";

  const filtrados = itens.filter(item =>
    item.nome.toLowerCase().includes(termo) ||
    item.descricao.toLowerCase().includes(termo)
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
    container.innerHTML = "<p>Nenhum item encontrado.</p>";
  }
}
