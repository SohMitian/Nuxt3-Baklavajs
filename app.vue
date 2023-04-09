<template>
    <div style="height: 100vh; width: 100vw">
      <baklava-editor :view-model="baklava" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { EditorComponent, useBaklava } from "@baklavajs/renderer-vue";
  import MathNode from "./MyNode";
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
  



<!-- <template>
    <baklava-editor :plugin="viewPlugin"></baklava-editor>
</template>

<script>
import { Editor } from "@baklavajs/core";
import { ViewPlugin } from "@baklavajs/plugin-renderer-vue3";

export default {
    data() {
        return {
            editor: new Editor(),
            viewPlugin: new ViewPlugin()
        }
    },
    created() {
        this.editor.use(this.viewPlugin);
        // register your nodes, node options, node interface types, ...
    }
}
</script> -->