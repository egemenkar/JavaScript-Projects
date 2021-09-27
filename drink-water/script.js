
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
const text = document.querySelector(".text");
const goalEl = document.getElementById("goal");
const cupsEl = document.querySelector(".cups");

document.querySelectorAll("input[name='liters']").forEach((input) => {
    input.addEventListener('change', drinkWater);
});

text.style.visibility = "hidden";

function drinkWater(e) {

    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
    text.style.visibility = "visible";
    

    const goal = e.target.id;
    goalEl.innerText = `Goal: ${goal} Liters`;
    remained.style.visibility = "visible";
    liters.innerText = `${goal}L`;
    cupNumber = (goal * 1000) / 250;

    createCups(cupNumber);

    const smallCups = document.querySelectorAll(".cup-small");

    // smallCups.forEach((cup, idx) => {
    //     cup.addEventListener("click", () => highlightCups(idx));
    // });

    function highlightCups(idx) {

        if (smallCups[idx].nextElementSibling !== null) {
            if(smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains("full")) {
                idx--;
            }
        } else {
            if(smallCups[idx].classList.contains('full')) {
                idx--;
            }
        }

        smallCups.forEach((cup, idx2) => {
            if(idx2 <= idx) {
                cup.classList.add("full");
            } else {
                cup.classList.remove("full")
            }
        });

        updateBigCup();
    }

    function updateBigCup() {
        const fullCups = document.querySelectorAll(".cup-small.full").length;
        const totalCups = smallCups.length;


        if(fullCups === 0) {
            percentage.style.visibility = "hidden";
            percentage.style.height = 0;
        } else {
            percentage.style.visibility = "visible";
            percentage.style.height = `${fullCups / totalCups * 330}px`;
            percentage.innerText = `${Math.round((fullCups / totalCups * 100) * 100) / 100}%`;
        }

        if(fullCups === totalCups) {
            remained.style.visibility = "hidden";
            remained.style.height = 0;
        } else {
            remained.style.visibility = "visible";
            liters.innerText = `${goal - (250 * fullCups / 1000)}L`;
        }

    }

    function createCups(num) {

        const prevCups = document.querySelectorAll(".cup-small");
        

        prevCups.forEach(cup => {
            cup.remove();
        });

       

        for(let i = 1; i <= num; i++) {
            const cups = document.createElement("div");
            cups.classList.add("cup", "cup-small");
            cups.innerHTML = "250 ml";
            cups.addEventListener("click", () => highlightCups(i-1))
            cupsEl.appendChild(cups);
        }
    }
}





