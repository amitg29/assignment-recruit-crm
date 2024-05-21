<script setup>
// import { ref } from "vue";
// const listItems = ref()

import { sidebarStore } from '../../stores/sidebarStore'
const sidebarObj = sidebarStore()
const listItems = sidebarObj.sidebarData
</script>


<template>
    <div class="sidebar">
        <div class="sidebar-icon-bar">
            <i class='active bx bx-note'></i>
            <i class='active bx bx-phone-call'></i>
            <i class='active bx bx-check-circle'></i>
            <i class='active bx bx-calendar-event'></i>
        </div>
        <div class="sidebar-tabs">
            <ul>
                <li class="active bold">All</li>
                <li class="bold">Notes & Calls</li>
                <li class="bold">Tasks</li>
                <li class="bold">Meeting</li>
                <li class="bold">Files</li>
            </ul>
        </div>
        <div>
            <div v-for="item in listItems" :key="item.id" class="sidebar-card card">
                <div class="sidebar-card-tabs">
                    <ul>
                        <li><i class='active bx bx-note'></i></li>
                        <li style="font-weight: 520;">Note</li>
                        <li style="font-weight: 520;">To Do</li>
                    </ul>
                </div>
                <div class="sidebar-card-tab__detail">
                    {{ item.msg }}
                </div>
                <div class="assosication active bold">
                    {{ item.assosication }}
                </div>

                <div class="card-footer">
                    <div><span><i class='bx bx-user-circle'></i></span>{{ item.user_name }}</div>
                    <div><span><i class='bx bx-time'></i></span>{{ item.date }}</div>
                </div>
            </div>
            <!-- <li v-for="item in items">
            {{ item.message }}
            </li> -->
        </div>
    </div>
</template>


<style scoped>
.sidebar {
    background-color: #e0e1e775;
    width: 320px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 8px;
    /* background-color: rgb(255, 255, 255);
    border-radius: 8px;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.062); */
    font-family: SF Pro;
    font-size: 13px;
    font-weight: 400;
    line-height: 19.5px;
    text-align: left;

}

.sidebar-icon-bar {
    background-color: #fff;
    height: 55px;
    display: flex;
    align-items: flex-start;
    width: 100%
}

.sidebar-icon-bar>i {
    background: #E6F1FF;
    border-radius: 50%;
    padding: 10px;
    margin: 10px;
}

.card {
    margin: 10px;
    width: 300px;
    /* height: 180px; */
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: start;
    padding: 5px 10px;
    gap: 7px;
    /* position: relative; */
    overflow: hidden;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.062);
}

.sidebar-tabs {
    width: 100%;
    padding-left: 15px;
    background-color: #E9ECEF;
}

.sidebar-tabs>ul,
.sidebar-card-tabs>ul {
    list-style: none;
    display: flex;
    justify-content: start;
    padding: 0;
    font-size: small;
}

.sidebar-tabs>ul>li {
    padding: 5px;
    margin: 5px;
}

.sidebar-card-tabs>ul>li {
    /* padding: 5px; */
    margin: 5px;
}

.active {
    color: #007bff;
}

.card-footer {
    display: flex;
    justify-content: space-between;
}

/* .bold {
    font-weight: 600;
} */
</style>