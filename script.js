const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const table = document.querySelector("table");
  const allPrices = document.querySelectorAll(".price");
  const ansDiv = document.createElement("div");
  ansDiv.id = "ans"; // ✅ The element Cypress is looking for

  let sum = 0;
  for (let price of allPrices) {
    sum += parseInt(price.textContent);
  }

  ansDiv.textContent = sum; // ✅ This is what Cypress will check
  document.body.appendChild(ansDiv); // ✅ Add it to the DOM
  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);
