<script setup>
import { ref } from 'vue';

defineProps({
  showMenu: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['update-show-menu'])

const title = ref('recruit crm')
const profile_name = ref('Phyllis Yang')
const comapany_name = ref('Silicon Links Inc')

</script>

<template>
  <header class="header card">
    <div class="header-main">
      <button v-if="showMenu" @click="emit('update-show-menu')"><i class='bx bx-menu'></i></button>
      <div class="search_bar">
        <i class='bx bx-search-alt-2'></i>
        <input placeholder="Search Pipedrive" />
      </div>
      <div class="app-title">
        <svg data-v-c21fe13e="" width="179.333" height="38.142" viewBox="0 0 179.333 38.142" class="outapp-header-logo">
          <g data-v-c21fe13e="" id="Group_344" data-name="Group 344" transform="translate(-135 -176)">
            <g data-v-c21fe13e="" id="Group_343" data-name="Group 343" transform="translate(135 176)">
              <g data-v-c21fe13e="" id="Group_2973" data-name="Group 2973">
                <path data-v-c21fe13e="" id="a"
                  d="M170.317,285.547a47.313,47.313,0,0,0-9.653-.82,47.313,47.313,0,0,0-9.653.82,11.086,11.086,0,0,0-8.538,8.563,57.722,57.722,0,0,0,0,19.36,11.086,11.086,0,0,0,8.538,8.563,47.3,47.3,0,0,0,9.653.82,47.3,47.3,0,0,0,9.653-.82,11.086,11.086,0,0,0,8.538-8.563,57.706,57.706,0,0,0,0-19.36A11.086,11.086,0,0,0,170.317,285.547Z"
                  transform="translate(-141.656 -284.719)" fill="#1070ca" fill-rule="evenodd"></path>
              </g>
              <g data-v-c21fe13e="" id="Group_2974" data-name="Group 2974" transform="translate(9.642 10.994)">
                <path data-v-c21fe13e="" id="Path_6181" data-name="Path 6181"
                  d="M173.835,336.139a21.221,21.221,0,0,1-3.071-.665,9.078,9.078,0,0,1-6.334-8.37c-.213-3.333-.043-6.691-.043-10.1h9.448Z"
                  transform="translate(-164.323 -316.933)" fill="#fff"></path>
                <path data-v-c21fe13e="" id="Path_6182" data-name="Path 6182"
                  d="M218.935,321.47a4.737,4.737,0,1,1-1.405-3.371A4.746,4.746,0,0,1,218.935,321.47Z"
                  transform="translate(-198.346 -316.729)" fill="#fff"></path>
              </g>
            </g>
            <g data-v-c21fe13e="" id="Group_3112" data-name="Group 3112" transform="translate(183.2 183.521)">
              <g data-v-c21fe13e="" id="Group_3111" data-name="Group 3111" transform="translate(0 0)">
                <path data-v-c21fe13e="" id="Path_6286" data-name="Path 6286"
                  d="M105.773,336.059h3.193v1.765h.205a3.383,3.383,0,0,1,.623-.857,4.64,4.64,0,0,1,.87-.678,4.885,4.885,0,0,1,1.039-.466,3.581,3.581,0,0,1,1.1-.178,4.076,4.076,0,0,1,1.155.144,2.976,2.976,0,0,1,.82.375l-.909,3.036a3.334,3.334,0,0,0-.684-.247,4.038,4.038,0,0,0-.922-.091,2.908,2.908,0,0,0-1.271.273,2.792,2.792,0,0,0-.974.77,3.64,3.64,0,0,0-.623,1.162,4.59,4.59,0,0,0-.221,1.448v6.261h-3.4Z"
                  transform="translate(-105.773 -329.992)" fill="#314855"></path>
                <path data-v-c21fe13e="" id="Path_6287" data-name="Path 6287"
                  d="M124.895,345.71a7.133,7.133,0,0,1-2.376,2.517,6.6,6.6,0,0,1-3.641.961,6.974,6.974,0,0,1-2.687-.507,6.4,6.4,0,0,1-3.555-3.555,7.1,7.1,0,0,1-.506-2.712,6.951,6.951,0,0,1,.493-2.608,6.583,6.583,0,0,1,3.465-3.624,6.381,6.381,0,0,1,2.66-.547,6.923,6.923,0,0,1,2.725.506,5.559,5.559,0,0,1,2,1.4,6.043,6.043,0,0,1,1.22,2.115,8.18,8.18,0,0,1,.415,2.648v.31a1.777,1.777,0,0,0-.026.285,1.483,1.483,0,0,0-.026.285h-9.578a3.55,3.55,0,0,0,.427,1.337,3.219,3.219,0,0,0,.805.934,3.077,3.077,0,0,0,1.05.547,4.1,4.1,0,0,0,1.168.168,3.307,3.307,0,0,0,1.933-.532,3.889,3.889,0,0,0,1.207-1.337Zm-3.088-4.932a2.227,2.227,0,0,0-.221-.752,2.655,2.655,0,0,0-.572-.778,2.976,2.976,0,0,0-.933-.6,3.461,3.461,0,0,0-1.337-.234,3.113,3.113,0,0,0-1.92.623,3.282,3.282,0,0,0-1.168,1.739Z"
                  transform="translate(-103.071 -329.989)" fill="#314855"></path>
                <path data-v-c21fe13e="" id="Path_6288" data-name="Path 6288"
                  d="M135.136,345.529a7.1,7.1,0,0,1-2.325,2.634,6.427,6.427,0,0,1-3.724,1.026,7.043,7.043,0,0,1-2.712-.507,6.3,6.3,0,0,1-2.128-1.414,6.583,6.583,0,0,1-1.4-2.141,7.1,7.1,0,0,1-.506-2.712,7.2,7.2,0,0,1,.506-2.725,6.294,6.294,0,0,1,3.531-3.542,7.065,7.065,0,0,1,2.712-.506,6.5,6.5,0,0,1,3.71,1.012A6,6,0,0,1,135,339.273l-3.114,1.3a3.373,3.373,0,0,0-1.129-1.337,3.077,3.077,0,0,0-1.726-.453,3.159,3.159,0,0,0-1.271.259,3.268,3.268,0,0,0-1.052.727A3.326,3.326,0,0,0,126,340.91a4.5,4.5,0,0,0,0,3.008,3.312,3.312,0,0,0,.712,1.142,3.267,3.267,0,0,0,1.052.727,3.134,3.134,0,0,0,1.271.259,3.239,3.239,0,0,0,1.8-.479,3.337,3.337,0,0,0,1.18-1.388Z"
                  transform="translate(-98.725 -329.99)" fill="#314855"></path>
                <path data-v-c21fe13e="" id="Path_6289" data-name="Path 6289"
                  d="M132.685,336.059h3.193v1.765h.205a3.35,3.35,0,0,1,.623-.857,4.549,4.549,0,0,1,.87-.678,4.873,4.873,0,0,1,1.038-.466,3.589,3.589,0,0,1,1.1-.178,4.078,4.078,0,0,1,1.155.144,2.945,2.945,0,0,1,.817.375l-.908,3.036a3.362,3.362,0,0,0-.684-.247,4.038,4.038,0,0,0-.922-.091,2.9,2.9,0,0,0-1.272.273,2.794,2.794,0,0,0-.974.77,3.641,3.641,0,0,0-.623,1.162,4.587,4.587,0,0,0-.221,1.448v6.261h-3.4Z"
                  transform="translate(-94.327 -329.992)" fill="#314855"></path>
                <path data-v-c21fe13e="" id="Path_6290" data-name="Path 6290"
                  d="M148.921,346.99h-.205a4.323,4.323,0,0,1-1.609,1.518,4.71,4.71,0,0,1-2.31.559,4.322,4.322,0,0,1-3.595-1.48,6.146,6.146,0,0,1-1.18-3.945v-7.708h3.4v7.292a2.929,2.929,0,0,0,.61,2.037,2.3,2.3,0,0,0,1.778.661,2.486,2.486,0,0,0,1.231-.3,2.9,2.9,0,0,0,.909-.805,3.634,3.634,0,0,0,.57-1.193,5.37,5.37,0,0,0,.2-1.467v-6.229h3.4v12.717H148.92Z"
                  transform="translate(-91.203 -329.867)" fill="#314855"></path>
                <path data-v-c21fe13e="" id="Path_6291" data-name="Path 6291"
                  d="M152.526,336.038a2.166,2.166,0,0,1-.844-.17,2.144,2.144,0,0,1-.7-.468,2.184,2.184,0,0,1-.468-.684,2.266,2.266,0,0,1,0-1.713,2.2,2.2,0,0,1,3.569-.684,2.175,2.175,0,0,1-1.557,3.718Zm-1.686,14.426V337.748h3.4v12.717Z"
                  transform="translate(-86.815 -331.683)" fill="#314855"></path>
                <path data-v-c21fe13e="" id="Path_6292" data-name="Path 6292"
                  d="M156.821,340h-2.232V337.1h2.232v-3.9h3.4v3.9h3.114V340h-3.114v5.08a3.664,3.664,0,0,0,.091.844,1.384,1.384,0,0,0,.351.656,1.285,1.285,0,0,0,1.038.427,2.167,2.167,0,0,0,.7-.091,2.216,2.216,0,0,0,.493-.247l.957,2.984a5.67,5.67,0,0,1-1.285.427,7.452,7.452,0,0,1-1.518.144,4.649,4.649,0,0,1-1.726-.3,3.676,3.676,0,0,1-1.284-.834,4.527,4.527,0,0,1-1.22-3.391Z"
                  transform="translate(-85.012 -331.028)" fill="#314855"></path>
                <path data-v-c21fe13e="" id="Path_6293" data-name="Path 6293"
                  d="M178.764,345.529a7.11,7.11,0,0,1-2.325,2.634,6.427,6.427,0,0,1-3.726,1.026,7.036,7.036,0,0,1-2.711-.507,6.286,6.286,0,0,1-2.128-1.414,6.579,6.579,0,0,1-1.4-2.141,7.071,7.071,0,0,1-.507-2.712,7.167,7.167,0,0,1,.507-2.725A6.286,6.286,0,0,1,170,336.146a7.064,7.064,0,0,1,2.711-.506,6.5,6.5,0,0,1,3.711,1.012,6,6,0,0,1,2.208,2.621l-3.116,1.3a3.35,3.35,0,0,0-1.129-1.337,3.077,3.077,0,0,0-1.726-.453,3.165,3.165,0,0,0-1.272.259,3.245,3.245,0,0,0-1.05.727,3.328,3.328,0,0,0-.714,1.142,4.5,4.5,0,0,0,0,3.008,3.316,3.316,0,0,0,.714,1.142,3.246,3.246,0,0,0,1.05.727,3.14,3.14,0,0,0,1.272.259,3.238,3.238,0,0,0,1.8-.479,3.336,3.336,0,0,0,1.18-1.388Z"
                  transform="translate(-80.171 -329.99)" fill="#314855"></path>
                <path data-v-c21fe13e="" id="Path_6294" data-name="Path 6294"
                  d="M176.311,336.059H179.5v1.765h.205a3.282,3.282,0,0,1,.623-.857,4.586,4.586,0,0,1,.868-.678,4.888,4.888,0,0,1,1.039-.466,3.578,3.578,0,0,1,1.1-.178,4.082,4.082,0,0,1,1.156.144,2.965,2.965,0,0,1,.816.375l-.908,3.036a3.365,3.365,0,0,0-.684-.247,4.036,4.036,0,0,0-.922-.091,2.9,2.9,0,0,0-1.272.273,2.793,2.793,0,0,0-.974.77,3.67,3.67,0,0,0-.623,1.162,4.59,4.59,0,0,0-.22,1.448v6.261h-3.4Z"
                  transform="translate(-75.773 -329.992)" fill="#314855"></path>
                <path data-v-c21fe13e="" id="Path_6295" data-name="Path 6295"
                  d="M183.719,336.058h3.193v1.661h.205a4.463,4.463,0,0,1,1.622-1.5,4.6,4.6,0,0,1,2.271-.57,4.222,4.222,0,0,1,2.439.674,3.785,3.785,0,0,1,1.4,1.662,5.2,5.2,0,0,1,1.686-1.649,4.871,4.871,0,0,1,2.647-.684,5.007,5.007,0,0,1,2.025.376,3.781,3.781,0,0,1,1.414,1.05,4.6,4.6,0,0,1,.844,1.622,7.151,7.151,0,0,1,.285,2.064v8.014h-3.4v-7.4q0-2.6-2.128-2.6a2.361,2.361,0,0,0-1.194.3,2.666,2.666,0,0,0-.87.805,3.957,3.957,0,0,0-.547,1.206,5.564,5.564,0,0,0-.2,1.5v6.176h-3.4v-7.392q0-2.6-2.232-2.6a2.167,2.167,0,0,0-1.142.3,2.631,2.631,0,0,0-.831.805,3.931,3.931,0,0,0-.519,1.206,5.994,5.994,0,0,0-.181,1.5v6.176h-3.4Z"
                  transform="translate(-72.618 -329.991)" fill="#314855"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>

    <div class="header-secondary">
      <div class="actions-btns">
        <i class='bx bx-plus'></i>
        <div class="vl"></div>
        <i class='bx bx-gift'></i>
        <i class='bx bx-envelope'></i>
        <i class='bx bx-bell'></i>
      </div>
      <div class="profile">
        <div class="profile-img"> {{ profile_name && profile_name[0].toUpperCase() }}</div>
        <div class="profile-details">
          <span> {{ profile_name && profile_name }}</span> <br />
          <span> {{ comapany_name && comapany_name }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  /* justify-content: auto; */
  align-items: center;
  border-bottom: 2px solid lavenderblush;
  background: #fff;
  box-shadow: 15px 15px 30px #e7dddd,
    -15px -15px 30px #ffffff;
  /* flex-wrap: wrap; */
}

/* .card {
  border-radius: 5px;
  background: #e0e0e0;
  box-shadow: 15px 15px 30px #bebebe,
    -15px -15px 30px #ffffff;
} */

.header-main {
  display: flex;
  flex: 50%;
  flex-direction: row;
  justify-content: start;
  align-self: center;
}

.search_bar {
  display: flex;
  width: 50%;
  align-self: center;
  height: 35px;
  margin-left: 10px;
}

.search_bar>i {
  font-size: 25px;
  position: absolute;
  padding-left: 7px;
  padding-top: 7px;
}

.search_bar>input {
  padding-left: 35px;
  width: 60%;
  background-color: #f8f9fa;
  border-radius: 5px;
}

.app-title {
  display: flex;
  flex-direction: row;
}

.app-title>div {
  font-weight: bold;
}

.app-title>.logo1 {
  padding-right: 5px
}

.actions-btns {
  display: flex;
}

.bx-plus {
  background-color: #007bff;
  color: #fff;
}

.vl {
  /* margin: 5px; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 5px;
  border-left: 2px solid rgb(215, 215, 215);
  height: 30px;
}

.actions-btns>i {
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgb(215, 215, 215);
}

.header-secondary {
  display: flex;
}

.profile {
  display: flex;
}

.profile-img {
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  color: #007bff;
  border: 1px solid rgb(215, 215, 215);
}


@media (max-width: 480px) {
  .header {
    flex-direction: column;
    flex: 1;
  }

  .header-main {
    margin-top: 10px;
  }
}
</style>
