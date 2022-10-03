
function guardar() {

    let nueva_conexion = {
        direccionIP:document.getElementById("inp_ip").value,
        puerto:document.getElementById("inp_puerto").value,
        paisCiudad:document.getElementById("inp_pais").value,
        velocidad:document.getElementById("inp_velocidad").value,
        tipo:document.getElementById("inp_tipo").value
    }
    
    if ("lista_conexiones" in localStorage) {
        let grilla_conexiones = JSON.parse(localStorage.getItem("lista_conexiones"))
        grilla_conexiones.push(nueva_conexion)
        localStorage.setItem("lista_conexiones", JSON.stringify(grilla_conexiones))
    }else{
        let grilla_conexiones = []
        grilla_conexiones.push(nueva_conexion)
        localStorage.setItem("lista_conexiones", JSON.stringify(grilla_conexiones))
    }

    obtenerConexion()

    document.getElementById("formConexion").reset()
}

function obtenerConexion() {
    
    if ("lista_conexiones" in localStorage) {
        
        let lista_conexiones = JSON.parse (localStorage.getItem("lista_conexiones"))

        let filas = []

        lista_conexiones.forEach((element,index) => {
            let fila = `
                <tr>
                    <td>${index+1}</td>
                    <td>${element.direccionIP}</td>
                    <td>${element.puerto}</td>
                    <td>${element.paisCiudad}</td>
                    <td>${element.velocidad}</td>
                    <td>${element.tipo}</td>
                    <td>
                        <button onclick="eliminarConexion(${index})" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                        <button onclick="editarConexion(${index})" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></button> 
                    </td>
                </tr>
            `
            filas.push(fila)
        });
        document.getElementById("tbody").innerHTML = filas.join('')
    }
}

obtenerConexion()

function eliminarConexion(index) {

    let lista_conexiones = JSON.parse(localStorage.getItem("lista_conexiones"))

    lista_conexiones.splice(index,1)

    localStorage.setItem("lista_conexiones", JSON.stringify(lista_conexiones))

    obtenerConexion()
    
}

function editarConexion(index) {
    
    let lista_conexiones = JSON.parse(localStorage.getItem("lista_conexiones"))

    document.getElementById("inp_ip").value = lista_conexiones[index].direccionIP
    document.getElementById("inp_puerto").value = lista_conexiones[index].puerto
    document.getElementById("inp_pais").value = lista_conexiones[index].paisCiudad
    document.getElementById("inp_velocidad").value = lista_conexiones[index].velocidad
    document.getElementById("inp_tipo").value = lista_conexiones[index].tipo

    document.getElementById("btn_guardar").style.display = 'none'
    document.getElementById("btn_actualizar").style.display = 'block'

    localStorage.setItem("indiceStorage",index)
}

function actualizarCliente() {
    
    let indice = localStorage.getItem("indiceStorage")

    let lista_conexiones = JSON.parse(localStorage.getItem("lista_conexiones"))

    lista_conexiones[indice].direccionIP = document.getElementById("inp_ip").value
    lista_conexiones[indice].puerto = document.getElementById("inp_puerto").value
    lista_conexiones[indice].paisCiudad = document.getElementById("inp_pais").value
    lista_conexiones[indice].velocidad = document.getElementById("inp_velocidad").value
    lista_conexiones[indice].tipo = document.getElementById("inp_tipo").value

    localStorage.setItem("lista_conexiones", JSON.stringify(lista_conexiones))

    obtenerConexion()
    document.getElementById("btn_guardar").style.display = 'block'
    document.getElementById("btn_actualizar").style.display = 'none'

    document.getElementById("formConexion").reset()
}