<script setup>
import Header from './header.vue'
import Navigation from './navigation.vue'
import SideBars from './sidebars.vue'
import Candidate from '../components/candidates.vue'
import { ref } from 'vue'

const showMenu = ref(false)
const showNav = ref(true)

function checkScreenWidth() {
  if (window.innerWidth <= 768) {
    showMenu.value = true
    showNav.value = false
  } else {
    showMenu.value = false
    showNav.value = true
  }
}
window.addEventListener("resize", checkScreenWidth);
checkScreenWidth();

function updateMenuBtn() {
  // console.log('clicked', val);
  // if (val) {
  showNav.value = !showNav.value
  // } else {
  //   showNav.value = false
  // }
}


</script>

<template>
  <div class="main-container">
    <div class="navigation">

      <Navigation :show-nav="showNav"></Navigation>
    </div>

    <div class="container">
      <Header :show-menu="showMenu" @update-show-menu="updateMenuBtn" />
      <div class="user-details">
        <Candidate class="candidate-container"></Candidate>
        <SideBars class="sidebar-container"></SideBars>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;

}

.container {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 0;
}

.navigation {
  background-color: #143E6F;
}

.user-details {
  /* flex: auto; */
  display: flex;
  background-color: #fff;
}

.candidate-container {
  display: flex;
  flex-direction: column;
  /* width: 80%; */
  flex: 1;
}

/* .sidebar-container {
  width: 30%
} */


/* Media query for tablets and smaller desktops */
@media (max-width: 768px) {
  .user-details {
    flex-direction: column;
  }

  .container {
    margin-left: 0px;
  }

  .candidate-container,
  .sidebar-container {
    flex: 1;
  }
}

/* Media query for mobile phones */
@media (max-width: 480px) {
  .user-details {
    flex-direction: column;
  }

  .candidate-container,
  .sidebar-container {
    flex: 1;
    padding: 10px;
  }

  .navigation.open {
    transform: translateX(0);
  }
}
</style>
