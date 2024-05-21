// stores/counter.js
import { defineStore } from 'pinia'
const defaultState = {
    current_organization: 'World Bank Group',
    summary: 'Current Organization',
    current_employment_status: 'Employed',
    skills: 'HTML, CSS, JavaScript',
    dob: '15 June 1993',
    available_from: 'Jul 14, 2023',
    relevant_experience: '7 Years',
    current_salary: '$6000',
    salary_expectation: '$9000',
    notice_period: '90 Days',
    status: 'Submitted to Client',
    full_address: '9400 Ashton Rd, Philadelphia...',
    salary_type: 'Annual',
    resume: 'Resume',
    language_skills: 'English(Elementary proficiency)',
    total_experience: '5 Years'
}

export const useUserInfoStore = defineStore('userInfo', {
    state: () => {
        return defaultState
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            this.count++
        },
        updateFormValue(key, value) {
            this.defaultState[key] = value
        }
    },
})