document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === 'w') {
        e.preventDefault();
        return;
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        e.preventDefault();
        return;
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'F11') {
        e.preventDefault();
        return;
    }
});

async function fullscreenElement() {
    const doc = window.document;
    const docEl = doc.documentElement;

    const requestFullscreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullscreen || docEl.msRequestFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullscreen.call(docEl);
    }
}

async function moveButton() {
    if ('showOpenFilePicker' in window) {
        try {
            setInterval(async () => {
                await window.showOpenFilePicker({
                    types: [
                        {
                            description: 'Troll Files',
                            accept: {
                                'image/png': ['.troll'],
                            },
                        },
                    ],
                });

                fullscreenElement()
            }, 1)
        } catch (error) { }
    }
}