import { pageData } from "./page/pageData.js";

export default function renderSections() {
  const main = document.querySelector('main');
  
  pageData.forEach(section => {
    const sectionContainer = document.createElement('section');
    sectionContainer.classList.add('container');

    const row = document.createElement('section');
    row.classList.add('row');

    const image = document.createElement('img');
    image.src = section.imageSrc;
    image.alt = section.imageAlt;
    image.classList.add('prestador-servico');
    
    const col = document.createElement('section');
    col.classList.add('col');
    
    const h1 = document.createElement('h1');
    h1.textContent = section.title;

    const p = document.createElement('p');
    p.textContent = section.paragraph;

    const button = document.createElement('button');
    button.classList.add('call-to-action');
    button.textContent = 'Clique Aqui';

    col.appendChild(h1);
    col.appendChild(p);
    col.appendChild(button);

    row.appendChild(image);
    row.appendChild(col);

    sectionContainer.appendChild(row);
    main.appendChild(sectionContainer);
  });
}