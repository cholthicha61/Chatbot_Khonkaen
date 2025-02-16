import { defineStore } from 'pinia';
import axios from 'axios';

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: []  
  }),
  actions: {
    async fetchUsers() {
      try {
        const res = await axios.get('http://localhost:8080/users')
        if (res.status === 200) {
          console.log('Fetched Users:', res.data)
          this.users = res.data  
        }
      } catch (error) {
        console.error('Error fetching Users:', error)
      }
    }
  }
})
