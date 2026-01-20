document.getElementById("btn").onclick = async () => {
    const res = await fetch("http://localhost:3000/quote");
    const data = await res.json();
    document.getElementById("output").innerText = JSON.stringify(data, null, 2);
};
