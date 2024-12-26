let tasks = [
  {
    description: "Implementar tela de listagem de tarefas",
    label: "frontend",
    CreatedAt: "21/08/2024",
    concluded: false,
  },
  {
    description: "Criar endpoint para cadastro de tarefas",
    label: "backend",
    CreatedAt: "22/08/2024",
    concluded: true,
  },
  {
    description: "Implementar protótipo da listagem de tarefas",
    label: "ux",
    CreatedAt: "23/08/2024",
    concluded: true,
  },
];

// window.onload renderiza tudo dentro dele ao carregar a página
window.onload = () => {
  const sectionList = document.getElementById("sectionList");

  // forEach percorre o array de tasks e cria um card para cada uma
  tasks.forEach((task) => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "cardContainer";
    cardContainer.innerHTML = `
            <div class="cardInfo">
                <p class=${
                  !task.concluded ? "description" : "descriptionConcluido"
                }>${task.description}</p>
                <div class="labelContainer">
                    <p class="label">${task.label}</p>
                    <p class="createdAt">Criado em: ${task.CreatedAt}</p>
                </div>
            </div>
            <button class=${!task.concluded ? "btnConcluir" : "btnConcluido"}>${
      !task.concluded
        ? "Concluir"
        : "<span class='material-symbols-outlined'>check</span>"
    }</button>
        `;
    sectionList.appendChild(cardContainer);
  });

  // adicionar o contador de tarefas concluídas
  const totalTasks = tasks.length;
  const totalTasksConcluded = tasks.filter((task) => task.concluded).length;
  const sectionCount = document.getElementById("sectionCount");
  const textCounter = document.createElement("p");
  textCounter.className = "taskCounter";
  textCounter.innerText = `${totalTasksConcluded} de ${totalTasks} tarefas concluídas`;

  sectionCount.appendChild(textCounter);
};
