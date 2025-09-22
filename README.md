# Prestador de Serviços

Este é um projeto de uma landing page para um site de prestadores de serviços, focado em ajudar os usuários a encontrarem o profissional ideal de forma prática e rápida.

## Sobre o Projeto

O projeto visa facilitar a contratação de serviços, oferecendo uma plataforma onde os usuários podem encontrar profissionais de maneira ágil, com o objetivo de otimizar o tempo e proporcionar comodidade.

## Funcionalidades

O site possui as seguintes funcionalidades:

- `Menu responsivo:` O menu de navegação se adapta a dispositivos móveis, com botões para abrir e fechar o menu (☰ e X).
- `Design adaptável:` O layout da página é totalmente responsivo, garantindo uma experiência de usuário consistente em diferentes tamanhos de tela.

## Estrutura do Projeto

O projeto é estruturado da seguinte forma:

```
paulo19961944/prestadorservicos/
├── public/
│   └── images/
│       ├── Logo.png
│       ├── Otimizacao-Tempo-1.jpg
│       ├── Praticidade-1.jpg
│       └── Prestador-Serviço-1.jpg
├── src/
│   ├── application/
│   │   ├── MenuFactoryMethod.js
│   │   └── ToogleMenuMobile.js
│   ├── domain/
│   │   └── Menu.js
│   ├── infrastructure/
│   │   └── DisplayController.js
│   └── interface/
│       └── MenuMobileController.js
├── styles/
│   └── style.css
├── .gitignore
├── App.js
└── index.html
```

- `index.html:` A página principal que contém a estrutura do site.
- `styles/style.css:` Contém as regras de estilo da aplicação, incluindo cores, fontes (Abel) e media queries para o design responsivo.
- `src/App.js:` Ponto de entrada da aplicação JavaScript. Responsável por inicializar o MenuMobileController após o carregamento do DOM.
- `src/interface/MenuMobileController.js:` Controla a interação do menu móvel com a interface, ouvindo os eventos de clique dos botões de abrir e fechar.
- `src/application/MenuFactoryMethod.js:` Implementa o padrão de design Factory Method para criar o objeto do menu móvel, combinando as classes Menu, DisplayController e ToggleMenuMobile.
- `src/application/ToogleMenuMobile.js:` É a classe de caso de uso que executa a alternância do estado do menu, utilizando o DisplayController.
- `src/infrastructure/DisplayController.js:` Controla a visibilidade dos elementos da interface, adicionando ou removendo a classe CSS aberto.
- `src/domain/Menu.js:` Representa a entidade de domínio do menu.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
