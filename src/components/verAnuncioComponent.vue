<script>

import axios from 'axios';
import { GoogleMap, Marker } from 'vue3-google-map';

export default {
    name: "get-request",
    components: {
        GoogleMap,
        Marker
    },
    data() {
        return {
            vivienda: null,
            huespedes: null,
            token: null,
            nombreUsuario: ""
        };
    },
    created() {

        if (localStorage.getItem('Token')) {
            this.token = jwt_decode(localStorage.getItem('Token'));
        } else {
            this.token = null;
        }

        //this.token = localStorage.getItem('Token');
        if (this.token != null) {
            let nombre = localStorage.getItem('NombreUsuario');
            let indice = nombre.indexOf("@");
            // Cortar desde 0 hasta la aparición del @
            this.nombreUsuario = nombre.substring(0, indice);
        }
        var parametro = this.$route.params.id;
        axios.get("https://b1zw5s.deta.dev/appVivienda/vivienda", { params: { id: parametro } }).then(response => this.vivienda = response.data);
    },
    beforeUpdate(){
        if (localStorage.getItem('Token')) {
            this.token = jwt_decode(localStorage.getItem('Token'));
        } else {
            this.token = null;
        }
    },
    methods: {

        mapCenter() {
            return {
                lat: parseFloat(this.vivienda.latitud),
                lng: parseFloat(this.vivienda.longitud),
            }
        }
    }
}

</script>

<template>

    <div v-if="token">
        <div>
            <table class="tabla-Grande" v-if="vivienda">
                <tr>

                    <td class="celda-Anuncio"><img :src='vivienda.foto' width="375" /></td>

                    <td class="celda-Anuncio">

                        <table class="tabla-Info">
                            <tr>
                                <td class="bold-text">Direccion:&nbsp;</td>
                                <td>{{ vivienda.direccion }}</td>
                            </tr>

                            <tr>
                                <td class="bold-text">Localidad:&nbsp;</td>
                                <td>{{ vivienda.localidad }}</td>
                            </tr>

                            <tr>
                                <td class="bold-text">Provincia:&nbsp;</td>
                                <td>{{ vivienda.provincia }}</td>
                            </tr>

                            <tr>
                                <td class="bold-text">Características:&nbsp;</td>
                                <td>{{ vivienda.caracteristicas }}</td>
                            </tr>

                            <tr>
                                <td class="bold-text">Capacidad:&nbsp;</td>
                                <td>{{ vivienda.capacidad }}</td>
                            </tr>

                            <tr>
                                <td class="bold-text">Precio/día:&nbsp;</td>
                                <td>{{ vivienda.precio }}</td>
                            </tr>

                            <tr>
                                <td class="bold-text">Vendedor:&nbsp;</td>
                                <td>{{ vivienda.vendedor }}</td>
                            </tr>

                        </table>

                    </td>

                </tr>
            </table>

            <div class="mapa" v-if="vivienda">
                <GoogleMap api-key="AIzaSyAVotfCRyxA9y3yBiOafDlwoessHlHleJk"
                    style="width: 400px; height: 400px; align: center; padding-left: 25%; padding-right: 25%;"
                    :center="this.mapCenter()" :zoom="16">
                    <Marker :options="{ position: this.mapCenter() }" />
                </GoogleMap>
            </div>

        </div>

    </div>

    <div v-else>
        Inicia sesión para acceder
    </div>

</template>

<style scoped>
@import '../assets/mostrarInformacionStyle.css';
</style>

