const button = document.querySelector(".btn")
const input = document.querySelector(".input")

button.addEventListener("click", () => {
    if(input.value === "") return alert("Informe uma URL valida.")
    alert(input.value)
    input.value = ""
})