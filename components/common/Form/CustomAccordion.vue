<script setup lang="ts">
import { defineProps } from 'vue'

interface IProps {
  items: { label: string, content: string }[]
}
defineProps<IProps>()
</script>

<template>
  <div class="customAccordionWrapper">
    <Accordion
      v-for="(item, idx) of items"
      :key="idx" :value="idx" class="customAccordion"
    >
      <AccordionPanel :value="-1">
        <AccordionHeader class="customAccordion__header">
          {{ item.label }}
        </AccordionHeader>
        <AccordionContent>
          <Divider />
          <p v-html="item.content" />
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<style lang="scss" scoped>
.customAccordionWrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  word-wrap: break-word;
}
.customAccordion {
  border-radius: 20px;
  overflow: hidden;
  border: none !important;
  --p-accordion-panel-border-width: 0px !important;
  --p-accordion-header-border-width: 0px !important;
  --p-accordion-header-first-border-width: 0px !important;
  --p-accordion-content-border-width: 0px !important;

  &__header {
    height: 35px;
    font-size: 18px;
  }
}
</style>
