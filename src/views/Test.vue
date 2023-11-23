<script setup>

import {markRaw, onMounted, ref} from "vue";

const VAceEditor = ref('div')
const content = ref('<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '  <head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
    '  </head>\n' +
    '  <body>\n' +
    '  </body>\n' +
    '</html>\n');

onMounted(async () => {
    VAceEditor.value = markRaw((await import('../utils/Editor')).VAceEditor);
});

</script>

<template>
    <div class="flex">
        <div class="w-[60%] h-screen">
            <component
                :is="VAceEditor"
                v-model:value="content"
                lang="html"
                theme="github_dark"
                style="height: 100%"
                :options="{ useWorker: true, enableBasicAutocompletion: true, enableSnippets: true }"
            >
            </component>
        </div>
        <div class="w-[40%]" v-html="content"></div>
    </div>


</template>

<style scoped>

</style>