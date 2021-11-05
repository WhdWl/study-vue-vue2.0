<template>
  <div>
    <Box :color="color" :item="item" v-for="(item, idx) in colors" :key="idx"/>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row; /* 왼쪽부터 가로로 정렬 */
  /* flex-direction: row-reverse; 오른쪽부터 가로로 정렬 */
  /* flex-direction: column; 위쪽부터 세로로 정렬 */
  /* flex-direction: column-reverse; 아래쪽부터 세로로 정렬 */
  justify-content: space-around; /* 자식요소들의 여백을 균등하게 정렬 */
  /* justify-content: flex-start; 시작점에 맞춰 정렬 */
  /* justify-content: flex-end; 끝점에 맞춰 정렬 */
  /* justify-content: center; 가운데 정렬 */
  /* justify-content: space-between; 여백을 균등하게 정렬 */
  align-items: flex-start; /* 위에부터 수직방향으로 정렬 */
  /* align-items: center; 가운데로부터 수직방향으로 정렬 */
  /* align-items: flex-end; 아래부터 수직방향으로 정렬 */
  flex-wrap: wrap;
}
</style>

<script>
import Box from '@/components/content/Box.vue'

export default {
  name: 'ContentTypeA'
  , components: {
    Box
  }
  , data() {
    return {
        color: "blue"
      , colors: [
          {
            name: "blue"
          , view: true
        }
        , {
            name: "green"
          , view: false
        }
        , {
            name: "purple"
          , view: true
        }
      ]
    }
  }
}
</script>