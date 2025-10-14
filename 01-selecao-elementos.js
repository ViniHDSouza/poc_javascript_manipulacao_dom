// 01-selecao-elementos.js

document.addEventListener('DOMContentLoaded', () => {
    const demoArea = document.getElementById('demo-area');
    const codigoExecutado = document.getElementById('codigo-executado');
    const elementosDemo = demoArea.querySelectorAll('.demo-element');

    function limparSelecao() {
        elementosDemo.forEach(el => el.classList.remove('highlight'));
    }

    function destacarElementos(elementos, codigo) {
        limparSelecao();
        codigoExecutado.textContent = codigo;

        if (elementos instanceof NodeList || elementos instanceof HTMLCollection || Array.isArray(elementos)) {
            // Se for uma coleção (NodeList, HTMLCollection ou Array)
            elementos.forEach(el => el.classList.add('highlight'));
        } else if (elementos) {
            // Se for um único elemento
            elementos.classList.add('highlight');
        }
    }

    // 1. getElementById
    document.getElementById('btn-get-id').addEventListener('click', () => {
        const codigo = "const elemento = document.getElementById('elemento-unico');\n// Retorna um único elemento ou null";
        const elemento = document.getElementById('elemento-unico');
        destacarElementos(elemento, codigo);
    });

    // 2. querySelector
    document.getElementById('btn-query-selector').addEventListener('click', () => {
        const codigo = "const elemento = document.querySelector('.item-lista');\n// Retorna o primeiro elemento que corresponde ao seletor CSS";
        const elemento = document.querySelector('.item-lista');
        destacarElementos(elemento, codigo);
    });

    // 3. querySelectorAll
    document.getElementById('btn-query-selector-all').addEventListener('click', () => {
        const codigo = "const elementos = document.querySelectorAll('.item-lista');\n// Retorna uma NodeList estática de todos os elementos que correspondem ao seletor CSS";
        const elementos = document.querySelectorAll('.item-lista');
        destacarElementos(elementos, codigo);
    });

    // 4. getElementsByClassName
    document.getElementById('btn-get-class').addEventListener('click', () => {
        const codigo = "const elementos = document.getElementsByClassName('item-lista');\n// Retorna uma HTMLCollection dinâmica de todos os elementos com a classe especificada";
        // Convertendo HTMLCollection para Array para usar forEach, pois HTMLCollection não tem forEach em todos os navegadores antigos, mas é bom para a demonstração.
        const elementos = Array.from(document.getElementsByClassName('item-lista'));
        destacarElementos(elementos, codigo);
    });

    // 5. getElementsByTagName
    document.getElementById('btn-get-tag').addEventListener('click', () => {
        const codigo = "const elementos = document.getElementsByTagName('p');\n// Retorna uma HTMLCollection dinâmica de todos os elementos com o nome da tag especificada";
        const elementos = Array.from(document.getElementsByTagName('p'));
        destacarElementos(elementos, codigo);
    });

    // Limpar
    document.getElementById('btn-limpar').addEventListener('click', () => {
        limparSelecao();
        codigoExecutado.textContent = "Seleção limpa. Clique em um método para testar novamente.";
    });
});
