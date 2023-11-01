const readMoreButton = document.getElementById('read-more');
const contentDiv = document.getElementById('content');

readMoreButton.addEventListener('click', () => {
    // Load the content for the new page (front-end developer details)
    contentDiv.innerHTML = `
        <h1>Front-End Developer</h1>
        <p>Front-end developers are responsible for creating the user interface and user experience of websites and web applications. They work with HTML, CSS, and JavaScript to build interactive and visually appealing websites.</p>
        <button id="back-button">Back</button>
    `;

    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
        // Go back to the original page
        contentDiv.innerHTML = '';
    });
});
