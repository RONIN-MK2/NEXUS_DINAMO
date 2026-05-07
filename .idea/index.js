// Ripple animation from CodePen: https://codepen.io/finnhvman/pen/jlxKjW

// Добавляем стиль для ripple
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleAnim {
        to { transform: scale(5); opacity: 0; }
    }
`;
document.head.appendChild(rippleStyle);

function createRipple(event, element) {
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(0,170,255,0.6)';
    ripple.style.width = '80px';
    ripple.style.height = '80px';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'rippleAnim 0.6s linear';
    ripple.style.left = `${event.clientX - element.getBoundingClientRect().left - 40}px`;
    ripple.style.top = `${event.clientY - element.getBoundingClientRect().top - 40}px`;
    ripple.style.pointerEvents = 'none';
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

// 1) Секретная кнопка "🔮 ? ?" — показывает SVG реактор
const secretBtn = document.getElementById('secretBtn');
const secretImgContainer = document.getElementById('secretImageContainer');

secretBtn.addEventListener('click', (e) => {
    createRipple(e, secretBtn);
    secretImgContainer.innerHTML = `
        <div style="text-align: center;">
            <svg width="200" height="180" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="90" r="45" fill="none" stroke="#ff00ff" stroke-width="3">
                    <animateTransform attributeName="transform" type="rotate" from="0 100 90" to="360 100 90" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="90" r="30" fill="#ff00ff" opacity="0.2">
                    <animate attributeName="r" values="25;35;25" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="90" r="10" fill="#ffffff" opacity="0.9"/>
                <line x1="100" y1="45" x2="100" y2="20" stroke="#ff00ff" stroke-width="2"/>
                <line x1="100" y1="135" x2="100" y2="160" stroke="#ff00ff" stroke-width="2"/>
                <text x="100" y="175" text-anchor="middle" fill="#ff00ff" font-size="12" font-weight="bold">РЕАКТОР Mk.V</text>
            </svg>
            <p style="margin-top: 10px; font-weight: bold; color: #ff00ff;">🔓 РАЗБЛОКИРОВАНО: Прототип Mk.V</p>
            <p style="font-size: 0.8rem;">Мощность: 800 МВт | Статус: тестирование</p>
        </div>
    `;
    secretImgContainer.style.display = 'block';
    setTimeout(() => {
        secretImgContainer.style.display = 'none';
    }, 5000);
});

// 2) Пасхалка на карточках
const techCards = document.querySelectorAll('.tech-card');
techCards.forEach(card => {
    card.addEventListener('click', (e) => {
        createRipple(e, card);
        const secret = card.getAttribute('data-secret');
        let msg = '';
        if (secret === 'fusion') msg = '🌟 Секретно: наш реактор холодного синтеза работает при -10°C\nКоэффициент усиления: Q=35';
        else if (secret === 'ai') msg = '🧠 Пасхалка: ИИ предсказал этот клик за 0.2 секунды до события\nТочность прогноза: 99.97%';
        else if (secret === 'storage') msg = '⚡️ Утечка: графеновые батареи заряжают город за 4 минуты\nЁмкость: 500 кВт·ч/кг';
        alert(msg);
    });
});

// 3) Скрытая кнопка-вихрь - пасхалка с заводом
const megaBtn = document.getElementById('hiddenMegaButton');
let clickCount = 0;
megaBtn.addEventListener('click', (e) => {
    createRipple(e, megaBtn);
    clickCount++;
    if (clickCount === 3) {
        const easterDiv = document.createElement('div');
        easterDiv.innerHTML = `
            <div style="position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); background:#0a0f2aee; backdrop-filter:blur(20px); padding:25px; border-radius:40px; z-index:9999; text-align:center; border:2px solid cyan; min-width:380px;">
                <svg width="280" height="140" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="80" width="340" height="70" fill="#1a2a4a" stroke="#00d4ff" stroke-width="2"/>
                    <rect x="80" y="40" width="40" height="40" fill="#2a3a5a" stroke="#00d4ff" stroke-width="1.5"/>
                    <rect x="280" y="40" width="40" height="40" fill="#2a3a5a" stroke="#00d4ff" stroke-width="1.5"/>
                    <rect x="170" y="20" width="60" height="60" fill="#1a2a4a" stroke="#00d4ff" stroke-width="2"/>
                    <circle cx="200" cy="50" r="15" fill="#00d4ff" opacity="0.8">
                        <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite"/>
                    </circle>
                    <line x1="200" y1="35" x2="200" y2="10" stroke="#00d4ff" stroke-width="2"/>
                    <text x="200" y="125" text-anchor="middle" fill="#00d4ff" font-size="12" font-weight="bold">NEXUS ALPHA COMPLEX</text>
                </svg>
                <h3 style="margin:15px 0">🏭 СЕКРЕТНЫЙ ЗАВОД №42 🏭</h3>
                <p>Производство квантовых батарей<br>Годовой объём: 10 млн единиц</p>
                <p style="font-size:0.8rem; margin-top:10px;">📍 56°N, 82°E | Допуск: уровень Omega</p>
                <button id="closeEaster" style="margin-top:15px; padding:8px 25px; background:cyan; border:none; border-radius:30px; cursor:pointer; font-weight:bold;">Закрыть 🔒</button>
            </div>
        `;
        document.body.appendChild(easterDiv);
        document.getElementById('closeEaster').onclick = () => easterDiv.remove();
        clickCount = 0;
    }
});

// Scroll reveal анимация карточек
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.card').forEach(c => {
    c.style.opacity = '0';
    c.style.transform = 'translateY(40px)';
    c.style.transition = '0.6s ease';
    observer.observe(c);
});

console.log('🚀 Nexus Dynamics | Пасхалки: кнопка ??, карточки, вихрь🌀 3 клика');