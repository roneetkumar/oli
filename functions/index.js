new Vue({
    el: '#wrapper',
    data: {
        state: "Stopped",
        isPlay: false,
        mic: 0,
        recorder: 0,
        soundfile: 0,
    },
    methods: {
        play: function() {
            this.isPlay = !this.isPlay;
            this.state = "Recording";
        }
    }
})

// navigator.mediaDevices.getUserMedia({
//         audio: true
//     })
//     .then(stream => {
//         handlerFunction(stream)
//     })
//
//
// function handlerFunction(stream) {
//     rec = new MediaRecorder(stream);
//     rec.ondataavailable = e => {
//         audioChunks.push(e.data);
//         if (rec.state == "inactive") {
//             let blob = new Blob(audioChunks, {
//                 type: 'audio/mpeg-3'
//             });
//             recordedAudio.src = URL.createObjectURL(blob);
//             recordedAudio.controls = true;
//             recordedAudio.autoplay = true;
//             sendData(blob)
//         }
//     }
// }
//
// function sendData(data) {}
//
// record.onclick = e => {
//     record.disabled = true;
//     stopRecord.disabled = false;
//     audioChunks = [];
//     rec.start();
// }
// stopRecord.onclick = e => {
//     record.disabled = false;
//     stop.disabled = true;
//     rec.stop();
//     document.querySelector(".content h2.state").textContent = "Stopped"
// }