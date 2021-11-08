const imgs = document.querySelectorAll(".content");
const tabs = document.querySelectorAll("nav ul li");

tabs.forEach((tab, idx) => {
    tab.addEventListener("click", () => showTab(idx));
});


function showTab(id) {
    imgs.forEach((img, idx) => {
        if(id === idx) {
            img.classList.add("show");
            tabs[idx].classList.add("active");
        } else {
            img.classList.remove("show");
            tabs[idx].classList.remove("active");
        }
    });
}