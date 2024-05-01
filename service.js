const button = document.querySelector(".btn")

const replaceImg = () => {
    const img = document.querySelectorAll("img")
    img.forEach((image) => {
        image.src = ""
    })
}

button.addEventListener("click", async () => {

    const [tab] = await chrome.tabs.query({active: true, currentWindow: true})

    chrome.scripting.executeScript({
        target: { tabId: tab.id},
        function: replaceImg,
    })
})