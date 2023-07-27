import imgMyEarrings from "../img/my_earrings_img.png";
import imgMonthlyExpenses from "../img/monthy_expenses_img.png";
import imgMinijuegosCris from "../img/minijuegos_cris_img.png";
import imgPokeList from "../img/poke_list_img.png";
import imgPhotoGallery from "../img/gallery_photos_img.png";
import imgMetroSantiago from "../img/metro_santiago_img.png";

import imgHtml from "../img/Html_img.png";
import imgCss from "../img/Css_img.png";
import imgJs from "../img/JavaScript_img.png";
import imgBootstrap from "../img/Bootstrap_img.png";
import imgReact from "../img/React_img.png";
import imgReduxToolkit from "../img/ReduxToolkit_img.png";
import imgSass from "../img/Sass_img.png";
import imgFigma from "../img/Figma_img.png";
import imgGit from "../img/Git_img.png";


export const listConocimientos = [
    {name: "HTML",img: imgHtml,class: "html"},
    {name: "CSS",img: imgCss,class: "css"},
    {name: "JavaScript",img: imgJs,class: "js"},
    {name: "Bootstrap",img: imgBootstrap,class: "bootstrap"},
    {name: "SASS",img: imgSass,class: "sass"},
    {name: "React",img: imgReact,class: "react"},
    {name: "Redux Toolkit",img: imgReduxToolkit,class: "reduxToolkit"},
    {name: "Figma",img: imgFigma,class: "figma"},
    {name: "Git",img: imgGit,class: "git"},
    
]


const tecs = [
    {
        tecName: "HTML",
        class: "span_html",
        cols: 2
    },
    {
        tecName: "CSS",
        class: "span_css",
        cols: 2
    },
    {
        tecName: "JavaScript",
        class: "span_js",
        cols: 3
    },
    { 
        tecName: "Bootstrap",
        class: "span_bootstrap",
        cols: 3
    },
    {
        tecName: "SASS",
        class: "span_sass",
        cols: 2
    },
    {
        tecName: "React",
        class: "span_react",
        cols: 2
    },
    {
        tecName: "Redux Toolkit",
        class: "span_reduxToolkit",
        cols: 5
    },
    {
        tecName: "Figma",
        class: "span_figma",
        cols: 2
    },
    {
        tecName: "Git",
        class: "span_git",
        cols: 2
    }
];

export const proyects = [
    {
        name: "Minijuegos Cris",
        description: "Conjunto de minijuegos (Sopa de letras, Tres en Raya, Memorice, Simón Dice) desarrollado en plataforma web.",
        img: imgMinijuegosCris,
        tecnologies: [
            tecs[0], tecs[1], tecs[2], tecs[3], tecs[8]
        ],
        url: "https://6483876519d59a0e2ea30a9c--comforting-kringle-77bde7.netlify.app/index.html",
        design: false,
        designUrl: null
    },
    {
        name: "My Earrings",
        description: "Aplicación Web Progresiva que permite almacenar las tareas personales del usuario aplicando LocalStorage.",
        img: imgMyEarrings,
        tecnologies: [
            tecs[2], tecs[3], tecs[4], tecs[5], tecs[6], tecs[7], tecs[8]
        ],
        url: "https://dulcet-wisp-73607a.netlify.app/",
        design: true,
        designUrl: "https://www.figma.com/file/IxYSbwPOCz5SPVM6KRCDAH/My-Earrings?type=design&t=p0TnI8NKpz5dEy1B-6"
    },
    {
        name: "Monthly Expenses",
        description: "Aplicación Web Progresiva que facilita al usuario con el registro de sus gastos monetarios de manera mensual con LocalStorage.",
        img: imgMonthlyExpenses,
        tecnologies: [
            tecs[2], tecs[3], tecs[4], tecs[5], tecs[6], tecs[7], tecs[8]
        ],
        url: "https://deluxe-pothos-98fff4.netlify.app/",
        design: true,
        designUrl: "https://www.figma.com/file/11ARPo8x7eQMQU21eJoDo8/Monthy-Expenses?type=design&t=p0TnI8NKpz5dEy1B-6"
        
    },
    {
        name: "PokeList",
        description: "Aplicación web que obtiene información de los Pokemon provenientes de la API conocida como PokéAPI.",
        img: imgPokeList,
        tecnologies: [
            tecs[2], tecs[3], tecs[4], tecs[5], tecs[6], tecs[7], tecs[8]
        ],
        url: "https://candid-mermaid-648759.netlify.app/",
        design: true,
        designUrl: "https://www.figma.com/file/6RTZBGHihpatOV0Q5t2jGA/PokeList?type=design&t=UXJOoRKFmM4sCpG7-6"
    },
    {
        name: "Photo Gallery",
        description: "Galería de imágenes que obtiene dichos elementos visuales mediante la API unsplashAPI.",
        img: imgPhotoGallery,
        tecnologies: [
            tecs[2], tecs[3], tecs[4], tecs[5], tecs[6], tecs[7], tecs[8]
        ],
        url: "https://quiet-raindrop-f3577b.netlify.app/",
        design: true,
        designUrl: "https://www.figma.com/file/1Qs8rHp8Lw14NwKbJPaovg/Photo-Gallery?type=design&t=UXJOoRKFmM4sCpG7-6"
    },
    {
        name: "Metro Santiago",
        description: "Aplicación web que recibe información desde una base de datos No SQL Firestore referente a la red del transporte público Metro de Santiago, Chile.",
        img: imgMetroSantiago,
        tecnologies: [
            tecs[2], tecs[3], tecs[4], tecs[5], tecs[6], tecs[8]
        ],
        url: "https://keen-unicorn-633a24.netlify.app/",
        design: false,
        designUrl: null
    },

];