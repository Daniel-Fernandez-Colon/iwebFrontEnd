<script>
import axios from 'axios';

export default {
    name: "get-request",
    data() {
        return {
            viviendas: null,
            buscando: true,
            token: null
        };
    },
    created() {
        // Simple GET request using axios
        if (localStorage.getItem('Token')) {
            this.token = jwt_decode(localStorage.getItem('Token'));
        } else {
            this.token = null;
        }
        if (this.$route.params.provincia) {
            var parametro = this.$route.params.provincia;
            parametro = parametro.substring(1, parametro.length);
            axios.get("https://b1zw5s.deta.dev/appVivienda/viviendas/" + parametro).then(response => {
                this.viviendas = response.data.sort((a, b) => {
                    if (a.provincia < b.provincia) {
                        return -1;
                    }
                });
                this.buscando = false
            });
        } else {
            axios.get("https://b1zw5s.deta.dev/appVivienda/viviendas").then(response => {
                this.viviendas = response.data.sort((a, b) => {
                    if (a.provincia < b.provincia) {
                        return -1;
                    }
                });
                this.buscando = false
            });
        }
    },
    beforeUpdate() {
        // Simple GET request using axios

        if (localStorage.getItem('Token')) {
            this.token = jwt_decode(localStorage.getItem('Token'));
        }else{
            this.token = null;
        }

        if (this.$route.params.provincia) {
            var parametro = this.$route.params.provincia;
            parametro = parametro.substring(1, parametro.length);
            axios.get("https://b1zw5s.deta.dev/appVivienda/viviendas/" + parametro).then(response => {
                this.viviendas = response.data.sort((a, b) => {
                    if (a.provincia < b.provincia) {
                        return -1;
                    }
                });
                this.buscando = false
            });
        } else {
            axios.get("https://b1zw5s.deta.dev/appVivienda/viviendas").then(response => {
                this.viviendas = response.data.sort((a, b) => {
                    if (a.provincia < b.provincia){
                        return -1;
                    }
                });
                this.buscando = false
            });
        }
    }
};

</script>


<template>

    <div v-if="token">
        <h2 v-if="buscando">
            Buscando viviendas...
        </h2>

        <div v-else>
            <table v-if="this.viviendas" class="tabla-Todo">
                <tr class="fila-encabezado">
                    <td class="celda-img"></td>
                    <td class="celda-text">Dirección</td>
                    <td class="celda-text">Localidad</td>
                    <td class="celda-text">Provincia</td>
                    <td class="celda-text">Capacidad</td>
                    <td class="celda-button"></td>
                </tr>
                <tr class="fila" v-for="vivienda in viviendas" :key="vivienda._id">

                    <td class="celda-img"><img :src='vivienda.foto' width="100" height="100"></td>

                    <td class="celda-text"> {{ vivienda.direccion }} </td>

                    <td class="celda-text">{{ vivienda.localidad }}</td>

                    <td class="celda-text">{{ vivienda.provincia }}</td>

                    <td class="celda-text">{{ vivienda.capacidad }}</td>

                    <td class="celda-button"><router-link :to="{ name: 'VerAnuncio', params: { id: vivienda._id } }"><a
                                    class="boton_personalizado" href="">Ver anuncio</a></router-link></td>

                </tr>
            </table>

            <h2 v-else>
                No hay viviendas para esta provincia
            </h2>

        </div>
    </div>

    <div v-else>
        Inicia sesión para acceder
    </div>

</template>

<style>
@import '../assets/listasStyle.css';
</style>