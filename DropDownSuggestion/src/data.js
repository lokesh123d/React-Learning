async function fetchLangaugeData(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve([
              "React",
              "Redux",
              "JavaScript",
              "TypeScript",
              "Node.js",
              "Express",
              "MongoDB",
              "HTML",
              "CSS",
              "Tailwind CSS",
              "Bootstrap",
              "Git",
              "GitHub",
              "REST API",
              "GraphQL",
              "Next.js",
              "Vite",
              "Webpack"
            ]);
        }, 3000);
    });
}

export default fetchLangaugeData;