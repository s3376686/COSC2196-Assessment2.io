const autonomous = document.getElementById("autonomous-report");
const cybersecurity = document.getElementById("cybersecurity-report");

autonomous.addEventListener("click", () => {
    cybersecurity.classList.add('hide');
    autonomous.classList.remove('hide');
})

cybersecurity.addEventListener("click", () => {
    cybersecurity.classList.remove('hide');
    autonomous.classList.add('hide');
})

