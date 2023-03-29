export async function main(){
    const permission = document.getElementById('push-permission')


    if (!permission ||
        !('Notification' in window) ||
        !('serviceWorker' in navigator)
        // || Notification.permission !== "default"
    ){
        return;
    }

    const button = document.createElement('button')
    button.innerText = 'Recevoir les notifications'
    permission.appendChild(button)
    button.addEventListener('click', askPermission)

}

async function askPermission (){
    const permission = await Notification.requestPermission()
    alert(permission)
    if (permission === "granted"){
        registerServiceWorker()
    }
}

async function registerServiceWorker(){
    const registration = await navigator.serviceWorker.register('/sw.js')
    let subscription = await registration.pushManager.getSubscription();
    if (!subscription){
        subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: await getPublicKey(),
        })
    }

    console.log(subscription)

    await saveSubscription(subscription)

}

async function getPublicKey(){
    const {key} = await fetch('/push/key', {
        headers: {
            Accept: 'application/json'
        }
    }).then(r => r.json())
    return key
}

/**
 *
 * @param {PushSubscription}subscription
 * @returns {Promise<void>}
 */
async function saveSubscription(subscription){
    await fetch('/push/subscribe', {
        method: 'post',
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(subscription)
    })
}

// main()
