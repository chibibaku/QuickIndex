window.onload = () => {
    let indexText = document.getElementById("index");
    
    var urlParams = new URLSearchParams(location.search);
    var index = urlParams.get('index');

    indexText.textContent = index;
};

document.getElementById("close").onclick = () =>{
    window.close();
}