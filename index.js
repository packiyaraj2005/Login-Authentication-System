// index.js (Login Page Logic)

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('studentLoginForm');
    
    // Sample Student Data (Use these credentials to test: 950623104076 / 29/02/2006)
    const studentData = {
        "950623104076": { 
            name: "Praveen K", 
            dob: "29/01/2006", 
            gpa: { 
                sem1: 8.05, 
                sem2: 8.17, 
                sem3: 8.70, 
                sem4: 8.54 
            },
            cgpa: 8.39,
            regNo: "950623104076" 
        },
        "950623104078": { 
            name: "Rahul S", 
            dob: "10/01/2006", 
            gpa: { 
                sem1: 5.73, 
                sem2: 3.96, 
                sem3: 5.16, 
                sem4: 6.5 
            },
            cgpa: 6.23,
            regNo: "950623104078"
        },
         "950623104062": { 
            name: "Milton Lawrence S", 
            dob: "24/11/2005",
            gpa: { 
                sem1: 7.36, 
                sem2: 6.85, 
                sem3: 7.35, 
                sem4: 7.63
            },
            cgpa: 7.30,
            regNo: "950623104062"
        },
        "950623104071": { 
            name: "Packiyaraj S", 
            dob: "17/12/2005", 
            gpa: { 
                sem1: 7.5, 
                sem2: 7.6, 
                sem3: 8.0, 
                sem4: 8.5 
            },
            cgpa: 8.68,
            regNo: "950623104071"
        },
        "950623104073": { 
            name: " Paul Abishek A", 
            dob: "20/03/2006", 
            gpa: { 
                sem1: 6.4, 
                sem2: 7.8, 
                sem3: 7.4, 
                sem4: 7.2 
            },
            cgpa: 7.5,
            regNo: "950623104073"
        },
    };

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const regNumber = document.getElementById('regNumber').value.trim();
        const dobInput = document.getElementById('dob').value.trim(); // YYYY-MM-DD from date input
        
        // --- Conversion Logic: Converts YYYY-MM-DD to DD/MM/YYYY ---
        let dobFormatted = '';
        if (dobInput) {
            const parts = dobInput.split('-'); // [YYYY, MM, DD]
            if (parts.length === 3) {
                // Reconstruct to DD/MM/YYYY to match the studentData format
                dobFormatted = `${parts[2]}/${parts[1]}/${parts[0]}`; 
            }
        }
        // --- End Conversion Logic ---
        
        const student = studentData[regNumber];
        
        // Check if student exists AND DOB matches the formatted date
        if (student && student.dob === dobFormatted) {
            try {
                // SUCCESS: Save data and redirect
                sessionStorage.setItem('studentResult', JSON.stringify(student));
                window.location.href = 'result.html';
            } catch (error) {
                console.error("Error storing data or redirecting:", error);
                alert("Login Successful, but failed to load the next page. Check console for details.");
            }
        } else {
            // FAILURE: Invalid Credentials
            alert("Login Failed: Invalid Registration Number or Date of Birth. Please check and try again.");
        }
    });
});