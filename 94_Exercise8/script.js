function play() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
}



setInterval(()=>{
    let d = new Date()
    document.write(d.getDate())
})


setTimeout(() => {
    play()
}, 1200)