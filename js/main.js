const supportedLangs = ['en', 'ko', 'vi'];
const getInitialLang = () => {
  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get('lang');
  const savedLang = localStorage.getItem('lang');

  if (supportedLangs.includes(queryLang)) return queryLang;
  if (supportedLangs.includes(savedLang)) return savedLang;
  return 'en';
};

let currentLang = getInitialLang();
let portfolioData = portfolioDataAll[currentLang] || portfolioDataAll.en;

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => scope.querySelectorAll(selector);

const getUi = () => portfolioData.ui || portfolioDataAll.en.ui;

const localizeHref = (href) => {
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || /^https?:\/\//.test(href)) {
    return href;
  }

  if (!/^docs\/.+\.html/.test(href)) {
    return href;
  }

  const [basePart, hashPart] = href.split('#');
  const [path, query = ''] = basePart.split('?');
  const params = new URLSearchParams(query);
  params.set('lang', currentLang);

  return `${path}?${params.toString()}${hashPart ? `#${hashPart}` : ''}`;
};

const createLink = ({ label, href, external, primary, placeholder }) => {
  const elementTag = placeholder || !href ? 'span' : 'a';
  const element = document.createElement(elementTag);

  element.textContent = label;
  element.className = `btn${primary ? ' primary' : ''}${placeholder || !href ? ' placeholder' : ''}`;

  if (elementTag === 'a') {
    element.href = localizeHref(href);

    if (external) {
      element.target = '_blank';
      element.rel = 'noreferrer';
    }
  }

  return element;
};

const appendLabeledText = (parent, labelText, valueText) => {
  const strong = document.createElement('strong');
  strong.textContent = `${labelText}:`;
  parent.append(strong, document.createTextNode(` ${valueText}`));
};

const appendTags = (parent, tags = []) => {
  if (!tags.length) return;

  const container = document.createElement('div');
  container.className = 'tags';

  tags.forEach(tag => {
    const chip = document.createElement('span');
    chip.className = 'tag';
    chip.textContent = tag;
    container.appendChild(chip);
  });

  parent.appendChild(container);
};

const clearAll = () => {
  qs('.nav-links').innerHTML = '';
  qs('.hero-eyebrow').textContent = '';
  qs('.hero-heading').textContent = '';
  qs('.hero-description').textContent = '';
  qs('.hero-actions').innerHTML = '';
  qs('.profile-list').innerHTML = '';
  qs('#projects .section-subtitle').textContent = '';
  qs('#projects .project-grid').innerHTML = '';
  qs('.timeline').innerHTML = '';
  qs('#cv .section-subtitle').textContent = '';
  qs('.cv-summary').innerHTML = '';
  qs('.cv-actions').innerHTML = '';
  qs('.education-list').innerHTML = '';
  qs('#references .section-subtitle').textContent = '';
  qs('#references .references-grid').innerHTML = '';
  qs('#skills .skills').innerHTML = '';
  qs('#contact .section-subtitle').textContent = '';
  qs('#contact .actions').innerHTML = '';
  qs('footer .container').textContent = '';
};

const fillNav = () => {
  const navList = qs('.nav-links');

  portfolioData.navItems.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.label;
    navList.appendChild(link);
  });
};

const fillHero = () => {
  qs('.hero-eyebrow').textContent = portfolioData.hero.eyebrow;
  qs('.hero-heading').textContent = portfolioData.hero.heading;
  qs('.hero-description').textContent = portfolioData.hero.description;

  const actionContainer = qs('.hero-actions');
  portfolioData.hero.actions.forEach(item => actionContainer.append(createLink(item)));
};

const fillProfile = () => {
  const profileList = qs('.profile-list');

  portfolioData.profile.forEach(item => {
    const entry = document.createElement('div');

    const label = document.createElement('strong');
    label.textContent = `${item.label}:`;

    const value = document.createElement('span');
    value.textContent = item.value;

    entry.append(label, value);
    profileList.appendChild(entry);
  });
};

