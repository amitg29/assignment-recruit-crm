<script setup>

</script>

<template>
    <div class="assignment-container">
        <div class="assignment-tabs">
            <ul>
                <li class="bold">All Details</li>
                <li class="active bold active-tab">Assigned Jobs</li>
                <li class="bold">Related Emails</li>
                <li class="bold">Candidate Questions</li>
                <li class="bold">Hotlists</li>
                <li class="bold">Related Deals</li>
                <li class="bold">Contact(s) Pitched</li>
            </ul>
        </div>

        <div class="assignment-wrapper">
            <div class="assigment-header">
                <div class="bold">Assigned Job to William Sample</div>
                <div class="actions">
                    <button class="active-btn button">Assign To Job</button>
                    <button class="button">View All Assigned Jobs</button>
                </div>
            </div>
            <div class="assignment-details">
                <div class="assignment-items">
                    <!-- <div class="assignment-data"> -->
                    <div class="avatar-wrapper">
                        <span class="avatar">W</span>
                        <div style="margin-left: 5px;">
                            <span style="font-weight: 600;">Senior Product Manager</span>
                            <br>
                            <span style="font-size: 12px;">Recruit CRM</span>
                        </div>
                    </div>
                    <div class="manager-doj">
                        <span>
                            <i class='bx bxs-user-circle'></i>
                            William Sample
                        </span>
                        <span>
                            <i class='bx bx-time-five'></i>
                            Jul 10, 2023
                        </span>

                    </div>
                    <div>
                        <button>Assigned</button>
                    </div>
                    <div class="view-files button">
                        View Files
                    </div>
                    <div class="toggle">
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                    </div>
                    <!-- </div> -->

                </div>

                <div class="assignment-items">
                    <!-- <div class="assignment-data"> -->
                    <div class="avatar-wrapper">
                        <span class="avatar">W</span>
                        <div style="margin-left: 5px;">
                            <span style="font-weight: 600;">Senior Product Manager</span>
                            <br>
                            <span style="font-size: 12px;">Recruit CRM</span>
                        </div>
                    </div>
                    <div class="manager-doj">
                        <span>
                            <i class='bx bxs-user-circle'></i>
                            William Sample
                        </span>
                        <span>
                            <i class='bx bx-time-five'></i>
                            Jul 10, 2023
                        </span>

                    </div>
                    <div>
                        <button>Assigned</button>
                    </div>
                    <div class="view-files button">
                        View Files
                    </div>
                    <div class="toggle">
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                    </div>
                    <!-- </div> -->

                </div>

                <div class="assignment-items">
                    <!-- <div class="assignment-data"> -->
                    <div class="avatar-wrapper">
                        <span class="avatar">W</span>
                        <div style="margin-left: 5px;">
                            <span style="font-weight: 600;">Senior Product Manager</span>
                            <br>
                            <span style="font-size: 12px;">Recruit CRM</span>
                        </div>
                    </div>
                    <div class="manager-doj">
                        <span>
                            <i class='bx bxs-user-circle'></i>
                            William Sample
                        </span>
                        <span>
                            <i class='bx bx-time-five'></i>
                            Jul 10, 2023
                        </span>

                    </div>
                    <div>
                        <button>Assigned</button>
                    </div>
                    <div class="view-files button">
                        View Files
                    </div>
                    <div class="toggle">
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                    </div>
                    <!-- </div> -->

                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
.assignment-container {
    display: flex;
    flex-direction: column;
    overflow-x: auto;
}

.assignment-tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.assigment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
}

.assignment-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 15px;
    padding: 5px 10px;

    border: 1px solid;
    margin: 10px;
    /* width: 100%; */
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    /* gap: 7px; */
    overflow: hidden;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.062);
}

.assignment-data {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
}

.assignment-tabs {
    width: 100%;
    padding-left: 15px;
    background-color: #E9ECEF;
}

.assignment-tabs>ul {
    list-style: none;
    display: flex;
    justify-content: start;
    padding: 0;
    font-size: small;
}

.assignment-tabs>ul>li {
    padding: 5px;
    margin: 5px;
}

.active-tab {
    background: white;
    padding: 10px 5px 5px 5px !important;
    margin: 0px !important;
    border-bottom: 3px solid #007bff;
}

.active-btn {
    background-color: #2570CA;
    color: #fff;
}

.avatar-wrapper {
    display: flex;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #F08C00;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-right: 20px; */
    font-size: 24px;
}

.manager-doj {
    display: flex;
    flex-direction: column;
}

.view-files {
    padding: 2px 5px;
}

/* The switch - the box around the slider */
.switch {
    font-size: 11px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #9fccfa;
    border-radius: 50px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.slider:before {
    position: absolute;
    content: "";
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2em;
    width: 2em;
    inset: 0;
    background-color: white;
    border-radius: 50px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.switch input:checked+.slider {
    background: #0974f1;
}

.switch input:focus+.slider {
    box-shadow: 0 0 1px #0974f1;
}

.switch input:checked+.slider:before {
    transform: translateX(1.6em);
}
</style>