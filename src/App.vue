<script>
import { RouterLink, RouterView } from 'vue-router'

export default{
  data() {
    return {
      token : localStorage.getItem('Token')
    };
  },
  methods: {
    //Recogemos el email
    getEmail() {
      return localStorage.getItem('Email');
    },
    //Recogemos el tiempo de expiracion
    getExp() {
      return localStorage.getItem('Exp');
    },
    //Recogemos el timestamp
    getTime() {
      return localStorage.getItem('Time');
    },
    //Recogemos el id 
    getId() {
      return localStorage.getItem('Id');
    },
    //Borramos los datos guardados
    cerrarSesion() {
      localStorage.clear();
      this.token = undefined;
      location.reload();
    }
  }
  }


</script>

<template>
  <header>
    <div class="logo">
      <h2 class="logo-nombre">
        <router-link to="/">HOME</router-link>
      </h2>
    </div>

    <nav>
      <router-link to="/"> Inicio </router-link>
      <router-link v-if="token" to="/verPerfil">Mi Perfil</router-link>
    </nav>
    <!--
          Boton inicio de sesión
        -->
    <div class="logo" v-if="!token">
      <a class="g_id_signin" data-type="standard" data-shape="pill" data-size="large"></a>
    </div>
    
    
    <div class="logo" v-if="token">
      <button class="cerrar" v-if="token" v-on:click="cerrarSesion();"> Cerrar Sesion</button>
    </div>

  </header>

  <div padding-top="20px">
      <router-view/>
  </div>

</template>

<style>
@import './assets/header_style.css';
</style>