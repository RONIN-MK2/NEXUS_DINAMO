// Button pulse animation style from CodePen

// Добавляем ripple эффект на кнопку
const stylePulse = document.createElement('style');
stylePulse.textContent = `
    @keyframes btnPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(stylePulse);

// Секретная кнопка — доступ к архиву
const secretContactBtn = document.getElementById('easterButtonContact');
const secretDiv = document.getElementById('secretContactImage');

secretContactBtn.addEventListener('click', () => {
    secretContactBtn.style.animation = 'btnPulse 0.3s ease';
    setTimeout(() => {
        secretContactBtn.style.animation = '';
    }, 300);

    secretDiv.innerHTML = `
        <div style="background: linear-gradient(135deg, #000a1a, #001a2a); padding: 18px; border-radius: 24px; border: 2px solid gold;">
            <svg width="160" height="80" viewBox="0 0 200 80" style="margin: 0 auto; display: block;">
                <rect x="10" y="10" width="180" height="60" rx="10" fill="none" stroke="gold" stroke-width="2"/>
                <text x="100" y="45" text-anchor="middle" fill="gold" font-size="12" font-weight="bold">УРОВЕНЬ ДОСТУПА: OMEGA</text>
                <circle cx="40" cy="40" r="5" fill="gold">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/>
                </circle>
                <circle cx="160" cy="40" r="5" fill="gold">
                    <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
                </circle>
            </svg>
            <p style="margin-top: 10px;"><strong>🔓 ДОСТУП ПОЛУЧЕН</strong></p>
            <p>Кабинет генерального конструктора</p>
            <p style="font-size:0.7rem; margin-top: 5px;">"Будущее уже здесь, просто оно неравномерно распределено"</p>
        </div>
    `;
    setTimeout(() => secretDiv.innerHTML = '', 6000);
});

// Тройной клик по логотипу — чертежи реактора
const logo = document.getElementById('tripleClickLogo');
let clickCountTriple = 0;
let timeoutReset;

logo.addEventListener('click', () => {
    clearTimeout(timeoutReset);
    clickCountTriple++;

    logo.style.transform = 'scale(0.9)';
    setTimeout(() => {
        logo.style.transform = '';
    }, 150);

    if (clickCountTriple === 3) {
        const fullScreenDiv = document.createElement('div');
        fullScreenDiv.style.position = 'fixed';
        fullScreenDiv.style.top = '0';
        fullScreenDiv.style.left = '0';
        fullScreenDiv.style.width = '100%';
        fullScreenDiv.style.height = '100%';
        fullScreenDiv.style.background = 'rgba(0,0,0,0.96)';
        fullScreenDiv.style.display = 'flex';
        fullScreenDiv.style.alignItems = 'center';
        fullScreenDiv.style.justifyContent = 'center';
        fullScreenDiv.style.zIndex = '10000';
        fullScreenDiv.style.backdropFilter = 'blur(8px)';
        fullScreenDiv.innerHTML = `
            <div style="background:#0a0f2a; padding: 30px; border-radius: 48px; text-align:center; border: 3px solid cyan; max-width: 550px; animation: fadeInScale 0.3s ease;">
                <div style="font-size: 3rem;">📐⚛️📏</div>
                <svg width="400" height="160" viewBox="0 0 500 200" style="margin: 15px 0;">
                    <circle cx="250" cy="100" r="50" fill="none" stroke="cyan" stroke-width="2.5"/>
                    <circle cx="250" cy="100" r="30" fill="none" stroke="cyan" stroke-width="1.5" opacity="0.6">
                        <animate attributeName="r" values="25;38;25" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="250" cy="100" r="12" fill="cyan" opacity="0.8">
                        <animate attributeName="opacity" values="0.4;1;0.4" dur="0.8s" repeatCount="indefinite"/>
                    </circle>
                    <line x1="250" y1="50" x2="250" y2="20" stroke="cyan" stroke-width="2"/>
                    <line x1="250" y1="150" x2="250" y2="180" stroke="cyan" stroke-width="2"/>
                    <line x1="200" y1="100" x2="170" y2="100" stroke="cyan" stroke-width="2"/>
                    <line x1="300" y1="100" x2="330" y2="100" stroke="cyan" stroke-width="2"/>
                    <text x="250" y="185" text-anchor="middle" fill="cyan" font-size="14" font-weight="bold">ТОКМАК-Х (проект "Звезда")</text>
                </svg>
                <pre style="background:#000c; padding: 15px; border-radius: 20px; font-size: 11px; text-align: left; overflow-x: auto; margin: 15px 0;">
╔════════════════════════════════════════╗
║  ТОКМАК-Х (проект "Звезда")            ║
╠════════════════════════════════════════╣
║  R = 2.5m    a = 0.8m                  ║
║  B_t = 12T   I_p = 25MA                ║
║  Q = 25      T_ion = 200keV            ║
║  Давление плазмы: 15 атм               ║
║  ⚡ Запуск: 2030 ⚡                   ║
║  Статус: сборка прототипа              ║
╚════════════════════════════════════════╝
                </pre>
                <button id="closeEasterFull" style="margin-top: 15px; padding: 10px 35px; background: cyan; border: none; border-radius: 40px; cursor: pointer; font-weight: bold;">Закрыть 🔒</button>
            </div>
        `;
        document.head.insertAdjacentHTML('beforeend', `
            <style>
                @keyframes fadeInScale {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
            </style>
        `);
        document.body.appendChild(fullScreenDiv);
        document.getElementById('closeEasterFull').onclick = () => fullScreenDiv.remove();
        clickCountTriple = 0;
    }

    timeoutReset = setTimeout(() => {
        clickCountTriple = 0;
    }, 800);
});