function getVideo(subScriptionStatus) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

        })
    })
}

async function main() {
    const status = await getSubScriptionStatus();
    statusRef.innerHTML = status;
}

main();