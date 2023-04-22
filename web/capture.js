

const capture_mouse = (() => {

/*
- This fuction is used to capture mouse clicks and send them to an api
- This function is called in the index.html file
*/

document.onmousemove = function (e) {
    // parse to json 
    let data1 = {
        "x": e.pageX,
        "y": e.pageY
    };
    // send data to an api using xhr
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/data", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    console.log(data1);
    xhr.send(JSON.stringify(data1));
};

})();