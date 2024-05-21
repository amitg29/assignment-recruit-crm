<script setup>
import { ref } from "vue";

const heading_title = ref('candidates')
const name = ref('Robert Hardy')
const id = ref('ID-231')
</script>

<template>
    <div class="content-header">
        <div class="header-bedcrum">
            <div class="active header-parent-tree">{{ heading_title }}</div>
            <span>></span>
            <div class="header-child-tree">{{ name }}</div>
            <div class="header-id">{{ id }}</div>
        </div>
        <div class="header-action-btn">
            <button class="button"> Request Profile Update</button>
            <button class="button">Previous</button>
            <button class="button">Next</button>
        </div>
    </div>
</template>



<style scoped>
.content-header {
    display: flex;
    justify-content: space-between;
    padding: 2px 10px;
    align-items: center;
    background-color: #E9ECEF;
}

.header-bedcrum {
    display: flex;
    gap: 5px
}

.header-action-btn {
    display: flex;
}

/* .header-action-btn>div {} */

.header-id {
    height: 20px;
    padding: 2px;
    margin: 0px;
    font-size: x-small;
    font-weight: 500;
    border-radius: 5px;
    background: #e8e8e8;
    border: 1px solid #c7c5c5;

}

/* @media (max-width: 480px) {
    .content-header {
        flex-direction: column;
        align-items: flex-start;
    }
} */
</style>