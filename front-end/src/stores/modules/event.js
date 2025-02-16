import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { ENDPOINT } from '@/constants/endpoint'
import Swal from 'sweetalert2'

export const useEventsStore = defineStore('event', () => {
  const event = ref([])

  async function fetchEvent() {
    const url = ENDPOINT.EVENT
    try {
      const res = await axios.get(url)
      console.log('Fetched event:', res.data)
      if (res.status === 200) {
        event.value = res.data
      }
    } catch (error) {
      console.error('Error fetching event:', error)
    }
  }

  async function addEvent(eventToAdd) {
    try {
      console.log('📤 Axios Sending Data:', eventToAdd) 
      const res = await axios.post(`${ENDPOINT.EVENT}`, eventToAdd)
      console.log('✅ Event Added Successfully:', res.data)
      await fetchEvent()
    } catch (error) {
      console.error(
        '❌ Axios Error adding event:',
        error.response ? error.response.data : error.message
      )
      Swal.fire({
        icon: 'error',
        title: 'Error Adding Event',
        text: error.response ? error.response.data : error.message
      })
    }
  }

  const updateEvent = async (eventToUpdate) => {
    try {
      await axios.patch(`${ENDPOINT.EVENT}/${eventToUpdate.id}`, eventToUpdate)

      await fetchEvent()
    } catch (error) {
      console.error('Error updating evnet:', error)
    }
  }

  const deleteEvent = async (id) => {
    if (!id) {
      console.error("❌ Error: Event ID is missing");
      return;
    }
  
    try {
      console.log(`📤 Sending DELETE request for Event ID: ${id}`);
      await axios.delete(`${ENDPOINT.EVENT}/${id}`);
      console.log(`✅ Event with ID ${id} deleted successfully.`);
  
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: `Event ID ${id} has been deleted.`,
        timer: 1500,
        showConfirmButton: false,
      });
  
      // ✅ ลบ Event ออกจาก `event.value` โดยตรง
      event.value = event.value.filter((e) => e.id !== id);
    } catch (error) {
      console.error("❌ Error deleting event:", error);
      Swal.fire({
        icon: "error",
        title: "Error deleting event",
        text: error.response ? error.response.data.error : "Failed to delete event",
      });
    }
  };
  

  return {
    event,
    fetchEvent,
    addEvent,
    updateEvent,
    deleteEvent
  }
})
