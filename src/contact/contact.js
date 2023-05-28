import "./contact.css";

const contact = (() => {
  let visible = false;
  const contentPlank = document.querySelector('#contentPlank');
  const div = document.createElement('div');
  div.setAttribute('id', 'contact');

  const show = () => {
    if (!visible)
      contentPlank.appendChild(div);
    visible = true;
  }

  const hide = () => {
    if (visible)
      contentPlank.removeChild(div);
    visible = false;
  }

  return {
    show,
    hide,
  };
})();

export default contact;