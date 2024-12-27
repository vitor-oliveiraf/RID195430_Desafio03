let tasks = [
  {
    id: 1,
    description: "Implementar tela de listagem de tarefas",
    label: "frontend",
    CreatedAt: "21/08/2024",
    concluded: false,
  },
  {
    id: 2,
    description: "Criar endpoint para cadastro de tarefas",
    label: "backend",
    CreatedAt: "22/08/2024",
    concluded: false,
  },
  {
    id: 3,
    description: "Implementar protótipo da listagem de tarefas",
    label: "ux",
    CreatedAt: "23/08/2024",
    concluded: true,
  },
];

// Criar componente de tarefa
const createTaskComponent = (task) => {
  const sectionList = document.getElementById("sectionList");
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

  // Concluir tarefa
  const button = cardContainer.querySelector("button");
  button.addEventListener("click", () => {
    task.concluded = !task.concluded;
    sectionList.innerHTML = ""; // Limpa a lista
    tasks.forEach((task) => createTaskComponent(task)); // Re-renderiza tarefas
    updatecounter(); // Atualiza o contador
  });

  sectionList.appendChild(cardContainer);

  sectionList.appendChild(cardContainer);
};

// Contador de tarefas concluídas
function updatecounter() {
  const taskConcluded = tasks.filter((task) => task.concluded).length;
  const taskCountElement = document.getElementById("taskCount");
  taskCountElement.innerText = `${taskConcluded} de ${tasks.length} tarefas`;
}

// Criar nova tarefa
const createTask = (event) => {
  event.preventDefault();
  const inputDescription = document.getElementById("inputDescription");
  const inputLabel = document.getElementById("inputLabel");
  const newTask = {
    id: tasks.length + 1,
    description: inputDescription.value,
    label: inputLabel.value,
    CreatedAt: new Date().toLocaleDateString(),
    concluded: false,
  };

  inputDescription.value = "";
  inputLabel.value = "";

  createTaskComponent(newTask);

  tasks = [...tasks, newTask];

  updatecounter();
};

// Função para apagar tarefas concluídas
function clearCompletedTasks() {
  // Filtra apenas as tarefas não concluídas
  tasks = tasks.filter((task) => !task.concluded);

  // Atualiza a exibição no DOM
  const sectionList = document.getElementById("sectionList");
  sectionList.innerHTML = ""; // Limpa todas as tarefas
  tasks.forEach((task) => createTaskComponent(task)); // Re-renderiza tarefas

  // Atualiza o contador
  updatecounter();
}

// window.onload renderiza tudo dentro dele ao carregar a página
window.onload = () => {
  const form = document.getElementById("formTodo");
  form.addEventListener("submit", createTask);

  // forEach percorre o array de tasks e cria um card para cada uma
  tasks.forEach((task) => {
    createTaskComponent(task);
  });
  updatecounter();

  // Event listener para apagar concluídas
  const clearCompletedButton = document.getElementById("clearCompleted");
  clearCompletedButton.addEventListener("click", clearCompletedTasks);
};
