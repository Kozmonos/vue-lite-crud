        
<template >
  <div>
    <div class="left-pan">
      <img v-if="showImg" :src="imgData" />
      <h3>
        {{ main ? main.title : sub.title }}
        <span v-if="subLength">({{ subLength }})</span>
      </h3>
    </div>
    <div class="icons">
      <img
        @click="
          sub
            ? deleteSub({ id: { main: mainId, sub: sub.id } })
            : deleteMain(main.id)
        "
        svg-inline
        src="../static/assets/times.svg"
      />
      <template v-if="!sub">
        <img @click="add(main.id)" svg-inline src="../static/assets/plus.svg" />
        <img
          @click="refresh(main.id)"
          svg-inline
          src="../static/assets/refresh.svg"
        />
        <transition v-if="subLength > 0" name="triangle">
          <img
            :class="'triangle ' + (showSub ? 'triangle-down' : 'triangle-up')"
            @click="changeSubShow()"
            svg-inline
            src="../static/assets/triangle.svg"
          />
        </transition>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showSubData: this.showSub,
    };
  },
  props: {
    main: {
      type: Object,
    },
    subLength: {
      type: Number,
    },
    sub: {
      type: Object,
    },
    showSub: {
      type: Boolean,
    },
    mainId: {},
  },
  methods: {
    changeSubShow() {
      this.$emit("showSub", !this.showSub);
    },
    deleteSub(id) {
      this.$emit("deleteSub", id);
    },
    deleteMain(id) {
      this.$emit("deleteMain", id);
    },
    refresh(id) {
      this.$emit("refresh", id);
    },
    add(id) {
      this.$emit("add", id);
    },
  },
  created() {
    this.imgData = this.main ? this.main.img : this.sub.img;
    this.showImg = (this.main && "img" in this.main) || "img" in this.sub;
  },
};
</script>
<style scoped>
.left-pan {
  display: flex;
  align-items: center;
}
svg {
  margin: 3px;
  width: 28px;
}
img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: 10px;
}
.icons {
  display: flex;
  align-items: center;
  float: right;
}

.triangle {
  transition: all 0.3s;
}
.triangle-up {
  transform: rotate(0deg);
}
.triangle-down {
  transform: rotate(180deg);
}
</style>
<style>
* {
  outline: 0;
}
</style>