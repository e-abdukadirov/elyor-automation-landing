/**
 * ElyorAI — Smart Conversational Business Assistant
 * Context-aware NLP engine for consultations, services Q&A, and Telegram lead generation.
 */

(function () {
  // Telegram notification credentials
  const TG_BOT_TOKEN = "8894291120:AAFN3WQo40Ck7Br9F-aziNGAPFiqM7U5KOY";
  const TG_CHAT_ID = "55226487";

  // State management
  let state = {
    userName: "",
    businessInterest: "",
    contact: "",
    leadCaptured: false,
    messageCount: 0
  };

  let isSending = false;
  let isOpen = false;

  // DOM Elements
  let widgetContainer, chatTrigger, chatWindow, messagesContainer, chatInput, sendBtn;

  function init() {
    renderWidgetHTML();
    bindEvents();
    
    // Initial welcome message
    setTimeout(() => {
      addBotMessage(
        "Здравствуйте! 👋 Я онлайн-ассистент компании **ElyorAI**.\n\nПомогаю автоматизировать учёт, заказы и убрать рутину из бизнеса. Чем занимается ваша компания или какая задача стоит?",
        [
          { text: "🚀 Нужен лендинг / сайт", prompt: "Мне нужно создать сайт или лендинг" },
          { text: "👕 Учёт в цеху / трикотаж", prompt: "Как наладить учёт на производстве и в трикотаже?" },
          { text: "🤖 Telegram-бот", prompt: "Хочу сделать Telegram-бота для заказов" },
          { text: "💰 Сколько стоит?", prompt: "Сколько стоят ваши услуги и какие сроки?" }
        ]
      );
    }, 400);
  }

  function renderWidgetHTML() {
    const html = `
      <div id="aiChatWidget" class="ai-widget">
        <!-- Floating Toggle Button -->
        <button id="aiChatTrigger" class="ai-trigger" aria-label="Открыть чат с ассистентом" title="Чат с ассистентом">
          <span class="ai-trigger-icon">💬</span>
          <span class="ai-trigger-close">✕</span>
          <span class="ai-badge">AI</span>
          <span class="ai-ping"></span>
        </button>

        <!-- Chat Window -->
        <div id="aiChatWindow" class="ai-window" style="display: none;">
          <div class="ai-header">
            <div class="ai-header-info">
              <div class="ai-avatar">
                <span>e</span>
                <span class="ai-status-dot"></span>
              </div>
              <div>
                <div class="ai-title">ElyorAI Assistant <b>ONLINE</b></div>
                <div class="ai-subtitle">Отвечает моментально • Элёр на связи 🟢</div>
              </div>
            </div>
            <button id="aiCloseBtn" class="ai-header-close" aria-label="Закрыть">✕</button>
          </div>

          <div id="aiMessages" class="ai-messages"></div>

          <!-- Quick Prompts Row -->
          <div id="aiQuickPrompts" class="ai-quick-prompts"></div>

          <!-- Input Area -->
          <form id="aiChatForm" class="ai-footer">
            <input 
              type="text" 
              id="aiChatInput" 
              class="ai-input" 
              placeholder="Напишите вопрос или ваш номер..." 
              autocomplete="off"
            />
            <button type="submit" id="aiSendBtn" class="ai-send-btn" aria-label="Отправить">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", html);

    widgetContainer = document.getElementById("aiChatWidget");
    chatTrigger = document.getElementById("aiChatTrigger");
    chatWindow = document.getElementById("aiChatWindow");
    messagesContainer = document.getElementById("aiMessages");
    chatInput = document.getElementById("aiChatInput");
    sendBtn = document.getElementById("aiSendBtn");
  }

  function bindEvents() {
    chatTrigger.addEventListener("click", toggleChat);
    document.getElementById("aiCloseBtn").addEventListener("click", toggleChat);

    document.getElementById("aiChatForm").addEventListener("submit", function (e) {
      e.preventDefault();
      handleUserSubmit();
    });
  }

  function toggleChat() {
    isOpen = !isOpen;
    if (isOpen) {
      chatWindow.style.display = "flex";
      chatTrigger.classList.add("active");
      chatInput.focus();
      scrollBottom();
    } else {
      chatWindow.style.display = "none";
      chatTrigger.classList.remove("active");
    }
  }

  function scrollBottom() {
    setTimeout(() => {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 50);
  }

  function addBotMessage(text, quickButtons = null) {
    const msgDiv = document.createElement("div");
    msgDiv.className = "ai-msg ai-msg-bot";

    let formatted = text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n\n/g, "<br><br>")
      .replace(/\n/g, "<br>");

    msgDiv.innerHTML = `
      <div class="ai-bubble">
        <div class="ai-bubble-text">${formatted}</div>
      </div>
      <div class="ai-msg-time">${getCurrentTime()}</div>
    `;

    messagesContainer.appendChild(msgDiv);
    scrollBottom();

    renderQuickButtons(quickButtons);
  }

  function addUserMessage(text) {
    const msgDiv = document.createElement("div");
    msgDiv.className = "ai-msg ai-msg-user";
    msgDiv.innerHTML = `
      <div class="ai-bubble">
        <div class="ai-bubble-text">${escapeHTML(text)}</div>
      </div>
      <div class="ai-msg-time">${getCurrentTime()}</div>
    `;
    messagesContainer.appendChild(msgDiv);
    scrollBottom();
  }

  function showTypingIndicator() {
    const id = "aiTypingIndicator";
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const indicator = document.createElement("div");
    indicator.id = id;
    indicator.className = "ai-msg ai-msg-bot ai-typing";
    indicator.innerHTML = `
      <div class="ai-bubble">
        <span class="ai-dot"></span>
        <span class="ai-dot"></span>
        <span class="ai-dot"></span>
      </div>
    `;
    messagesContainer.appendChild(indicator);
    scrollBottom();
  }

  function removeTypingIndicator() {
    const el = document.getElementById("aiTypingIndicator");
    if (el) el.remove();
  }

  function renderQuickButtons(buttons) {
    const container = document.getElementById("aiQuickPrompts");
    container.innerHTML = "";
    if (!buttons || !buttons.length) return;

    buttons.forEach((btn) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "ai-quick-btn";
      b.textContent = btn.text;
      b.addEventListener("click", () => {
        if (btn.action === "open_tg") {
          window.open("https://t.me/ElyorAA", "_blank");
        } else if (btn.prompt) {
          chatInput.value = btn.prompt;
          handleUserSubmit();
        }
      });
      container.appendChild(b);
    });
  }

  function handleUserSubmit() {
    const text = chatInput.value.trim();
    if (!text || isSending) return;

    addUserMessage(text);
    chatInput.value = "";
    isSending = true;
    sendBtn.disabled = true;
    state.messageCount++;

    // Check contact extraction
    const hasContact = detectAndForwardLead(text);

    showTypingIndicator();

    // Natural conversation delay
    setTimeout(() => {
      removeTypingIndicator();
      const response = generateSmartResponse(text, hasContact);
      addBotMessage(response.text, response.buttons);
      isSending = false;
      sendBtn.disabled = false;
    }, 450);
  }

  /**
   * Conversational Intelligence Engine
   */
  function generateSmartResponse(input, hasContact) {
    try {
      const raw = input.toLowerCase().trim();
      const clean = raw.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, " ").trim();

      // 1. If user just shared their contact
      if (hasContact) {
        const greeting = state.userName ? `${state.userName}, спасибо!` : "Спасибо!";
        return {
          text: `✅ **${greeting} Контакт успешно получен!**\n\nЯ уже передал вашу задачу Элёру в Telegram. Он свяжется с вами в течение 15 минут для обсуждения деталей и расчёта решения.`,
          buttons: [
            { text: "💬 Написать Элёру напрямую в TG", action: "open_tg" },
            { text: "💰 Стоимость и сроки", prompt: "Сколько это обычно стоит по времени и деньгам?" }
          ]
        };
      }

      // 2. Greetings FIRST (привет, салам, privet, salom, hello, hi, etc.)
      if (clean.match(/(привет|privet|здравствуй|салам|salam|salom|assalomu|ассалому|добрый|хайрли|qaleysiz|ало|hello|hi\b|hey\b)/i)) {
        const namePrefix = state.userName ? `Снова здравствуйте, ${state.userName}! ` : "Здравствуйте! Рад приветствовать вас. 👋 ";
        return {
          text: `${namePrefix}\n\nЯ помогаю предпринимателям рассчитать автоматизацию для бизнеса (учёт себестоимости, трикотаж, Telegram-боты, лендинги, Excel).\n\nКакой вопрос или задачу хотите разобрать?`,
          buttons: [
            { text: "🚀 Создать лендинг", prompt: "Мне нужен продающий лендинг" },
            { text: "👕 Учёт в производстве", prompt: "Как наладить учёт в цеху?" },
            { text: "💰 Стоимость и сроки", prompt: "Сколько стоят ваши услуги?" }
          ]
        };
      }

      // 3. Name introduction (e.g. "Меня зовут Алишер", "Menya zovut Alisher", "ismim Alisher", "я Алишер")
      const nameMatch = raw.match(/(?:меня зовут|мени исмим|ismim|mening ismim|мени отим|my name is|menya zovut)\s+([a-zA-Zа-яА-ЯёЁ]+)/i);
      if (nameMatch && nameMatch[1]) {
        const detected = nameMatch[1];
        state.userName = detected.charAt(0).toUpperCase() + detected.slice(1).toLowerCase();
        
        return {
          text: `Очень приятно познакомиться, **${state.userName}**! 🤝\n\nРасскажите, какой у вас бизнес или какую задачу хотите решить (учёт в цеху, сайт/лендинг, Telegram-бот или порядок в таблицах)?`,
          buttons: [
            { text: "🚀 Создать лендинг", prompt: "Мне нужен продающий лендинг" },
            { text: "👕 Учёт производства", prompt: "Нужен учёт производства и трикотажа" },
            { text: "🤖 Сделать Telegram-бота", prompt: "Нужен Telegram-бот для заказов" },
            { text: "💬 Связаться с Элёром", action: "open_tg" }
          ]
        };
      }

      // 4. Landing / Website
      if (clean.match(/(landing|лендинг|сайт|вебсайт|vebsayt|web site|страниц|одностраничн)/i)) {
        state.businessInterest = "Лендинг и продажи";
        const namePrefix = state.userName ? `${state.userName}, отличная задача! ` : "Отличная задача! ";
        return {
          text: `🚀 **${namePrefix}Элёр разрабатывает конверсионные лендинги и веб-системы под ключ.**\n\n• **Сроки:** первая рабочая версия за **3–7 дней**.\n• **Что входит:** адаптивный дизайн (для смартфонов и ПК), продающая структура без «воды», подключение приёма заявок прямо в ваш Telegram-чат.\n\nКакой продукт или услугу вы планируете продавать на лендинге?`,
          buttons: [
            { text: "💰 Сколько стоит лендинг?", prompt: "Сколько стоит разработка лендинга?" },
            { text: "📞 Оставить заявку", prompt: "Хочу обсудить лендинг, куда отправить номер?" },
            { text: "💬 Написать Элёру", action: "open_tg" }
          ]
        };
      }

      // 5. Production / Textile / Sewing Workshop
      if (clean.match(/(цех|трикотаж|производств|швейн|тикувчи|tsex|ishlab chiqarish|мато|ткань|лекал|фурнитур|крой|пошив|себестоимост|tannarx)/i)) {
        state.businessInterest = "Учёт производства и цеха";
        const namePrefix = state.userName ? `${state.userName}, ` : "";
        return {
          text: `👕 **${namePrefix}Учёт в швейном производстве и трикотаже — одно из главных направлений Элёра!**\n\nСистема помогает навести железный порядок:\n• Расчёт **реальной себестоимости единицы** (ткань, фурнитура, крой, работа швеи, брак).\n• Складской учёт остатков сырья и готовой продукции.\n• Прозрачный отчёт о чистой прибыли (P&L) — сразу видно, где деньги зарабатываются, а где теряются.\n\nСколько человек сейчас работает в вашем цеху?`,
          buttons: [
            { text: "💰 Сколько стоит внедрение?", prompt: "Сколько стоит учёт цеха под ключ?" },
            { text: "⏱ Сколько времени занимает?", prompt: "Какие сроки запуска системы учёта?" },
            { text: "💬 Обсудить с Элёром в TG", action: "open_tg" }
          ]
        };
      }

      // 6. Telegram Bots / CRM
      if (clean.match(/(бот|bot|telegram|телеграм|тг|crm|црм|заявк|buyurtma)/i)) {
        state.businessInterest = "Telegram-бот и CRM";
        return {
          text: `🤖 **Telegram-боты и внутренняя автоматизация:**\n\n• Автоматический приём заказов из чатов без ручной переписки.\n• Уведомления для мастеров, курьеров и менеджеров.\n• Удобная CRM прямо в Telegram со статусами (Новые, В работе, Выполненные) — без необходимости обучать персонал сложным программам.\n\nДля чего вам нужен бот: для клиентов или для сотрудников внутри компании?`,
          buttons: [
            { text: "💰 Стоимость бота", prompt: "Сколько стоит Telegram-бот?" },
            { text: "⏱ Сроки создания", prompt: "За сколько дней делается бот?" },
            { text: "💬 Написать Элёру", action: "open_tg" }
          ]
        };
      }

      // 7. Excel / Google Sheets
      if (clean.match(/(excel|эксель|таблиц|google sheets|sheets|гугл таблиц|jadval)/i)) {
        state.businessInterest = "Наведение порядка в Excel";
        return {
          text: `📊 **Наведение порядка в Excel и Google Таблицах:**\n\n• Связываем разрозненные файлы в единую работающую систему.\n• Настраиваем автоматические формулы, защиту от случайного удаления данных и человеческого фактора.\n• Выводим наглядные дашборды для владельца.\n\nВы хотите навести порядок в текущих файлах или собрать новую систему с нуля?`,
          buttons: [
            { text: "💰 Стоимость работы с Excel", prompt: "Сколько стоит навести порядок в таблицах?" },
            { text: "💬 Обсудить задачу с Элёром", action: "open_tg" }
          ]
        };
      }

      // 8. Price & Costs
      if (clean.match(/(стои|цен|прайс|нарх|narx|qancha|почем|бюджет|оплат|tarif)/i)) {
        const namePrefix = state.userName ? `${state.userName}, ` : "";
        return {
          text: `💰 **${namePrefix}Стоимость зависит от объёма процессов, но подход прозрачный:**\n\n• **Компактные решения и Telegram-боты:** от **$150–$300**.\n• **Комплексный учёт цеха / склада / себестоимости:** от **$500–$1,000+**.\n• Начинаем с быстрой рабочей версии, проверяем на ваших реальных данных, без многомесячной бюрократии.\n\nОставьте номер телефона или Telegram — Элёр сделает бесплатный предварительный расчёт под вашу задачу!`,
          buttons: [
            { text: "📞 Оставить контакт", prompt: "Хочу оставить контакт для расчёта" },
            { text: "⏱ Какие сроки?", prompt: "А какие сроки разработки?" },
            { text: "💬 Написать напрямую Элёру", action: "open_tg" }
          ]
        };
      }

      // 9. Timing & Deadlines
      if (clean.match(/(срок|время|вакт|vaqt|быстро|когда|дней|tezmi)/i)) {
        return {
          text: `⏱ **Сроки запуска:**\n\n• Первую рабочую версию (MVP) мы собираем за **3–7 дней**.\n• Вы сразу начинаете тестировать её на своих реальных данных и видите результат.\n• Далее дорабатываем и улучшаем нужные функции без остановки ваших процессов.`,
          buttons: [
            { text: "💰 Сколько это стоит?", prompt: "Сколько стоит автоматизация?" },
            { text: "💬 Написать Элёру в Telegram", action: "open_tg" }
          ]
        };
      }

      // 10. Direct contacts / Meeting / Location
      if (clean.match(/(контакт|телефон|номер|где|адрес|встреч|ташкент|toshkent|офис)/i)) {
        return {
          text: `📍 **Контакты и локация:**\n\n• **Основатель:** Элёр Абдукадиров\n• **Локация:** Ташкент, Узбекистан (работаем по всему Узбекистану и онлайн)\n• **Telegram:** @ElyorAA\n• **Телефон:** +998 99 408 51 99\n\nМожете написать напрямую в Telegram или оставить номер здесь в чате — Элёр вам перезвонит!`,
          buttons: [
            { text: "💬 Открыть диалог с Элёром", action: "open_tg" }
          ]
        };
      }

      // 11. Fallback
      const namePrefix = state.userName ? `${state.userName}, я` : "Я";
      return {
        text: `${namePrefix} понял ваш запрос! 👍\n\nЧтобы предложить точное решение: напишите ваш номер телефона или Telegram, либо опишите сферу вашего бизнеса (производство, торговля, услуги).`,
        buttons: [
          { text: "💰 Сколько стоят услуги?", prompt: "Сколько стоит автоматизация бизнеса?" },
          { text: "👕 Учёт трикотажа и цеха", prompt: "Расскажите про учёт трикотажного цеха" },
          { text: "💬 Написать лично Элёру", action: "open_tg" }
        ]
      };
    } catch (err) {
      return {
        text: "Я зафиксировал ваш вопрос! Напишите ваш номер телефона или Telegram — Элёр ответит вам в течение 15 минут.",
        buttons: [{ text: "💬 Написать Элёру (@ElyorAA)", action: "open_tg" }]
      };
    }
  }

  // Automatic lead extraction and forwarding to Telegram
  function detectAndForwardLead(text) {
    const phoneRegex = /(\+?[0-9]{9,13})|(\b[0-9]{2}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}\b)/;
    const tgUsernameRegex = /(@[a-zA-Z0-9_]{4,})/;

    const hasPhone = phoneRegex.test(text);
    const hasTg = tgUsernameRegex.test(text);

    if (hasPhone || hasTg) {
      const contactInfo = text.match(phoneRegex)?.[0] || text.match(tgUsernameRegex)?.[0] || "Контакт в тексте";
      state.contact = contactInfo;

      const clientName = state.userName || "Посетитель сайта";
      const interest = state.businessInterest || "Общий запрос";

      const alertText = 
        `🔥 <b>НОВАЯ ЗАЯВКА ИЗ ОНЛАЙН-ЧАТА!</b>\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `👤 <b>Имя:</b> ${clientName}\n` +
        `📞 <b>Контакт:</b> <code>${contactInfo}</code>\n` +
        `🎯 <b>Интерес:</b> ${interest}\n` +
        `💬 <b>Сообщение:</b> «<i>${text}</i>»\n\n` +
        `⏱ <i>Клиент сейчас находится в чате на сайте!</i>`;

      fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text: alertText,
          parse_mode: "HTML"
        })
      }).catch((e) => console.log("Silent lead alert err:", e));

      return true;
    }
    return false;
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.innerText = str;
    return div.innerHTML;
  }

  function getCurrentTime() {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
