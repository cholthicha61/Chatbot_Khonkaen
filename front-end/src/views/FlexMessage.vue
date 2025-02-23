<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiTableBorder" title="Flex Message" main />
      <CardBox class="mb-6" has-table>
        <!-- Container for the button -->
        <div class="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
          <BaseButton
            color="primary"
            :icon="mdiPlus"
            small
            label="Add Flex Message"
            @click="openAddModal"
          />
        </div>

        <!-- Table to display Flextourist -->
        <div class="overflow-x-auto">
          <table class="w-full min-w-max table-auto">
            <thead class="bg-transparent">
              <tr>
                <th class="px-4 py-2 text-left">No</th>
                <th class="px-4 py-2 text-left">FlexMessage Name</th>
                <th class="px-4 py-2 text-left">Places Name</th>
                <th class="px-4 py-2 text-left">Created</th>
                <th class="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody v-if="Array.isArray(flextourist) && flextourist.length > 0">
              <tr v-for="(flextourist, index) in flextourist" :key="flextourist.id">
                <td>{{ index + 1 }}</td>
                <td :class="!flextourist.tourist_name ? 'text-red-500' : ''">
                  {{ flextourist.tourist_name || 'No data available' }}
                </td>
                <td>
                  {{
                    (places?.length ?? 0) > 0
                      ? places.find((place) => place.id === flextourist?.place_id)?.name ||
                        'No place selected'
                      : 'Loading places...'
                  }}
                </td>

                <td>{{ formatDate(flextourist.created_at) }}</td>
                <td>
                  <BaseButton
                    class="mr-2"
                    color="info"
                    :icon="mdiPencil"
                    small
                    @click="openEditModal(flextourist)"
                  />
                  <BaseButton
                    color="danger"
                    :icon="mdiTrashCan"
                    small
                    @click="confirmDelete(flextourist.tourist_id)"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBox>

      <!-- Add flextourist Modal -->
      <CardBoxModal v-model="isAddModalActive">
        <div class="flex justify-center">
          <h1 class="font-bold text-xl">Add Flex Message</h1>
        </div>
        <div class="max-h-96 overflow-y-auto custom-scrollbar">
          <form @submit.prevent="saveAdd">
            <!-- Input for Tourist Name -->
            <div class="mb-4">
              <label for="add-name" class="block mb-2 font-semibold text-gray-700">
                Flex Message:
              </label>
              <input
                id="add-name"
                v-model="currentFlextourist.tourist_name"
                type="text"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Flex Message name"
              />
            </div>

            <!-- Dropdown for Places -->
            <div v-for="(place, index) in currentFlextourist.places" :key="index" class="mb-4">
              <label :for="'add-place-' + index" class="block mb-2 font-semibold text-gray-700">
                Select Place {{ index + 1 }}:
              </label>
              <select
                :id="'add-place-' + index"
                v-model="place.place_id"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>Select a place</option>
                <option v-for="placeOption in places" :key="placeOption.id" :value="placeOption.id">
                  {{ placeOption.name }}
                </option>
              </select>
            </div>

            <!-- Button to Add More Places -->
            <div class="flex justify-end mb-4">
              <BaseButton color="primary" small label="Add Place" @click="addPlaceField" />
            </div>

            <!-- Save and Cancel Buttons -->
            <div class="flex justify-center space-x-2 mt-6">
              <BaseButton color="info" type="submit" label="Save" />
              <BaseButton color="danger" label="Cancel" @click="closeAddModal" />
            </div>
          </form>
        </div>
      </CardBoxModal>

      <!-- Edit flextourist Modal -->
      <CardBoxModal v-model="isEditModalActive">
        <div class="flex justify-center">
          <h1 class="font-bold text-xl">Edit Flex Message</h1>
        </div>
        <div class="max-h-96 overflow-y-auto custom-scrollbar">
          <form @submit.prevent="saveEdit">
            <!-- Display Tourist Name -->
            <div class="mb-4">
              <label for="edit-name" class="block mb-2 font-semibold text-gray-700">
                Flex Message Name:
              </label>
              <input
                id="edit-name"
                v-model="currentFlextourist.tourist_name"
                type="text"
                class="w-full p-2 border border-gray-300 rounded-lg bg-gray-200 cursor-not-allowed"
                readonly
              />
            </div>

            <!-- Dropdown for Place Selection -->
            <div v-for="(place, index) in currentFlextourist.places" :key="index" class="mb-4">
              <label :for="'edit-place-' + index" class="block mb-2 font-semibold text-gray-700">
                Select Place {{ index + 1 }}:
              </label>
              <select
                :id="'edit-place' + index"
                v-model="currentFlextourist.places[index].place_id"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>Select a place</option>
                <option v-for="placeOption in places" :key="placeOption.id" :value="placeOption.id">
                  {{ placeOption.name }}
                </option>
              </select>
            </div>

            <!-- Save and Cancel Buttons -->
            <div class="flex justify-center space-x-2 mt-6">
              <BaseButton
                color="info"
                type="submit"
                label="Save"
                :disabled="
                  !currentFlextourist.places ||
                  currentFlextourist.places.length === 0 ||
                  currentFlextourist.places.some((place) => !place.place_id)
                "
              />

              <BaseButton color="danger" label="Cancel" @click="closeEditModal" />
            </div>
          </form>
        </div>
      </CardBoxModal>
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script setup>
import { mdiTableBorder, mdiPencil, mdiTrashCan, mdiPlus } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import BaseButton from '@/components/BaseButton.vue'
import CardBoxModal from '@/components/CardBoxModal.vue'
import { computed, ref, onMounted } from 'vue'
import Swal from 'sweetalert2'
import { useFlexTouristStore } from '@/stores/modules/flexmessage'
import { usePlacesStore } from '@/stores/modules/places'

