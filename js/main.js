    function copyCode(id) {
      code = document.getElementById(id).innerText.trim()
      navigator.clipboard.writeText(code)
    }
    hljs.highlightAll()

    const startStr = "2025-11-25T20:11:00+01:00"
    const eventStart = new Date(startStr).getTime()

    function updateContent() {
      const now             = Date.now()
      const preEvent        = document.getElementById("pre-event")
      const duringEvent     = document.getElementById("during-event")
      const eventHasStarted = now >= eventStart

      preEvent.style.display     = eventHasStarted ? "none"   : "block"
      duringEvent.style.display  = eventHasStarted ? "block" : "none"
      // console.log(`${now} has event started? ${eventHasStarted}`)
    }

    updateContent()
    setInterval(updateContent, 5000)