<script>
import axios from 'axios';

export default {
    name: "get-request",
    methods: {
        timestampTransform(timestamp) {
            const milliseconds = timestamp*1000 
            const dateTimestamp = new Date(milliseconds)
            return dateTimestamp.toLocaleString()
        }
    },
    data() {
        return {
            logs: null,
            token: null,
            buscando: true
        };
    },
    created() {

        if (localStorage.getItem('Token')) {
            this.token = jwt_decode(localStorage.getItem('Token'));
        } else {
            this.token = null;
        }

        axios.get("https://b1zw5s.deta.dev/appLog/logs").then(response => {
            this.logs = response.data.sort((a, b) => {
                if (a.creacion < b.creacion) {
                    return -1;
                }
            });
            this.buscando = false
        });   
    },
    beforeUpdate() {

        if (localStorage.getItem('Token')) {
            this.token = jwt_decode(localStorage.getItem('Token'));
        } else {
            this.token = null;
        }

        axios.get("https://b1zw5s.deta.dev/appLog/logs").then(response => {
            this.logs = response.data.sort((a, b) => {
                if (a.creacion < b.creacion) {
                    return -1;
                }
            });
            this.buscando = false
        }); 
    }
};

</script>


<template>

    <div v-if="token">

        <h2 v-if="buscando">
            Buscando logs...
        </h2>

        <div v-else>
            <table v-if="this.logs" class="tabla-Todo">
                <tr class="fila-encabezado">
                    <td class="celda-text">Email</td>
                    <td class="celda-text">Timestamp Creacion</td>
                    <td class="celda-text">Timestamp Caducidad</td>
                    <td class="celda-text">Token Identificacion</td>
                </tr>
                <tr class="fila" v-for="log in logs" :key="log._id">
                    <td class="celda-text"> {{ log.email }} </td>
                    <td class="celda-text">{{ timestampTransform(log.creacion) }}</td>
                    <td class="celda-text">{{ timestampTransform(log.exp) }}</td>
                    <td class="token-cell">{{ log.token }}</td>
                </tr>
            </table>

            <h2 v-else>
                No hay logs actualmente
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