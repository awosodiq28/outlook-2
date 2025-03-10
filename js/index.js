const email = document.getElementById("email")
const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const emailValue = email.value
    location.href = `/password.html?e=${emailValue}`
})