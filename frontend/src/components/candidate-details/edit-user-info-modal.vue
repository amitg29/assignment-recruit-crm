<script setup>
defineProps({
    showModal: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['emit-close-modal'])
import { ref } from 'vue';
import { useUserInfoStore } from '../../../stores/userStore'

const userInfo = useUserInfoStore()

const resume_name = ref(userInfo.resume)

function closeModal() {
    emit('emit-close-modal', false)
}

function handleFileUpload(event) {
    const resume_file = event.target.files[0];
    resume_name.value = resume_file.name
    console.log(resume_file, resume_name);
}

function updateUserInfo() {
    userInfo.$patch({ current_organization: userInfo.current_organization })
    userInfo.$patch({ summary: userInfo.summary })
    userInfo.$patch({ current_employment_status: userInfo.current_employment_status })
    userInfo.$patch({ skills: userInfo.skills })
    userInfo.$patch({ dob: userInfo.dob })
    userInfo.$patch({ available_from: userInfo.available_from })
    userInfo.$patch({ relevant_experience: userInfo.relevant_experience })
    userInfo.$patch({ current_salary: userInfo.current_salary })
    userInfo.$patch({ salary_expectation: userInfo.salary_expectation })
    userInfo.$patch({ notice_period: userInfo.notice_period })
    userInfo.$patch({ status: userInfo.status })
    userInfo.$patch({ full_address: userInfo.full_address })
    userInfo.$patch({ salary_type: userInfo.salary_type })
    userInfo.$patch({ resume: resume_name.value })
    userInfo.$patch({ language_skills: userInfo.language_skills })
    userInfo.$patch({ total_experience: userInfo.total_experience })
    userInfo.$patch({ count: userInfo.count })

    setTimeout(() => {
        // showModal.value = false;
        emit('emit-close-modal', false)
    }, 300)
}
</script>

<template>
    <div>
        <div v-if="showModal" class="modal-overlay" @click="closeModal">
            <div class="modal-content" @click.stop>
                <h2>Edit Information</h2>
                <form @submit.prevent="submitForm">
                    <div class="form-content">
                        <label>
                            Current Organization:
                            <input type="text" v-model="userInfo.current_organization"
                                placeholder="Current Organization" autofocus />
                        </label>
                        <label>
                            Summary:
                            <input type="text" v-model="userInfo.summary" placeholder="Summary" />
                        </label>
                        <label>
                            Skills:
                            <input type="text" v-model="userInfo.skills" placeholder="Skills" />
                        </label>
                        <label>
                            Current Employment Status:
                            <input type="text" v-model="userInfo.current_employment_status"
                                placeholder="Current Employment Status" />
                        </label>
                        <label>
                            Available From:
                            <input type="date" v-model="userInfo.available_from" />
                        </label>
                        <label>
                            Date of Birth:
                            <input type="date" v-model="userInfo.dob" />
                        </label>
                        <label>
                            Current Salary:
                            <input type="text" v-model="userInfo.current_salary" placeholder="Current Salary" />
                        </label>
                        <label>
                            Relevant Experience:
                            <input type="text" v-model="userInfo.relevant_experience"
                                placeholder="Relevant Experience" />
                        </label>
                        <label>
                            Notice Period:
                            <input type="text" v-model="userInfo.notice_period" placeholder="Notice Period" />
                        </label>
                        <label>
                            Salary Expectation:
                            <input type="text" v-model="userInfo.salary_expectation" placeholder="Salary Expectation" />
                        </label>
                        <label>
                            Full Address:
                            <textarea v-model="userInfo.full_address" placeholder="Full Address"></textarea>
                        </label>
                        <label>
                            Status:
                            <input type="text" v-model="userInfo.status" placeholder="Status" />
                        </label>
                        <!-- <label>
                            Resume:
                            <input type="file" @change="handleFileUpload" />
                            <span v-if="userInfo.resume" style="margin-left: 10px;">{{ userInfo.resume }} </span>
                            <span v-else>resume.pdf</span>
                        </label> -->
                        <label style="display: flex; align-items: center;">
                            Resume:
                            <input type="file" @change="handleFileUpload" style="margin-left: 10px;" />
                            <span v-if="userInfo.resume" style="margin-left: 10px;">{{ userInfo.resume }} </span>
                            <span v-else style="margin-left: 10px;">resume.pdf</span>
                        </label>
                        <label>
                            Salary Type:
                            <input type="text" v-model="userInfo.salary_type" placeholder="Salary Type" />
                        </label>
                        <label>
                            Total Experience:
                            <input type="text" v-model="userInfo.total_experience" placeholder="Total Experience" />
                        </label>
                        <label>
                            Language Skills:
                            <input type="text" v-model="userInfo.language_skills" placeholder="Language Skills" />
                        </label>
                        <label>
                            userInfo:
                            <input type="text" v-model="userInfo.count" placeholder="counts" />
                        </label>
                    </div>
                    <div class="buttons">
                        <button type="button" @click="closeModal">Cancel</button>
                        <button class="submit-buttons" @click="updateUserInfo()">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 600px;
    max-height: 80%;
    overflow-y: auto;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-content h2 {
    margin-top: 0;
}

.form-content {
    /* max-height: 56vh; */
    overflow-y: auto;
}

.form-content label {
    display: block;
    margin: 10px 0;
}

.form-content input[type="text"],
.form-content input[type="date"],
.form-content textarea,
.form-content input[type="file"] {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form-content input[type="text"]:focus,
.form-content input[type="date"]:focus,
.form-content textarea:focus,
.form-content input[type="file"]:focus {
    border-color: #1976d2;
    outline: none;
}

.buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.buttons button {
    margin-left: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.buttons button[type="button"] {
    background: #ccc;
}

.submit-buttons {
    background: #1976d2;
    color: white;
}
</style>../../../stores/userStore