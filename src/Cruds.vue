<template >
  <div v-if="Object.keys(mainData).length" class="list">
    <Crud
      @showSub="changeSubStatus"
      :showSub="showSubData"
      @deleteMain="deleteMain"
      @refresh="refresh"
      @add="add"
      :main="mainData"
      :subLength="subData.length"
    />
    <transition-group mode="out-in" name="sub" appear>
      <Crud
        v-for="data in subDataFor"
        :key="data.id"
        class="sub"
        :mainId="mainData.id"
        @deleteSub="deleteSub"
        :sub="data"
      />
    </transition-group>
  </div>
</template>
<script>
import Crud from "./Crud.vue";
export default {
  components: { Crud },
  data() {
    return {
      showSubData: this.showSub,
      subData: this.sub,
      mainData: this.main,
      subDataFor: [],
    };
  },
  props: {
    main: {
      type: Object,
    },
    sub: {
      type: Array,
    },
    showSub: {
      type: Boolean,
      default: false,
    },
  },
  provide() {
    return {
      userList: "",
    };
  },
  methods: {
    changeSubStatus(status) {
      this.showSubData = status;
      console.log("this.showSubdata:", status);
    },
    deleteSub({ id }) {
      this.subData = this.subData.filter((k) => k.id != id.sub);
      this.$emit("deleteSub", id);
    },
    deleteMain(id) {
      this.mainData = {};
      this.$emit("deleteMain", id);
    },
    refresh(id) {
      this.$emit("refresh", id);
    },
    add(id) {
      this.$emit("add", id);
    },
  },
  watch: {
    showSubData(newD) {
      newD ? (this.subDataFor = this.subData) : (this.subDataFor = []);
    },
    subData(newD) {
      this.subDataFor != [] ? (this.subDataFor = newD) : "";
    },
  },
};
</script>
<style scoped>
.list {
  background-color: #191523;
  color: white;
  font-weight: bold;
  padding: 10px;
  transition: all 1s;
}
.list div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list .sub {
  border-left: 1px solid rgb(63, 63, 63);
  margin-left: 35px;
  padding-left: 35px;
}
.sub-enter {
  opacity: 1;
  transform: translateY(0px);
}
.sub-enter-active {
  transition: all 0.3s;
}
.sub-leave-active {
  transition: all 0.3s;
  opacity: 0;
  transform: translateY(-25px);
}
</style>