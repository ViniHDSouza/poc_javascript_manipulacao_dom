// 06-navegacao-dom.js

document.addEventListener('DOMContentLoaded', () => {
    // Exibir o HTML da área de demonstração
    const demoAreaHTML = document.getElementById('demo-area');
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

    const codigoExecutado = document.getElementById('codigo-executado');
    const elementoBase = document.getElementById('filho-1');

    function limparDestaque() {
        const elementos = document.querySelectorAll('.elemento-destaque');
        elementos.forEach(el => el.classList.remove('elemento-destaque'));
    }

    function destacarElemento(elemento, codigo) {
        limparDestaque();
        codigoExecutado.textContent = codigo;
        
        if (elemento instanceof HTMLCollection || elemento instanceof NodeList) {
            // Se for uma coleção
            Array.from(elemento).forEach(el => el.classList.add('elemento-destaque'));
        } else if (elemento) {
            // Se for um único elemento
            elemento.classList.add('elemento-destaque');
        }
    }

    // parentElement
    document.getElementById('btn-parent').addEventListener('click', () => {
        const codigo = `const filho = document.getElementById('filho-1');\nconst pai = filho.parentElement;\n// Retorna o elemento pai do elemento atual.`;
        const pai = elementoBase.parentElement;
        destacarElemento(pai, codigo);
    });

    // children
    document.getElementById('btn-children').addEventListener('click', () => {
        const codigo = `const filho = document.getElementById('filho-1');\nconst filhos = filho.children;\n// Retorna uma HTMLCollection com todos os elementos filhos diretos.`;
        const filhos = elementoBase.children;
        destacarElemento(filhos, codigo);
    });

    // firstElementChild
    document.getElementById('btn-first-child').addEventListener('click', () => {
        const codigo = `const filho = document.getElementById('filho-1');\nconst primeiro = filho.firstElementChild;\n// Retorna o primeiro elemento filho.`;
        const primeiro = elementoBase.firstElementChild;
        destacarElemento(primeiro, codigo);
    });

    // lastElementChild
    document.getElementById('btn-last-child').addEventListener('click', () => {
        const codigo = `const filho = document.getElementById('filho-1');\nconst ultimo = filho.lastElementChild;\n// Retorna o último elemento filho.`;
        const ultimo = elementoBase.lastElementChild;
        destacarElemento(ultimo, codigo);
    });

    // nextElementSibling
    document.getElementById('btn-next-sibling').addEventListener('click', () => {
        const codigo = `const filho = document.getElementById('filho-1');\nconst proximo = filho.nextElementSibling;\n// Retorna o próximo elemento irmão (mesmo nível na árvore).`;
        const proximo = elementoBase.nextElementSibling;
        destacarElemento(proximo, codigo);
    });

    // previousElementSibling
    document.getElementById('btn-previous-sibling').addEventListener('click', () => {
        const codigo = `const filho = document.getElementById('filho-1');\nconst anterior = filho.previousElementSibling;\n// Retorna o elemento irmão anterior (mesmo nível na árvore).`;
        const anterior = elementoBase.previousElementSibling;
        if (anterior) {
            destacarElemento(anterior, codigo);
        } else {
            codigoExecutado.textContent = codigo + "\n// Não há elemento irmão anterior.";
        }
    });

    // Limpar
    document.getElementById('btn-limpar').addEventListener('click', () => {
        limparDestaque();
        codigoExecutado.textContent = "Destaque limpo. Clique em um método para testar novamente.";
    });
});

