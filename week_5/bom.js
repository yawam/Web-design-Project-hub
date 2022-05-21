const input = document.querySelector("input");
const button = document.querySelector("button");
const list =  document.querySelector("ul");



button.addEventListener("click", () => {

    const lis = document.createElement("li");
    const delbut = document.createElement("button");
    const inp = input.value;
    input.value = "";

    lis.textContent = inp;
    delbut.textContent = "X";
    lis.appendChild(delbut);

    list.appendChild(lis);

    delbut.addEventListener("click", () => {

        list.removeChild(lis);
    });

    // const clearbtn = document.createElement("button");
    // const body = document.querySelector("body");
    // clearbtn.innerHTML = "Clear";
    // body.appendChild(clearbtn);
    // const listcont = document.querySelector(".listcontainer");

    // clearbtn.addEventListener("click" , () => {
    //     listcont.removeChild(lis);


    // })


    input.focus();



});