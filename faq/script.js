
const toggleBtns = document.querySelectorAll(".faq-toggle");

toggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentNode.classList.toggle("active");
    })
});

// Also you can do this way

/* const faq = document.querySelectorAll(".faq");
toggleBtn.forEach((btn, idxBtn) => {
    btn.addEventListener("click", () => {
        faq.forEach((que, idxQue) => {
            if(idxBtn === idxQue) {
                if(que.classList.length === 1) {
                    que.classList.add("active");
                } else {
                    que.classList.remove("active");
                }
            } else {
                que.classList.remove("active");
            }
        });
    });
}) */

