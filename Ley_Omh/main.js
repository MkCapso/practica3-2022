function calcular(a,b) {    
    const resultado = parseInt(a) * parseInt(b)
    return resultado
}

function recolectar_datos() {
    const dato1 = document.getElementById("inp_d1").value
    const dato2 = document.getElementById("inp_d2").value    

    const respuesta = calcular(dato1,dato2)

    document.getElementById("h_resultado").textContent = respuesta
}