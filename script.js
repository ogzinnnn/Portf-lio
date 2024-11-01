const themeToggleButton = document.getElementById('theme-toggle');

// Adiciona um listener para o botão
themeToggleButton.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no corpo do documento
    document.body.classList.toggle('dark-mode');

    // Atualiza o texto do botão conforme o tema atual
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = '🌙'; // Ícone de lua para modo claro
    } else {
        themeToggleButton.textContent = '☀️'; // Ícone de sol para modo escuro
    }
});

// Efeito de digitação
function typeText(element, text, delay) {
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, delay);
}

// Efeito de rastreamento do mouse
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Inicializa o efeito de digitação após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.contact-section h2');
    typeText(header, "Contate", 100); // Mude o texto e o delay conforme necessário
});

document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill.fade-in');
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.classList.add('visible'); // Adiciona a classe 'visible' após um delay
        }, index * 300); // Delay baseado na ordem das habilidades
    });
});
