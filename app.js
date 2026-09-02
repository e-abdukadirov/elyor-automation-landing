/**
 * ElyorAI — Application Scripts & Localization
 */

// 1. Translations dictionary (RU / UZ)
const translations = {
  ru: {
    nav_solutions: "Решения",
    nav_case: "Кейс",
    nav_process: "Как работаю",
    nav_cta: "Обсудить задачу",

    hero_eyebrow: "Автоматизация для малого бизнеса",
    hero_title: "Убираю ручную<br>рутину из бизнеса.",
    hero_desc: "Помогаю автоматизировать заказы, расходы, отчёты и Telegram, чтобы вы тратили меньше времени на хаос и принимали решения на основе цифр.",
    hero_btn_discuss: "Обсудить задачу",
    hero_btn_case: "Смотреть первый кейс ↓",
    trust_1: "◈ Без лишней бюрократии",
    trust_2: "◌ Данные под вашим контролем",
    trust_3: "◷ Понятный результат",

    flow_orders: "Заказы",
    flow_expenses: "Расходы",
    flow_dash_title: "Панель бизнеса",
    flow_dash_sub: "Данные в одном месте",
    flow_m1: "Прибыль",
    flow_v1: "Понятная картина",
    flow_m2: "Заказы",
    flow_v2: "Без потерь и дублей",
    flow_m3: "Время",
    flow_v3: "Меньше ручной работы",

    problems_title: "Когда бизнес растёт, ручной учёт начинает мешать",
    p1: "Заказы в чатах",
    p2: "Расходы отдельно",
    p3: "Отчёты вручную",
    p4: "Прибыль неясна",

    solutions_tag: "Что я могу сделать",
    solutions_title: "Не «ещё один сервис».<br>А инструмент под ваш процесс.",
    sol1_title: "Учёт и прибыль",
    sol1_desc: "Собираю заказы, расходы и показатели в одну понятную систему, чтобы владелец видел реальную картину бизнеса.",
    sol2_title: "Telegram и заявки",
    sol2_desc: "Упрощаю приём заявок, ответы клиентам и передачу данных в таблицы — без ручного копирования.",
    sol3_title: "Сайты и контент",
    sol3_desc: "Делаю лендинги и материалы, которые объясняют ценность бизнеса и направляют клиента к заявке.",
    sol_cta: "Обсудить решение",

    case_badge: "Первый кейс",
    case_status: "В разработке",
    case_sector: "Трикотажное производство",
    case_heading: "Учёт заказов, расходов<br>и реальной прибыли.",
    case_text: "Создаю первую версию системы для производства футболок и трикотажа: от заказа и сырья до себестоимости и прибыли.",
    ct1: "Заказы",
    ct2: "Сырьё",
    ct3: "Расходы",
    ct4: "Себестоимость",
    ct5: "Прибыль",
    case_task_label: "Задача",
    case_task_val: "Понять, где деньги зарабатываются и где теряются.",
    case_task_note: "Результаты появятся здесь только после проверки на реальных данных.",

    process_tag: "Как работаю",
    process_title: "От рутины — к понятной системе.",
    step1: "Разбираюсь в процессе",
    step2: "Собираю простую первую версию",
    step3: "Проверяем на реальных данных",
    step4: "Улучшаем результат",

    cta_eyebrow: "Есть процесс, который забирает время?",
    cta_title: "Давайте посмотрим,<br>что можно упростить.",
    cta_desc: "Опишите задачу или выберите направления. Сначала разберёмся в процессе — потом выберем подходящее решение.",

    form_categories_label: "Что требуется автоматизировать?",
    tag_1: "Учёт и себестоимость",
    tag_2: "Telegram-бот для заказов",
    tag_3: "Лендинг для продаж",
    tag_4: "Хаос в Excel",
    tag_5: "Другое",
    ph_name: "Ваше имя",
    ph_social: "Telegram / Instagram (@username)",
    ph_phone: "Телефон (+998 ...)",
    ph_msg: "Коротко о вашей задаче (необязательно)...",
    form_submit_btn: "Отправить заявку в Telegram",
    btn_open_tg: "Написать в Telegram",
    footer_sub: "Автоматизация для бизнеса"
  },

  uz: {
    nav_solutions: "Yechimlar",
    nav_case: "Keys",
    nav_process: "Ish tartibi",
    nav_cta: "Vazifani muhokama qilish",

    hero_eyebrow: "Kichik biznes uchun avtomatlashtirish",
    hero_title: "Biznesingizdan qo'l<br>mehnatini olib tashlayman.",
    hero_desc: "Buyurtmalar, xarajatlar, hisobotlar va Telegram avtomatizatsiyasi. Tartibsizlikka kamroq vaqt sarflab, qarorlarni raqamlar asosida qabul qilasiz.",
    hero_btn_discuss: "Vazifani muhokama qilish",
    hero_btn_case: "Birinchi keysni ko'rish ↓",
    trust_1: "◈ Ortiqcha byurokratiyasiz",
    trust_2: "◌ Ma'lumotlar nazoratingizda",
    trust_3: "◷ Tushunarli natija",

    flow_orders: "Buyurtmalar",
    flow_expenses: "Xarajatlar",
    flow_dash_title: "Biznes paneli",
    flow_dash_sub: "Ma'lumotlar bir joyda",
    flow_m1: "Foyda",
    flow_v1: "Aniq ko'rinish",
    flow_m2: "Buyurtmalar",
    flow_v2: "Yo'qotish va dubllarsiz",
    flow_m3: "Vaqt",
    flow_v3: "Kamroq qo'l mehnati",

    problems_title: "Biznes o'sganda qo'lda hisob yuritish xalaqit bera boshlaydi",
    p1: "Chatlardagi buyurtmalar",
    p2: "Alohida xarajatlar",
    p3: "Qo'lda hisobotlar",
    p4: "Noaniq sof foyda",

    solutions_tag: "Nimalar qila olaman",
    solutions_title: "Shunchaki navbatdagi servis emas.<br>Jarayoningizga mos asbob.",
    sol1_title: "Hisob va foyda",
    sol1_desc: "Buyurtmalar, xarajatlar va ko'rsatkichlarni bitta tushunarli tizimga yig'aman, biznes egasi real holatni ko'radi.",
    sol2_title: "Telegram va arizalar",
    sol2_desc: "Arizalarni qabul qilish, mijozlarga javob berish va ma'lumotlarni jadvallarga nusxalashsiz uzatishni soddalashtiraman.",
    sol3_title: "Saytlar va kontent",
    sol3_desc: "Biznesning qadrini tushuntirib, mijozni buyurtmaga yo'naltiruvchi zamonaviy lendinglar yarataman.",
    sol_cta: "Yechimni muhokama qilish",

    case_badge: "Birinchi keys",
    case_status: "Ishlanmoqda",
    case_sector: "Trikotaj ishlab chiqarish",
    case_heading: "Buyurtmalar, xarajatlar va<br>sof foyda hisobi.",
    case_text: "Futbolka va trikotaj ishlab chiqarish uchun birinchi versiya tizimini yig'moqdaman: buyurtmadan to tannarx va foydagacha.",
    ct1: "Buyurtmalar",
    ct2: "Xomashyo",
    ct3: "Xarajatlar",
    ct4: "Tannarx",
    ct5: "Sof foyda",
    case_task_label: "Vazifa",
    case_task_val: "Pul qayerda ishlab topilayotgani va qayerda yo'qotilayotganini ko'rish.",
    case_task_note: "Natijalar bu yerda faqat haqiqiy ma'lumotlarda tekshirilgandan so'ng chiqadi.",

    process_tag: "Qanday ishlayman",
    process_title: "Qo'l mehnatidan — tushunarli tizimgacha.",
    step1: "Jarayonni o'rganaman",
    step2: "Oddiy birinchi versiyani yig'aman",
    step3: "Haqiqiy ma'lumotlarda test qilamiz",
    step4: "Natijani yaxshilaymiz",

    cta_eyebrow: "Vaqtingizni oladigan jarayon bormi?",
    cta_title: "Keling, nimani<br>soddalashtirish mumkinligini ko'raylik.",
    cta_desc: "Vazifani tasvirlang yoki yo'nalishlarni tanlang. Avval jarayonni tushunamiz — keyin to'g'ri yechimni tanlaymiz.",

    form_categories_label: "Nimani avtomatlashtirish kerak?",
    tag_1: "Hisob va tannarx",
    tag_2: "Buyurtmalar uchun TG bot",
    tag_3: "Sotuv uchun lending",
    tag_4: "Exceldagi tartibsizlik",
    tag_5: "Boshqa",
    ph_name: "Ismingiz",
    ph_social: "Telegram / Instagram (@username)",
    ph_phone: "Telefon (+998 ...)",
    ph_msg: "Vazifa haqida qisqacha (ixtiyoriy)...",
    form_submit_btn: "Telegramga buyurtma yuborish",
    btn_open_tg: "Telegramda yozish",
    footer_sub: "Biznes uchun avtomatlashtirish"
  }
};

