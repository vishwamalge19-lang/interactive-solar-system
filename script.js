const planetData = {

    sun: {
        audio: "audio/sun.mp4",
        title: "☀️ Sun",
        facts: [
            "I am a star.",
            "I am at the center of the Solar System.",
            "I provide heat and light to Earth."
        ]
    },

    mercury: {
        audio: "audio/mercury.mp4",
        title: "☿ Mercury",
        facts: [
            "Closest planet to the Sun.",
            "Smallest planet.",
            "A year lasts only 88 Earth days."
        ]
    },

    venus: {
        audio: "audio/vinus.mp4",
        title: "♀ Venus",
        facts: [
            "Second planet from the Sun.",
            "Hottest planet.",
            "Often called Earth's twin."
        ]
    },

    earth: {
        audio: "audio/earth.mp4",
        title: "🌍 Earth",
        facts: [
            "Our home planet.",
            "Only known planet with life.",
            "71% covered by water."
        ]
    },

    mars: {
        audio: "audio/mars.mp4",
        title: "♂ Mars",
        facts: [
            "Known as the Red Planet.",
            "Fourth planet from the Sun.",
            "Has two moons."
        ]
    },

    jupiter: {
        audio: "audio/jupiter.mp4",
        title: "♃ Jupiter",
        facts: [
            "Largest planet.",
            "Gas giant.",
            "Has the Great Red Spot storm."
        ]
    },

    saturn: {
        audio: "audio/saturn.mp4",
        title: "♄ Saturn",
        facts: [
            "Famous for its rings.",
            "Second largest planet.",
            "Has many moons."
        ]
    },

    uranus: {
        audio: "audio/uranus.mp4",
        title: "⛢ Uranus",
        facts: [
            "Blue-green planet.",
            "Rotates on its side.",
            "An icy giant."
        ]
    },

    neptune: {
        audio: "audio/neptune.mp4",
        title: "♆ Neptune",
        facts: [
            "Farthest planet from the Sun.",
            "Very cold.",
            "Has powerful winds."
        ]
    }
};

function playPlanet(planet) {

    const data = planetData[planet];
    const player = document.getElementById("audio-player");

    player.pause();
    player.currentTime = 0;

    player.src = data.audio;

    player.play().catch(error => {
        console.log("Audio Error:", error);
    });

    document.getElementById("planet-info").innerHTML = `
        <h2>${data.title}</h2>

        <h3>Interesting Facts</h3>

        <ul>
            <li>${data.facts[0]}</li>
            <li>${data.facts[1]}</li>
            <li>${data.facts[2]}</li>
        </ul>
    `;
}

function playWelcome() {

    const player = document.getElementById("audio-player");

    player.pause();
    player.currentTime = 0;

    player.src = "audio/welcome.mp4";

    player.play().catch(error => {
        console.log("Audio Error:", error);
    });

    document.getElementById("planet-info").innerHTML = `
        <h2>🚀 Welcome Space Explorer!</h2>

        <p>
        Welcome to our Interactive Solar System.
        Tap any planet to hear it introduce itself and discover amazing facts about space.
        </p>

        <p>
        Created by Vishwa Malge | Class 2
        </p>
    `;
}

function playThankYou() {

    const player = document.getElementById("audio-player");

    player.pause();
    player.currentTime = 0;

    player.src = "audio/end.mp4";

    player.play().catch(error => {
        console.log("Audio Error:", error);
    });

    document.getElementById("planet-info").innerHTML = `
        <h2>🌟 Thank You!</h2>

        <p>
        Thank you for exploring our Solar System.
        We hope you enjoyed learning about the planets and the Sun.
        Keep exploring and keep learning!
        </p>
    `;
}