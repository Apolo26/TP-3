function cambiarEstilo(template) {
  var link = document.getElementById('estilo');

  if (template === 'default') {
    link.href = 'style.css';
  } else if (template === 'template1') {
    link.href = 'style2.css';
  } else if (template === 'template2') {
    link.href = 'style3.css';
  }
}