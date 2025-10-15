// 04-criacao-remocao.js

document.addEventListener('DOMContentLoaded', () => {
    // Exibir o HTML da área de demonstração
    const demoAreaHTML = document.getElementById('lista-elementos');
    const htmlSourceCode = document.getElementById('html-source-code');
    
    function atualizarHTMLSource() {
        htmlSourceCode.textContent = demoAreaHTML.innerHTML;
    }
    
    // Exibir o HTML inicial
    atualizarHTMLSource();
    
    // Criar um observer para atualizar o HTML quando a área de demonstração mudar
    const observer = new MutationObserver(atualizarHTMLSource);
    observer.observe(demoAreaHTML, { 
        attributes: true, 
        childList: true, 
        subtree: true,
        characterData: true,
        attributeOldValue: true
    });

    const listaElementos = document.getElementById('lista-elementos');
    const codigoExecutado = document.getElementById('codigo-executado');
    let contador = 3;

    function atualizarCodigo(codigo) {
        codigoExecutado.textContent = codigo;
    }

    function resetarDOM() {
        listaElementos.innerHTML = `
            <p id="elemento-pai">Este é o elemento PAI (ID: #elemento-pai). Novos elementos serão adicionados aqui.</p>
            <div class="demo-element" id="elemento-filho-1">Elemento Filho 1</div>
            <div class="demo-element" id="elemento-filho-2">Elemento Filho 2</div>
        `;
        contador = 3;
        atualizarCodigo("// DOM resetado para o estado inicial.");
    }

    // createElement
    document.getElementById('btn-create-element').addEventListener('click', () => {
        const codigo = `const novoElemento = document.createElement('div');\nnovoElemento.textContent = 'Novo Elemento ${contador} (Criado)';\nnovoElemento.classList.add('demo-element', 'new-element');\n// Cria um novo nó de elemento com o nome da tag especificada.`;
        
        const novoElemento = document.createElement('div');
        novoElemento.textContent = `Novo Elemento ${contador} (Criado)`;
        novoElemento.classList.add('demo-element', 'new-element');
        novoElemento.id = `elemento-criado-${contador}`;
        
        // Armazena o elemento criado para o próximo passo (appendChild)
        listaElementos.dataset.ultimoCriado = `elemento-criado-${contador}`;
        
        atualizarCodigo(codigo);
    });

    // appendChild
    document.getElementById('btn-append-child').addEventListener('click', () => {
        const ultimoCriadoId = listaElementos.dataset.ultimoCriado;
        let elementoParaAdicionar;

        if (ultimoCriadoId) {
            // Tenta usar o elemento criado no passo anterior, se ainda não estiver no DOM
            elementoParaAdicionar = document.getElementById(ultimoCriadoId);
            if (!elementoParaAdicionar) {
                // Se não estiver no DOM, recria (caso o usuário tenha pulado o passo)
                elementoParaAdicionar = document.createElement('div');
                elementoParaAdicionar.textContent = `Novo Elemento ${contador} (Criado e Adicionado)`;
                elementoParaAdicionar.classList.add('demo-element', 'new-element');
                elementoParaAdicionar.id = `elemento-criado-${contador}`;
            }
        } else {
            // Cria um novo se não houver um criado anteriormente
            elementoParaAdicionar = document.createElement('div');
            elementoParaAdicionar.textContent = `Novo Elemento ${contador} (Criado e Adicionado)`;
            elementoParaAdicionar.classList.add('demo-element', 'new-element');
            elementoParaAdicionar.id = `elemento-criado-${contador}`;
        }

        const codigo = `const pai = document.getElementById('lista-elementos');\npai.appendChild(novoElemento);\n// Adiciona um nó ao final da lista de filhos de um nó pai.`;
        
        listaElementos.appendChild(elementoParaAdicionar);
        contador++;
        delete listaElementos.dataset.ultimoCriado; // Limpa o marcador
        atualizarCodigo(codigo);
    });

    // cloneNode
    document.getElementById('btn-clone-node').addEventListener('click', () => {
        const elementoParaClonar = document.getElementById('elemento-filho-2');
        if (!elementoParaClonar) {
            atualizarCodigo("// Elemento Filho 2 não encontrado. Resetar DOM.");
            return;
        }
        
        const clone = elementoParaClonar.cloneNode(true); // true para clone profundo
        clone.id = `elemento-clonado-${contador}`;
        clone.textContent = `CLONE do Elemento Filho 2 (ID: ${clone.id})`;
        clone.classList.add('new-element');
        
        const codigo = `const original = document.getElementById('elemento-filho-2');\nconst clone = original.cloneNode(true);\nclone.textContent = 'CLONE...';\npai.appendChild(clone);\n// Cria uma cópia do nó. 'true' copia os filhos também.`;
        
        listaElementos.appendChild(clone);
        contador++;
        atualizarCodigo(codigo);
    });

    // removeChild
    document.getElementById('btn-remove-child').addEventListener('click', () => {
        const elementoParaRemover = document.getElementById('elemento-filho-1');
        const pai = document.getElementById('elemento-pai').parentNode; // listaElementos
        
        if (elementoParaRemover) {
            const codigo = `const pai = document.getElementById('lista-elementos');\nconst filho = document.getElementById('elemento-filho-1');\npai.removeChild(filho);\n// Remove um nó filho especificado do grupo de filhos do pai.`;
            pai.removeChild(elementoParaRemover);
            atualizarCodigo(codigo);
        } else {
            atualizarCodigo("// Elemento Filho 1 já foi removido. Use o botão 'Resetar DOM'.");
        }
    });

    // .remove()
    document.getElementById('btn-remove-self').addEventListener('click', () => {
        const elementoParaRemover = document.getElementById('elemento-filho-2');
        
        if (elementoParaRemover) {
            const codigo = `const elemento = document.getElementById('elemento-filho-2');\nelemento.remove();\n// Remove o elemento do DOM em que foi chamado. Mais moderno e simples que removeChild.`;
            elementoParaRemover.remove();
            atualizarCodigo(codigo);
        } else {
            atualizarCodigo("// Elemento Filho 2 já foi removido. Use o botão 'Resetar DOM'.");
        }
    });

    // Resetar DOM
    document.getElementById('btn-reset-dom').addEventListener('click', resetarDOM);
});
