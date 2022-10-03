<template>
    <div class="row">        
        <h4>{{titulo}}</h4>
        <div class="col-lg-4 mb-3" v-for="(p,index) of lista_definitiva" v-bind:key="index">
            <div class="card" style="width: 18rem;">
                <img src='https://dummyjson.com/image/i/products/7/thumbnail.jpg' class="card-img-top" alt="">
                <div class="card-body">
                    <p class="card-text">{{p.title}}</p>
                    <p class="card-text">Categoria: {{p.category}}</p>
                    <p class="card-text">Rating: {{p.rating}} / 5</p>
                    <p class="card-text">Precio: ${{p.price}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";
export default {
    name:'FormProducto',
    setup(){
        //sector de variables                
        let lista_producto = ref([])
        let lista_definitiva = ref([])
        let titulo = ref('Lista de productos')        
        //sector de funciones
        async function consumir_api() {
            const producto = await fetch('https://dummyjson.com/products')
            lista_producto.value = await producto.json()
            lista_definitiva.value = await lista_producto.value["products"]            
        }
        return{
            consumir_api,
            lista_producto,
            lista_definitiva,
            titulo            
        }
        
    },
    created(){
        this.consumir_api()
    }    
}

</script>