const PAYLOADS = [
    createSlowHref,
    indexDivs
]

for (const payload of PAYLOADS) {
    setInterval(payload, 1);
}