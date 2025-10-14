# Principais Eventos do DOM e Seus Usos

Os eventos do DOM (Document Object Model) são sinais que notificam o JavaScript de que algo interessante aconteceu. Eles são a base da interatividade em páginas web.

Abaixo está uma lista dos eventos mais comuns e úteis para um estudante de JavaScript:

| Categoria | Evento | Descrição | Uso Comum |
| :--- | :--- | :--- | :--- |
| **Mouse** | `click` | Disparado quando um elemento é clicado (pressionar e soltar o botão do mouse). | Ações de botões, links e elementos interativos. |
| | `dblclick` | Disparado quando um elemento é clicado duas vezes rapidamente. | Abrir janelas, editar conteúdo. |
| | `mousedown` | Disparado quando o botão do mouse é pressionado sobre um elemento. | Início de operações de arrastar e soltar (drag and drop). |
| | `mouseup` | Disparado quando o botão do mouse é liberado sobre um elemento. | Fim de operações de arrastar e soltar. |
| | `mousemove` | Disparado quando o ponteiro do mouse se move sobre um elemento. | Rastreamento de movimento do mouse, desenho. |
| | `mouseover` | Disparado quando o ponteiro do mouse entra na área de um elemento. | Exibir tooltips (dicas de ferramentas). |
| | `mouseout` | Disparado quando o ponteiro do mouse sai da área de um elemento. | Ocultar tooltips. |
| **Teclado** | `keydown` | Disparado quando uma tecla é pressionada. | Capturar atalhos de teclado, prevenir ações padrão. |
| | `keyup` | Disparado quando uma tecla é liberada. | Capturar entrada de texto após a tecla ser liberada. |
| | `keypress` | Disparado quando uma tecla que produz um caractere é pressionada e liberada. (Obsoleto, prefira `keydown` ou `input`). | (Uso limitado, prefira `input` para campos de texto). |
| **Formulário** | `submit` | Disparado quando um formulário é submetido. | Validar dados antes de enviar o formulário ao servidor. |
| | `input` | Disparado quando o valor de um elemento `<input>`, `<select>` ou `<textarea>` é alterado. | Validação em tempo real, contadores de caracteres. |
| | `change` | Disparado quando o valor de um elemento de formulário é alterado e o elemento perde o foco. | Reagir a mudanças em `<select>` ou checkboxes. |
| | `focus` | Disparado quando um elemento (como um campo de formulário) recebe o foco. | Destacar o campo ativo. |
| | `blur` | Disparado quando um elemento perde o foco. | Validar o campo após o usuário sair dele. |
| **Documento/Janela** | `load` | Disparado quando a página inteira (incluindo todos os recursos como imagens e scripts) foi carregada. | Executar código após o carregamento completo da página. |
| | `DOMContentLoaded` | Disparado quando o documento HTML foi completamente carregado e analisado, sem esperar por folhas de estilo, imagens e subframes para terminar de carregar. | Executar código que manipula o DOM assim que possível. (O mais usado!) |
| | `resize` | Disparado quando a janela do navegador é redimensionada. | Ajustar layouts responsivos via JavaScript. |
| | `scroll` | Disparado quando o documento ou um elemento rolável é rolado. | Implementar navegação "sticky" ou carregamento infinito. |

## 💡 Dica de Estudo:

O método mais moderno e recomendado para lidar com eventos é o `addEventListener()`, que permite anexar múltiplos manipuladores a um único elemento sem sobrescrever os anteriores.

```javascript
const elemento = document.getElementById('meu-elemento');

// Adiciona um ouvinte de evento
elemento.addEventListener('click', function(event) {
    console.log('Elemento clicado!');
});

// Remove um ouvinte de evento (é necessário ter a referência da função)
elemento.removeEventListener('click', minhaFuncaoDeClique);
```
