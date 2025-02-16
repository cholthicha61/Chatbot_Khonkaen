<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiTableBorder" title="Events" main />
      <CardBox class="mb-6" has-table>
        <!-- Container for the button -->
        <div class="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
          <BaseButton
            color="primary"
            :icon="mdiPlus"
            small
            label="Add Events"
            @click="openAddModal"
          />
        </div>

        <!-- Table to display Events -->
        <div class="overflow-x-auto">
          <table class="w-full min-w-max table-auto">
            <thead class="bg-transparent">
              <tr>
                <th class="px-4 py-2 text-left">No</th>
                <th class="px-4 py-2 text-left">Event Name</th>
                <th class="px-4 py-2 text-left">Description</th>
                <th class="px-4 py-2 text-left">Address</th>
                <th class="px-4 py-2 text-left">Event Month</th>
                <th class="px-4 py-2 text-left">Start_time</th>
                <th class="px-4 py-2 text-left">End_time</th>
                <th class="px-4 py-2 text-left">Image Link</th>
                <th class="px-4 py-2 text-left">Image Detail</th>
                <th class="px-4 py-2 text-left">Created</th>
                <th class="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(event, index) in events" :key="event.id">
                <td>{{ index + 1 }}</td>

                <td :class="!event.event_name ? 'text-red-500' : ''">
                  {{ event.event_name || 'No data available' }}
                </td>

                <td :class="!event.description ? 'text-red-500' : ''">
                  <div v-if="event.description && event.description.length > 50">
                    {{ event.description.slice(0, 50) }}...
                    <BaseButton
                      color="primary"
                      small
                      label="See more"
                      @click="showFullDescription(event.description)"
                    />
                  </div>
                  <div v-else>
                    {{ event.description || 'No data available' }}
                  </div>
                </td>

                <td :class="!event.address ? 'text-red-500' : ''">
                  {{ event.address || 'No data available' }}
                </td>

                <td :class="!event.event_month ? 'text-red-500' : ''">
                  {{ event.event_month || 'No data available' }}
                </td>

                <td :class="!event.start_time ? 'text-red-500' : ''">
                  {{ formatDate(event.start_time) }}
                </td>

                <td :class="!event.end_time ? 'text-red-500' : ''">
                  {{ formatDate(event.end_time) }}
                </td>

                <td>
                  <a
                    :href="event.image_link"
                    target="_blank"
                    class="text-blue-500 hover:underline"
                    v-if="event.image_link"
                  >
                    {{ formatValue(event.image_link) }}
                  </a>
                  <span :class="!event.image_link ? 'text-red-500' : ''" v-else
                    >No link available</span
                  >
                </td>

                <td :class="!event.image_detail ? 'text-red-500' : ''">
                  {{ formatValue(event.image_detail) }}
                </td>

                <td>{{ formatDate(event.created_at) }}</td>
                <td>
                  <BaseButton
                    class="mr-2"
                    color="info"
                    :icon="mdiPencil"
                    small
                    @click="openEditModal(event)"
                  />
                  <BaseButton
                    color="danger"
                    :icon="mdiTrashCan"
                    small
                    @click="confirmDelete(event.id)"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBox>

      <!-- Add Events Modal -->
      <CardBoxModal v-model="isAddModalActive">
        <div class="flex justify-center">
          <h1 class="font-bold text-xl">Add Event</h1>
        </div>
        <div class="max-h-96 overflow-y-auto custom-scrollbar">
          <form @submit.prevent="saveAdd">
            <div class="mb-4">
              <label for="add-name" class="block mb-2 font-semibold text-gray-700">
                Event Name:
              </label>
              <textarea
                id="add-name"
                v-model="currentEvents.event_name"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-24 overflow-y-auto custom-scrollbar"
                placeholder="Enter event name "
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-description" class="block mb-2 font-semibold text-gray-700">
                Description:
              </label>
              <textarea
                id="add-description"
                v-model="currentEvents.description"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-24 overflow-y-auto custom-scrollbar"
                rows="1"
                @input="adjustHeight"
                placeholder="Enter description (optional)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-address" class="block mb-2 font-semibold text-gray-700">
                Address :
              </label>
              <textarea
                id="add-address"
                v-model="currentEvents.address"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="1"
                @input="adjustHeight"
                placeholder="Enter address (optional)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-event_month" class="block mb-2 font-semibold text-gray-700">
                Event Month:
              </label>
              <textarea
                id="add-event_month"
                v-model="currentEvents.event_month"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter event_month (optional)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-start-time" class="block mb-2 font-semibold text-gray-700">
                Start time :
              </label>
              <textarea
                id="add-start-time"
                v-model="currentEvents.start_time"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter start_time (YY/MM/DD)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-end-time" class="block mb-2 font-semibold text-gray-700">
                End time :
              </label>
              <textarea
                id="add-end-time"
                v-model="currentEvents.end_time"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter end_time (YY/MM/DD)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-image-link" class="block mb-2 font-semibold text-gray-700">
                Image Link:
              </label>
              <textarea
                id="add-image-link"
                v-model="currentEvents.image_link"
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
                v-model="currentEvents.image_detail"
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

      <!-- Edit Event Modal -->
      <CardBoxModal v-model="isEditModalActive">
        <div class="flex justify-center">
          <h1 class="font-bold text-xl">Edit Event</h1>
        </div>
        <div class="max-h-96 overflow-y-auto custom-scrollbar">
          <form @submit.prevent="saveEdit">
            <div class="mb-4">
              <label for="add-name" class="block mb-2 font-semibold text-gray-700">
                Event Name:
              </label>
              <textarea
                id="add-name"
                v-model="currentEvents.event_name"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-24 overflow-y-auto custom-scrollbar"
                eventholder="Enter event name "
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-description" class="block mb-2 font-semibold text-gray-700">
                Description:
              </label>
              <textarea
                id="add-description"
                v-model="currentEvents.description"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-24 overflow-y-auto custom-scrollbar"
                rows="1"
                @input="adjustHeight"
                eventholder="Enter description (optional)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-address" class="block mb-2 font-semibold text-gray-700">
                Address :
              </label>
              <textarea
                id="add-address"
                v-model="currentEvents.address"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="1"
                @input="adjustHeight"
                eventholder="Enter address (optional)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-event_month" class="block mb-2 font-semibold text-gray-700">
                Event Month:
              </label>
              <textarea
                id="add-event_month"
                v-model="currentEvents.event_month"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                evevtholder="Enter event_month (optional)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-start-time" class="block mb-2 font-semibold text-gray-700">
                Start time :
              </label>
              <textarea
                id="add-start-time"
                v-model="currentEvents.start_time"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                eventholder="Enter start_time (YY/MM/DD)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-end-time" class="block mb-2 font-semibold text-gray-700">
                <Em></Em>nd time :
              </label>
              <textarea
                id="add-end-time"
                v-model="currentEvents.end_time"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                eventholder="Enter end_time (YY/MM/DD)"
              ></textarea>
            </div>

            <div class="mb-4">
              <label for="add-image-link" class="block mb-2 font-semibold text-gray-700">
                Image Link:
              </label>
              <textarea
                id="add-image-link"
                v-model="currentEvents.image_link"
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
                v-model="currentEvents.image_detail"
                type="text"
                rows="1"
                @input="adjustHeight"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image-detail (optional)"
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
import { useEventsStore } from '@/stores/modules/event'
import Swal from 'sweetalert2'

