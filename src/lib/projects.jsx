export const projects = [
    {
        slug: "books",
        title: "E-Books",
        description: "Streamlining digital reading with a clean interface for organizing and exploring your favorite book collections.",
        tags: ["TailwinCSS", "DaisyUI", "React.js"],
        github: "https://github.com/NuruddinJewel/E-Books",
        live: "https://e-books-list.surge.sh/",
        image: "/images/ebook1.jpg",
        featured: true,
    },
    {
        slug: "calculator",
        title: "Calculator",
        description: "A responsive, user-friendly calculator for everyday math",
        tags: ["JavaScript", "React.js", "TailwindCSS", "DaisyUI"],
        github: "https://github.com/NuruddinJewel/React_Calculator",
        live: "https://nuruddinjewel.github.io/React_Calculator/",
        image: "/images/calculator.jpg",
        featured: false,
    },
    {
        slug: "weather-app",
        title: "Weather App",
        description: "Real-time weather app using OpenWeather API with search functionality.",
        tags: ["JavaScript", "React.js", "TailwindCSS", "DaisyUI"],
        github: "https://github.com/NuruddinJewel/Weather_App",
        live: " https://nuruddinjewel.github.io/Weather_App/",
        image: "/images/weather.jpg",
        featured: true,
    },
    {
        slug: "language-app",
        title: "English Learning Platform",
        description: "Bridge the language gap with an intuitive app that simplifies English grammar and vocabulary for Bengali natives.",
        tags: ["HTML5", "CSS3", "Tailwind CSS", "DaisyUI", "Javascript(ES6)"],
        github: "https://github.com/NuruddinJewel/Project_English_Janala",
        live: "https://nuruddinjewel.github.io/Project_English_Janala/",
        image: "/images/vocabulary.jpg",
        featured: false,
    },
    {
        slug: "cricket",
        title: "Cricket Squad Manager",
        description: "A web application designed for cricket enthusiasts to manage a virtual team with seamless player buying and squad-cleaning functionalities.",
        tags: ["React.js", "DaisyUI", "Tailwind CSS"],
        github: "https://github.com/NuruddinJewel/Cricket_Game",
        live: "https://nuruddinjewel.github.io/Cricket_Game/",
        image: "/images/dreamteam.jpg",
        featured: true,
    },
    {
        slug: "game",
        title: "NeonSnake Pro",
        description: "A sleek, neon-themed Snake game featuring responsive design, high-score tracking, and fluid animations powered by React state management.",
        tags: ["DaisyUI", "Tailwind CSS", "React.js", "HTML5", "CSS3"],
        github: "https://github.com/NuruddinJewel/react-snake-game",
        live: "https://react-snake-game1.netlify.app/",
        image: "/images/game1.jpg",
        featured: false,
    },
]

export function getProjectBySlug(slug) {
    return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects() {
    return projects.filter((p) => p.featured)
}