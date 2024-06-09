const statusRef = document.querySelector('.status');
// Corrected the selector here, removed the '#' prefix
const videoRef = document.getElementById('video');

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('VIP');
        }, 2000);
    });
}

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === 'VIP')
            resolve('show video')
        else if (subscriptionStatus === 'FREE')
            resolve('show trailer')
        else {
            reject('no video')
        }
    });
}

async function main() {
    const status = await getSubscriptionStatus();
    statusRef.innerHTML = status;
    try {
        const videoMessage = await getVideo(status);
        console.log(videoMessage);
        videoRef.innerHTML = videoMessage;
    }
    catch (e) {
        console.log(e);
        videoRef.innerHTML = e;
    }
}

main();
