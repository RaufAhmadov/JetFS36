const params = new URLSearchParams(window.location.search);
const userId = params.get("user");
const connect = "http://localhost:3000/";

const getDetailPage = document.querySelector("#detail_page");


axios.get(connect + "usersList/" + userId).then((e) => {
    if (e.status === 200) {
        getDetailPage.innerHTML = `
            <div class="userDetails">
                <p>${e.data.name}</p>
                <p>${e.data.surname}</p>
                <p>${e.data.email}</p>
                <p>${e.data.country}</p>
                <p>${e.data.address}</p>
                <p>${e.data.contact}</p>
                <p>${e.data.website}</p>
            </div>
        `;
    }
});