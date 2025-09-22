const pageData = [
  {
    imageSrc: 'public/images/Prestador-Serviço-1.jpg',
    imageAlt: 'Prestador de Serviço',
    title: 'Encontre seu Prestador de Serviço',
    paragraph: 'Encontre o prestador de serviços ideal sem sair de casa, com praticidade, rapidez e total conforto.'
  },
  {
    imageSrc: 'public/images/Praticidade-1.jpg',
    imageAlt: 'Prestador de Serviço',
    title: 'Praticidade',
    paragraph: 'Contratar um prestador de serviço nunca foi tão fácil: praticidade, agilidade e tudo ao seu alcance em poucos cliques.'
  },
  {
    imageSrc: 'public/images/Otimizacao-Tempo-1.jpg',
    imageAlt: 'Prestador de Serviço',
    title: 'Otimização de Tempo',
    paragraph: 'Ganhe tempo ao contratar serviços de forma rápida e eficiente, sem complicações.'
  }
];

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