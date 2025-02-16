<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiTableBorder" title="Places" main />
      <CardBox class="mb-6" has-table>
        <!-- Container for the button -->
        <div class="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
          <BaseButton
            color="primary"
            :icon="mdiPlus"
            small
            label="Add Places"
            @click="openAddModal"
          />
        </div>

        <!-- Table to display Places -->
        <div class="overflow-x-auto">
          <table class="w-full min-w-max table-auto">
            <thead class="bg-transparent">
              <tr>
                <th class="px-4 py-2 text-left">No</th>
                <th class="px-4 py-2 text-left">Place Name</th>
                <th class="px-4 py-2 text-left">Description</th>
                <th class="px-4 py-2 text-left">Admission Fee</th>
                <th class="px-4 py-2 text-left">Opening Hours</th>
                <th class="px-4 py-2 text-left">Contact Link</th>
                <th class="px-4 py-2 text-left">Image Link</th>
                <th class="px-4 py-2 text-left">Image Detail</th>
                <th class="px-4 py-2 text-left">Created</th>
                <th class="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(place, index) in places" :key="place.id">
                <td>{{ index + 1 }}</td>

                <td :class="!place.name ? 'text-red-500' : ''">
                  {{ place.name || 'No data available' }}
                </td>

                <td :class="!place.description ? 'text-red-500' : ''">
                  <div v-if="place.description && place.description.length > 50">
                    {{ place.description.slice(0, 50) }}...
                    <BaseButton
                      color="primary"
                      small
                      label="See more"
                      @click="showFullDescription(place.description)"
                    />
                  </div>
                  <div v-else>
                    {{ place.description || 'No data available' }}
                  </div>
                </td>

                <td :class="!place.admission_fee ? 'text-red-500' : ''">
                  {{ place.admission_fee || 'No data available' }}
                </td>

                <td :class="!place.opening_hours ? 'text-red-500' : ''">
                  {{ formatValue(place.opening_hours) }}
                </td>

                <td>
                  <a
                    :href="place.contact_link"
                    target="_blank"
                    class="text-blue-500 hover:underline"
                    v-if="place.contact_link"
                  >
                    {{ formatValue(place.contact_link) }}
                  </a>
                  <span :class="!place.contact_link ? 'text-red-500' : ''" v-else
                    >No link available</span
                  >
                </td>

                <!-- <td :class="!place.categories_name ? 'text-red-500' : ''">
                  {{ place.categories_name || 'No category available' }}
                </td> -->

                <td>
                  <a
                    :href="place.image_link"
                    target="_blank"
                    class="text-blue-500 hover:underline"
                    v-if="place.image_link"
                  >
                    {{ formatValue(place.image_link) }}
                  </a>
                  <span :class="!place.image_link ? 'text-red-500' : ''" v-else
                    >No link available</span
                  >
                </td>

                <td :class="!place.image_detail ? 'text-red-500' : ''">
                  {{ formatValue(place.image_detail) }}
                </td>

                <td>{{ formatDate(place.created_at) }}</td>
                <td>
                  <BaseButton
                    class="mr-2"
                    color="info"
                    :icon="mdiPencil"
                    small
                    @click="openEditModal(place)"
                  />
                  <BaseButton
                    color="danger"
                    :icon="mdiTrashCan"
                    small
                    @click="
                      () => {
                        console.log('placeId to delete:', place.id) // ตรวจสอบ place.id
                        confirmDelete(place.id)
                      }
                    "
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBox>

      <!-- Add Places Modal -->
      <CardBoxModal v-model="isAddModalActive">
        <div class="flex justify-center">
          <h1 class="font-bold text-xl">Add Place</h1>
        </div>
        <div class="max-h-96 overflow-y-auto custom-scrollbar">
          <form @submit.prevent="saveAdd">
            <div class="mb-4">
              <label for="add-name" class="block mb-2 font-semibold text-gray-700">
                Place Name:
              </label>
              <textarea
                id="add-name"
                v-model="currentPlaces.name"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-24 overflow-y-auto custom-scrollbar"
                placeholder="Enter place name"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-description" class="block mb-2 font-semibold text-gray-700">
                Description:
              </label>
              <textarea
                id="add-description"
                v-model="currentPlaces.description"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-24 overflow-y-auto custom-scrollbar"
                rows="1"
                @input="adjustHeight"
                placeholder="Enter description (optional)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-admission-fee" class="block mb-2 font-semibold text-gray-700">
                Admission Fee:
              </label>
              <textarea
                id="add-admission-fee"
                v-model="currentPlaces.admission_fee"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="1"
                @input="adjustHeight"
                placeholder="Enter admission fee (optional)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-opening-hours" class="block mb-2 font-semibold text-gray-700">
                Opening Hours:
              </label>
              <textarea
                id="add-opening-hours"
                v-model="currentPlaces.opening_hours"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter opening hours (optional)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-opening-hours" class="block mb-2 font-semibold text-gray-700">
                Address:
              </label>
              <textarea
                id="add-opening-hours"
                v-model="currentPlaces.address"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter opening hours (optional)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-contact-link" class="block mb-2 font-semibold text-gray-700">
                Contact Link :
              </label>
              <textarea
                id="add-contact-link"
                v-model="currentPlaces.contact_link"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter contact link (optional)"
              ></textarea>
            </div>

            <!-- <div class="mb-4">
              <label for="add-category" class="block mb-2 font-semibold text-gray-700">
                Category:
              </label>
              <select
                id="add-category"
                v-model="currentPlaces.category_id"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option disabled value="">Select a category</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.categories_name }}
                </option>
              </select>
            </div> -->

            <div class="mb-4">
              <label for="add-image-link" class="block mb-2 font-semibold text-gray-700">
                Image Link:
              </label>
              <textarea
                id="add-image-link"
                v-model="currentPlaces.image_link"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image link (optional)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-image-detail" class="block mb-2 font-semibold text-gray-700">
                Image Detail:
              </label>
              <textarea
                id="add-image-detail"
                v-model="currentPlaces.image_detail"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image-detail (optional)"
              ></textarea>
            </div>

            <div class="flex justify-center space-x-2">
              <BaseButton color="info" type="submit" label="Save" />
              <BaseButton color="danger" label="Cancel" @click="closeAddModal" />
            </div>
          </form>
        </div>
      </CardBoxModal>

      <!-- Edit Places Modal -->
      <CardBoxModal v-model="isEditModalActive">
        <div class="flex justify-center">
          <h1 class="font-bold text-xl">Edit Place</h1>
        </div>
        <div class="max-h-96 overflow-y-auto custom-scrollbar">
          <form @submit.prevent="saveEdit">
            <div class="mb-4">
              <label for="add-name" class="block mb-2 font-semibold text-gray-700">
                Place Name:
              </label>
              <textarea
                id="add-name"
                v-model="currentPlaces.name"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-24 overflow-y-auto custom-scrollbar"
                placeholder="Enter place name"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-description" class="block mb-2 font-semibold text-gray-700">
                Description:
              </label>
              <textarea
                id="add-description"
                v-model="currentPlaces.description"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-24 overflow-y-auto custom-scrollbar"
                rows="1"
                @input="adjustHeight"
                placeholder="Enter description (optional)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-admission-fee" class="block mb-2 font-semibold text-gray-700">
                Admission Fee:
              </label>
              <textarea
                id="add-admission-fee"
                v-model="currentPlaces.admission_fee"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="1"
                @input="adjustHeight"
                placeholder="Enter admission fee (optional)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-opening-hours" class="block mb-2 font-semibold text-gray-700">
                Opening Hours:
              </label>
              <textarea
                id="add-opening-hours"
                v-model="currentPlaces.opening_hours"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter opening hours (optional)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-opening-hours" class="block mb-2 font-semibold text-gray-700">
                Address:
              </label>
              <textarea
                id="add-opening-hours"
                v-model="currentPlaces.address"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter opening hours (optional)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-contact-link" class="block mb-2 font-semibold text-gray-700">
                Contact Link :
              </label>
              <textarea
                id="add-contact-link"
                v-model="currentPlaces.contact_link"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter contact link (optional)"
              ></textarea>
            </div>

            <!-- <div class="mb-4">
              <label for="add-category" class="block mb-2 font-semibold text-gray-700">
                Category:
              </label>
              <select
                id="add-category"
                v-model="currentPlaces.category_id"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option disabled value="">Select a category</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.categories_name }}
                </option>
              </select>
            </div> -->

            <div class="mb-4">
              <label for="add-image-link" class="block mb-2 font-semibold text-gray-700">
                Image Link:
              </label>
              <textarea
                id="add-image-link"
                v-model="currentPlaces.image_link"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image link (optional)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-image-detail" class="block mb-2 font-semibold text-gray-700">
                Image Detail:
              </label>
              <textarea
                id="add-image-detail"
                v-model="currentPlaces.image_detail"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image_detail (optional)"
              ></textarea>
            </div>

            <div class="flex justify-center space-x-2">
              <BaseButton color="info" type="submit" label="Save" />
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
import { computed, ref,onMounted } from 'vue'
import { usePlacesStore } from '@/stores/modules/places'
import Swal from 'sweetalert2'
// import { useCategoriesStore } from '@/stores/modules/categories'

