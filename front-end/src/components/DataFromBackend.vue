
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const message = ref('')
  
  onMounted(() => {
    axios.get('http://localhost:8080/api/data')
    .then(response => {
        message.value = response.data.message
      })
      .catch(error => {
        console.error('There was an error!', error)
      })
  })
  </script>
  
  <style scoped>
  /* ใส่สไตล์ที่ต้องการที่นี่ */
  </style>
  