<template>
  <div>
    <Cruds
      :main="main[0]"
      :sub="sub[0]"
      @delete-sub="deleteSub"
      @deleteMain="deleteMain"
      @refresh="refresh"
      @add="add"
    />
    <Cruds
      :main="main[1]"
      :sub="sub[1]"
      @deleteSub="deleteSub"
      @deleteMain="deleteMain"
      @refresh="refresh"
      @add="add"
    />
  </div>
</template>
<script>
import Cruds from "./Cruds.vue";
export default {
  components: { Cruds },
  data() {
    return {
      showSub: false,
      mainIcons: ["refresh", "times"],
      subIcons: [],
      main: [
        {
          id: 1,
          title: "Main Account",
          img: "https://thispersondoesnotexist.com/image",
        },
        {
          id: 2,
          title: "Main Account 2",
          img: "https://thispersondoesnotexist.com/image",
        },
      ],
      sub: [
        [
          {
            id: 1,
            img: "https://thispersondoesnotexist.com/image",
            title: "test 1",
          },
          {
            id: 2,
            img: "https://thispersondoesnotexist.com/image",
            title: "test 2",
          },
        ],
        [
          {
            id: 1,
            img: "https://thispersondoesnotexist.com/image",
            title: "test 2-1",
          },
          {
            id: 2,
            img: "https://thispersondoesnotexist.com/image",
            title: "test 2-2",
          },
        ],
      ],
    };
  },
  methods: {
    deleteSub(Ids) {
      // {main: 1, sub: 1}->//id
      console.log(Ids);
    },
    deleteMain(id) {
      console.log("deleteMain:", id);
    },
    refresh(id) {
      console.log("refresh id:", id);
    },
    add(id) {
      console.log("add id:", id);
    },
  },
};
</script>
<style>
* {
  outline: 0;
}
</style>