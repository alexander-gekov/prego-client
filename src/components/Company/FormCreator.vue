<template>
    <div class="container mx-auto min-h-screen h-screen flex mt-10">
        <div v-if="show===false" class="w-1/4 bg-gray-100 rounded-l-lg">
            <div class="text-center text-gray-700 text-lg my-4">
                Form Elements:
            </div>
            <hr>
            <!--            <FormulateInput label="Title" class="text-center mt-4 w-1/2 mx-auto" id="Title" v-model="schema[0].children"/>-->
            <draggable :list="elements" class="flex-column" group="elements">
                <button v-for="element in elements" :key="element.id" @click="addField(element.type)"
                        class="w-full hover:bg-gray-200 text-gray-700 text-xl py-4">
                    {{element.type}}
                </button>
            </draggable>
        </div>
        <div class="flex-1 flex overflow-hidden">
            <div @click="selectedElement=''"
                 class="flex flex-1 justify-center bg-white rounded-lg overflow-y-scroll py-10">
                <div v-if="schema.length===0 || show===true" class="flex-column my-auto text-center">
                    <img src="https://cdn.jotfor.ms//myforms3/img/newui/icons/emptyFormList.svg" class="mx-auto mb-4"
                         height="180">
                    <h2 class="text-3xl">You don't have a form yet.</h2>
                    <h3 class="text-2xl mb-10">Your form will appear here.</h3>
                    <button @click="show=false"
                            class="text-xl border-4 border-dashed border-blue-500 rounded-lg px-4 py-2 mb-10 focus:outline-none hover:bg-blue-500 hover:border-transparent hover:text-white">
                        Create a form
                    </button>
                </div>
                <draggable :list="schema" group="elements">
                    <FormulateForm
                            v-if="show===false"
                            class=""
                            v-model="values"
                            :schema="schema"
                    />
                </draggable>
            </div>
        </div>
        <div v-if="selectedElement=''" class="w-1/4 bg-gray-500 rounded-r-lg">
            <div class="text-center text-white text-lg my-4">
                Properties:
            </div>
            <hr>
            <button class="w-full hover:bg-blue-600 text-white text-xl py-4">
                Text
            </button>
        </div>
    </div>
</template>

<script>
    import VueFormulate from '@braid/vue-formulate'
    import draggable from 'vuedraggable'
    import Vue from 'vue'

    Vue.use(VueFormulate)
    export default {
        name: "FormCreator",
        components: {
            draggable
        },
        data() {
            return {
                show: true,
                selectedElement: '',
                elements: [
                    {
                        type: 'Name',
                    },
                    {
                        type: 'Email',
                    },
                    {
                        type: 'Phone',
                    },
                ],
                values: {},
                schema: [
                    {
                        "component": "h3",
                        "children": "Student registration",
                        "class": 'text-2xl mb-10'
                    },
                    {
                        "label": "Your name",
                        "name": "name",
                        "validation": "required"
                    },
                    {
                        "label": "Your email",
                        "name": "email",
                        "help": "Please use your student email address",
                        "validation": "bail|required|email|ends_with:.edu",
                        "validation-messages": {
                            "ends_with": "Please use a .edu email address"
                        }
                    },
                ]
            }
        },
        methods: {
            addField(type) {
                if (type === 'Name') {
                    this.schema.push({
                        "label": "Your name",
                        "name": "name",
                        "validation": "required"
                    })
                } else if (type === 'Email') {
                    this.schema.push({
                        "label": "Your email",
                        "name": "email",
                        "help": "Please use your student email address",
                        "validation": "bail|required|email|ends_with:.edu",
                        "validation-messages": {
                            "ends_with": "Please use a .edu email address"
                        }
                    })
                } else if (type === 'Phone') {
                    this.schema.push({
                        "component": "div",
                        "class": "flex-wrapper flex",
                        "children": [
                            {
                                "type": "select",
                                "name": "country_code",
                                "label": "Code",
                                "outer-class": ["flex-item-small","mr-4"],
                                "value": "1",
                                "options": {
                                    "1": "+1",
                                    "49": "+49",
                                    "55": "+55"
                                }
                            },
                            {
                                "type": "text",
                                "label": "Phone number",
                                "name": "phone",
                                "inputmode": "numeric",
                                "pattern": "[0-9]*",
                                "validation": "matches:/^[0-9-]+$/",
                                "validation-messages": {
                                    "matches": "Phone number should only include numbers and dashes."
                                }
                            }
                        ]
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>
