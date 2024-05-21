<script setup>
// import { ref } from 'vue';
defineProps({
  showNav: {
    type: Boolean,
    required: true
  }
})

import { navigationStore } from '../../stores/navigationStore'

const navOptionsData = navigationStore()
const navOptions = navOptionsData.options
console.log(navOptions);

// const navList = 

// const navOptions = ref(navList)

</script>

<template>
  <div class="nav">
    <!-- <div class="menuButton">
      <i class='bx bx-menu'></i>
    </div> -->
    <ul v-if="showNav" class="nav-wrapper">
      <li v-for="item in navOptions" :key="item.title" class="nav-item">
        <!-- {{ item.title }} -->
        <i :class="item.icon_class"></i>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
}

.nav-item {
  list-style: none;
  padding: 0;
}

.nav-wrapper {
  background-color: #143E6F;
  padding: 0;
}

.nav-item {
  padding: 5px;
  margin: 5px;
  height: 45px;
  width: 45px;
  cursor: pointer;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-item:first-child {
  margin-top: 0px;
}

.nav-item i {
  font-size: 25px;
}

.active-nav {
  color: #0e56db
}
</style>
