
function sendValues(values) {
    var xhttp = new XMLHttpRequest();
    var url = "http://localhost/Capitetris/Projeto/php/receiveValuesRanking.php";
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            var jsonData = JSON.parse(xhttp.response);
            console.log("response data: " ,jsonData);
        }
    }
    xhttp.send(JSON.stringify(values));
}

function factoryValues(){
    return {
        name: "vitor",
        age: 20
    }
}

sendValues(factoryValues())