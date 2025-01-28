const params = new URLSearchParams(window.location.search);
const userId = params.get("id");


console.log("User ID:", userId);