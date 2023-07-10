const teamMember = document.querySelector(".team-member");
const hugo_h2 = document.getElementById('hugo');
const david_h2 = document.getElementById('david');
const jake_h2 = document.getElementById('jake');
const teamProfile_h2 = document.getElementById('team');
const hugoProfile = document.getElementById('hugo-profile');
const daveProfile = document.getElementById('dave-profile');
const jakeProfile = document.getElementById('jake-profile');
const teamProfile = document.getElementById('team-profile');
const profiles = document.querySelectorAll('.profile')

hugo_h2.addEventListener("click", () => {
    profiles.forEach((el) => {
        el.classList.add('hide')
    });
    hugoProfile.classList.remove('hide')
})
david_h2.addEventListener("click", () => {
    profiles.forEach((el) => {
        el.classList.add('hide')
    });
    daveProfile.classList.remove('hide');
})
jake_h2.addEventListener("click", () => {
    profiles.forEach((el) => {
        el.classList.add('hide')
    });
    jakeProfile.classList.remove('hide');
})
teamProfile_h2.addEventListener("click", () => {
    profiles.forEach((el) => {
        el.classList.add('hide')
    });
    teamProfile.classList.remove('hide');
})


