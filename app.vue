<template>
    <div style="height: 100vh; width: 100vw">
      <baklava-editor :view-model="baklava" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { EditorComponent, useBaklava } from "@baklavajs/renderer-vue";
  import MathNode from "./MathNode";
  import "@baklavajs/themes/dist/syrup-dark.css";
  
  export default defineComponent({
    components: {
      "baklava-editor": EditorComponent,
    },
    setup() {
      const baklava = useBaklava();
      baklava.editor.registerNodeType(MathNode);
      return { baklava };
    },
  });
  </script>
