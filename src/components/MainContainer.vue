<script lang="ts" setup>
import { useTheme } from "vuetify";

const theme = useTheme();
const changeTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? "light"
    : "dark");
</script>

<template>
  <v-container class="h-screen py-md-12 py-sm-5">
    <v-row justify="space-around" class="h-100">
      <v-card max-width="1000" height="100%" width="100%" class="overflow-auto">
        <v-toolbar color="tertiary-container" class="position-sticky">
          <template v-slot:prepend>
            <v-btn icon="$menu" color="on-tertiary-container"></v-btn>
          </template>

          <v-toolbar-title class="text-h6"> ObserverX </v-toolbar-title>

          <template v-slot:append>
            <v-btn
              icon="mdi-theme-light-dark"
              color="on-tertiary-container"
              @click="changeTheme"
            ></v-btn>
          </template>
        </v-toolbar>

        <v-card-text class="overflow-auto">
          <slot />
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<style scoped></style>
