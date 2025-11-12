const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const table = document.querySelector("table");
	const tableRow = document.createElement("tr");
	const tableData = document.createElement("td");
	const tableData2 = document.createElement("td");
	const allPrices = document.querySelectorAll(".price");
	
	let sum = 0;
	for(let price of allPrices){
		sum += parseInt(price.textContent)
	}
	
	tableData.textContent = "Total Price"
	tableData2.textContent = sum;

	
	table.appendChild(tableRow);
	tableRow.classList.add("total-row");
	tableRow.appendChild(tableData);
	tableRow.appendChild(tableData2);
	getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);