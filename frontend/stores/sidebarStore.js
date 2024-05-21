import { defineStore } from 'pinia'

const defaultState = {
    sidebarData: [{
        id: 1, msg: 'Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
        assosication: '1 Association(s)',
        user_name: 'John Doe',
        date: 'Jul 12, 2023, 11:54 am'
    },
    {
        id: 1, msg: 'Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
        assosication: '1 Association(s)',
        user_name: 'John Doe',
        date: 'Jul 12, 2023, 11:54 am'
    },
    {
        id: 1, msg: 'Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
        assosication: '1 Association(s)',
        user_name: 'John Doe',
        date: 'Jul 12, 2023, 11:54 am'
    }
    ]
}

export const sidebarStore = defineStore('sidebarInfo', {
    state: () => {
        return defaultState
    },
})