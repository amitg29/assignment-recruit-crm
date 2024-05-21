
import { defineStore } from 'pinia'
const defaultState = {
    options: [
        {
            title: 'Dashboard',
            icon_class: 'bx bxs-dashboard'
        },
        {
            title: 'User',
            icon_class: 'active-nav bx bxs-user-circle'
        },
        {
            title: 'Office',
            icon_class: 'bx bx-buildings'
        },
        {
            title: 'profile',
            icon_class: 'bx bx-user-pin'
        },
        {
            title: 'Work',
            icon_class: 'bx bxs-briefcase'
        },
        {
            title: 'Email',
            icon_class: 'bx bxs-envelope'
        },
        {
            title: 'Calendar',
            icon_class: 'bx bxs-calendar-event'
        },
        {
            title: 'Budget',
            icon_class: 'bx bxs-dollar-circle'
        },
        {
            title: 'Progress',
            icon_class: 'bx bxs-pie-chart-alt'
        },
        {
            title: 'tabs',
            icon_class: 'bx bxs-terminal'
        },
        {
            title: 'Setting',
            icon_class: 'bx bxs-cog'
        },
    ]
}

export const navigationStore = defineStore('navInfo', {
    state: () => {
        return defaultState
    },
})