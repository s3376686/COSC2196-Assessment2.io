const autonomous = document.getElementById("autonomous-report");
const cybersecurity = document.getElementById("cybersecurity-report");
const cloud = document.getElementById("cloud-report")

autonomous.addEventListener("click", () => {
    cybersecurity.classList.add('hide');
    autonomous.classList.remove('hide');
    cloud.classList.add('hide');
})

cybersecurity.addEventListener("click", () => {
    cybersecurity.classList.remove('hide');
    autonomous.classList.add('hide');
    cloud.classList.add('hide');
})

cloud.addEventListener("click", () => {
    cybersecurity.classList.add('hide');
    autonomous.classList.add('hide');
    cloud.classList.remove('hide');
})