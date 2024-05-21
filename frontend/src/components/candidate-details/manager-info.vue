<script setup>
import editUserInfoModal from './edit-user-info-modal.vue'
import { ref } from 'vue'

const showModal = ref(false)

const editUserInfo = () => {
    showModal.value = true
}

const updateModalData = (val) => {
    showModal.value = val
}
</script>

<template>
    <div>
        <div class="manager-info manager-header-border">
            <div class="manager-info-header">
                <div class="avatar">
                    <i class='bx bx-user'></i>
                </div>
                <div class="header-details">
                    <div class="header-name social-media bold">William Sample
                        <span>
                            <i class='bx bxl-facebook'></i>
                            <i class='bx bxl-twitter'></i>
                            <i class='bx bxl-linkedin'></i>
                            <i class='bx bxl-github'></i>
                            <i class='bx bxl-vk'></i>
                        </span>
                    </div>
                    <div class="role-info">
                        <div>Senior Product Manager</div>
                        <div>United State</div>
                        <div>Dallas</div>
                    </div>
                </div>
            </div>

            <div class="actions">
                <editUserInfoModal :show-modal="showModal" @emit-close-modal="updateModalData(val)"></editUserInfoModal>
                <button class="button" style="background-color: #F6C1C1; color: red"> contact Linked</button>
                <div>
                    <i class='bx bx-star'></i>
                    <i class='bx bxs-hot'></i>
                    <i style="cursor: pointer;" class='bx bx-pencil' @click="editUserInfo()"></i>
                    <i class='bx bx-dots-vertical'></i>
                </div>
            </div>
        </div>
        <div class="manager-info users-manager-detail">
            <div class="manager-contacts">
                <div class="icon">
                    <span><i class='bx bx-envelope'></i></span>
                    <span class="active bold">williamsample@gmail.com</span>
                </div>
                <div class="icon">
                    <span><i class='bx bx-phone-call'></i></span>
                    <span class="active bold">+91 9021232326</span>
                </div>
            </div>
            <div class="user-basic">
                <div class="icon">
                    <span><i class='bx bx-user-circle'></i></span>
                    <span>Phyllis Yang</span>
                </div>
                <div class="icon">
                    <span><i class='bx bx-time'></i></span>
                    <span> Jul 14, 2023, 4:04 pm</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.manager-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    padding: 5px 10px 5px 5px;
    /* border: 1px solid black; */
}

.manager-header-border {
    height: 64px;
    border-top: 1px solid lightgrey;
}

.manager-info-header {
    display: flex;
    width: 50%;
    margin: 0 7px;
}

.users-manager-detail {
    border: 1px solid #b5b9bcb4;
}

.header-details {
    margin: 0 7px;
}

.social-media i {
    padding: 3px;
    margin-left: 2px;
    background-color: #1da1f2;
    border-radius: 50%;
}

.role-info {
    display: flex;
    justify-content: space-between;
    gap: 15px
}

.actions {
    display: flex;
    align-items: center;
}

.actions i {
    width: 25px;
    height: 25px;
    padding: 5px 6px 6px 4px;
    gap: 10px;
    border-radius: 5px;
    border: 1px solid #cdc5c5;
    margin-left: 5px;
}

.manager-contacts,
.user-basic {
    display: flex;
    justify-content: space-between;
    align-items: center
}

.manager-contacts {
    width: 40%;
}

.user-basic>div {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.avatar {
    color: #31A171;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 45px;
    /* padding: 13px; */
    border-radius: 50%;
    background: #CCE8DC;
    font-size: larger;
}

.icon i {
    padding: 5px;
    margin: 5px;
}
</style>