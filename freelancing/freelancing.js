const mockData = [
    {
        name: "Alice Johnson",
        job: "Web Developer",
        rating: 4.8,
        ratePerHour: 45,
        projectsCompleted: 120,
        reviews: 95
    },
    {
        name: "Bob Smith",
        job: "Graphic Designer",
        rating: 4.6,
        ratePerHour: 40,
        projectsCompleted: 85,
        reviews: 78
    },
    {
        name: "Charlie Brown",
        job: "Data Analyst",
        rating: 4.9,
        ratePerHour: 50,
        projectsCompleted: 110,
        reviews: 102
    },
    {
        name: "Diana Adams",
        job: "Digital Marketer",
        rating: 4.7,
        ratePerHour: 38,
        projectsCompleted: 95,
        reviews: 88
    },
    {
        name: "Ethan Clark",
        job: "Software Engineer",
        rating: 5.0,
        ratePerHour: 60,
        projectsCompleted: 150,
        reviews: 140
    },
    {
        name: "Fiona Lee",
        job: "UI/UX Designer",
        rating: 4.5,
        ratePerHour: 35,
        projectsCompleted: 70,
        reviews: 65
    },
    {
        name: "George Miller",
        job: "SEO Specialist",
        rating: 4.3,
        ratePerHour: 30,
        projectsCompleted: 60,
        reviews: 55
    },
    {
        name: "Hannah White",
        job: "Content Writer",
        rating: 4.8,
        ratePerHour: 25,
        projectsCompleted: 200,
        reviews: 180
    },
    {
        name: "Ian Scott",
        job: "Cybersecurity Expert",
        rating: 4.9,
        ratePerHour: 75,
        projectsCompleted: 90,
        reviews: 85
    },
    {
        name: "Julia Roberts",
        job: "Project Manager",
        rating: 4.7,
        ratePerHour: 55,
        projectsCompleted: 130,
        reviews: 120
    },
    {
        name: "Julia Roberts",
        job: "Project Manager",
        rating: 4.7,
        ratePerHour: 55,
        projectsCompleted: 130,
        reviews: 120
    },
    {
        name: "Julia Roberts",
        job: "Project Manager",
        rating: 4.7,
        ratePerHour: 55,
        projectsCompleted: 130,
        reviews: 120
    },
    {
        name: "Julia Roberts",
        job: "Project Manager",
        rating: 4.7,
        ratePerHour: 55,
        projectsCompleted: 130,
        reviews: 120
    }
];

const main_container = document.querySelector(".main-container")
function createUserCard(user) {
    const card = document.createElement("div");
    card.setAttribute("class" ,'card');

    card.innerHTML = `
        <div class="card-header">
        <img src="images/Screenshot 2025-02-08 130822 (2).png" alt="Profile" class="profile-img">
            <div>
                <div class="name">${user.name}</div>
                <div class="role">${user.job}</div>
            </div>
            <div class="rating">${user.rating}<span class="star">⭐</span></div>
        </div>
        <div class="card-body">
            <div>
                <div>Rate</div>
                <div class="value">${user.ratePerHour}$ / hour</div>
            </div>
            <div>
                <div>Projects completed</div>
                <div class="value">${user.projectsCompleted}</div>
            </div>
            <div>
                <div>Reviews</div>
                <div class="value">${user.reviews}</div>
            </div>
        </div>
    `;

    return card;
}

function renderCards() {
    const container = document.createElement("div");
    container.setAttribute("class", "card-container");
    main_container.appendChild(container);

    mockData.forEach(user => {
        container.appendChild(createUserCard(user));
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderCards();
});