const store = useEventsStore()
const isAddModalActive = ref(false)
const isEditModalActive = ref(false)

const currentEvents = ref({
  event_name: '',
  description: '',
  event_month: '',
  start_time: '',
  end_time: '',
  address: '',
  contact_link: '',
  image_link: '',
  image_detail: ''
})

const events = computed(() => store.event)

onMounted(() => {
  store.fetchEvent()
})

function openAddModal() {
  isAddModalActive.value = true
  currentEvents.value = {
    event_name: '',
    description: '',
    event_month: '',
    start_time: '',
    end_time: '',
    address: '',
    contact_link: '',
    image_link: '',
    image_detail: ''
  }
}

function openEditModal(event) {
  isEditModalActive.value = true
  currentEvents.value = { ...event }
}

function closeAddModal() {
  isAddModalActive.value = false
}

function closeEditModal() {
  isEditModalActive.value = false
}

function isValidDateFormat(date) {
  const pattern = /^\d{4}\/\d{2}\/\d{2}$/;
  return pattern.test(date);
}

async function saveAdd() {
  console.log("📤 Before Sending:", currentEvents.value);

  if (!currentEvents.value.event_name) {
    Swal.fire({
      icon: "warning",
      title: "Please enter the event name",
      text: 'The "Event Name" field is required',
      confirmButtonText: "OK",
      confirmButtonColor: "#0277bd",
    });
    return;
  }

  // ✅ ตรวจสอบรูปแบบของ start_time และ end_time
  if (!isValidDateFormat(currentEvents.value.start_time)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Start Date",
      text: "กรุณากรอกวันที่เริ่มต้นในรูปแบบ ปี/เดือน/วัน (YYYY/MM/DD)",
      confirmButtonText: "OK",
      confirmButtonColor: "#FF5722",
    });
    return;
  }

  if (!isValidDateFormat(currentEvents.value.end_time)) {
    Swal.fire({
      icon: "error",
      title: "Invalid End Date",
      text: "กรุณากรอกวันที่สิ้นสุดในรูปแบบ ปี/เดือน/วัน (YYYY/MM/DD)",
      confirmButtonText: "OK",
      confirmButtonColor: "#FF5722",
    });
    return;
  }

  const eventData = {
    event_name: currentEvents.value.event_name,
    description: currentEvents.value.description || null,
    event_month: currentEvents.value.event_month || null,
    start_time: currentEvents.value.start_time || null,
    end_time: currentEvents.value.end_time || null,
    address: currentEvents.value.address || null,
    image_link: currentEvents.value.image_link || null,
    image_detail: currentEvents.value.image_detail || null,
  };

  try {
    console.log("📤 Sending Event Data:", eventData);
    await store.addEvent(eventData);
    Swal.fire({
      icon: "success",
      title: "Saved!",
      text: "Your event has been added successfully.",
      timer: 1500,
      showConfirmButton: false,
    });
    closeAddModal();
  } catch (error) {
    console.error("❌ Error adding event:", error.response ? error.response.data : error.message);
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: error.response ? error.response.data : "There was a problem adding the event.",
    });
  }
}


