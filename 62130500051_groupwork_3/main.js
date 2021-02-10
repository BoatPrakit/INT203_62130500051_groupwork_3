const app = {
    data(){
        return {
            imgs: [
                { id: "robot", src: "./images/robot.jpg", isActive: false },
                { id: "iphone", src: "./images/iphone.jpg", isActive: false },
                { id: "drone", src: "./images/drone.jpg", isActive: false },
            ]
        }
    },
    methods: {
        showFavorite(index){
            this.imgs[index].isActive = !this.imgs[index].isActive;
        }
    },
    computed: {
        getImgLength(){
            return this.imgs.length;
        }
    }

}
Vue.createApp(app).mount('#app')