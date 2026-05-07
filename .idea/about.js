// 3D Tilt эффект из CodePen: https://codepen.io/rachsmith/pen/LEeZPj

// Пасхалка при наведении на "Квантовые сенсоры"
const hoverItem = document.getElementById('hoverReveal');
const hiddenZone = document.getElementById('hiddenImageZone');

hoverItem.addEventListener('mouseenter', () => {
    hiddenZone.innerHTML = `
        <div style="background: linear-gradient(135deg, #001133, #000a1a); padding: 20px; border-radius: 28px; border: 1px solid cyan; display: inline-block; max-width: 400px;">
            <div style="font-size: 3rem; text-align: center;">🔬🌀📡</div>
            <svg width="100%" height="60" viewBox="0 0 300 60" style="margin: 10px 0;">
                <circle cx="50" cy="30" r="8" fill="none" stroke="cyan" stroke-width="1.5">
                    <animate attributeName="r" values="5;12;5" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="150" cy="30" r="8" fill="none" stroke="cyan" stroke-width="1.5">
                    <animate attributeName="r" values="12;5;12" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="250" cy="30" r="8" fill="none" stroke="cyan" stroke-width="1.5">
                    <animate attributeName="r" values="5;12;5" dur="2s" repeatCount="indefinite"/>
                </circle>
            </svg>
            <p><strong>🔬 Квантовый сенсор нового поколения</strong></p>
            <p>Чувствительность: 10⁻²⁹ Тл/√Гц | Разрешение: 1 нм</p>
            <p style="font-size:0.8rem; margin-top:8px;">✅ Сертифицирован для работы в космосе</p>
        </div>
    `;
});
hoverItem.addEventListener('mouseleave', () => {
    hiddenZone.innerHTML = '';
});

// Вторая пасхалка — секретный объект на карте
const hoverItem2 = document.getElementById('hoverReveal2');
const hiddenZone2 = document.getElementById('hiddenImageZone'); // используем ту же зону, но перезапишем

hoverItem2.addEventListener('mouseenter', () => {
    hiddenZone.innerHTML = `
        <div style="background: linear-gradient(135deg, #001133, #000a1a); padding: 20px; border-radius: 28px; border: 1px solid #ff6600; display: inline-block; max-width: 400px;">
            <div style="font-size: 3rem; text-align: center;">🌀🔥🚀</div>
            <svg width="200" height="60" viewBox="0 0 200 60">
                <polygon points="100,10 120,50 100,40 80,50" fill="none" stroke="#ff6600" stroke-width="2">
                    <animateTransform attributeName="transform" type="rotate" from="0 100 30" to="20 100 30" dur="0.5s" repeatCount="indefinite" direction="alternate"/>
                </polygon>
            </svg>
            <p><strong>🌀 Плазменный двигатель VASIMIR-X</strong></p>
            <p>Тяга: 5Н | Удельный импульс: 5000 с</p>
            <p style="font-size:0.8rem;">🚀 Испытания: орбитальная станция "Заря"</p>
        </div>
    `;
});
hoverItem2.addEventListener('mouseleave', () => {
    hiddenZone.innerHTML = '';
});

// Глобус -> секретный объект
const mapTrigger = document.getElementById('secretMapTrigger');
const mapEaster = document.getElementById('easterMapImage');

mapTrigger.addEventListener('mouseover', () => {
    mapEaster.style.display = 'flex';
    mapEaster.innerHTML = `
        <div style="background:#001133dd; backdrop-filter:blur(12px); padding: 22px; border-radius: 32px; border: 2px solid cyan; max-width: 450px;">
            <svg width="300" height="120" viewBox="0 0 400 120">
                <circle cx="200" cy="60" r="45" fill="none" stroke="cyan" stroke-width="2"/>
                <circle cx="200" cy="60" r="30" fill="none" stroke="cyan" stroke-width="1" opacity="0.5">
                    <animate attributeName="r" values="25;35;25" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="200" cy="60" r="6" fill="cyan" opacity="0.8">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/>
                </circle>
                <line x1="200" y1="15" x2="200" y2="0" stroke="cyan" stroke-width="2"/>
                <text x="200" y="110" text-anchor="middle" fill="cyan" font-size="10">67° с.ш., 95° в.д.</text>
            </svg>
            <p style="font-weight:bold; margin-top: 10px;">🚨 СЕКРЕТНЫЙ ОБЪЕКТ "ICE-9"</p>
            <p>📍 67° с.ш., 95° в.д. • Глубина: 200 м под вечной мерзлотой</p>
            <p>🔬 Назначение: криогенное хранение антиматерии</p>
            <p style="font-size:0.7rem;">⚠️ Уровень доступа: только для глав государств</p>
        </div>
    `;
});

mapTrigger.addEventListener('mouseleave', () => {
    mapEaster.style.display = 'none';
});

// 3D Tilt для tech-item
const items = document.querySelectorAll('.tech-item');
items.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xRot = (y - rect.height / 2) / 15;
        const yRot = (rect.width / 2 - x) / 15;
        el.style.transform = `perspective(500px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale(1.02)`;
    });
    el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)';
    });
});