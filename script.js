const projects = [
    {
        title: "Project 1",
        image: "project1.jpg",
        description: "Description of Project 1.",
    },
    {
        title: "Project 2",
        image: "project2.jpg",
        description: "Description of Project 2.",
    },
];
function hasMoreProjects(loadedProjects) {
    return loadedProjects.length < projects.length;
}

function loadProjects() {
    const portfolioSection = document.getElementById("portfolio");
    const loadedProjects = portfolioSection.getElementsByClassName("project");

    if (hasMoreProjects(loadedProjects)) {
        const project = projects[loadedProjects.length];
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        const image = document.createElement("img");
        image.src = project.image;
        image.alt = project.title;

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        projectDiv.appendChild(image);
        projectDiv.appendChild(title);
        projectDiv.appendChild(description);

        portfolioSection.appendChild(projectDiv);
    } else {
        document.getElementById("load-projects").disabled = true;
    }
}
function centerLoadButton() {
    const loadButton = document.getElementById("load-projects");
    const portfolioSection = document.getElementById("portfolio");
    loadButton.style.margin = "0 auto";
    portfolioSection.appendChild(loadButton);
}

centerLoadButton();

document.getElementById("load-projects").addEventListener("click", loadProjects);


const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(contactForm);
    console.log("Form submitted with data:", Object.fromEntries(formData));
});