const fillProjects = () => {
  qs('#projects .section-subtitle').textContent = portfolioData.projects.subtitle || '';

  const projectGrid = qs('#projects .project-grid');
  const sortedProjects = [...portfolioData.projects.items].sort((a, b) => (b.sortKey || 0) - (a.sortKey || 0));

  sortedProjects.forEach(project => {
    const card = document.createElement('article');
    card.className = 'card project-card reveal';
    if (project.id) {
      card.id = project.id;
    }

    const meta = document.createElement('div');
    meta.className = 'project-meta';

    const domain = project.domain || (project.tags || []).find(tag => tag === 'Industry' || tag === 'Academic' || tag === 'Học thuật' || tag === 'Công nghiệp' || tag === '학술' || tag === '산업');
    if (domain) {
      const domainBadge = document.createElement('span');
      const domainLower = domain.toLowerCase();
      domainBadge.className = `project-domain ${domainLower === 'academic' || domainLower === 'học thuật' || domainLower === '학술' ? 'academic' : domainLower === 'industry' || domainLower === 'công nghiệp' || domainLower === '산업' ? 'industry' : ''}`;
      domainBadge.textContent = domain;
      meta.appendChild(domainBadge);
    }

    const time = document.createElement('span');
    time.className = 'project-time';
    time.textContent = project.period || '';
    meta.appendChild(time);

    if (project.location?.label) {
      const location = project.location.href ? document.createElement('a') : document.createElement('span');
      location.className = 'project-location';
      location.textContent = project.location.label;
      if (location.tagName === 'A') {
        location.href = project.location.href;
        if (project.location.external) {
          location.target = '_blank';
          location.rel = 'noreferrer';
        }
      }
      meta.appendChild(location);
    }

    const heading = document.createElement('h3');
    heading.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description || '';

    card.append(meta, heading, description);

    if (project.metric) {
      const metric = document.createElement('p');
      metric.className = 'metric';
      metric.textContent = project.metric;
      card.appendChild(metric);
    }

    const domainTags = ['Industry', 'Academic', 'Học thuật', 'Công nghiệp', '학술', '산업'];
    const detailTags = (project.tags || []).filter(tag => !domainTags.includes(tag));
    appendTags(card, detailTags);

    if (project.links?.length) {
      const linksContainer = document.createElement('div');
      linksContainer.className = 'project-links';

      project.links.forEach(linkData => {
        linksContainer.appendChild(createLink(linkData));
      });

      card.appendChild(linksContainer);
    }

    projectGrid.appendChild(card);
  });
};

const fillExperience = () => {
  const timeline = qs('.timeline');

  portfolioData.experience.forEach(item => {
    const row = document.createElement('article');
    row.className = 'timeline-item reveal';
    if (item.id) {
      row.id = item.id;
    }

    const period = document.createElement('p');
    period.className = 'time';
    period.textContent = item.period;

    const body = document.createElement('div');

    const title = document.createElement('h3');
    title.textContent = item.position || item.title || '';

    const meta = document.createElement('p');
    meta.className = 'experience-meta';
    if (item.organization) {
      if (item.organizationLink) {
        const organizationLink = document.createElement('a');
        organizationLink.className = 'experience-org-link';
        organizationLink.href = item.organizationLink;
        organizationLink.textContent = item.organization;
        if (/^https?:\/\//.test(item.organizationLink)) {
          organizationLink.target = '_blank';
          organizationLink.rel = 'noreferrer';
        }
        meta.appendChild(organizationLink);
      } else {
        meta.appendChild(document.createTextNode(item.organization));
      }
    }

    if (item.organization && item.location) {
      meta.appendChild(document.createTextNode(' · '));
    }

    if (item.location) {
      meta.appendChild(document.createTextNode(item.location));
    }

    const description = document.createElement('p');
    description.textContent = item.summary || item.description || '';

    body.append(title, meta, description);

    if (item.highlights?.length) {
      const highlightList = document.createElement('ul');
      highlightList.className = 'experience-highlights';
      item.highlights.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        highlightList.appendChild(li);
      });
      body.appendChild(highlightList);
    }

    if (item.relatedLinks?.length) {
      const linksContainer = document.createElement('div');
      linksContainer.className = 'experience-links';
      item.relatedLinks.forEach(linkData => {
        linksContainer.appendChild(createLink(linkData));
      });
      body.appendChild(linksContainer);
    }

    row.append(period, body);

    timeline.appendChild(row);
  });
};

const fillCv = () => {
  qs('#cv .section-subtitle').textContent = portfolioData.cv.subtitle;
  const ui = getUi();
  const previewHref = portfolioData.cv.previewHref || 'docs/HOANG_CV.pdf';
  const iframe = qs('.cv-preview iframe');
  iframe.src = `${previewHref}#view=FitH`;
  iframe.title = ui.cvIframeTitle;

  const fallback = qs('.cv-fallback');
  fallback.innerHTML = '';
  const fallbackLink = document.createElement('a');
  fallbackLink.href = previewHref;
  fallbackLink.target = '_blank';
  fallbackLink.rel = 'noreferrer';
  fallbackLink.textContent = ui.cvFallback.link;
  fallback.append(ui.cvFallback.before, fallbackLink, ui.cvFallback.after);

  const summary = qs('.cv-summary');
  portfolioData.cv.summary.forEach(item => {
    const row = document.createElement('div');
    row.className = 'cv-row';

    const label = document.createElement('strong');
    label.textContent = item.label;

    const value = document.createElement('span');
    value.textContent = item.value;

    row.append(label, value);
    summary.appendChild(row);
  });

  const actionContainer = qs('.cv-actions');
  portfolioData.cv.actions.forEach(item => actionContainer.appendChild(createLink(item)));
};

