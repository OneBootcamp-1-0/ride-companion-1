window.utils = {
  renderElement: (container, template) => {
    container.append(template);
  },
  createElement: (html) => {
    const template = document.createElement(`template`);
    template.innerHTML = html;
    return template.content.firstElementChild;
  }
};
