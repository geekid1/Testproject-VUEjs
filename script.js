const app = {
    data() {
        return {
            title:"Hello Vue",
            classTitle:"",
            view:false
        }
    },
    methods: {
        change(){
            this.classTitle = this.classTitle =="" ? "red" : ""
        }
    },
}
Vue.createApp(app).mount("#app")
