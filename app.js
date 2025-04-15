const tg = window.Telegram.WebApp
const user = tg.initDataUnsafe?.user

document.getElementById('first_name').innerText = user?.first_name || "First Name"
document.getElementById('username').innerText = user?.username ? `@${user.username}` : "@username"