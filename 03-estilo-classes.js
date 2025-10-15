// 03-estilo-classes.js

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

    const elementoEstilo = document.getElementById('elemento-estilo');
    const corFundoInput = document.getElementById('cor-fundo');
    const codigoExecutado = document.getElementById('codigo-executado');
    const classeCustomizada = 'estilo-customizado';
    const classeHighlight = 'highlight';
    const classesIniciais = elementoEstilo.className;

    function atualizarCodigo(codigo) {
        codigoExecutado.textContent = codigo;
    }

    // .style para background-color
    document.getElementById('btn-style-background').addEventListener('click', () => {
        const novaCor = corFundoInput.value;
        const codigo = `const elemento = document.getElementById('elemento-estilo');\nelemento.style.backgroundColor = '${novaCor}';\n// Define um estilo inline para a propriedade CSS.`;
        elementoEstilo.style.backgroundColor = novaCor;
        atualizarCodigo(codigo);
    });

    // Resetar Estilo Inline
    document.getElementById('btn-style-reset').addEventListener('click', () => {
        const codigo = `const elemento = document.getElementById('elemento-estilo');\nelemento.style.backgroundColor = '';\n// Limpa o estilo inline, voltando ao CSS da folha de estilo.`;
        elementoEstilo.style.backgroundColor = '';
        atualizarCodigo(codigo);
    });

    // classList.add
    document.getElementById('btn-class-add').addEventListener('click', () => {
        const codigo = `const elemento = document.getElementById('elemento-estilo');\nelemento.classList.add('${classeCustomizada}');\n// Adiciona uma classe CSS ao elemento.`;
        elementoEstilo.classList.add(classeCustomizada);
        atualizarCodigo(codigo);
    });

    // classList.remove
    document.getElementById('btn-class-remove').addEventListener('click', () => {
        const codigo = `const elemento = document.getElementById('elemento-estilo');\nelemento.classList.remove('${classeCustomizada}');\n// Remove uma classe CSS do elemento.`;
        elementoEstilo.classList.remove(classeCustomizada);
        atualizarCodigo(codigo);
    });

    // classList.toggle
    document.getElementById('btn-class-toggle').addEventListener('click', () => {
        const codigo = `const elemento = document.getElementById('elemento-estilo');\nelemento.classList.toggle('${classeHighlight}');\n// Adiciona a classe se ela não existir, e remove se existir.`;
        elementoEstilo.classList.toggle(classeHighlight);
        atualizarCodigo(codigo);
    });

    // Resetar Classes
    document.getElementById('btn-class-reset').addEventListener('click', () => {
        const codigo = `const elemento = document.getElementById('elemento-estilo');\nelemento.className = '${classesIniciais}';\n// Resetando as classes para o estado inicial.`;
        elementoEstilo.className = classesIniciais;
        elementoEstilo.style.backgroundColor = ''; // Garante que o estilo inline também seja limpo
        atualizarCodigo(codigo);
    });
});