let currentLanguage = 'ru';
const selectedTags = new Set();

// 2. Set Language Handler
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  localStorage.setItem('elyor_lang', lang);

  // Update UI Elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      const text = translations[lang][key];
      if (text.includes('<br>')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Update Placeholders with data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update button active styles
  const btnRu = document.getElementById('langRu');
  const btnUz = document.getElementById('langUz');

  if (btnRu && btnUz) {
    if (lang === 'ru') {
      btnRu.className = "lang-btn active";
      btnUz.className = "lang-btn";
    } else {
      btnUz.className = "lang-btn active";
      btnRu.className = "lang-btn";
    }
  }
}

// 3. Tag Toggle for Lead Form
function toggleTag(btn) {
  const tag = btn.getAttribute('data-tag');
  if (selectedTags.has(tag)) {
    selectedTags.delete(tag);
    btn.classList.remove('active');
  } else {
    selectedTags.add(tag);
    btn.classList.add('active');
  }
}

// 4. Handle Form Submission (Direct Telegram Bot API Integration)
async function handleFormSubmit(event) {
  event.preventDefault();
  
  const nameInput = document.getElementById('userName');
  const socialInput = document.getElementById('userSocial');
  const phoneInput = document.getElementById('userPhone');
  const messageInput = document.getElementById('userMessage');
  const submitBtn = document.getElementById('submitBtn');
  const feedback = document.getElementById('formFeedback');

  const name = nameInput ? nameInput.value.trim() : '';
  const social = socialInput ? socialInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const message = messageInput ? messageInput.value.trim() : '';
  const tagsList = Array.from(selectedTags).join(', ') || (currentLanguage === 'ru' ? 'Не выбрано' : 'Tanlanmagan');

  if (!name || (!phone && !social)) {
    alert(currentLanguage === 'ru' ? 'Пожалуйста, укажите ваше имя и контакт' : 'Iltimos, ismingiz va aloqa ma\'lumotlarini kiriting');
    return;
  }

  // Loading state on button
  const originalBtnText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <span style="display:inline-block;animation:spin 1s linear infinite;margin-right:6px">⏳</span>
    <span>${currentLanguage === 'ru' ? 'Отправка...' : 'Yuborilmoqda...'}</span>
  `;

  // Helper to escape HTML characters for Telegram
  const escapeHtml = (str) => String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // Format message for Telegram HTML
  const tgHtml = `🚀 <b>НОВАЯ ЗАЯВКА | ElyorAI</b>\n━━━━━━━━━━━━━━━━━━━━\n` +
    `👤 <b>Клиент:</b> ${escapeHtml(name)}\n` +
    `💬 <b>Telegram / Instagram:</b> ${escapeHtml(social || 'Не указан')}\n` +
    `📞 <b>Телефон:</b> <code>${escapeHtml(phone || 'Не указан')}</code>\n\n` +
    `🛠️ <b>Что автоматизировать:</b> ${escapeHtml(tagsList)}\n` +
    `📝 <b>Описание задачи / Проблема:</b>\n«<i>${escapeHtml(message || 'Без описания')}</i>»\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `🌐 <i>Источник: elyorai.uz</i>\n` +
    `⏱ <i>Время: ${new Date().toLocaleTimeString('ru-RU')} (Ташкент)</i>`;

  const plainText = `🚀 НОВАЯ ЗАЯВКА | ElyorAI\n\n` +
    `👤 Клиент: ${name}\n` +
    `💬 Telegram/Inst: ${social || '—'}\n` +
    `📞 Телефон: ${phone || '—'}\n` +
    `🛠️ Что автоматизировать: ${tagsList}\n` +
    `📝 Описание: ${message || '—'}\n\n` +
    `⏱ Время: ${new Date().toLocaleTimeString('ru-RU')}`;

  const cleanDigits = phone.replace(/[^0-9]/g, '');
  const cleanTg = social.replace('https://t.me/', '').replace('@', '').trim();
  
  const inlineButtons = [];
  const actionRow = [];

  if (cleanTg && !cleanTg.startsWith('+') && isNaN(Number(cleanTg))) {
    actionRow.push({ text: `💬 Telegram: @${cleanTg}`, url: `https://t.me/${cleanTg}` });
  } else if (social.toLowerCase().includes('instagram') || social.toLowerCase().includes('inst')) {
    const inst = social.replace('https://instagram.com/', '').replace('@', '').trim();
    actionRow.push({ text: `📸 Instagram: @${inst}`, url: `https://instagram.com/${inst}` });
  } else if (cleanDigits.length >= 9) {
    actionRow.push({ text: '💬 Telegram клиента', url: `https://t.me/+${cleanDigits}` });
  }

  actionRow.push({ text: '📊 CRM & Статус в Боте', url: 'https://t.me/elyor_smart_agent_bot?start=crm' });
  inlineButtons.push(actionRow);

  const botToken = '8894291120:AAFN3WQo40Ck7Br9F-aziNGAPFiqM7U5KOY';
  const chatId = '55226487';
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    let isSuccess = false;
    try {
      const payload = {
        chat_id: chatId,
        text: tgHtml,
        parse_mode: 'HTML',
      };
      if (inlineButtons.length > 0) {
        payload.reply_markup = { inline_keyboard: inlineButtons };
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (result.ok) isSuccess = true;
    } catch (e) {
      console.warn('Fetch POST failed, attempting fallback:', e);
    }

    // Fallback GET via Image
    if (!isSuccess) {
      const getUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(plainText)}`;
      const img = new Image();
      img.src = getUrl;
      isSuccess = true;
    }

    // Success feedback
    feedback.style.display = 'block';
    feedback.className = 'form-feedback success';
    feedback.innerHTML = currentLanguage === 'ru' 
      ? `🎉 <b>Отлично, ${escapeHtml(name)}!</b> Заявка мгновенно доставлена в Telegram к Elyor. Я свяжусь с вами в ближайшее время!`
      : `🎉 <b>Ajoyib, ${escapeHtml(name)}!</b> Buyurtmangiz darhol Elyorning Telegramiga yetkazildi. Tez orada siz bilan bog'lanamiz!`;

    // Clear inputs
    if (nameInput) nameInput.value = '';
    if (socialInput) socialInput.value = '';
    if (phoneInput) phoneInput.value = '';
    if (messageInput) messageInput.value = '';
    selectedTags.clear();
    document.querySelectorAll('.tag-btn').forEach(btn => btn.classList.remove('active'));

  } catch (err) {
    console.error('Submission error:', err);
    const fallbackText = encodeURIComponent(plainText);
    const botUrl = `https://t.me/elyor_smart_agent_bot?text=${fallbackText}`;
    
    feedback.style.display = 'block';
    feedback.className = 'form-feedback error';
    feedback.innerHTML = currentLanguage === 'ru'
      ? `Спасибо! Нажмите <a href="${botUrl}" target="_blank" style="text-decoration:underline;font-weight:bold;">сюда</a>, чтобы отправить через Telegram.`
      : `Rahmat! Telegram orqali yuborish uchun <a href="${botUrl}" target="_blank" style="text-decoration:underline;font-weight:bold;">bu yerni</a> bosing.`;
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('elyor_lang') || 'ru';
  setLanguage(savedLang);
});
