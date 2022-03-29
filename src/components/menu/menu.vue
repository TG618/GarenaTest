<template>
  <header class="header">
    <img class="logo" src="../../assets/img/logo.png"/>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"
      ><span class="navicon"></span
    ></label>
    <ul class="menu">
      <li><a href="#work">HOME</a></li>
      <li><a href="#about">NEWS</a></li>
      <li><a href="#careers">WEAPINS</a></li>
      <li><a href="#contact">MAPS</a></li>
      <li><a href="#contact">CHARACTERS</a></li>
      <li><a href="#contact">WALLPAPER</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "GrMenu",
};
</script>