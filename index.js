const star = document.getElementById("star");
const txt = document.getElementById("txt");

const star_target = document.getElementById("star_target");
const target_txt = document.getElementById("target_txt");

const hash_star = document.getElementById("hash_star");
const hash_txt = document.getElementById("hash_txt");

const top_header_num = document.getElementById("top_header_num");

const goal_circle = document.querySelectorAll(".goal_circle");
const goal_circle_array = Array.from(goal_circle);
const goal_txt = document.getElementById("goal_txt")

const play_salman_audio_btn = document.getElementById("play_salman_audio_btn")

let salman_audio = new Audio("audios/salman.mp3");
let is_salman_playing = false
play_salman_audio_btn.addEventListener("click",()=>{

    if(!is_salman_playing){
        salman_audio.play()
        play_salman_audio_btn.className = "fa-solid fa-pause"
        is_salman_playing = true;
        
    }else if(is_salman_playing){
        salman_audio.pause()
        play_salman_audio_btn.className = "fa-solid fa-play"
        is_salman_playing = false;
    }


})

const play_mohamed_audio_btn = document.getElementById("play_mohamed_audio_btn")

let mohamed_audio = new Audio("audios/mohamed.mp3");
let is_mohamed_playing = false
play_mohamed_audio_btn.addEventListener("click",()=>{

    if(!is_mohamed_playing){
        mohamed_audio.play()
        play_mohamed_audio_btn.className = "fa-solid fa-pause"
        is_mohamed_playing = true;
        
    }else if(is_mohamed_playing){
        mohamed_audio.pause()
        play_mohamed_audio_btn.className = "fa-solid fa-play"
        is_mohamed_playing = false;
    }


})

goal_circle_array.forEach((ele)=>{
    ele.addEventListener("mouseenter",(e)=>{
        goal_txt.textContent = e.currentTarget.dataset.txt;
        goal_txt.classList.add("show_middle_txt")
    
    })

    ele.addEventListener("mouseleave",()=>{
        goal_txt.classList.remove("show_middle_txt")
        goal_txt.textContent = ""
    })

})


window.onload = () =>{
    const interval = setInterval(() => {
        if(parseInt(top_header_num.textContent) !== 6){
            const current_num = parseInt(top_header_num.textContent)
            top_header_num.textContent = current_num + 1;

        }else{
            clearInterval(interval)
        }
    }, 150);
}


showRightToLeft(star,txt);
showRightToLeft(star_target,target_txt);



function showRightToLeft(star_btn,txt){
    star_btn.addEventListener("mouseenter",()=>{
        txt.classList.remove("hide_txt")
        txt.classList.add("show_txt")
    })
    
    
    star_btn.addEventListener("mouseleave",()=>{
        txt.classList.remove("show_txt")
        txt.classList.add("hide_txt")
    })
}


    hash_star.addEventListener("mouseenter",()=>{
        hash_txt.classList.remove("hide_left_txt")
        hash_txt.classList.add("show_left_txt")
    })
    
    
    hash_star.addEventListener("mouseleave",()=>{
        hash_txt.classList.remove("show_left_txt")
        hash_txt.classList.add("hide_left_txt")
    })