const store = usePlacesStore()
const isAddModalActive = ref(false)
const isEditModalActive = ref(false)
// const categoriesStore = useCategoriesStore()
// const categories = computed(() => categoriesStore.categories)

const currentPlaces = ref({
  name: '',
  description: '',
  admission_fee: '',
  opening_hours: '',
  address: '',
  contact_link: '',
  image_link: '',
  image_detail: ''
})

const places = computed(() => store.places)

// onMounted(() => {
//   Promise.all([categoriesStore.fetchCategories(), store.fetchPlaces()]).catch((error) => {
//     console.error('Error fetching data:', error)
//   })
// })

onMounted(() => {
  store.fetchPlaces()
})

function openAddModal() {
  isAddModalActive.value = true
  currentPlaces.value = {
    name: '',
    description: '',
    admission_fee: '',
    opening_hours: '',
    address: '',
    contact_link: '',
    image_link: '',
    category_id: '',
    image_detail: ''
  }
}

function openEditModal(place) {
  isEditModalActive.value = true
  currentPlaces.value = { ...place }
}

function closeAddModal() {
  isAddModalActive.value = false
}

function closeEditModal() {
  isEditModalActive.value = false
}

function isValidURL(url) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // ตรวจสอบ http:// หรือ https://
    "((([a-zA-Z0-9$_.+!*'(),-]+\\.)+[a-zA-Z]{2,})|" + // โดเมนหลัก เช่น google.com
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // หรือเป็น IP เช่น 192.168.1.1
    "(\\:\\d+)?(\\/[-a-zA-Z0-9%_.~+]*)*" + // พอร์ตและ path
    "(\\?[;&a-zA-Z0-9%_.~+=-]*)?" + // query string
    "(\\#[-a-zA-Z0-9_]*)?$", // fragment
    "i"
  );
  return !!pattern.test(url);
}

