// ============================================
// MENU HAMBURGUER (Mobile)
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================================
// SCROLL SUAVE
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// ANIMAÇÃO DE SCROLL (Fade In)
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos elementos
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.valor-card, .numero-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// ============================================
// NAVBAR COM SOMBRA NO SCROLL
// ============================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ============================================
// VALIDAÇÃO DE FORMULÁRIO (para página de cadastro)
// ============================================
const cadastroForm = document.getElementById('cadastroForm');

if (cadastroForm) {
    cadastroForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validação básica
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        
        if (!nome || !email || !telefone) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }
        
        // Se passou nas validações, pode enviar
        alert('Currículo enviado com sucesso! Entraremos em contato em breve.');
        cadastroForm.reset();
    });
}

// ============================================
// CONTADOR ANIMADO (Números na página inicial)
// ============================================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16); // 60fps
    const originalText = element.textContent;
    const hasPlus = originalText.includes('+');
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            const formatted = Math.floor(current).toLocaleString('pt-BR');
            element.textContent = hasPlus ? formatted + '+' : formatted;
            requestAnimationFrame(updateCounter);
        } else {
            const formatted = target.toLocaleString('pt-BR');
            element.textContent = hasPlus ? formatted + '+' : formatted;
        }
    };
    
    updateCounter();
}

// Ativar contadores quando visíveis
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
            // Remove pontos e + para conseguir o número puro
            const cleanText = entry.target.textContent.replace(/[.+]/g, '');
            const target = parseInt(cleanText);
            if (!isNaN(target)) {
                animateCounter(entry.target, target);
            }
            entry.target.dataset.counted = 'true';
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.numero-item h3');
    counters.forEach(counter => counterObserver.observe(counter));
});
