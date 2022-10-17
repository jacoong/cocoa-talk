const inputString = prompt('BPM을 입력하세요 기본값: 80');

const bpm =  60000 / parseInt(inputString);


if (bpm == NaN) {
    bpm = 750;}






const piano_code = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
const piano_code_Sounds = ["C","D Flat","D","E Flat","E","F","G Flat","G","A Flat","A","B Flat","B"];



const container_notes =document.querySelector(".settings-page__container-codes");
const container = document.querySelector(".settings-page__container:nth-child(2)");
const container_codes = document.createElement("div");
container_codes.classList.add(".settings-page__container-codes");
container_codes.innerText =`${piano_code[0]}`;
container.appendChild(container_codes);

container_notes.addEventListener("click",active);



function active(){
    container_notes.classList.toggle("activee");
    if (!container_notes.classList.contains("activee")){
        let index = piano_code.indexOf(`${container_notes.innerText}`);
        piano_code.splice(index,1);

    }else{
        piano_code.push(container_notes.innerText);
    }
}


