const supportedDocLangs = ['en', 'ko', 'vi'];

const getInitialDocLang = () => {
  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get('lang');
  const savedLang = localStorage.getItem('lang');

  if (supportedDocLangs.includes(queryLang)) return queryLang;
  if (supportedDocLangs.includes(savedLang)) return savedLang;
  return 'en';
};

let currentDocLang = getInitialDocLang();

const getProjectSlug = () => {
  const fileName = window.location.pathname.split('/').pop() || '';
  return fileName.replace(/\.html$/, '');
};

const getDocUi = () => projectDocUi[currentDocLang] || projectDocUi.en;

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

const createLanguageSwitcher = () => {
  const ui = getDocUi();
  const switcher = createElement('div', 'doc-lang-switcher');
  switcher.setAttribute('role', 'group');
  switcher.setAttribute('aria-label', ui.languageSwitcherLabel);

  supportedDocLangs.forEach(lang => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `doc-lang-btn${lang === currentDocLang ? ' active' : ''}`;
    button.dataset.lang = lang;
    button.setAttribute('aria-pressed', lang === currentDocLang ? 'true' : 'false');
    button.setAttribute('aria-label', ui.languageNames[lang]);
    button.textContent = lang === 'ko' ? '한' : lang.toUpperCase();
    button.addEventListener('click', () => switchDocLanguage(lang));
    switcher.appendChild(button);
  });

  return switcher;
};

const createAction = (action) => {
  const link = document.createElement('a');
  link.className = `btn${action.primary ? ' primary' : ''}`;
  link.href = action.href;
  link.textContent = action.labels[currentDocLang] || action.labels.en;

  if (/^https?:\/\//.test(action.href)) {
    link.target = '_blank';
    link.rel = 'noreferrer';
  }

  return link;
};

const updateUrlLang = () => {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', currentDocLang);
  window.history.replaceState({}, '', url);
};

const renderProjectDoc = () => {
  const slug = getProjectSlug();
  const doc = projectDocs[slug];
  const root = document.querySelector('[data-project-doc]');
  const ui = getDocUi();

  document.documentElement.lang = currentDocLang;

  if (!root) return;
  root.innerHTML = '';

  const topbar = createElement('div', 'doc-topbar');
  const back = createElement('a', 'back', `← ${ui.back}`);
  back.href = `../index.html?lang=${currentDocLang}#projects`;
  topbar.append(back, createLanguageSwitcher());
  root.appendChild(topbar);

  if (!doc) {
    document.title = ui.notFound;
    root.appendChild(createElement('article', 'card', ui.notFound));
    return;
  }

  const content = doc.content[currentDocLang] || doc.content.en;
  document.title = `${content.title} | ${ui.titleSuffix}`;

  const article = createElement('article', 'card');
  article.id = 'docs';
  const heading = createElement('h1', '', content.title);
  const meta = createElement('p', 'meta', content.meta);
  const intro = createElement('p', 'project-intro');
  intro.innerHTML = content.intro;

  const actions = createElement('div', 'actions');
  doc.actions.forEach(action => actions.appendChild(createAction(action)));

  article.append(heading, meta, intro, actions);

  content.sections.forEach(section => {
    const sectionEl = createElement('section', 'section');
    sectionEl.id = section.id;
    const sectionTitle = createElement('h2', '', section.title);
    const body = createElement('div', 'section-body');
    body.innerHTML = section.html;
    sectionEl.append(sectionTitle, body);
    article.appendChild(sectionEl);
  });

  root.appendChild(article);
};

const switchDocLanguage = (lang) => {
  if (!supportedDocLangs.includes(lang) || lang === currentDocLang) return;

  currentDocLang = lang;
  localStorage.setItem('lang', lang);
  updateUrlLang();
  renderProjectDoc();
};

window.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('lang', currentDocLang);
  updateUrlLang();
  renderProjectDoc();
});
