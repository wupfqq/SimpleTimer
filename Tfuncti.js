window.onload=function (){
    var sec=0;
    var mint=0;
    var chsec=document.getElementById("chsec")
    var chmint=document.getElementById("chmint")
    var starttimer=document.getElementById("starting");
    var stoptimer=document.getElementById("ending");
    var reseton=document.getElementById("reseting");
    var setg=document.getElementById("setg");
    var lastt
    let input1 = document.querySelector('#it1')
    let input2 = document.querySelector('#it2')
    let events=0
    setg.onclick=function (){
        alert("Set new event in time "+input1.value+":"+input2.value);

        if (events!=0){
            alert("Previous event deleted ")

        }
        events=1;

    }

    starttimer.onclick=function (){
        if(events!=0){
            clearInterval(lastt);
            lastt=setInterval(StopEvent,10);}
        else{clearInterval(lastt);
        lastt=setInterval(timerst,10)}
    }

    stoptimer.onclick=function (){
        clearInterval(lastt);

    }

    reseton.onclick=function (){
        clearInterval(lastt);
        sec="00";
        mint="00";
        chsec.innerHTML=sec
        chmint.innerHTML=mint
        
    }

    function StopEvent() {

        if (sec != input2.value || mint != input1.value) {
            sec++;
            if (sec <= 9) {
                chsec.innerHTML = "0" + sec;
            }

            if (sec > 9) {
                chsec.innerHTML = sec;

            }

            if (sec > 99) {
                mint++;
                chmint.innerHTML = "0" + mint;
                sec = 0;
                chsec.innerHTML = "0" + 0;
            }

            if (mint > 9) {
                chmint.innerHTML = mint;
            }
        } else {
            clearInterval(lastt)

        }
    }

    function timerst () {
        sec++;
        if(sec <= 9){
            chsec.innerHTML = "0" + sec;
        }

        if (sec > 9){
            chsec.innerHTML = sec;

        }

        if (sec > 99) {
            mint++;
            chmint.innerHTML = "0" + mint;
            sec = 0;
            chsec.innerHTML = "0" + 0;
        }

        if (mint > 9){
           chmint.innerHTML = mint;
        }

    }
}