<template>
  <v-container class="h-100">
    <v-responsive class="align-center text-center h-100">
      <MainContainer class="container h-100">
        <div class="messages">
          <p class="text-body-1" v-for="i in 100">Line #{{ i }}</p>
        </div>
        <div class="message-input-container">
          <v-textarea
            variant="solo"
            base-color="surface"
            bg-color="surface-variant"
            color="on-surface-variant"
            class="rounded-t-0 message-input"
            rows="3"
            no-resize
            rounded="0"
            v-model="currentMessage"
          >
            <template v-slot:append-inner>
              <v-btn
                icon="mdi-send"
                variant="tonal"
                size="small"
                color="primary"
                @click="sendMessage"
              ></v-btn>
            </template>
          </v-textarea>
        </div>
      </MainContainer>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import MainContainer from "./MainContainer.vue";

const currentMessage = ref("");

const sendMessage = () => {
  console.log(currentMessage.value);
};
</script>

<style scoped>
.container {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  padding-bottom: 100px;
  max-height: 1000px;
  height: 100%;
}

.messages {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.message-input {
  max-width: 1000px;
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  resize: none;
}

.message-input-container {
  position: absolute;
  max-width: 1000px;
  width: 100%;
}
</style>
