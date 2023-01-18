




<script>

import axios from 'axios';
import { GoogleMap, Marker } from 'vue3-google-map';


export default {
    name: "get-request",
    components: {
        GoogleMap,
        Marker
    },
    data: function () {
        return {
            token: localStorage.getItem('Token'),
            parkings : null,
            buscado : false
        };
    },
    created(){

        if(this.token){
            axios.get("https://b1zw5s.deta.dev/appParking/parkings").then(response => {
                this.parkings = response.data;
                this.buscado = true;
            });
        }

    },
    beforeUpdate(){
        if (this.token) {
            axios.get("https://b1zw5s.deta.dev/appParking/parkings").then(response => {
                this.parkings = response.data;
                this.buscado = true;
            });
        }  
    },
    methods: {
        marcadorMapa(latitud, longitud) {
            return {
                lat: latitud,
                lng: longitud,
            }
        },
        mapCenterMalaga(){
            return {
                lat: 36.720207,
                lng: -4.421714
            }
        }
    }

};

</script>

<template>
    <h1>Pagina Principal</h1>
    <div>
        <h1>Examen Iweb</h1>
        <h3>Bienvenido al ejercicio del examen</h3>
    </div>


    <h2>Aparcamientos en Málaga registrados:</h2>

    <div v-if="token">

        <div v-if="!buscado">
            Buscando información de los parkings...
        </div>

        <div v-else>
            <div class="mapa">
                <GoogleMap api-key="AIzaSyAVotfCRyxA9y3yBiOafDlwoessHlHleJk"
                    style="width: 400px; height: 400px; align: center; padding-left: 25%; padding-right: 25%;"
                    :center="this.mapCenterMalaga()" :zoom="15">
                    <Marker v-for="parking in parkings" :key="parking._id"
                        :options="{ position: this.marcadorMapa(parking.latitud, parking.longitud)}" />
                </GoogleMap>
            </div>

            <h2>Lista detallada de los Aparcamientos en Málaga mostrados:</h2>

                <table>
                    <tr>
                        <td >poiID</td>
                        <td>Nombre</td>
                        <td >Direccion</td>
                        <td >Latitud</td>
                        <td >Longitud</td>
                        <td >Capacidad</td>
                        <td >Libres</td>
                        <td >Correo</td>
                    </tr>
                    <tr v-for="parking in parkings" :key="parking._id">

                        <td> {{ parking.poiID }} </td>

                        <td>{{ parking.nombre }}</td>

                        <td >{{ parking.direccion }}</td>

                        <td >{{ parking.latitud }}</td>

                        <td > {{ parking.longitud }} </td>

                        <td v-if="parking.capacidad > 0" >{{ parking.capacidad }}</td>
                        <td v-else > Capacidad no registrada</td>

                        <td >{{ parking.libres }}</td>

                        <td>{{ parking.correo }}</td>

                    </tr>
                </table>

        </div>

    
    </div>

    <div v-else>
        Inicie sesión para acceder a la información
    </div>

   

</template>

<style>
@import '../assets/componenteHomeStyle.css';
</style>