<template>
  <div class="label" :style="obj">
    {{slot}}
  </div>
</template>

<script>
export default {
  //  props: ['text'],
  props: [
    {
      color: String,
      default: 'rgb(228, 247, 210)'
    }
  ],
  data() {
    return {
      obj: {
        backgroudColor: this.color,
        color: 'rgb(19, 82, 0)',
        opacity: '0.45',
        cursor: 'pointer',
        userSelect: 'none',
      }
    }
  }
}
</script>

<style scoped>
  .label{
    width: auto;
  }
</style>