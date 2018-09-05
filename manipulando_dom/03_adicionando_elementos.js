var linkElement = document.createElement('a');
linkElement.setAttribute('href', 'http://www.jeffers.tk');

var textoLinkElement = document.createTextNode("Abrindo site foda pra bacarai");

// adicionando texto ao elemento 'a' com javascript
linkElement.appendChild(textoLinkElement);

var containerElement = document.querySelector('body');
containerElement.appendChild(linkElement);