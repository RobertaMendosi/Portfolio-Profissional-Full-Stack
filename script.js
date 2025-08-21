// Mostra ano automático no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Botão de boas-vindas
document.getElementById("btn-boasvindas").addEventListener("click", () => {
  alert("Bem-vinda ao meu portfólio! 🚀");
});

// Primeiro “projeto” (placeholder) – já aparece na página
const projetos = [
  { nome: "Hello World do Portfólio", descricao: "Primeiro passo do meu site profissional." }
];

const ul = document.getElementById("lista-projetos");
projetos.forEach(p => {
  const li = document.createElement("li");
  li.textContent = `${p.nome} — ${p.descricao}`;
  ul.appendChild(li);
});
