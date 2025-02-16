<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiTableBorder" title="Conversations" main />
      <CardBox class="mb-6" has-table>
        <table class="w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Question</th>
              <th>Answers</th>
              <th>UserId</th>
              <th>WebAnswerId</th>
              <th>PlaceId</th>
              <th>SourceType</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(conversation, index) in conversations" :key="conversation.id">
              <td>{{ index + 1 }}</td>
              <td>{{ formatValue(conversation.question_text) }}</td>
              <td>{{ formatValue(conversation.answer_text) }}</td>
              <td>{{ formatValue(conversation.user_id) }}</td>
              <td>{{ formatValue(conversation.web_answer_id) }}</td>
              <td>{{ formatValue(conversation.place_id) }}</td>
              <td>{{ formatValue(conversation.source_type) }}</td>
              <td>{{ formatDate(conversation.created_at) }}</td>
            </tr>
          </tbody>
        </table>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script setup>
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { computed, onMounted } from 'vue'
import { useConversationStore } from '@/stores/modules/conversations'

const formatValue = (value) => {
  return value ?? '-';  
}

const formatDate = (date) => {
  return date ? new Date(date).toLocaleDateString() : '-';
}

const store = useConversationStore()
const conversations = computed(() => store.conversations)

onMounted(() => {
  store.fetchConversations()
  console.log('Conversations in Component:', conversations.value)
})
</script>
