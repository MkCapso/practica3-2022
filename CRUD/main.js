
function guardar() {

    let nuevo_cliente = {
        nombre:document.getElementById("inp_nombre").value,
        apellido:document.getElementById("inp_apellido").value,
        dni:document.getElementById("inp_dni").value
    }
    
    if ("lista_clientes" in localStorage) {
        let grilla_clientes = JSON.parse(localStorage.getItem("lista_clientes"))
        grilla_clientes.push(nuevo_cliente)
        localStorage.setItem("lista_clientes", JSON.stringify(grilla_clientes))
    }else{
        let grilla_clientes = []
        grilla_clientes.push(nuevo_cliente)
        localStorage.setItem("lista_clientes", JSON.stringify(grilla_clientes))
    }

    obtenerCliente()

    document.getElementById("formCliente").reset()
}

function obtenerCliente() {
    
    if ("lista_clientes" in localStorage) {
        
        let lista_clientes = JSON.parse (localStorage.getItem("lista_clientes"))

        let filas = []

        lista_clientes.forEach((element,index) => {
            let fila = `
                <tr>
                    <td>${index+1}</td>
                    <td>${element.nombre}</td>
                    <td>${element.apellido}</td>
                    <td>${element.dni}</td>
                    <td>
                        <button onclick="eliminarCliente(${index})" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                        <button onclick="editarProducto(${index})" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></button> 
                    </td>
                </tr>
            `
            filas.push(fila)
        });
        document.getElementById("tbody").innerHTML = filas.join('')
    }
}

obtenerCliente() //se ejecuta la función desde un principio para tener la tabla generada desde un principio

function eliminarCliente(index) {

    let lista_clientes = JSON.parse(localStorage.getItem("lista_clientes"))

    lista_clientes.splice(index,1)

    localStorage.setItem("lista_clientes", JSON.stringify(lista_clientes))

    obtenerCliente()
    
}

function editarProducto(index) {
    
    let lista_clientes = JSON.parse(localStorage.getItem("lista_clientes"))

    document.getElementById("inp_nombre").value = lista_clientes[index].nombre
    document.getElementById("inp_apellido").value = lista_clientes[index].apellido
    document.getElementById("inp_dni").value = lista_clientes[index].dni

    document.getElementById("btn_guardar").style.display = 'none'
    document.getElementById("btn_actualizar").style.display = 'block'

    localStorage.setItem("indiceStorage",index)
}

function actualizarCliente() {
    
    let indice = localStorage.getItem("indiceStorage")

    let lista_clientes = JSON.parse(localStorage.getItem("lista_clientes"))

    lista_clientes[indice].nombre = document.getElementById("inp_nombre").value
    lista_clientes[indice].apellido = document.getElementById("inp_apellido").value
    lista_clientes[indice].dni = document.getElementById("inp_dni").value

    localStorage.setItem("lista_clientes", JSON.stringify(lista_clientes))

    obtenerCliente()
    document.getElementById("btn_guardar").style.display = 'block'
    document.getElementById("btn_actualizar").style.display = 'none'

    document.getElementById("formCliente").reset()
}