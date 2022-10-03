<template>

    <h1>{{titulo}}</h1>
    
</template>

<script>

import { ref } from "vue";
export default {
    name: 'GridUsuario',
    setup() {

        let titulo = ref('Recorriendo listas')
        let lista_usuarios = ref([])

        const obtener_usuarios = () => {
            const usuarios = await fetch('https://jsonplaceholder.typicode.com/users')

            lista_usuarios.value = usuarios.json()
        }

        return {
            titulo,
            lista_usuarios,
            obtener_usuarios
        }

    }
}
</script>