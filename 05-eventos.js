// 05-eventos.js

document.addEventListener('DOMContentLoaded', () => {
    const btnEventoClick = document.getElementById('btn-evento-click');
    const logEventos = document.getElementById('log-eventos');
    const codigoExecutado = document.getElementById('codigo-executado');

    function atualizarCodigo(codigo) {
        codigoExecutado.textContent = codigo;
    }

    function log(mensagem) {
        const timestamp = new Date().toLocaleTimeString();
        logEventos.innerHTML += `<br>[${timestamp}] ${mensagem}`;
    }

    // Função de callback do evento
    function handleClick(event) {
        log(`Evento 'click' disparado! Target: ${event.target.id}`);
    }

    // addEventListener
    document.getElementById('btn-add-event').addEventListener('click', () => {
        const codigo = `const btn = document.getElementById('btn-evento-click');\nbtn.addEventListener('click', handleClick);\n// Anexa um manipulador de eventos à função especificada.`;
        btnEventoClick.addEventListener('click', handleClick);
        log("Ouvinte de 'click' adicionado.");
        atualizarCodigo(codigo);
    });

    // removeEventListener
    document.getElementById('btn-remove-event').addEventListener('click', () => {
        const codigo = `const btn = document.getElementById('btn-evento-click');\nbtn.removeEventListener('click', handleClick);\n// Remove um manipulador de eventos anexado anteriormente. É crucial passar a mesma função de callback.`;
        btnEventoClick.removeEventListener('click', handleClick);
        log("Ouvinte de 'click' removido.");
        atualizarCodigo(codigo);
    });

    // Limpar Log
    document.getElementById('btn-limpar-log').addEventListener('click', () => {
        logEventos.innerHTML = "Log de Eventos:";
        atualizarCodigo("// Log de eventos limpo.");
    });
});
