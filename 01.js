const buttonNo = document.querySelector(".op_no");
const buttonSi = document.querySelector(".op_si");
const resp = document.querySelector(".respuesta")

const numeroRamdonWidth = () => {
  return Math.floor(Math.random() * (500 - 0 + 1) + 0);
};
const numeroRamdoHeight = () => {
  return Math.floor(Math.random() * (80 - 0 + 1) + 0);
};

buttonNo.addEventListener("mousemove", () => {
  buttonNo.classList.remove("op_no");

  buttonNo.style.position = "absolute";
  buttonNo.style.top = `${numeroRamdonWidth()}px`;
  buttonNo.style.left = `${numeroRamdoHeight()}%`;

//   console.log("wid", numeroRamdonWidth());
//   console.log("he", numeroRamdoHeight());
});

buttonSi.addEventListener("click",()=>{
    resp.classList.add("res_activa")
  
  
    setTimeout(()=>{
        resp.classList.remove("res_activa")  
       
    },4000)
})
