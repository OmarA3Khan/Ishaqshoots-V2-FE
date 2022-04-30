<template>
    <div class="accordion">
      <div class="title" @click="accordionExpanded = !accordionExpanded">
        <div>
            <b>{{ contents.question }}</b>
        </div>
        <div>
          <span class="chevron" :class="accordionExpanded ? '' : 'bottom'"></span>
        </div>
      </div>
      <transition name="item">
        <div class="description" v-if="accordionExpanded">
          {{ content.answer }}
        </div>
      </transition>
    </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      content: this.contents,
      accordionExpanded: this.expanded
    }
  },
  props: {
    contents: Object,
    expanded: {
      type: Boolean,
      required: false,
      default: false
    }
  },
};
</script>

<style scoped>

.accordion {
  width: 100%;
  margin: 1%;
}

.title {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  background-color: white;
}

.title,
.description {
  border: 1px solid #dedede;
  padding: 5px;
  border-radius: 3px;
}

.description {
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  font-size: 14px;
  color: grey;
}

.chevron::before {
  margin: 0 1vh;
  border-color: grey;
	border-style: solid;
	border-width: 0.15em 0.15em 0 0;
	content: '';
	display: inline-block;
	height: 0.45em;
	position: relative;
	top: 10px;
	transform: rotate(-45deg);
	vertical-align: top;
	width: 0.45em;
}

.chevron.bottom:before {
	top: 5px;
	transform: rotate(135deg);
}

.item-enter-active,
.item-leave-active {
  transition: max-height .5s ease-in, opacity .3s ease-out;
  overflow: hidden;
  opacity: 1;
  max-height: 328px;
}
.item-enter-from,
.item-leave-to {
  max-height: 0;
  opacity: 0;
}

@media only screen and (min-width: 768px) {
  .accordion {
    width: 27.3%;
  }
}
</style>