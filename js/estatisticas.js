import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function carregarEstatisticas() {

  const feedbacks = [];

  const querySnapshot = await getDocs(
    collection(db, "feedbacks")
  );

  querySnapshot.forEach((doc) => {
    feedbacks.push(doc.data());
  });

  const total = feedbacks.length;

  document.getElementById("totalFeedbacks").textContent = total;

  let somaNotas = 0;
  let totalSim = 0;

  const distribuicaoNotas = [0, 0, 0, 0, 0];

  const tabela = document.getElementById("tabelaComentarios");

  tabela.innerHTML = "";

  feedbacks.forEach((item) => {

    const nota = Number(item.nota);

    somaNotas += nota;

    if (nota >= 1 && nota <= 5) {
      distribuicaoNotas[nota - 1]++;
    }

    if (item.util === "Sim") {
      totalSim++;
    }

    tabela.innerHTML += `
      <tr>
        <td>${item.nome}</td>
        <td>${item.comentario}</td>
      </tr>
    `;
  });

  const media =
    total > 0
      ? (somaNotas / total).toFixed(1)
      : 0;

  document.getElementById("mediaNotas").textContent = media;
  document.getElementById("totalSim").textContent = totalSim;

  new Chart(
    document.getElementById("grafico"),
    {
      type: "bar",
      data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [{
          label: "Quantidade de Notas",
          data: distribuicaoNotas,
          backgroundColor: "#0d6efd"
        }]
      }
    }
  );
}

carregarEstatisticas();