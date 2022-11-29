const s = (p)=>{
    let demo8Shader, img, fft, d_map, audio, toggleBtn;
    p.preload = ()=>{
        audio = p.loadSound("audio/demo9.mp3?a=1");
    };
    p.setup = ()=>{
        playBtn = document.querySelector("#play-btn");
        playBtn.addEventListener("click", ()=>{
            document.body.classList.add("start-anim");
            audio.loop();
            setTimeout(window.loadAllMan, 20200); // window.loadAllMan();
        });
        p.pixelDensity(1);
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        toggleBtn = document.querySelector("#toggle-btn");
        toggleBtn.addEventListener("click", ()=>{
            toggleBtn.classList.toggle("toggle--on");
            this.toggleAudio();
        });
    };
    toggleAudio = ()=>{
        if (audio.isPlaying()) audio.pause();
        else audio.loop();
    };
};
new p5(s);

//# sourceMappingURL=index8.b49fbe1e.js.map
