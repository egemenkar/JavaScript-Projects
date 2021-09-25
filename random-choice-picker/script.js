const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");
const btn = document.getElementById("btn");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value);

    if(e.key === "Enter") {
        setTimeout(() => {
            e.target.value = "";
        }, 10);

        randomSelect();
    }
});

// Choices are splitted by comma. White spaces are trimmed.

function createTags(input) {
    const tags = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim());
    
    tagsEl.innerHTML = "";

    tags.forEach(tag => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}

function randomSelect() {
    const times = 30;

    // Random selecting effect

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);

    // Stopping the effect and highlighting the selected choice

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);

            createBtn();
            textarea.disabled = true;
        }, 100);
    }, times * 100);

    
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add("highlight");
}

function unHighlightTag(tag) {
    tag.classList.remove("highlight");
}

function createBtn() {
    const restartBtn = document.createElement("BUTTON");
    restartBtn.classList.add("restartBtn");
    restartBtn.innerHTML = "Restart";
    restartBtn.addEventListener("click", restart);
    btn.appendChild(restartBtn);
    restartBtn.focus();

}

function restart() {
    const spanTags = document.querySelectorAll(".tag");
    const button = document.querySelector(".restartBtn");

    spanTags.forEach(tag => {
        tag.remove();
    });

    button.remove();
    textarea.disabled = false;

}