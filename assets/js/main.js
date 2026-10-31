(() => {
  "use strict";
  const data = window.SITE_CONTENT;
  const $ = id => document.getElementById(id);
  const el = (tag, className, text) => { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; };
  const safeUrl = url => { if (!url || /^(?:javascript|data|vbscript):/i.test(url.trim())) return null; try { const parsed = new URL(url, document.baseURI); return ["http:", "https:", "mailto:"].includes(parsed.protocol) ? parsed.href : null; } catch { return null; } };
  const link = (label, url, className = "text-link") => { const href = safeUrl(url); if (!href) return null; const a = el("a", className, label); a.href = href; if (/^https?:/.test(href) && new URL(href).origin !== location.origin) { a.target = "_blank"; a.rel = "noopener noreferrer"; } return a; };
  const addLink = (parent, label, url, className) => { const a = link(label, url, className); if (a) parent.append(a); };
  const tags = items => { const box = el("div", "tags"); items.forEach(t => box.append(el("span", "tag", t))); return box; };
  const p = data.profile;
  $("name").textContent = p.name;
  $("headline").textContent = p.headline; $("intro").textContent = p.intro;
  $("hero-meta").append(el("span", "", p.location), el("span", "", p.affiliation));
  addLink($("hero-links"), "联系我 ↗", `mailto:${p.email}`, "button primary");
  addLink($("hero-links"), "简历 PDF ↓", p.resume, "button secondary");
  if (safeUrl(p.photo)) { const img = el("img"); img.src = p.photo; img.alt = p.photoAlt; img.addEventListener("load", () => $("portrait").classList.add("has-photo")); img.addEventListener("error", () => img.remove()); $("portrait").append(img); }
  p.focus.forEach(t => $("focus").append(el("span", "", t)));
  data.experience.forEach(item => {
    const row = el("article", "experience-row"); const date = el("div", "experience-date"); date.append(el("p", "", item.period), el("span", "", item.location));
    const body = el("div", "experience-body"); body.append(el("h3", "", item.company), el("p", "company-detail", item.detail), el("p", "role", item.role));
    const ul = el("ul"); item.bullets.forEach(b => ul.append(el("li", "", b))); body.append(ul, tags(item.tags)); row.append(date, body); $("experience-list").append(row);
  });
  const categories = ["全部项目", ...new Set(data.projects.map(p => p.category))];
  function renderProjects(category) {
    $("project-list").replaceChildren();
    const items = data.projects.filter(p => category === "全部项目" || p.category === category);
    items.forEach((item) => {
      const card = el("article", "project"); const media = el("div", "project-media");
      const placeholder = el("div", "project-placeholder"); placeholder.setAttribute("aria-hidden", "true"); placeholder.append(el("span", "diagram-orbit"), el("span", "diagram-axis"), el("span", "media-label", "PROJECT VISUAL / 待添加")); media.append(placeholder);
      if (safeUrl(item.image)) { const img = el("img"); img.src = item.image; img.alt = item.imageAlt || item.title; img.loading = "lazy"; img.addEventListener("error", () => img.remove()); media.append(img); }
      const body = el("div", "project-body"); body.append(el("p", "project-meta", `${item.category} / ${item.period}`), el("h3", "", item.title), el("p", "project-subtitle", item.subtitle), el("p", "project-description", item.description), tags(item.tags));
      const links = el("div", "project-links"); (item.links || []).forEach(l => addLink(links, `${l.label} ↗`, l.url)); body.append(links); card.append(media, body); $("project-list").append(card);
    });
    $("project-count").textContent = `显示 ${items.length} 个项目`;
  }
  categories.forEach((category, i) => { const button = el("button", "filter", category); button.type = "button"; button.setAttribute("aria-pressed", String(i === 0)); button.addEventListener("click", () => { $("project-filters").querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", String(b === button))); renderProjects(category); }); $("project-filters").append(button); });
  renderProjects(categories[0]);
  data.education.forEach(item => { const row = el("article", "education"); row.append(el("p", "education-date", item.period), el("h3", "", item.school), el("p", "school-english", item.english), el("p", "", item.degree), el("p", "education-note", item.note)); $("education-list").append(row); });
  data.skills.forEach(item => { const row = el("div", "skill-row"); row.append(el("h3", "", item.label), tags(item.items)); $("skills").append(row); });
  $("contact-text").textContent = p.contactText;
  addLink($("contact-links"), `${p.email} ↗`, `mailto:${p.email}`, "button primary");
  $("copyright").textContent = `© ${new Date().getFullYear()} ${p.name}`;
})();