async function saveAdd() {
  if (!currentPlaces.value.name) {
    Swal.fire({
      icon: "warning",
      title: "Please enter the place name",
      text: 'The "Place Name" field is required',
      confirmButtonText: "OK",
      confirmButtonColor: "#0277bd",
    });
    return;
  }

  if (currentPlaces.value.contact_link && !isValidURL(currentPlaces.value.contact_link)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Contact Link",
      text: "กรุณากรอกลิงก์ที่ถูกต้อง เช่น https://example.com",
      confirmButtonText: "OK",
      confirmButtonColor: "#FF5722",
    });
    return;
  }

  // ตรวจสอบ image_link
  if (currentPlaces.value.image_link && !isValidURL(currentPlaces.value.image_link)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Image Link",
      text: "กรุณากรอกลิงก์ที่ถูกต้อง เช่น https://example.com/image.jpg",
      confirmButtonText: "OK",
      confirmButtonColor: "#FF5722",
    });
    return;
  }

  try {
    await store.addPlaces(currentPlaces.value);
    Swal.fire({
      icon: "success",
      title: "Saved!",
      text: "Your place has been added successfully.",
      timer: 1500,
      showConfirmButton: false,
    });
    closeAddModal();
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: error.response ? error.response.data : "There was a problem adding the place.",
    });
  }
}

async function saveEdit() {
  if (!currentPlaces.value.id) {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'The place ID is missing or invalid.'
    })
    return
  }
  if (currentPlaces.value.contact_link && !isValidURL(currentPlaces.value.contact_link)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Contact Link",
      text: "กรุณากรอกลิงก์ที่ถูกต้อง เช่น https://example.com",
      confirmButtonText: "OK",
      confirmButtonColor: "#FF5722",
    });
    return;
  }

  // ตรวจสอบ image_link
  if (currentPlaces.value.image_link && !isValidURL(currentPlaces.value.image_link)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Image Link",
      text: "กรุณากรอกลิงก์ที่ถูกต้อง เช่น https://example.com/image.jpg",
      confirmButtonText: "OK",
      confirmButtonColor: "#FF5722",
    });
    return;
  }

  try {
    await store.updatePlaces(currentPlaces.value)
    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: 'Your place has been updated successfully.',
      timer: 1500,
      showConfirmButton: false
    })
    closeEditModal()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'There was a problem updating the place.'
    })
  }
}

function confirmDelete(id) {
  Swal.fire({
    icon: 'warning',
    title: 'Are you sure?',
    text: 'Do you want to delete this place?',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    confirmButtonColor: '#FF5722',
    cancelButtonColor: '#CCCCCC'
  }).then((result) => {
    if (result.isConfirmed) {
      store
        .deletePlaces(id)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Place has been deleted successfully.',
            timer: 1500,
            showConfirmButton: false
          })
          return store.fetchPlaces() // Fetch places after deletion
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Failed to delete the place.'
          })
        })
    }
  })
}

function adjustHeight(event) {
  const textarea = event.target
  textarea.style.height = 'auto'
  textarea.style.height = `${textarea.scrollHeight}px`
}

function formatValue(value) {
  return value || 'No data available'
}

function formatDate(date) {
  return date ? new Date(date).toLocaleDateString() : 'null'
}

function showFullDescription(description) {
  Swal.fire({
    title: 'Full Description',
    text: description,
    icon: 'info',
    confirmButtonText: 'Close',
    confirmButtonColor: '#0277bd'
  })
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