const fillEducation = () => {
  const educationList = qs('.education-list');
  const { labels } = getUi();

  portfolioData.education.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card reveal';

    const heading = document.createElement('h3');
    heading.textContent = item.degree;

    const school = document.createElement('p');
    const schoolName = document.createElement('strong');
    schoolName.textContent = item.school;
    const schoolPeriod = document.createTextNode(` - ${item.period}`);
    school.append(schoolName, schoolPeriod);

    card.append(heading, school);

    if (item.advisor) {
      const advisor = document.createElement('p');
      appendLabeledText(advisor, labels.advisor, item.advisor);
      card.appendChild(advisor);
    }

    if (item.details) {
      const details = document.createElement('p');
      details.textContent = item.details;
      card.appendChild(details);
    }

    if (item.thesis) {
      const thesis = document.createElement('p');
      appendLabeledText(thesis, labels.thesis, item.thesis);
      card.appendChild(thesis);
    }

    if (item.gpa) {
      const gpa = document.createElement('p');
      appendLabeledText(gpa, labels.gpa, item.gpa);
      card.appendChild(gpa);
    }

    educationList.appendChild(card);
  });
};

const fillReferences = () => {
  qs('#references .section-subtitle').textContent = portfolioData.references.subtitle;
  const referencesGrid = qs('#references .references-grid');
  const { labels } = getUi();

  portfolioData.references.items.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card reveal';

    const name = document.createElement('h3');
    name.textContent = item.name;

    const title = document.createElement('p');
    title.className = 'reference-line';
    title.textContent = item.title;

    const department = document.createElement('p');
    department.className = 'reference-line';
    department.textContent = item.department;

    const organization = document.createElement('p');
    organization.className = 'reference-line';
    organization.textContent = item.organization;

    const location = document.createElement('p');
    location.className = 'reference-line';
    location.textContent = item.location;

    card.append(name, title, department, organization, location);

    if (item.phone) {
      const phone = document.createElement('p');
      phone.className = 'reference-line';
      appendLabeledText(phone, labels.phone, item.phone);
      card.appendChild(phone);
    }

    if (item.email) {
      const email = document.createElement('p');
      email.className = 'reference-line';
      const label = document.createElement('strong');
      label.textContent = `${labels.email}:`;
      const link = document.createElement('a');
      link.href = `mailto:${item.email}`;
      link.textContent = item.email;
      email.append(label, document.createTextNode(' '), link);
      card.appendChild(email);
    }

    referencesGrid.appendChild(card);
  });
};

const fillSkills = () => {
  const skillsGrid = qs('#skills .skills');

  portfolioData.skills.forEach(skill => {
    const card = document.createElement('article');
    card.className = 'card reveal';

    const heading = document.createElement('h3');
    heading.textContent = skill.title;

    const description = document.createElement('p');
    description.textContent = skill.description;

    card.append(heading, description);
    skillsGrid.appendChild(card);
  });
};

const fillContact = () => {
  qs('#contact .section-subtitle').textContent = portfolioData.contact.subtitle;

  const actionContainer = qs('#contact .actions');
  portfolioData.contact.actions.forEach(item => actionContainer.appendChild(createLink(item)));

  qs('footer .container').textContent = portfolioData.contact.footerText;
};

const initRevealAnimation = () => {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach(item => observer.observe(item));
};

const updateDocumentMetadata = () => {
  document.documentElement.lang = currentLang;
  document.title = portfolioData.siteTitle;

  const description = qs('meta[name="description"]');
  if (description && portfolioData.metaDescription) {
    description.setAttribute('content', portfolioData.metaDescription);
  }
};

const applyUiText = () => {
  const ui = getUi();
  const titleMap = ui.sectionTitles;

  Object.entries(titleMap).forEach(([sectionId, title]) => {
    const titleEl = qs(`#${sectionId} .section-title`);
    if (titleEl) titleEl.textContent = title;
  });

  const languageSwitcher = qs('.lang-switcher');
  if (languageSwitcher) {
    languageSwitcher.setAttribute('aria-label', ui.languageSwitcherLabel);
  }

  const profileImage = qs('.profile-photo img');
  if (profileImage) {
    profileImage.alt = ui.profileImageAlt;
  }
};

const updateLangButtons = () => {
  const ui = getUi();
  const buttons = qsa('.lang-btn');
  buttons.forEach(btn => {
    const isActive = btn.dataset.lang === currentLang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    btn.setAttribute('aria-label', ui.languageNames[btn.dataset.lang] || btn.textContent);
  });
};

const switchLanguage = (lang) => {
  if (lang === currentLang) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  portfolioData = portfolioDataAll[lang] || portfolioDataAll.en;
  updateDocumentMetadata();

  clearAll();
  createSections();
  updateLangButtons();

  // Re-scroll to top to see the changes
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const createSections = () => {
  applyUiText();
  fillNav();
  fillHero();
  fillProfile();
  fillProjects();
  fillExperience();
  fillCv();
  fillEducation();
  fillSkills();
  fillReferences();
  fillContact();
  initRevealAnimation();
};

window.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('lang', currentLang);
  updateDocumentMetadata();
  createSections();
  updateLangButtons();

  const langButtons = qsa('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang) switchLanguage(lang);
    });
  });
});
