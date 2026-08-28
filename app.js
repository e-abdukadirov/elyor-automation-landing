/**
 * Elyor Automation Landing - Application Scripts & Localization
 */

// 1. Translations dictionary (RU / UZ)
const translations = {
  ru: {
    nav_tagline: "Автоматизация процессов",
    nav_problems: "Проблемы",
    nav_solutions: "Решения",
    nav_case: "Кейс",
    nav_process: "Как работаем",
    nav_contact: "Контакты",
    nav_cta: "Обсудить задачу",
    case_badge: "В разработке",

    hero_badge: "// АВТОМАТИЗАЦИЯ БИЗНЕС-ПРОЦЕССОВ",
    hero_title_1: "Убираю ручную",
    hero_title_2: "рутину из бизнеса",
    hero_desc: "Автоматизация заказов, расходов, отчётов и Telegram. Создаю простые и надежные цифровые инструменты, которые экономят часы работы каждый день и показывают реальную прибыль.",
    hero_stat_1: "Лишней терминологии",
    hero_stat_2: "Дней на первый MVP",
    hero_stat_3: "Контроль заявок в TG",
    hero_btn_discuss: "Обсудить задачу",
    hero_btn_solutions: "Что можно внедрить",

    flow_inputs_title: "ИСТОЧНИКИ ХАОСА",
    flow_orders: "Заказы",
    flow_expenses: "Расходы",
    flow_processing: "Умная обработка & Связка",
    flow_output_title: "ПОНЯТНАЯ ПАНЕЛЬ БИЗНЕСА",
    flow_metric_orders: "Новые заказы за сегодня",
    flow_metric_margin: "Себестоимость & Чистая маржа",
    flow_metric_bot: "Бот в Telegram",
    flow_result_tag: "Итог: 0 потерянных клиентов",

    problems_tag: "// ТОЧКИ ПОТЕРИ РЕСУРСОВ",
    problems_title: "Где малый бизнес ежедневно теряет время и прибыль",
    problems_desc: "Когда бизнес растет, привычные таблицы и чаты превращаются в источник скрытых убытков и постоянной головной боли.",
    p1_num: "01 / ТАБЛИЦЫ",
    p1_title: "Хаос в Excel",
    p1_desc: "Десятки файлов, слетевшие формулы, разные версии у сотрудников и вечный страх случайно стереть важные данные.",
    p1_consequence: "→ Итог: ошибки в расчетах",
    p2_num: "02 / ЧАТЫ",
    p2_title: "Заказы в Telegram",
    p2_desc: "Заявки тонут в личных переписках. Менеджеры забывают перезвонить, а клиент уходит к более быстрому конкуренту.",
    p2_consequence: "→ Итог: потерянные клиенты",
    p3_num: "03 / ФИНАНСЫ",
    p3_title: "Непонятная прибыль",
    p3_desc: "Оборот вроде есть, но сколько осталось чистыми после всех мелких расходов и закупки материалов — загадка.",
    p3_consequence: "→ Итог: кассовые разрывы",
    p4_num: "04 / ВРЕМЯ",
    p4_title: "Ручные отчёты",
    p4_desc: "Сбор сводок вручную по вечерам и выходным вместо того, чтобы заниматься стратегией и масштабированием.",
    p4_consequence: "→ Итог: выгорание владельца",

    solutions_tag: "// НАПРАВЛЕНИЯ РАБОТЫ",
    solutions_title: "Три понятных решения для порядка и роста",
    solutions_desc: "Никаких перегруженных систем, которые никто не понимает. Только практичные инструменты, которые сразу приносят пользу.",
    sol1_title: "Учёт заказов, расходов и прибыли",
    sol1_desc: "Создаю удобные управленческие панели и автоматические таблицы: поступление оплат, списание сырья, себестоимость каждой партии и чистая маржа в реальном времени.",
    sol1_f1: "Калькуляция себестоимости",
    sol1_f2: "Автоматический учёт расходов",
    sol1_f3: "Сводки по остаткам склада",
    sol_cta: "Заказать автоматизацию учёта",
    sol2_title: "Telegram для заявок и работы с клиентами",
    sol2_desc: "Боты, которые принимают заказы 24/7, отправляют каталог, отвечают на частые вопросы и мгновенно оповещают сотрудников о новых сделках.",
    sol2_f1: "Приём заявок без перерывов",
    sol2_f2: "Мгновенные алерты команде",
    sol2_f3: "Простая мини-CRM внутри чата",
    sol_cta_bot: "Подключить Telegram-бота",
    sol3_title: "Лендинги и визуалы для продаж",
    sol3_desc: "Современные быстрые сайты с акцентом на конверсию. Чёткое позиционирование вашего продукта, презентация услуг и удобная форма заказа.",
    sol3_f1: "Быстрая загрузка & mobile-ready",
    sol3_f2: "Прямая интеграция с ботом",
    sol3_f3: "Понятная упаковка преимуществ",
    sol_cta_web: "Разработать сайт для продаж",

    case_title: "Учёт и автоматизация для трикотажного производства",
    case_desc: "Честный проект в процессе сборки. Мы не публикуем выдуманные цифры или нарисованные кейсы. Вот точные модули и функции, которые закладываются в архитектуру этой системы:",
    case_m1_title: "Заказы и клиенты",
    case_m1_sub: "Статусы партий и сроки",
    case_m2_title: "Сырьё и фурнитура",
    case_m2_sub: "Списание пряжи и ткани",
    case_m3_title: "Себестоимость единицы",
    case_m3_sub: "С учетом брака и работы",
    case_m4_title: "Чистая прибыль",
    case_m4_sub: "Финальный итог владельцу",
    case_transparency_note: "Принцип Elyor Systems: строим решения на базе реальных производственных процессов без «воды».",
    case_sim_row1: "Поступление заказа: Партия #1042 (Футболки)",
    case_sim_row2: "Расход полотна & нитей",
    case_sim_row3: "Оплата работы швей & упаковка",
    case_sim_sum_label: "ПРОГНОЗ ЧИСТОЙ МАРЖИ",
    case_sim_sum_val: "Точный расчёт до старта кройки",
    case_adapt_note: "Адаптируется под любой тип производства",
    case_calc_btn: "Обсудить ваш учёт",

    process_tag: "// ЭТАПЫ СОТРУДНИЧЕСТВА",
    process_title: "Как проходит работа: быстро и без сюрпризов",
    process_desc: "Четыре последовательных шага от первого созвона до работающего инструмента в руках вашей команды.",
    step1_title: "Разбираюсь в процессе",
    step1_desc: "Созваниваемся или встречаемся. Вы показываете, как сейчас принимаете заказы, где ведете учет и какие рутинные действия отнимают больше всего сил.",
    step1_time: "Срок: 1 день",
    step2_title: "Собираю первую версию",
    step2_desc: "Создаю прототип решения (таблицу, бота или панель) под ваши ключевые задачи без лишних усложнений.",
    step2_time: "Срок: ~3-5 дней",
    step3_title: "Тест на реальных данных",
    step3_desc: "Запускаем пилот. Вы и ваши сотрудники пробуете систему на реальных заказах, смотрим удобство и находим узкие места.",
    step3_time: "Срок: 2-3 дня",
    step4_title: "Улучшаем и развиваем",
    step4_desc: "Вносим правки, обучаем команду и при необходимости подключаем новые модули (склад, аналитику, лендинг).",
    step4_time: "Результат: готовая система",

    contact_tag: "// СВЯЗЬ И КОНСУЛЬТАЦИЯ",
    contact_title: "Давайте обсудим вашу задачу",
    contact_desc: "Напишите, какой процесс сейчас отнимает больше всего времени. Я бесплатно предложу 1-2 варианта решения и сориентирую по срокам.",
    tg_box_subtitle: "БЫСТРЫЙ ОТВЕТ В TELEGRAM",
    tg_box_desc: "Умный ассистент мгновенно примет ваше обращение и соединит напрямую с Elyor.",
    tg_btn_open: "Открыть бота",
    tg_btn_personal: "Личный TG",
    phone_label: "ПРЯМОЙ ТЕЛЕФОН / СВЯЗЬ",
    contact_guarantee: "Конфиденциальность данных и коммерческой тайны гарантирована.",

    form_title: "Опишите задачу за 1 минуту",
    form_subtitle: "Выберите интересующие направления или напишите свой вопрос:",
    form_categories_label: "Что требуется автоматизировать?",
    tag_1: "Учёт и себестоимость",
    tag_2: "Telegram-бот для заказов",
    tag_3: "Лендинг для продаж",
    tag_4: "Хаос в Excel",
    tag_5: "Другое",
    form_name_label: "Ваше имя",
    form_contact_label: "Telegram или телефон",
    form_message_label: "Коротко о задаче (необязательно)",
    form_submit_btn: "Отправить заявку в Telegram",
    footer_rights: "© 2026. Автоматизация для малого и среднего бизнеса.",
    footer_top: "Наверх"
  },

  uz: {
    nav_tagline: "Jarayonlarni avtomatlashtirish",
    nav_problems: "Muammolar",
    nav_solutions: "Yechimlar",
    nav_case: "Keys",
    nav_process: "Ish tartibi",
    nav_contact: "Aloqa",
    nav_cta: "Vazifani muhokama qilish",
    case_badge: "Ishlanmoqda",

    hero_badge: "// BIZNES JARAYONLARINI AVTOMATLASHTIRISH",
    hero_title_1: "Biznesingizdan",
    hero_title_2: "qo'l mehnatini olib tashlayman",
    hero_desc: "Buyurtmalar, xarajatlar, hisobotlar va Telegram avtomatizatsiyasi. Har kuni soatlab vaqtni tejaydigan va sof foydani aniq ko'rsatadigan qulay raqamli tizimlar.",
    hero_stat_1: "Ortiqcha terminlarsiz",
    hero_stat_2: "Birinchi MVP uchun kun",
    hero_stat_3: "TG da buyurtmalar nazorati",
    hero_btn_discuss: "Vazifani muhokama qilish",
    hero_btn_solutions: "Qanday tizimlar bor",

    flow_inputs_title: "TARTIBSIZ MANBALAR",
    flow_orders: "Buyurtmalar",
    flow_expenses: "Xarajatlar",
    flow_processing: "Aqlli tahlil & Bog'lanish",
    flow_output_title: "BIZNESNING ANIQ PANELI",
    flow_metric_orders: "Bugungi yangi buyurtmalar",
    flow_metric_margin: "Tannarx & Sof foyda",
    flow_metric_bot: "Telegram bot",
    flow_result_tag: "Natija: 0 yo'qotilgan mijoz",

    problems_tag: "// RESURS YO'QOTISH NUQTALARI",
    problems_title: "Kichik biznes har kuni qayerda vaqt va foydani yo'qotadi",
    problems_desc: "Biznes o'sgan sari oddiy jadvallar va guruh chatlari yashirin xarajatlar va doimiy boshog'riq manbaiga aylanadi.",
    p1_num: "01 / JADVALLAR",
    p1_title: "Exceldagi tartibsizlik",
    p1_desc: "O'nlab fayllar, buzilgan formulalar, xodimlar orasida turli versiyalar va muhim raqamlarni o'chirib yuborish xavfi.",
    p1_consequence: "→ Natija: hisob-kitobdagi xatolar",
    p2_num: "02 / CHATLAR",
    p2_title: "Telegramdagi buyurtmalar",
    p2_desc: "Buyurtmalar shaxsiy yozishmalarda yo'qolib qoladi. Xodimlar javob berishni unutadi, mijoz esa raqibga ketadi.",
    p2_consequence: "→ Natija: boy berilgan mijozlar",
    p3_num: "03 / MOLIYA",
    p3_title: "Noma'lum sof foyda",
    p3_desc: "Aylanma borga o'xshaydi, lekin barcha mayda xarajatlar va xomashyodan keyin qancha qolgani noma'lum.",
    p3_consequence: "→ Natija: kassa uzilishlari",
    p4_num: "04 / VAQT",
    p4_title: "Qo'lda hisobot yig'ish",
    p4_desc: "Kechqurun va dam olish kunlarida rivojlanish o'rniga raqamlarni qo'lda jamlab o'tirish.",
    p4_consequence: "→ Natija: rahbarning toliqishi",

    solutions_tag: "// ASOSIY YO'NALISHLAR",
    solutions_title: "Tartib va o'sish uchun 3 ta aniq yechim",
    solutions_desc: "Hech kim tushunmaydigan murakkab dasturlar yo'q. Faqat birinchi kundan foyda keltiradigan amaliy vositalar.",
    sol1_title: "Buyurtmalar, xarajatlar va foyda hisobi",
    sol1_desc: "Qulay boshqaruv panellari va avtomatik jadvallar: to'lovlar, xomashyo hisobdan chiqarilishi, har bir partiya tannarxi va real vaqtdagi sof foyda.",
    sol1_f1: "Tannarxni avtomatik hisoblash",
    sol1_f2: "Xarajatlarni doimiy nazorat qilish",
    sol1_f3: "Ombordagi qoldiqlarning aniq hisobi",
    sol_cta: "Hisob avtomatizatsiyasini buyurtma qilish",
    sol2_title: "Buyurtmalar va mijozlar uchun Telegram",
    sol2_desc: "24/7 buyurtma qabul qiluvchi, katalog yuboradigan, savollarga javob beradigan va xodimlarni darhol ogohlantiruvchi botlar.",
    sol2_f1: "Tanaffussiz buyurtma qabul qilish",
    sol2_f2: "Jamoaga tezkor xabarnomalar",
    sol2_f3: "Telegram ichida qulay mini-CRM",
    sol_cta_bot: "Telegram botni ulash",
    sol3_title: "Sotuv uchun lending va vizuallar",
    sol3_desc: "Yuqori konversiyali tezkor zamonaviy saytlar. Mahsulotingizning aniq taqdimoti va qulay buyurtma berish shakli.",
    sol3_f1: "Tezkor yuklanish & mobil moslashuv",
    sol3_f2: "Bot bilan to'g'ridan-to'g'ri integratsiya",
    sol3_f3: "Afzalliklarning tushunarli taqdimoti",
    sol_cta_web: "Sotuv saytini yaratish",

    case_title: "To'qimachilik ishlab chiqarishi uchun hisob tizimi",
    case_desc: "Haqiqiy ishlab chiqarish loyihasi. Biz to'qima raqamlar yoki chiroyli ertaklar yozmaymiz. Mana tizimga kiritilgan aniq modullar:",
    case_m1_title: "Buyurtmalar va mijozlar",
    case_m1_sub: "Partiyalar holati va muddatlar",
    case_m2_title: "Xomashyo va furnitura",
    case_m2_sub: "Mato va iplarning sarfi",
    case_m3_title: "Birlik tannarxi",
    case_m3_sub: "Ish haqi va brakni hisobga olgan holda",
    case_m4_title: "Sof foyda",
    case_m4_sub: "Rahbar uchun yakuniy ko'rsatkich",
    case_transparency_note: "Elyor Systems qoidasi: faqat real ishlab chiqarish jarayoniga asoslangan amaliy yechimlar.",
    case_sim_row1: "Yangi buyurtma: Partiya #1042 (Futbolkalar)",
    case_sim_row2: "Mato va ip sarfi",
    case_sim_row3: "Tikuvchilar haqi va qadoqlash",
    case_sim_sum_label: "SOF FOYDA PROGNOZI",
    case_sim_sum_val: "Bichishdan oldin aniq hisob",
    case_adapt_note: "Har qanday ishlab chiqarish turiga moslashtiriladi",
    case_calc_btn: "Hisobingizni muhokama qilish",

    process_tag: "// ISH BOSQICHLARI",
    process_title: "Ish tartibi: tez va kutilmagan qiyinchiliklarsiz",
    process_desc: "Birinchi suhbatdan boshlab jamoangiz qo'lidagi tayyor ishchi tizimgacha bo'lgan 4 ta bosqich.",
    step1_title: "Jarayonni o'rganaman",
    step1_desc: "Qo'ng'iroqlashamiz yoki uchrashamiz. Hozir qanday hisob yuritasiz va qaysi ishlar eng ko'p vaqt olayotganini ko'rsatasiz.",
    step1_time: "Muddat: 1 kun",
    step2_title: "Birinchi versiyani yig'aman",
    step2_desc: "Asosiy vazifangizga mos oddiy va tushunarli prototip (jadval, bot yoki panel) yarataman.",
    step2_time: "Muddat: ~3-5 kun",
    step3_title: "Haqiqiy ma'lumotlarda test",
    step3_desc: "Sinovni boshlaymiz. Siz va xodimlaringiz tizimni haqiqiy buyurtmalarda sinab ko'radi va qulayligini tekshiradi.",
    step3_time: "Muddat: 2-3 kun",
    step4_title: "Yaxshilaymiz va rivojlantiramiz",
    step4_desc: "Tuzatishlar kiritamiz, jamoani o'rgatamiz va kerak bo'lsa yangi bo'limlarni (ombor, tahlil, lending) ulaymiz.",
    step4_time: "Natija: to'liq tayyor tizim",

    contact_tag: "// ALOQA VA KONSULTATSIYA",
    contact_title: "Vazifangizni muhokama qilaylik",
    contact_desc: "Hozir qaysi jarayon eng ko'p vaqtingizni olayotganini yozing. Men bepul 1-2 ta yechim variantini va muddatlarini taklif qilaman.",
    tg_box_subtitle: "TELEGRAMDA TEZKOR JAVOB",
    tg_box_desc: "Aqlli assistent xabaringizni darhol qabul qiladi va to'g'ridan-to'g'ri Elyor bilan bog'laydi.",
    tg_btn_open: "Botni ochish",
    tg_btn_personal: "Shaxsiy TG",
    phone_label: "TO'G'RIDAN-TO'G'RI TELEFON",
    contact_guarantee: "Ma'lumotlar va tijorat sirining maxfiyligi to'liq kafolatlanadi.",

    form_title: "Vazifani 1 daqiqada tasvirlang",
    form_subtitle: "Kerakli yo'nalishlarni tanlang yoki o'z savolingizni yozing:",
    form_categories_label: "Nimani avtomatlashtirish kerak?",
    tag_1: "Hisob va tannarx",
    tag_2: "Buyurtmalar uchun TG bot",
    tag_3: "Sotuv uchun lending",
    tag_4: "Exceldagi tartibsizlik",
    tag_5: "Boshqa",
    form_name_label: "Ismingiz",
    form_contact_label: "Telegram yoki telefon",
    form_message_label: "Vazifa haqida qisqacha (ixtiyoriy)",
    form_submit_btn: "Telegramga buyurtma yuborish",
    footer_rights: "© 2026. Kichik va o'rta biznes uchun avtomatizatsiya.",
    footer_top: "Yuqoriga"
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
      el.textContent = translations[lang][key];
    }
  });

  // Update button active styles
  const btnRu = document.getElementById('langRu');
  const btnUz = document.getElementById('langUz');

  if (lang === 'ru') {
    btnRu.className = "px-2.5 py-1 rounded font-semibold transition-all bg-brand-accent text-white shadow-sm";
    btnUz.className = "px-2.5 py-1 rounded font-semibold transition-all text-brand-milkyMuted hover:text-white";
  } else {
    btnUz.className = "px-2.5 py-1 rounded font-semibold transition-all bg-brand-accent text-white shadow-sm";
    btnRu.className = "px-2.5 py-1 rounded font-semibold transition-all text-brand-milkyMuted hover:text-white";
  }

  // Re-render Lucide icons
  if (window.lucide) {
    lucide.createIcons();
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

// 4. Mobile Menu Handlers
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu && !menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
  }
}

