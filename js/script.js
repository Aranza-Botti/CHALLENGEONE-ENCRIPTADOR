//e - enter
//o - ober
//i - imes
//a - ai
//u - ufat

const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal= document.getElementById("mensajeFinal");
const munheco = document.getElementById("munheco");
const rightInfo = document.getElementById("rightInfo");
const right = document.getElementById("right");

let reemplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
];

const remplace = (nuevoValor) =>{
    mensajeFinal.innerHTML = nuevoValor;
    mensajeFinal.classList.add("ajustar");
    right.classList.add("ajuste");
    ingresoTexto.value="";
    ingresoTexto.style.height = "auto"
    ingresoTexto.placeholder = "Ingrese el texto aquí";
    munheco.classList.add("ocultar");
    rightInfo.classList.add("ocultar");
    botonCopiar.classList.remove("btn-oculto");
    
};

const reset = () =>{
    ingresoTexto.value = "";
    ingresoTexto.style.height = "auto"
    mensajeFinal.innerHTML = "";
    right.classList.remove("ajuste");
    mensajeFinal.classList.remove("ajustar")
    munheco.classList.remove("ocultar");
    mensajeFinal.placeholder = "Ningun mensaje fue econtrado";
    rightInfo.classList.remove("ocultar");
    botonCopiar.classList.add("btn-oculto");
    ingresoTexto.focus();
};


botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase()
    if (texto != "") {
        function encriptar(newText) {
            for (let i = 0; i < reemplazar.length; i++){
                if(newText.includes(reemplazar[i][0])){
                    newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                };
            };
            return newText
        };
        remplace(encriptar(texto));
    } else {
        alert("Ingreso Texto a Encriptar");
        reset();
    };
});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase()
    if(texto !="") {
        function desencriptar(newText) {
            for (let i = 0; i < reemplazar.length; i++){
                if(newText.includes(reemplazar[i][1])){
                    newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
                };
            } ;
            return newText
        };
        remplace(desencriptar(texto));
    } else {
        alert("Ingreso Texto a Desencriptar");
        reset();
    };
});

botonCopiar.addEventListener("click",() => {
    let texto = mensajeFinal;
    //navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand("copy")
    alert("Texto Copiado");
    reset();
});

//auto ajuste de textarea
    ingresoTexto.addEventListener("change", e => {
        ingresoTexto.style.height = "auto";
        let scHeight = e.target.scrollHeight;
        ingresoTexto.style.height = `${scHeight}px`;
});
    ingresoTexto.addEventListener("keyup", e => {
        ingresoTexto.style.height = "auto";
        let scHeight = e.target.scrollHeight;
        ingresoTexto.style.height = `${scHeight}px`;
});