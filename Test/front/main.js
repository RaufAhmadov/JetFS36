const endpoint = "http://localhost:3000/";
const flowersContainer = document.querySelector("#guller")
const container = document.querySelector("#container")
const form = document.querySelector("#form")
const adInp = document.querySelector("#adInp")
const qiymetInp = document.querySelector("#qiymetInp")
const rengInp = document.querySelector("#rengInp")
const catSelect = document.querySelector("#catSelect")


// GET QUESRIES START
const getFlowers = () => {
    axios.get(endpoint + 'flowers').then((response) => {
        if (response.status === 200 && response.statusText === "OK") {
            showFlowers(response.data);
        }
    })
}
getFlowers();


axios.get(endpoint + 'categories').then(res => {
    if (res.status === 200 && res.statusText === "OK") {
        showCategories(res.data);
        res.data.slice(1).forEach((cat) => catSelect.innerHTML +=`<option>${cat}</option>`)
    }
})

// GET QUESRIES END




// FUNCTIONS START

const showFlowers = (arr) =>{
    flowersContainer.innerHTML = ""
    if(arr.length > 0){
        arr.forEach(({id,ad,qiymet}) => {
            flowersContainer.innerHTML +=`
            <div class="gul">
                <a href="./detail.html?flower=${id}"><h2>Ad : ${ad} </h2></a>
                <p>Qiymet : ${qiymet} AZN</p>
                <button class="remove_btn" onclick="deleteFlower('${id}')">Remove</button>
                <button class="edit_btn" onclick="editFlower('${id}')">Edit</button>
            </div>
            `    
        });
    }
    else{flowersContainer.innerHTML = ` <p>Hecbir melumat tapilmadi !</p>`};

};


const showCategories = (arr) => {
    container.innerHTML = "";
    arr.forEach(c => {container.innerHTML += `<button>${c}</button>`});
};


const deleteFlower = (id) => {
    const isAgree = confirm("Eminsiniz ?");
    if(isAgree){
        axios.delete(endpoint + 'flowers/' + id).then((res) => {
            if (res.status === 200 && res.statusText === "OK") {
                getFlowers();
            }
        });
    }
};

const editFlower = (id) => {
    axios.get(endpoint + 'flowers/' + id).then((res) => {
        if (res.status === 200) {
            const newAd = prompt("Yeni ad : ", res.data.ad);
            const newQiymet = +prompt("Yeni qiymet : ", res.data.qiymet);
            const newReng = prompt("Yeni reng : ", res.data.reng); 
            
            const obj ={ad: newAd , qiymet: newQiymet , reng: newReng }
            axios.patch(endpoint + 'flowers/' + id , obj).then((res) => {
                getFlowers();
            });
        }
    });
};


// FUNCTIONS END


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const object = {
        ad: adInp.value,
        qiymet: qiymetInp.value,
        reng: rengInp.value,
        kateqoriya: catSelect.value
    };
    axios.post(endpoint + 'flowers', object).then((res) => {
        if (res.status === 201) {
            getFlowers();
        }
    })
});