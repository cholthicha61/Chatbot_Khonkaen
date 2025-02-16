import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { ENDPOINT } from '@/constants/endpoint'
import Swal from 'sweetalert2'

export const usePlacesStore = defineStore('places', () => {
  const places = ref([])

  async function fetchPlaces() {
    const url = ENDPOINT.PLACES
    try {
      const res = await axios.get(url)
      console.log('Fetched places:', res.data)
      if (res.status === 200) {
        places.value = res.data
      }
    } catch (error) {
      console.error('Error fetching places:', error)
    }
  }

  async function addPlaces(placesToAdd) {
    try {
      console.log('Places to add:', placesToAdd)

      if (!placesToAdd.admission_fee) {
        placesToAdd.admission_fee = ''
      }

      await axios.post(`${ENDPOINT.PLACES}`, placesToAdd)
      await fetchPlaces()
    } catch (error) {
      console.error('Error adding places:', error.response ? error.response.data : error.message)
      Swal.fire({
        icon: 'error',
        title: 'Error Adding Place',
        text: error.response ? error.response.data : error.message
      })
    }
  }

  const updatePlaces = async (placesToUpdate) => {
    try {
      await axios.patch(`${ENDPOINT.PLACES}/${placesToUpdate.id}`, placesToUpdate);
      
      await fetchPlaces();
    } catch (error) {
      console.error('Error updating place:', error);
    }
  };
  
  const deletePlaces = async (id) => {
    if (!id) {
      throw new Error('Place ID is required')
    }

    try {
      await axios.delete(`${ENDPOINT.PLACES}/${id}`)
      console.log(`Place with ID ${id} deleted successfully.`)
      await fetchPlaces()
    } catch (error) {
      console.error('Error deleting place:', error)
      throw error
    }
  }

  return {
    places,
    fetchPlaces,
    addPlaces,
    updatePlaces,
    deletePlaces
  }
})
