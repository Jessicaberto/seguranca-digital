import { db } from "./firebase.js";

import {
collection,
addDoc
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const formulario =
document.getElementById("feedbackForm");

formulario.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const nome =
    document.getElementById("nome").value;

    const idade =
    document.getElementById("idade").value;

    const util =
    document.getElementById("util").value;

    const nota =
    document.getElementById("nota").value;

    const comentario =
    document.getElementById("comentario").value;

    try{

        await addDoc(
            collection(db,"feedbacks"),
            {
                nome,
                idade,
                util,
                nota,
                comentario,
                data:new Date()
            }
        );

        document.getElementById("mensagem")
        .innerHTML =
        "✅ Feedback enviado com sucesso!";

        formulario.reset();

    }catch(error){

        document.getElementById("mensagem")
        .innerHTML =
        "❌ Erro ao enviar feedback.";

        console.error(error);

    }

});