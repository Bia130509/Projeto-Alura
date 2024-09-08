function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa =document.getElementById("campo-pesquisa").value

if(!campoPesquisa) {
    section.innerHTML= "<p>Nada foi encontrado. Você precisa digitar o nome do personagem que você está procurando.</p>"
   return
}
 campoPesquisa = campoPesquisa.toLowerCase()

 let resultados = "";
 let titulo = ""; 
 let descricao = "";
 let link = "";
 for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    link=dado.link.toLowerCase();
    // se titulo includes campoPes;quisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || link.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
    `;
    }
}

if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
}

// Atribui os resultados gerados à seção HTML
section.innerHTML = resultados;
}