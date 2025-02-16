import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { ENDPOINT } from '@/constants/endpoint'
import Swal from 'sweetalert2'

export const useFlexTouristStore = defineStore('flextourist', () => {
  const flextourist = ref([])

  async function fetchFlexTourist() {
    const url = ENDPOINT.FLEXTOURIST
    try {
      const res = await axios.get(url)
      console.log('Fetched flextourist:', res.data)
      if (res.status === 200) {
        flextourist.value = res.data
      }
    } catch (error) {
      console.error('Error fetching flextourist:', error)
      Swal.fire({
        icon: 'error',
        title: 'Error Fetching FlexTourist',
        text: error.response ? error.response.data : error.message
      })
    }
  }

  async function addFlexTourist(flextouristToAdd) {
    try {
      // ตรวจสอบให้ค่า place_id เป็น integer
      const payload = {
        name: flextouristToAdd.tourist_name.trim(),
        place_id: parseInt(flextouristToAdd.place_id, 10) // แปลงเป็น integer
      }

      console.log('Payload to send:', payload)

      const response = await axios.post(ENDPOINT.FLEXTOURIST, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log('Response from add:', response.data)
      await fetchFlexTourist() // อัพเดทรายการ
    } catch (error) {
      console.error('Error adding flextourist:', error.response || error.message)
      Swal.fire({
        icon: 'error',
        title: 'Error Adding FlexTourist',
        text: error.response?.data || 'An error occurred while adding the item.'
      })
    }
  }

  const updateFlexTourist = async (flextouristToUpdate) => {
    if (!flextouristToUpdate.id) {
      console.error('FlexTourist ID is required for updating.')
      return
    }

    try {
      const payload = {
        tourist_name: flextouristToUpdate.tourist_name,
        place_id: flextouristToUpdate.place_id
      }
      console.log('Updating FlexTourist with payload:', payload)

      const response = await axios.patch(
        `${ENDPOINT.FLEXTOURIST}/${flextouristToUpdate.id}`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      console.log('Update response:', response.data)
      await fetchFlexTourist()
      console.log('The FlexTourist has been updated successfully.')
    } catch (error) {
      console.error(
        'Error updating flextourist:',
        error.response ? error.response.data : error.message
      )
      Swal.fire({
        icon: 'error',
        title: 'Error Updating FlexTourist',
        text: error.response ? error.response.data : error.message
      })
    }
  }

  const deleteFlexTourist = async (tourist_id) => {
    try {
        console.log(`Deleting FlexTourist with ID: ${tourist_id}`);
        const response = await axios.delete(`${ENDPOINT.FLEXTOURIST}/${tourist_id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Response from delete:', response);

        if (response.status === 200 || response.status === 204) {
            console.log(`FlexTourist with ID ${tourist_id} deleted successfully.`);
            await fetchFlexTourist();
        } else {
            throw new Error(`Unexpected response status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error deleting flextourist:', error);
        throw error; // ส่ง error กลับไปยัง caller
    }
};



  return {
    flextourist,
    fetchFlexTourist,
    addFlexTourist,
    updateFlexTourist,
    deleteFlexTourist
  }
})
