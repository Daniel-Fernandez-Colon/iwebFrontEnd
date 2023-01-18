<script>
export default {
    data: function () {
        return {
            token: null,
            email: null,
            imagen: null,
            conexion: null,
            caducidad: null,
            nombre: null
        };
    },
    created() {
        // Simple GET request using axios
        if (localStorage.getItem('Token')) {
            this.token = localStorage.getItem('Token');
            this.email = localStorage.getItem('Email');
            this.imagen = localStorage.getItem('ImagenUsuario');
            this.conexion = localStorage.getItem('Time');
            this.caducidad = localStorage.getItem('Exp');
            this.nombre = localStorage.getItem('NombreUsuario');
        } else {
            this.token = null;
            this.email = null;
            this.imagen = null;
            this.conexion = null;
            this.caducidad = null;
            this.nombre = null;
        }
    },
    beforeUpdate() {
        if (localStorage.getItem('Token')) {
            this.token = localStorage.getItem('Token');
            this.email = localStorage.getItem('Email');
            this.imagen = localStorage.getItem('ImagenUsuario');
            this.conexion = localStorage.getItem('Time');
            this.caducidad = localStorage.getItem('Exp');
            this.nombre = localStorage.getItem('NombreUsuario');
        } else {
            this.token = null;
            this.email = null;
            this.imagen = null;
            this.conexion = null;
            this.caducidad = null;
            this.nombre = null;
        }
    },
    methods: {
        timestampTransform(timestamp) {
            const milliseconds = timestamp * 1000
            const dateTimestamp = new Date(milliseconds)
            return dateTimestamp.toLocaleString()
        }
    }

};

</script>


<template>

    <div v-if="token">
    <table class="tabla-Todo">
        <tr class="fila-encabezado">
            <td class="cell-text">Email</td>
        </tr>
        <tr class="fila">
            <td class="cell-text"> {{ email }} </td>
        </tr>
        <tr class="fila-encabezado">
            <td class="cell-text">Nombre</td>
        </tr>
        <tr class="fila">
            <td class="cell-text"> {{ nombre }} </td>
        </tr>
        <tr class="fila-encabezado">
            <td class="cell-text">Imagen</td>
        </tr>
        <tr class="fila">
            <td v-if="imagen" class="celda-img"><img :src='imagen' width="100" height="100"></td>
            <td v-else class="cell-text"> Este usuario no tiene imagen</td>
        </tr>
        <tr class="fila-encabezado">
            <td class="cell-text">conexion</td>
        </tr>
        <tr class="fila">
            <td class="cell-text"> {{ timestampTransform(conexion) }} </td>
        </tr>
        <tr class="fila-encabezado">
            <td class="cell-text">Caducidad</td>
        </tr>
        <tr class="fila">
            <td class="cell-text"> {{ timestampTransform(caducidad) }} </td>
        </tr>
        <tr class="fila-encabezado">
            <td class="cell-text">Token</td>
        </tr>
        <tr class="fila">
            <td class="token-cell"> {{ token }} </td>
        </tr>
    </table>

    </div>

    <div v-else>
        Inicie Sesión para acceder a la información
    </div>

</template>


<style>
@import '../assets/listasStyle.css';
</style>