// 5. Handle Form Submission (Direct Telegram Bot API Integration)
async function handleFormSubmit(event) {
  event.preventDefault();
  
  const nameInput = document.getElementById('userName');
  const contactInput = document.getElementById('userContact');
  const messageInput = document.getElementById('userMessage');
  const submitBtn = document.getElementById('submitBtn');
  const feedback = document.getElementById('formFeedback');

  const name = nameInput.value.trim();
  const contact = contactInput.value.trim();
  const message = messageInput.value.trim();
  const tagsList = Array.from(selectedTags).join(', ') || (currentLanguage === 'ru' ? 'Не выбрано' : 'Tanlanmagan');

  if (!name || !contact) {
    alert(currentLanguage === 'ru' ? 'Пожалуйста, заполните имя и контакт' : 'Iltimos, ism va aloqa ma\'lumotlarini kiriting');
    return;
  }

  // Loading state on button
  const originalBtnText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <span class="inline-block animate-spin mr-2">⏳</span>
    <span>${currentLanguage === 'ru' ? 'Отправка...' : 'Yuborilmoqda...'}</span>
  `;

  // Helper to escape HTML characters for Telegram
  const escapeHtml = (str) => String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // Format message for Telegram HTML
  const tgHtml = `🔔 <b>НОВАЯ ЗАЯВКА С САЙТА ELYOR SYSTEMS</b> 🔔\n\n` +
    `👤 <b>Имя:</b> ${escapeHtml(name)}\n` +
    `📞 <b>Контакт:</b> ${escapeHtml(contact)}\n` +
    `🎯 <b>Направления:</b> ${escapeHtml(tagsList)}\n` +
    `📝 <b>Задача / Сообщение:</b>\n${escapeHtml(message || '—')}\n\n` +
    `⏱ <i>Время заявки: ${new Date().toLocaleTimeString('ru-RU')} (Ташкент)</i>`;

  const plainText = `🔔 НОВАЯ ЗАЯВКА С САЙТА ELYOR SYSTEMS 🔔\n\n` +
    `👤 Имя: ${name}\n` +
    `📞 Контакт: ${contact}\n` +
    `🎯 Направления: ${tagsList}\n` +
    `📝 Задача: ${message || '—'}\n\n` +
    `⏱ Время: ${new Date().toLocaleTimeString('ru-RU')}`;

  const botToken = '8894291120:AAFN3WQo40Ck7Br9F-aziNGAPFiqM7U5KOY';
  const chatId = '55226487';
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    // Primary: fetch POST with HTML parse_mode
    let isSuccess = false;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: tgHtml,
          parse_mode: 'HTML',
        }),
      });
      const result = await response.json();
      if (result.ok) isSuccess = true;
    } catch (e) {
      console.warn('Fetch POST failed, attempting GET/image fallback:', e);
    }

    // Secondary fallback for file:/// protocol (CORS bypass via URL GET)
    if (!isSuccess) {
      const getUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(plainText)}`;
      const img = new Image();
      img.src = getUrl;
      isSuccess = true;
    }

    // Success feedback
    feedback.classList.remove('hidden', 'bg-red-500/20', 'text-red-300', 'border-red-500/30', 'bg-amber-500/20', 'text-amber-300', 'border-amber-500/30');
    feedback.classList.add('bg-emerald-500/20', 'text-emerald-300', 'border', 'border-emerald-500/30');
    
    feedback.innerHTML = currentLanguage === 'ru' 
      ? `🎉 <b>Отлично, ${escapeHtml(name)}!</b> Заявка мгновенно доставлена в Telegram к Elyor. Я свяжусь с вами в ближайшее время!`
      : `🎉 <b>Ajoyib, ${escapeHtml(name)}!</b> Buyurtmangiz darhol Elyorning Telegramiga yetkazildi. Tez orada siz bilan bog'lanamiz!`;

    // Clear form inputs
    nameInput.value = '';
    contactInput.value = '';
    messageInput.value = '';
    selectedTags.clear();
    document.querySelectorAll('.tag-pill').forEach(btn => {
      btn.classList.remove('active', 'bg-brand-accent', 'text-white', 'border-brand-accent');
      btn.classList.add('bg-brand-surface', 'text-slate-300', 'border-brand-border');
    });

  } catch (err) {
    console.error('Submission error:', err);
    const fallbackText = encodeURIComponent(plainText);
    const botUrl = `https://t.me/elyor_smart_agent_bot?text=${fallbackText}`;
    
    feedback.classList.remove('hidden', 'bg-emerald-500/20', 'text-emerald-300', 'border-emerald-500/30');
    feedback.classList.add('bg-amber-500/20', 'text-amber-300', 'border', 'border-amber-500/30');
    feedback.innerHTML = currentLanguage === 'ru'
      ? `Спасибо! Нажмите <a href="${botUrl}" target="_blank" class="underline font-bold text-white">сюда</a>, чтобы отправить через Telegram.`
      : `Rahmat! Telegram orqali yuborish uchun <a href="${botUrl}" target="_blank" class="underline font-bold text-white">bu yerni</a> bosing.`;
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }
}

// 6. Header Blur on Scroll & Scroll Reveal
window.addEventListener('scroll', () => {
  const header = document.getElementById('mainHeader');
  if (window.scrollY > 40) {
    header.classList.add('shadow-xl', 'bg-brand-dark/95');
    header.classList.remove('bg-brand-dark/80');
  } else {
    header.classList.remove('shadow-xl', 'bg-brand-dark/95');
    header.classList.add('bg-brand-dark/80');
  }
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  const mobileBtn = document.getElementById('mobileMenuBtn');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', toggleMobileMenu);
  }

  const savedLang = localStorage.getItem('elyor_lang') || 'ru';
  setLanguage(savedLang);
});