async function saveEdit() {
  if (!currentEvents.value.id) {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "The event ID is missing or invalid.",
    });
    return;
  }

  if (!isValidDateFormat(currentEvents.value.start_time)) {
    Swal.fire({
      icon: "error",
      title: "Invalid Start Date",
      text: "กรุณากรอกวันที่เริ่มต้นในรูปแบบ ปี/เดือน/วัน (YYYY/MM/DD)",
      confirmButtonText: "OK",
      confirmButtonColor: "#FF5722",
    });
    return;
  }

  if (!isValidDateFormat(currentEvents.value.end_time)) {
    Swal.fire({
      icon: "error",
      title: "Invalid End Date",
      text: "กรุณากรอกวันที่สิ้นสุดในรูปแบบ ปี/เดือน/วัน (YYYY/MM/DD)",
      confirmButtonText: "OK",
      confirmButtonColor: "#FF5722",
    });
    return;
  }

  try {
    await store.updateEvent(currentEvents.value);
    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: "Your event has been updated successfully.",
      timer: 1500,
      showConfirmButton: false,
    });
    closeEditModal();
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "There was a problem updating the event.",
    });
  }
}


async function confirmDelete(id) {
  console.log('⚠️ Confirm delete for Event ID:', id)

  if (!id) {
    Swal.fire({
      icon: 'error',
      title: 'Delete Error',
      text: 'Event ID is missing. Cannot delete.'
    })
    return
  }

  Swal.fire({
    icon: 'warning',
    title: 'Are you sure?',
    text: 'Do you want to delete this event?',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    confirmButtonColor: '#FF5722',
    cancelButtonColor: '#CCCCCC'
  }).then(async (result) => {
    if (result.isConfirmed) {
      console.log('✅ User confirmed deletion. Calling store.deleteEvent...')
      try {
        await store.deleteEvent(id)
        console.log(`✅ Event with ID ${id} deleted successfully.`)

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `Event ID ${id} has been deleted.`,
          timer: 1500,
          showConfirmButton: false
        })

        // ✅ ลบ Event ออกจาก state ของ Vue
        events.value = events.value.filter((e) => e.id !== id)
      } catch (error) {
        console.error('❌ Error deleting event:', error)
        Swal.fire({
          icon: 'error',
          title: 'Error deleting event',
          text: error.response ? error.response.data.error : 'Failed to delete event'
        })
      }
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
