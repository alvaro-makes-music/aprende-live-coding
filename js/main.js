const showCodeRegardless = false
// const startStr = "2025-11-27T15:30:00+01:00"
const startStr = "2025-11-27T15:30:00+01:00"

function copyCode(id) {
  code = document.getElementById(id).innerText.trim()
  navigator.clipboard.writeText(code)
}
hljs.highlightAll()


function updateContent() {
  const eventStart = new Date(startStr).getTime()
  const now = Date.now()
  const preEvent = document.getElementById("pre-event")
  const duringEvent = document.getElementById("during-event")
  const eventHasStarted = now >= eventStart

  preEvent.style.display = showCodeRegardless ? "none" : (eventHasStarted ? "none" : "block")
  duringEvent.style.display = showCodeRegardless ? "block" : (eventHasStarted ? "block" : "none")
  // console.log(`${now} has event started? ${eventHasStarted}`)
}

updateContent()
setInterval(updateContent, 5000)