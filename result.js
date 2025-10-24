// result.js (Result Page Logic)

document.addEventListener('DOMContentLoaded', () => {
    const resultDetailsDiv = document.getElementById('resultDetails');
    
    // Retrieve the student data from sessionStorage
    const studentResultJSON = sessionStorage.getItem('studentResult');

    if (studentResultJSON) {
        try {
            const student = JSON.parse(studentResultJSON);
            
            // Build the result HTML with neat formatting
            const resultHTML = 
                // Details Section
                `<p><strong>Details:</strong></p>` +
                `<p>Name: ${student.name}</p>` +
                `<p>Reg. No: ${student.regNo}</p>` +
                `<p>Date of Birth: ${student.dob}</p>` +
                
                // GPA Section
                `<p><strong>Semester Performance (GPA):</strong></p>` +
                `<p>Sem 1: ${student.gpa.sem1}</p>` +
                `<p>Sem 2: ${student.gpa.sem2}</p>` +
                `<p>Sem 3: ${student.gpa.sem3}</p>` +
                `<p>Sem 4: ${student.gpa.sem4}</p>` +
                
                // CGPA Section
                `<p><strong>Cumulative Grade Point Average (CGPA):</strong></p>` +
                `<span class="cgpa-value">Overall CGPA: ${student.cgpa.toFixed(2)}</span>`;
            
            resultDetailsDiv.innerHTML = resultHTML;

        } catch (error) {
            // Handle parsing errors
            resultDetailsDiv.innerHTML = '<p style="color: red; text-align: center;">Error: Could not process results data. Please try logging in again.</p>';
            console.error("Parsing error:", error);
        }
    } else {
        // Handle case where no data is found (e.g., accessed result.html directly)
        resultDetailsDiv.innerHTML = 
            `<p style="color: #ff2770; text-align: center;">Access Denied. Please <a href="index.html" style="color: #fff; font-weight: 600;">Login</a> to view results.</p>`;
    }
});