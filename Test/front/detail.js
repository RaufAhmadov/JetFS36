const urlParams = new URLSearchParams(window.location.search);
const flowerID = urlParams.get('flower');
const endpoint = "http://localhost:3000/";

axios.get(endpoint + 'flowers/' + flowerID).then((res) =>{
    console.log(res)
    if (res.status === 200) {
        document.body.innerHTML = `
        
        <p>Ad: ${res.data.ad}</p>
        <p>Kateqoriya: ${res.data.kateqoriya}</p>
        <p>Qiymet: ${res.data.qiymet}</p>
        <p>Reng: ${res.data.reng}</p>

        `
    }
})
