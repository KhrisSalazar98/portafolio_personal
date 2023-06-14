import imgMyEarrings from "../img/my_earrings_img.png";
import imgMonthlyExpenses from "../img/monthy_expenses_img.png";
import imgMinijuegosCris from "../img/minijuegos_cris_img.png";

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
        cols: 4
    }
];

export const proyects = [
    {
        name: "Minijuegos Cris",
        description: "Conjunto de minijuegos (Sopa de letras, Tres en Raya, Memorice, Simón Dice) desarrollado en plataforma web.",
        img: imgMinijuegosCris,
        tecnologies: [
            tecs[0], tecs[1], tecs[2], tecs[3]
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
            tecs[2], tecs[3], tecs[4], tecs[5], tecs[6]
        ],
        url: "https://dulcet-wisp-73607a.netlify.app/",
        design: true,
        designUrl: "https://www.figma.com/file/IxYSbwPOCz5SPVM6KRCDAH/My-Earrings?type=design&t=p0TnI8NKpz5dEy1B-6"
    },
    {
        name: "Monthly Expenses",
        description: "Aplicación Web Progresiva que facilita al usuario con el registro de sus gastos monetario de manera mensual con LocalStorage.",
        img: imgMonthlyExpenses,
        tecnologies: [
            tecs[2], tecs[3], tecs[4], tecs[5], tecs[6]
        ],
        url: "https://deluxe-pothos-98fff4.netlify.app/",
        design: true,
        designUrl: "https://www.figma.com/file/11ARPo8x7eQMQU21eJoDo8/Monthy-Expenses?type=design&t=p0TnI8NKpz5dEy1B-6"
        
    }
];