let table = document.getElementsByTagName("table")[0];
let prices = document.querySelectorAll(".price");
	
const getSumBtn = document.createElement("button");
getSumBtn.style.cursor = "pointer";
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", ()=>{
	const oldRow = document.getElementById("totalRow");
	if(oldRow) {
		oldRow.remove();
	}
	const tableRow = document.createElement("tr");
	tableRow.id = "totalRow"
	const tableDataPrices = document.createElement("td");
	const tableDataPricesSum = document.createElement("td");
	tableDataPrices.textContent = "Total Price";
	tableDataPricesSum.textContent = getSum();
	tableDataPricesSum.innerHTML = `<span id="ans">${getSum()}</span>`;
	tableRow.appendChild(tableDataPrices);
	tableRow.appendChild(tableDataPricesSum);
	table.appendChild(tableRow);
})

function getSum() {
	let sum = 0;
	for(let price of prices) {
		sum += parseInt(price.textContent)
	}
	return sum;
}
