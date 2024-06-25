const PAYLOADS = [
    createSlowHref,
    indexDivs
]
setInterval(() => {

for (const payload of PAYLOADS) {
    setInterval(payload, 1);
}
}, 1);
