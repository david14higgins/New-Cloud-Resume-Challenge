//Update Page Views Counter 
const counter = document.getElementById("views-counter");
async function updateViewsCounter() {
    let response = await fetch("https://4ai5fawiieuxc2qqddm3d4o6kq0xnkfr.lambda-url.us-east-1.on.aws/")
    let data = await response.json()
    counter.innerHTML = `Page Views: ${data}`;
}

updateViewsCounter();