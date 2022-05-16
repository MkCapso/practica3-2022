
const ka = 2900000
const focus = 3960000
const fiesta = 3350000

function calcular() {

    const vehiculo = document.getElementById("slt_vehiculo").value
    let precio = null
    let auto = null
    if (vehiculo == 0) {
        precio = fiesta - (fiesta*5/100)
        auto = fiesta
    }else{
        if (vehiculo == 1) {
            precio = focus - (focus*10/100)
            auto = focus
        } else {
            precio = ka - (ka*15/100)
            auto = ka
        }
    }
    document.getElementById("h_precio").textContent = 'Precio del vehículo sin descuento $' + auto
    document.getElementById("h_precio_descuento").textContent = 'Precio del vehículo con descuento $' + precio
}