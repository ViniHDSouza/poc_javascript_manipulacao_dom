// 02-conteudo-atributos.js

document.addEventListener('DOMContentLoaded', () => {
    const paragrafoConteudo = document.getElementById('paragrafo-conteudo');
    const divHtml = document.getElementById('div-html');
    const linkAtributo = document.getElementById('link-atributo');
    const novoTextoInput = document.getElementById('novo-texto');
    const novoAtributoInput = document.getElementById('novo-atributo');
    const codigoExecutado = document.getElementById('codigo-executado');

    function atualizarCodigo(codigo) {
        codigoExecutado.textContent = codigo;
    }

    // textContent
    document.getElementById('btn-text-content').addEventListener('click', () => {
        const novoTexto = novoTextoInput.value;
        const codigo = `const elemento = document.getElementById('paragrafo-conteudo');\nelemento.textContent = '${novoTexto}';\n// Define ou obtém o conteúdo de texto do elemento e seus descendentes. Ignora tags HTML.`;
        paragrafoConteudo.textContent = novoTexto;
        atualizarCodigo(codigo);
    });

    // innerHTML
    document.getElementById('btn-inner-html').addEventListener('click', () => {
        const novoConteudo = `<strong>${novoTextoInput.value}</strong> com <em>HTML</em>`;
        const codigo = `const elemento = document.getElementById('paragrafo-conteudo');\nelemento.innerHTML = '<strong>${novoTextoInput.value}</strong> com <em>HTML</em>';\n// Define ou obtém o conteúdo HTML (incluindo tags) do elemento. Cuidado com segurança (XSS)!`;
        paragrafoConteudo.innerHTML = novoConteudo;
        atualizarCodigo(codigo);
    });

    // setAttribute
    document.getElementById('btn-set-attribute').addEventListener('click', () => {
        const novoHref = novoAtributoInput.value;
        const codigo = `const link = document.getElementById('link-atributo');\nlink.setAttribute('href', '${novoHref}');\n// Define o valor de um atributo no elemento.`;
        linkAtributo.setAttribute('href', novoHref);
        linkAtributo.textContent = `Clique aqui (Novo href: ${novoHref})`;
        atualizarCodigo(codigo);
    });

    // removeAttribute
    document.getElementById('btn-remove-attribute').addEventListener('click', () => {
        const codigo = `const div = document.getElementById('div-html');\ndiv.removeAttribute('data-link-attr');\n// Remove o atributo especificado do elemento.`;
        divHtml.removeAttribute('data-link-attr');
        divHtml.innerHTML += ' <strong>(Atributo data-link-attr removido!)</strong>';
        atualizarCodigo(codigo);
    });

    // Resetar Conteúdo
    document.getElementById('btn-reset-conteudo').addEventListener('click', () => {
        const textoOriginal = paragrafoConteudo.getAttribute('data-original-text');
        paragrafoConteudo.textContent = textoOriginal;
        paragrafoConteudo.innerHTML = textoOriginal; // Garante que o innerHTML também seja resetado
        atualizarCodigo("// Conteúdo do parágrafo resetado para o original.");
    });

    // Resetar Atributos
    document.getElementById('btn-reset-atributos').addEventListener('click', () => {
        linkAtributo.setAttribute('href', '#');
        linkAtributo.textContent = 'Clique aqui';
        divHtml.setAttribute('data-link-attr', 'https://www.google.com');
        divHtml.innerHTML = 'Esta div contém um link: <a href="#" id="link-atributo">Clique aqui</a>';
        atualizarCodigo("// Atributos resetados para os valores iniciais.");
    });
});
