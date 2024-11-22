const socket = io("ws://10.9.73.20:8080")     // le server
const button = document.querySelector("button")

socket.on('message', (message) => {
    console.log(message)                                               // recupere le message
    const li = document.createElement('li')
    li.inneerHTML = message.author + "a ecrit" + message.content

    document.querySelector('ul').appendChild(li)
})

button.addEventListener('click', () => {
    const toSend = document.querySelector("input").value //envoie le message
    socket.emit('message', {
        content : toSend,
    })
})

// permet de faire un salon de chat