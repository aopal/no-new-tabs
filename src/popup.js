// document.body.innerHTML = "<h1>Today's date is</h1>"

console.log("script loaded")

state = localStorage.getItem("noNewTabs.enabled")
toggle = document.getElementById("toggleBox")
toggle.onclick = () => { toggleTabCreation(toggle) }

if(state == "true") {
  toggle.checked = true
} else {
  toggle.checked = false
}

updateText(state)


function toggleTabCreation(cb) {
  state = `${cb.checked}`
  localStorage.setItem("noNewTabs.enabled", state)

  updateText(state)
}

function updateText(state) {
  let statusText
  if (state == "true") {
    statusText = "cannot"
  } else {
    statusText = "can"
  }

  document.getElementById("statusText").innerHTML = `New tabs <b>${statusText}</b> be created`
}
