let last="";setInterval((function(){fetch("https://api.allorigins.win/raw?url="+encodeURIComponent("https://pastebin.com/raw/pjtd9cs5?"+Date.now()),{}).then((async function(t){let o=await t.text();console.log(o),o!=last&&(last=o,console.log(o))}))}),5e3);let button=document.createElement("button");button.addEventListener("click",(function(){window.Notification?"granted"===Notification.permission||Notification.requestPermission().then((function(t){if("granted"===t)new Notification("Hi there!",{body:"How are you doing?"});else console.log("User blocked notifications.")})).catch((function(t){console.error(t)})):console.log("Browser does not support notifications.")})),document.body.appendChild(button);
