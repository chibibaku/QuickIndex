document.getElementById("create").onclick = () => {
    let index = document.getElementById("index");
    window.open("../index/index.html?index="+index.value)
};