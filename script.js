let input = document.getElementsByClassName("input_val")

function button() {
    let  enterVal = Number(document.getElementById("num-el").value)
    for (let val of input) {
        val.textContent = enterVal
    }  

    document.getElementById("feet").textContent = (enterVal * 3.28084).toFixed(3)

    document.getElementById("meter_").textContent = (enterVal / 3.28084).toFixed(3)

    document.getElementById("gallon").textContent = (enterVal * 0.264172).toFixed(3)
    
    document.getElementById("liter_").textContent = (enterVal / 0.264172).toFixed(3)

    document.getElementById("pound").textContent = (enterVal * 2.20462).toFixed(3)

    document.getElementById("kilo_").textContent = (enterVal / 2.20462).toFixed(3)
}