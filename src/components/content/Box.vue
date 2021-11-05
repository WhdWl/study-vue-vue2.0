<template>
  <div v-show="item.view" v-bind:class="['box', item.name]" v-bind:style="{'width': width + 'px', 'height': height + 'px'}">N</div>
<!--  <div v-if="item.view" v-bind:class="['box', item.name]" v-bind:style="{'width': width + 'px', 'height': height + 'px'}"></div>-->
<!--  <div v-bind:class="['box', color]" v-bind:style="{'width': width + 'px', 'height': height + 'px'}"></div>-->
<!--  <div :class="box" :style="{width: width + 'px', height: height + 'px'}"></div>-->
</template>

<style scoped>
.box {
  border: 1px solid #000;
  margin: 20px;
}
.blue {
  background: #009bff;
}
.purple {
  background: #8f46ff;
}
.green {
  background: #00bcac;
}
</style>

<script>
export default {
  name: 'Box'
  , props: {
    color: {
      type: String, default: ""
    }
    , item: {
      name: {
        type: String, default: ""
      }
      , view: {
        type: Boolean, default: false
      }
    }
  },
  data() {
    return {
      width: 300
      , height: 300
    }
  }
}
</script>