const hugo_h2 = document.getElementById('hugo');
const david_h2 = document.getElementById('david');
const jake_h2 = document.getElementById('jake');
const hugoJob = document.getElementById('job-hugo');
const davidJob = document.getElementById('job-david');
const jakeJob = document.getElementById('job-jake');
const jobs = document.querySelectorAll('.job')

hugo_h2.addEventListener("click", () => {
    jobs.forEach((el) => {
        el.classList.add('hide')
    });
    hugoJob.classList.remove('hide')
})
david_h2.addEventListener("click", () => {
    jobs.forEach((el) => {
        el.classList.add('hide')
    });
    davidJob.classList.remove('hide');
})
jake_h2.addEventListener("click", () => {
    jobs.forEach((el) => {
        el.classList.add('hide')
    });
    jakeJob.classList.remove('hide');
})


