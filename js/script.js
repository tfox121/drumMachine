const drumNames ={
    "bass-drum": "Bass Drum",
    "crash": "Crash",
    "hh-close": "HH Close",
    "hh-open": "HH Open",
    "snare": "Snare",
    "tamb": "Tamb.",
    "tom-1": "Tom 1",
    "tom-2": "Tom 2",
    "conga": "Conga",
}

function instrumentActive(buttonId) {
    let instrument = document.getElementById(buttonId).children[0]
    instrument.play()
    let display = document.querySelector("#display")
    display.innerHTML = drumNames[buttonId]
}

function reply_click(clicked_id) {
    let buttonId = clicked_id
    instrumentActive(buttonId)
    $('#' + buttonId).css("background-color","orange")
        setTimeout(() => {
            $('#' + buttonId).removeAttr('style')
        }, 100);
}

function reply_key(event) {
    let code = event.charCode || event.keyCode;
    let key = String.fromCharCode(code).toUpperCase();
    if (document.getElementById(key)) {
        let buttonId = document.getElementById(key).parentElement.id
        instrumentActive(buttonId)
        $('#' + buttonId).css("background-color","orange")
        setTimeout(() => {
            $('#' + buttonId).removeAttr('style')
        }, 100);
        
    } else {
        return null
    }
}