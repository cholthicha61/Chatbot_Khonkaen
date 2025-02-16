<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiTableBorder" title="Categories" main />
      <CardBox class="mb-6" has-table>
        <!-- Container for the button -->
        <div class="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
          <BaseButton
            color="primary"
            :icon="mdiPlus"
            small
            label="Add Categories"
            @click="openAddModal"
          />
        </div>

        <!-- Table to display Categories -->
        <div class="overflow-x-auto">
          <table class="w-full min-w-max table-auto">
            <thead class="bg-transparent">
              <tr>
                <th class="px-4 py-2 text-left">No</th>
                <th class="px-4 py-2 text-left">Categories Name</th>
                <th class="px-4 py-2 text-left">Created</th>
                <th class="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(categories, index) in categories" :key="categories.id">
                <td>{{ index + 1 }}</td>

                <td :class="!categories.categories_name ? 'text-red-500' : ''">
                  {{ categories.categories_name || 'No data available' }}
                </td>

                <td>{{ formatDate(categories.created_at) }}</td>
                <td>
                  <BaseButton
                    class="mr-2"
                    color="info"
                    :icon="mdiPencil"
                    small
                    @click="openEditModal(categories)"
                  />
                  <BaseButton
                    color="danger"
                    :icon="mdiTrashCan"
                    small
                    @click="confirmDelete(categories.id)"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBox>

      <!-- Add categories Modal -->
      <CardBoxModal v-model="isAddModalActive">
        <div class="flex justify-center">
          <h1 class="font-bold text-xl">Add Categories</h1>
        </div>
        <div class="max-h-96 overflow-y-auto custom-scrollbar">
          <form @submit.prevent="saveAdd">
            <div class="mb-4">
              <label for="add-name" class="block mb-2 font-semibold text-gray-700">
                Categories Name:
              </label>
              <textarea
                id="add-name"
                v-model="currentCategories.categories_name"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-24 overflow-y-auto custom-scrollbar"
                categoriesholder="Enter categories name"
              ></textarea>
            </div>

            <div class="flex justify-center space-x-2">
              <BaseButton color="info" type="submit" label="Save" />
              <BaseButton color="danger" label="Cancel" @click="closeAddModal" />
            </div>
          </form>
        </div>
      </CardBoxModal>

      <!-- Edit categories Modal -->
      <CardBoxModal v-model="isEditModalActive">
        <div class="flex justify-center">
          <h1 class="font-bold text-xl">Edit Categories</h1>
        </div>
        <div class="max-h-96 overflow-y-auto custom-scrollbar">
          <form @submit.prevent="saveEdit">
            <div class="mb-4">
              <label for="add-name" class="block mb-2 font-semibold text-gray-700">
                Categories Name:
              </label>
              <textarea
                id="add-name"
                v-model="currentCategories.categories_name"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-24 overflow-y-auto custom-scrollbar"
                categoriesholder="Enter categories name"
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
import { computed, ref, onMounted } from 'vue'
import Swal from 'sweetalert2'
import { useCategoriesStore } from '@/stores/modules/categories'

const store = useCategoriesStore()
const isAddModalActive = ref(false)
const isEditModalActive = ref(false)

const currentCategories = ref({
  categories_name: ''
})

const categories = computed(() => store.categories)

onMounted(() => {
  store
    .fetchCategories()
    .then(() => {
      console.log('Categories in Component:', categories.value)
      categories.value.forEach((categories) => {
        console.log('categories id:', categories.id)
      })
    })
    .catch((error) => {
      console.error('Error fetching categories:', error)
    })
})

function openAddModal() {
  isAddModalActive.value = true
  currentCategories.value = {
    categories_name: ''
  }
}

function openEditModal(categories) {
  console.log('categories in openEditModal:', categories)
  isEditModalActive.value = true
  currentCategories.value = { ...categories }
}

function closeAddModal() {
  isAddModalActive.value = false
  currentCategories.value = { categories_name: '' }
}

function closeEditModal() {
  isEditModalActive.value = false
  currentCategories.value = { categories_name: '' }
}

async function saveAdd() {
  if (!currentCategories.value.categories_name) {
    Swal.fire({
      icon: 'warning',
      title: 'Please enter the Categories name',
      text: 'The "Categories Name" field is required',
      confirmButtonText: 'OK',
      confirmButtonColor: '#0277bd'
    })
    return
  }

  if (!currentCategories.value.categories_name.trim()) {
    Swal.fire({
      icon: 'warning',
      title: 'Validation Error',
      text: 'Categories Name is required.',
      confirmButtonText: 'OK',
      confirmButtonColor: '#0277bd'
    })
    return
  }

  store
    .addCategories(currentCategories.value)
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Saved!',
        text: 'Your Categories has been added successfully.',
        timer: 1500,
        showConfirmButton: false,
        willClose: () => {}
      })

      closeAddModal()
    })
    .catch((error) => {
      console.error('Error saving Categories:', error)
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: error.response ? error.response.data : 'There was a problem adding the Categories.'
      })
    })
}

async function saveEdit() {
  if (!currentCategories.value.id) {
    console.error('Categories ID is missing!')
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'The Categories ID is missing or invalid.'
    })
    return
  }

  // ตรวจสอบว่ามีการเปลี่ยนแปลงข้อมูลหรือไม่
  const originalCategories = store.categories.find(
    (categories) => categories.id === currentCategories.value.id
  )
  const isUpdated = originalCategories.image_link !== currentCategories.value.categories_name
  if (!isUpdated) {
    Swal.fire({
      icon: 'info',
      title: 'No Changes Detected',
      text: 'You have not made any changes to the categories information.',
      confirmButtonText: 'OK',
      confirmButtonColor: '#0277bd'
    })
    return
  }

  try {
    await store.updateCategories(currentCategories.value)
    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: 'Your Categories has been updated successfully.',
      timer: 1500,
      showConfirmButton: false
    })
    closeEditModal()
  } catch (error) {
    console.error('Error updating Categories:', error)
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'There was a problem updating the Categories.'
    })
  }
}

const fetchcategories = async () => {
  try {
    await store.fetchCategories()
    categories.value = store.categories
  } catch (error) {
    console.error('Error fetching categories:', error)
  }
}
fetchcategories()

function confirmDelete(id) {
  if (!id) {
    console.error('Invalid categories id:', id)
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'The categories ID is invalid.',
      confirmButtonText: 'OK',
      confirmButtonColor: '#FF5722'
    })
    return
  }

  Swal.fire({
    icon: 'warning',
    title: 'Are you sure?',
    text: 'Do you really want to delete this category?',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    confirmButtonColor: '#FF5722',
    cancelButtonColor: '#CCCCCC',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      store
        .deleteCategories(id)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'The category has been deleted successfully.',
            timer: 1500,
            showConfirmButton: false
          })

          // รีเฟรชข้อมูลหลังจากลบสำเร็จ
          return store.fetchCategories()
        })
        .catch((error) => {
          console.error('Error deleting category:', error)
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Failed to delete the category. Please try again later.',
            confirmButtonText: 'OK',
            confirmButtonColor: '#FF5722'
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
