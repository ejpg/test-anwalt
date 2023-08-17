<template>
  <label class="container">
    <input
      type="checkbox"
      :checked="checked"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script setup lang="ts">
defineProps({
  checked: {
    type: Boolean,
  },
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss">
/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Show the checkmark when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid grey;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  //   background-color: #eee;
  border: solid 3px grey;

  /* Create the checkmark/indicator (hidden when not checked) */
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
}
</style>
