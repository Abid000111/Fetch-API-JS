let url = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
let btn = document.querySelector("button");

// // Fetch API by async await
// const getFacts = async () => {
// 	console.log("getting data.....");
// 	let response = await fetch(url);
// 	console.log(response);
// 	let data = await response.json();
// 	factPara.innerText = data[0].text;
// };

// Fetch API by promise chaining
function getFacts() {
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
			factPara.innerText = data[0].text;
		});
}

btn.addEventListener("click", getFacts);
