# Vue crud component

![Vue crud component](https://raw.githubusercontent.com/Kozmonos/vue-lite-crud/main/assets/preview.png)
## Project setup

```bash
npm i vue-lite-crud
```

## Usage

<br>

### Props

name|description|type|required
---|---|---|---
main|Main account info|Object(id,title,img)|true
sub|Sub accounts info|Array[Object(id,title,img)...]|true
show-sub|Sub accounts show/hide|Boolean|false

<br>

### Emit

name|description|return type
---|---|---
deleteMain| Delete main account|Number(main id)
deleteSub| Sub accounts info|Object(Number(main id),Number(sub id))
refresh| You can use it if you want to manually pull up-to-date data.  | Only return emit
add| If you want to add to the list, it adds a "+" button and emits when clicked. | Only return emit

<br>

### Usage with Nuxt

```html
<template>
  <client-only>
    <Crud
      :main="main"
      :sub="sub"
      @deleteSub="deleteSub"
      @deleteMain="deleteMain"
      @refresh="refresh"
      @add="add"
    />
  </client-only>
</template>

<script>
export default {
  components: {
    Crud: () => import("vue-lite-crud"),
  },
  data() {
    return {
      main: {
        id: 1,
        title: "Main Account",
        img: "https://thispersondoesnotexist.com/image",
      },
      sub: [
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
    };
  },
  methods: {
    deleteSub(Ids) {
      console.log(Ids);
      //{main: 1, sub: 1} ->id
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
```

<a href="https://www.patreon.com/kozmonos">!["Kozmonos Patreon"](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3DKozmonos%26type%3Dpatrons&style=for-the-badge)</a>