const store = useFlexTouristStore()
const isAddModalActive = ref(false)
const isEditModalActive = ref(false)
const flextourist = computed(() => store.flextourist || [])
const places = ref([])
const placesStore = usePlacesStore()

const currentFlextourist = ref({
  tourist_name: '',
  places: [{ place_id: null }]
})

function addPlaceField() {
  currentFlextourist.value.places.push({ place_id: '' })
}

onMounted(async () => {
  try {
    await store.fetchFlexTourist()
    // console.log('📌 Flextourist data (after fetch):', JSON.stringify(flextourist.value, null, 2))

    await placesStore.fetchPlaces()
    places.value = placesStore.places
    // console.log('📌 Loaded places:', JSON.stringify(places.value, null, 2))
  } catch (error) {
    console.error('❌ Error during onMounted:', error)
  }
})

function openAddModal() {
  isAddModalActive.value = true
  currentFlextourist.value = {
    tourist_name: '',
    places: [{ place_id: '' }]
  }
}

function openEditModal(flextourist) {
  console.log('✏️ Editing Flextourist:', flextourist);

  isEditModalActive.value = true;

  currentFlextourist.value = {
    id: flextourist.tourist_id || null,
    tourist_name: flextourist.tourist_name || '',
    places: Array.isArray(flextourist.places) && flextourist.places.length > 0
      ? flextourist.places.map(place => ({
          place_id: Number(place.place_id) || null // ✅ ทำให้เป็น object เสมอ
        }))
      : [{ place_id: Number(flextourist.place_id) || null }] // ✅ รองรับกรณีที่ `place_id` อยู่นอก `places`
  };

  console.log('📋 Current Flextourist (Edit):', JSON.stringify(currentFlextourist.value, null, 2));
}


function closeAddModal() {
  isAddModalActive.value = false
  currentFlextourist.value = {
    tourist_name: '',
    places: Array.from({ length: 10 }, () => ({ place_id: '' }))
  }
}

function closeEditModal() {
  isEditModalActive.value = false
  currentFlextourist.value = { tourist_name: '', place_id: '' }
}

async function saveAdd() {
  if (!currentFlextourist.value.tourist_name.trim()) {
    Swal.fire({
      icon: 'warning',
      title: 'Validation Error',
      text: 'Flextourist Name is required.',
      confirmButtonColor: '#283593'
    })
    return
  }

  // ตรวจสอบว่ามีอย่างน้อย 1 สถานที่
  const placesToAdd = currentFlextourist.value.places
    .filter((place) => place.place_id)
    .map((place) => place.place_id)

  if (placesToAdd.length === 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Validation Error',
      text: 'Please select at least one place.'
    })
    return
  }

  try {
    // ส่ง `place_id` เป็น Array
    for (const place_id of placesToAdd) {
      await store.addFlexTourist({
        tourist_name: currentFlextourist.value.tourist_name.trim(),
        place_id // ✅ ส่ง place_id ทีละตัว
      })
    }

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: 'The Flextourist and associated places have been added successfully.',
      timer: 2000,
      showConfirmButton: false
    })

    closeAddModal()
    await store.fetchFlexTourist()
  } catch (error) {
    console.error('Error adding flextourist:', error)
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.response?.data || 'An error occurred while adding the flextourist.'
    })
  }
}

async function saveEdit() {
  console.log('🔄 Updating FlexTourist:', currentFlextourist.value);
  console.log('🔄 [saveEdit] Attempting to update:', JSON.stringify(currentFlextourist.value, null, 2));

  if (!currentFlextourist.value.id) {
    console.error('❌ Error: FlexTourist ID is required for updating.');
    return;
  }

  const placesToUpdate =
    currentFlextourist.value.places?.filter((place) => place.place_id)?.map((place) => place.place_id) || [];

  console.log('📤 Places to update:', placesToUpdate);

  if (placesToUpdate.length === 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Validation Error',
      text: 'Please select at least one place.'
    });
    return;
  }

  try {
    await store.updateFlexTourist({
      id: currentFlextourist.value.id,
      tourist_name: currentFlextourist.value.tourist_name.trim(),
      places: placesToUpdate
    });

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: 'The Flextourist has been updated successfully.',
      timer: 2000,
      showConfirmButton: false
    });

    closeEditModal();
    await store.fetchFlexTourist();
  } catch (error) {
    console.error('❌ Error updating flextourist:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.response?.data || 'An error occurred while updating the flextourist.'
    });
  }
}

async function confirmDelete(tourist_id) {
  if (!tourist_id) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Invalid FlexTourist ID.'
    })
    return
  }

  Swal.fire({
    icon: 'warning',
    title: 'Are you sure?',
    text: 'Do you really want to delete this item?',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    confirmButtonColor: '#283593',
    cancelButtonColor: '#dc3545'
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await store.deleteFlexTourist(tourist_id)
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'The item has been deleted successfully.',
          timer: 1500,
          showConfirmButton: false
        })
        await store.fetchFlexTourist()
      } catch (error) {
        console.error('Error deleting item:', error)
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response?.data || 'Failed to delete the item.'
        })
      }
    }
  })
}

function formatDate(date) {
  return date ? new Date(date).toLocaleDateString() : 'No date available'
}
</script>

<style>
.custom-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.custom-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
