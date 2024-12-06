

const events = ["agriculture", "politics", "military", "media", "technology"];


function randomEvent(){
    return Math.floor(Math.random() * 5);
}




document.getElementById("generate").addEventListener('click',function(){

    for (let div of document.getElementById('lstEvent').children) {
        div.setAttribute('class', 'event');
    }
    document.getElementById(events[randomEvent()]).setAttribute('class','eventSelect');

});

