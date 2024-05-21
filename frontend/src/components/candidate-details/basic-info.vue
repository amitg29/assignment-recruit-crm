<script setup>
import { useUserInfoStore } from '../../../stores/userStore'

const userInfo = useUserInfoStore()

</script>


<template>
    <div class="fluid-container">
        <div class="basic-info">
            <div class="parent">
                <div class="child text-bold">Current Organization</div>
                <div class="child">{{ userInfo.current_organization }}</div>
            </div>
            <div class="parent">
                <div class="child text-bold">Summary</div>
                <div class="child">{{ userInfo.summary }}</div>
            </div>
        </div>

        <div class="basic-info">
            <div class="parent">
                <div class="child text-bold">Skills</div>
                <div class="child">{{ userInfo.skills }}</div>
            </div>
            <div class="parent">
                <div class="child text-bold">Current Employment Status</div>
                <div class="child">{{ userInfo.current_employment_status }}</div>
            </div>
        </div>

        <div class="basic-info">
            <div class="parent">
                <div class="child text-bold">Available From</div>
                <div class="child">{{ userInfo.available_from }}</div>
            </div>
            <div class="parent">
                <div class="child text-bold">Date of Birth</div>
                <div class="child">{{ userInfo.dob }}</div>
            </div>
        </div>

        <div class="basic-info">
            <div class="parent">
                <div class="child text-bold">Current Salary</div>
                <div class="child">{{ userInfo.current_salary }}</div>
            </div>
            <div class="parent">
                <div class="child text-bold">Relevent Experience</div>
                <div class="child">{{ userInfo.relevant_experience }}</div>
            </div>
        </div>

        <div class="basic-info">
            <div class="parent">
                <div class="child text-bold">Notice Period</div>
                <div class="child">{{ userInfo.notice_period }}</div>
            </div>
            <div class="parent">
                <div class="child text-bold">Salary Expectation</div>
                <div class="child">{{ userInfo.salary_expectation }}</div>
            </div>
        </div>

        <div class="basic-info">
            <div class="parent">
                <div class="child text-bold">Full Address</div>
                <div class="child">{{ userInfo.full_address }}</div>
            </div>
            <div class="parent">
                <div class="child text-bold">Status</div>
                <div class="child">{{ userInfo.status }}</div>
            </div>
        </div>

        <div class="basic-info">
            <div class="parent">
                <div class="child text-bold">Resume</div>
                <div class="child">{{ userInfo.resume }}</div>
            </div>
            <div class="parent">
                <div class="child text-bold">Salary Type</div>
                <div class="child">{{ userInfo.salary_type }}</div>
            </div>
        </div>

        <div class="basic-info">
            <div class="parent">
                <div class="child text-bold">Total Experience</div>
                <div class="child">{{ userInfo.total_experience }}</div>
            </div>
            <div class="parent">
                <div class="child text-bold">Language Skills</div>
                <div class="child">{{ userInfo.language_skills }}</div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.fluid-container {
    margin: 10px 5px 15px 5px;
    display: flex;
    flex-direction: column;
}

.basic-info {
    display: flex;
    justify-content: space-between;
    /* column-gap: 5px; */
}

.basic-info>div {
    display: flex;
    justify-content: space-between;
}

/* Parent container */
.parent {
    display: flex;
    /* Enables Flexbox on the parent container */
    width: 100%;
    /* Ensures the parent takes up the full width available */
}

/* Child elements */
.child {
    flex: 0 0 50%;
    /* Makes each child take exactly 50% of the parent’s width */
    padding: 5px;
    /* Optional: Adds some padding to the child elements */
    box-sizing: border-box;
    /* Ensures padding and borders are included in the element's total width and height */
    /* border: 1px solid #ccc; */
    /* Optional: Adds a border for better visibility */
}

.text-bold {
    font-weight: bold;
}

@media (max-width: 480px) {
    .basic-info {
        flex-direction: column;
    }
}
</style>../../../stores/userStore