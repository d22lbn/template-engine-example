const template = `
<div class="{{ wrapperClassName }}">
  <div class="chat__button">
    <button class="button">
      <span>{{ buttonText }}</span>
    </button>
  </div>

  <ul class="{{ chatListClassName }}">
    {{ chatListItems }}
  </ul>
</div>
`;


const CHAT_NAMES = [
    'Название чата 1',
    'Название чата 2',
    'Название чата 3',
    'Название чата 4',
];

const chatsTemplate = new TemplateEngine(template)

const chatsMarkup = chatsTemplate.compile({
    wrapperClassName: 'chat__wrapper',
    buttonText: 'Добавить чат',
    chatListClassName: 'chat__list',
    chatListItems: CHAT_NAMES.map(item => (
        `<li class="chat__item">${item}</li>`
    )),
});

document.body.innerHTML = chatsMarkup;
