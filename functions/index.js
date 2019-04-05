new Vue({
    el: '#wrapper',
    data: {
        state: "Pause",
        isPlay: false,

    },
    methods: {
        play: function() {
            this.isPlay = !this.isPlay;
            this.state = "Pause";
        },
    }
})