const manageGlobals = () => {
  const manager = document.head;

  document
    .querySelector('iframe')
    .contentWindow.document.head.querySelectorAll('[data-emotion]')
    .forEach((item) => {
      const style = document.createElement('style');
      style.innerHTML = item.innerHTML;
      style.setAttribute('data-emotion', 'css-global');
      manager.appendChild(style);
    });
};

export default manageGlobals;
