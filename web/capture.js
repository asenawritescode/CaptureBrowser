document.onmousemove = function (e) {
    // parse to json 
    let data = {
        "x": e.pageX,
        "y": e.pageY
    };

    // send data to an api 
    // fetch('http://localhost:3000/data',{
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'            
    //     },
    //     body: JSON.stringify(data),
    // },{mode: 'no-cors'});

    // send data to an api using xhr
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/data", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    console.log(data);
    xhr.send(data);
    
};