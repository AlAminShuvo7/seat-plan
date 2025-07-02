document.getElementById("final").addEventListener("click", show);


function show() {
    const x = document.getElementById("roll-number").value;


    const para = document.createElement("p");
    para.innerText = "Your roll number is: " + x;
    document.getElementById("result").appendChild(para);
}