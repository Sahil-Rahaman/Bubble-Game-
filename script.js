let bubble_val = 0;
let bubbles = "";
let hit = 0;
let timer = 60;
let score = 0;

function bubble_creation() {
    for (let i = 1; i <= 132; i++) {
        bubble_val = Math.floor(Math.random() * 10);
        bubbles += `<div class="bubbles">${bubble_val}</div>`;
    }

    document.querySelector(".bubble_container").innerHTML = bubbles;
}

function hit_creation() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hit_box").textContent = hit;
}

function score_update() {
    score += 10;
    document.querySelector("#score_box").textContent = score;
}

function run_timer(){
    const duration = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer_box").textContent = timer;
        }
        else {
            clearInterval(duration);
            document.querySelector(".bubble_container").innerHTML = `<div id="game_over">Game Over!!</div>`;
        }
    }, 1000);
}

document.querySelector(".bubble_container").addEventListener("click", function(details){
    const bubble_val = Number(details.target.textContent);
    if (hit === bubble_val) {
        score_update();
        hit_creation();
        bubbles = "";
        bubble_creation();

    }
});




bubble_creation();
hit_creation();
run_timer();


