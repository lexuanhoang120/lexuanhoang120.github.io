const qs = (selector, scope = document) => scope.querySelector(selector);

const createLink = ({ label, href, external, primary, placeholder }) => {
  const elementTag = placeholder || !href ? 'span' : 'a';
  const element = document.createElement(elementTag);

  element.textContent = label;
  element.className = `btn${primary ? ' primary' : ''}${placeholder || !href ? ' placeholder' : ''}`;

  if (elementTag === 'a') {
    element.href = href;

    if (external) {
      element.target = '_blank';
      element.rel = 'noreferrer';
    }
  }

  return element;
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

  const highlightContainer = qs('.hero-highlights');
  portfolioData.hero.highlights.forEach(item => {
    const highlight = document.createElement('article');
    highlight.className = 'highlight';

    const value = document.createElement('strong');
    value.textContent = item.value;

    const label = document.createElement('span');
    label.textContent = item.label;

    highlight.append(value, label);
    highlightContainer.append(highlight);
  });

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

    const domain = project.domain || (project.tags || []).find(tag => tag === 'Industry' || tag === 'Academic');
    if (domain) {
      const domainBadge = document.createElement('span');
      domainBadge.className = `project-domain ${domain.toLowerCase()}`;
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

    const detailTags = (project.tags || []).filter(tag => tag !== 'Industry' && tag !== 'Academic');
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
      advisor.innerHTML = `<strong>Advisor:</strong> ${item.advisor}`;
      card.appendChild(advisor);
    }

    if (item.details) {
      const details = document.createElement('p');
      details.textContent = item.details;
      card.appendChild(details);
    }

    if (item.thesis) {
      const thesis = document.createElement('p');
      thesis.innerHTML = `<strong>Thesis title:</strong> ${item.thesis}`;
      card.appendChild(thesis);
    }

    if (item.gpa) {
      const gpa = document.createElement('p');
      gpa.innerHTML = `<strong>GPA:</strong> ${item.gpa}`;
      card.appendChild(gpa);
    }

    educationList.appendChild(card);
  });
};

const fillReferences = () => {
  qs('#references .section-subtitle').textContent = portfolioData.references.subtitle;
  const referencesGrid = qs('#references .references-grid');

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

    const phone = document.createElement('p');
    phone.className = 'reference-line';
    phone.innerHTML = `<strong>T:</strong> ${item.phone}`;

    card.append(name, title, department, organization, location, phone);

    if (item.email) {
      const email = document.createElement('p');
      email.className = 'reference-line';
      email.innerHTML = `<strong>Email:</strong> <a href="mailto:${item.email}">${item.email}</a>`;
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

const createSections = () => {
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
  document.title = portfolioData.siteTitle;
  createSections();
});
