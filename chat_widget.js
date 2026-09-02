/**
 * ElyorAI — Smart AI Chat Widget (Powered by Google Gemini AI)
 * Handles interactive business consultations, FAQ answering, and Telegram lead generation.
 */

(function () {
  // Telegram notification credentials (same as site form)
  const TG_BOT_TOKEN = "8894291120:AAFN3WQo40Ck7Br9F-aziNGAPFiqM7U5KOY";
  const TG_CHAT_ID = "55226487";
  const GEMINI_KEY = "AIzaSyABuMHuWGcFgR06n5TA-JfWZfSmiO_hJGk";

  // System Knowledge Base Prompt
  const SYSTEM_INSTRUCTION = `
Ты — официальный AI-ассистент компании "ElyorAI" (основатель и ведущий инженер автоматизации — Элёр Абдукадиров, Telegram: @ElyorAA, телефон: +998 99 408 51 99).
Твоя цель: вежливо, грамотно и лаконично консультировать предпринимателей и представителей малого бизнеса по автоматизации, отвечать на их вопросы и помогать оставить заявку на консультацию.

ФАКТЫ И БАЗА ЗНАНИЙ:
1. КТО ТАКОЙ ЭЛЁР:
- Инженер по автоматизации бизнеса в Узбекистане (Ташкент).
- Делает прикладные системы под реальный процесс бизнеса, убирает рутину и хаос, экономит собственникам от 15-20 часов в неделю и делает чистую прибыль прозрачной.
- Принцип: без бюрократии, без навязывания ненужных громоздких программ. Сначала разбираемся в данных клиента — потом делаем простой и точный инструмент.

2. ЧТО МЫ ДЕЛАЕМ (ОСНОВНЫЕ УСЛУГИ):
- Учёт и себестоимость: для швейных цехов, трикотажа, производств и оптовой торговли. Расчёт реальной себестоимости единицы (ткань, фурнитура, крой, пошив, брак), остатки сырья на складе, отчёты о чистой прибыли (P&L).
- Telegram-боты: приём заказов из чатов, умные CRM прямо в Telegram, уведомления для мастеров и курьеров, интеграция с таблицами.
- Наведение порядка в Excel / Google Таблицах: связываем разрозненные файлы в единую систему с защитой от ошибок персонала.
- Веб-дашборды и лендинги: стильные сайты для продаж и дашборды для владельца, чтобы смотреть цифры бизнеса с телефона.

3. СРОКИ И ЦЕНЫ:
- Сроки: первую рабочую версию (MVP) собираем за 3–7 дней. Клиент тестирует её сразу на своих реальных данных.
- Стоимость: компактные боты и модули автоматизации — от $150–$300. Комплексный учёт цеха/производства под ключ — от $500–$1,000+. Точная цена называется после бесплатного 15-минутного разбора задачи.

4. ПРАВИЛА ПОВЕДЕНИЯ:
- Будь дружелюбным, уверенным, говори простым языком без заумных терминов.
- Отвечай на том языке, на котором пишет пользователь (русский или узбекский).
- Если клиент задаёт узкий вопрос (точная скидка, договор с юрлицом по перечислению, интеграция со старыми базами 1С, личная встреча в Ташкенте) — НЕ придумывай отсебятину. Скажи: "Это индивидуальный инженерный вопрос, который лучше обсудить напрямую с Элёром" и предложи нажать кнопку связи в Telegram (@ElyorAA).
- После 1–2 ответов всегда мягко предлагай: "Оставьте ваше имя и номер телефона или Telegram — я передам Элёру, и он подготовит предварительный расчёт под ваш процесс!".

5. ФОРМАТИРОВАНИЕ:
- Пиши компактно (2-4 абзаца максимум), используй эмодзи и списки.
`;

  let chatHistory = [];
  let isSending = false;
  let isOpen = false;
  let leadCaptured = false;

  // DOM Elements
  let widgetContainer, chatTrigger, chatWindow, messagesContainer, chatInput, sendBtn;

  function init() {
    renderWidgetHTML();
    bindEvents();
    // Pre-populate greeting message
    addBotMessage(
      "Здравствуйте! 👋 Я цифровой ассистент компании **ElyorAI**.\n\nПомогаю автоматизировать учёт, заказы и убрать рутину из бизнеса. Чем занимается ваша компания?",
      [
        { text: "💰 Сколько стоит?", prompt: "Сколько стоит автоматизация бизнеса?" },
        { text: "⏱ Какие сроки?", prompt: "Сколько времени занимает разработка?" },
        { text: "👕 Учёт в производстве", prompt: "Как вы автоматизируете учёт для производства и трикотажа?" },
        { text: "💬 Написать Элёру", action: "open_tg" }
      ]
    );
  }

  function renderWidgetHTML() {
    const html = `
      <div id="aiChatWidget" class="ai-widget">
        <!-- Floating Toggle Button -->
        <button id="aiChatTrigger" class="ai-trigger" aria-label="Открыть чат с ассистентом" title="Чат с AI-ассистентом">
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
                <div class="ai-title">ElyorAI Assistant <b>AI</b></div>
                <div class="ai-subtitle">Отвечает за пару секунд • Онлайн 🟢</div>
              </div>
            </div>
            <button id="aiCloseBtn" class="ai-header-close" aria-label="Закрыть">✕</button>
          </div>

          <div id="aiMessages" class="ai-messages">
            <!-- Messages rendered here -->
          </div>

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

  async function handleUserSubmit() {
    const text = chatInput.value.trim();
    if (!text || isSending) return;

    addUserMessage(text);
    chatInput.value = "";
    isSending = true;
    sendBtn.disabled = true;

    detectAndForwardLead(text);
    showTypingIndicator();

    try {
      const botResponse = await queryGeminiAI(text);
      removeTypingIndicator();
      addBotMessage(botResponse, [
        { text: "💬 Написать Элёру напрямую", action: "open_tg" },
        { text: "💰 Стоимость и сроки", prompt: "Расскажи подробнее про стоимость и сроки" }
      ]);
    } catch (err) {
      console.error("Gemini API error:", err);
      removeTypingIndicator();
      addBotMessage(
        "Я зафиксировал ваш вопрос! Для точного расчёта напишите напрямую Элёру в Telegram — он ответит в течение 15 минут.",
        [{ text: "💬 Написать Элёру (@ElyorAA)", action: "open_tg" }]
      );
    } finally {
      isSending = false;
      sendBtn.disabled = false;
    }
  }

  async function queryGeminiAI(userText) {
    chatHistory.push({ role: "user", parts: [{ text: userText }] });

    if (chatHistory.length > 10) {
      chatHistory = chatHistory.slice(-10);
    }

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`;

    const bodyPayload = {
      systemInstruction: {
        parts: [{ text: SYSTEM_INSTRUCTION }]
      },
      contents: chatHistory,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 600
      }
    };

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyPayload)
    });

    if (!res.ok) {
      const fallbackEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`;
      const res2 = await fetch(fallbackEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyPayload)
      });
      if (!res2.ok) throw new Error(`HTTP ${res2.status}`);
      const data2 = await res2.json();
      const reply2 = data2.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!reply2) throw new Error("Empty response");
      chatHistory.push({ role: "model", parts: [{ text: reply2 }] });
      return reply2;
    }

    const data = await res.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!reply) {
      throw new Error("Empty response from AI");
    }

    chatHistory.push({ role: "model", parts: [{ text: reply }] });
    return reply;
  }

  function detectAndForwardLead(text) {
    const phoneRegex = /(\+?[0-9]{9,13})|(\b[0-9]{2}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}\b)/;
    const tgUsernameRegex = /(@[a-zA-Z0-9_]{4,})/;

    const hasPhone = phoneRegex.test(text);
    const hasTg = tgUsernameRegex.test(text);

    if ((hasPhone || hasTg) && !leadCaptured) {
      leadCaptured = true;
      const contactInfo = text.match(phoneRegex)?.[0] || text.match(tgUsernameRegex)?.[0] || "Контакт в тексте";

      const alertText = 
        `🎯 <b>НОВАЯ ЗАЯВКА ИЗ AI-ЧАТА НА ЛЕНДИНГЕ!</b>\n` +
        `━━━━━━━━━━━━━━━━━━━━\n` +
        `📞 <b>Контакт:</b> <code>${contactInfo}</code>\n` +
        `💬 <b>Сообщение клиента:</b> «<i>${text}</i>»\n\n` +
        `🤖 <i>AI-ассистент продолжает диалог с клиентом на сайте.</i>`;

      fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text: alertText,
          parse_mode: "HTML"
        })
      }).catch((e) => console.log("Silent lead alert err:", e));
    }
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
