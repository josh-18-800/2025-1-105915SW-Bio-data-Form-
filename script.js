function submitForm() {
    const outputDiv = document.getElementById('output');
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const school = document.getElementById('school').value;
    const faculty = document.getElementById('faculty').value;
    const department = document.getElementById('department').value;
    const matric = document.getElementById('matric').value;
    const level = document.getElementById('level').value;
    const contact = document.getElementById('contact').value;
    const homeAddress = document.getElementById('homeAddress').value;
    const schoolAddress = document.getElementById('schoolAddress').value;

    // Set Matric Number link dynamically
    const matricLink = document.getElementById('matricLink');
    matricLink.href = `https://yourwebsite.com/${matric}`;

    outputDiv.style.display = 'block';
    outputDiv.innerHTML = `
        <h3>Submitted Bio-data</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>School:</strong> ${school}</p>
        <p><strong>Faculty:</strong> ${faculty}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Matric Number:</strong> <a href="https://yourwebsite.com/${matric}" target="_blank">${matric}</a></p>
        <p><strong>Level:</strong> ${level}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Home Address:</strong> ${homeAddress}</p>
        <p><strong>School Address:</strong> ${schoolAddress}</p>
    `;
}
