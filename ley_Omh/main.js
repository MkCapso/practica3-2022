function calcular_volts(v,i,r) {
    const ohms = parseInt(v) / parseInt(i)
    const amper = parseInt(v) / parseInt(r)
    const volts = parseInt(i) * parseInt(r)
}

function recolectar_datos() {
    const res = document.getElementById("inp_dr").value
    const int = document.getElementById("inp_di").value
    const ten = document.getElementById("inp_dt").value

    calcular(ten,int,res)
}