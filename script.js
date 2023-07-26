//your JS code here. If required.
function getRandomTime() {
  return Math.floor(Math.random() * 3000) + 1000; // Random time between 1 and 3 seconds
}

function createPromiseWithRandomTime(name) {
  return new Promise((resolve) => {
    const time = getRandomTime();
    setTimeout(() => {
      console.log(`${name} resolved after ${time / 1000} seconds`);
      resolve({ name, time });
    }, time);
  });
}

async function populateTable() {
  const promises = [
    createPromiseWithRandomTime("Promise 1"),
    createPromiseWithRandomTime("Promise 2"),
    createPromiseWithRandomTime("Promise 3"),
  ];

  const results = await Promise.all(promises);

  const outputTable = document.getElementById("output");
  outputTable.innerHTML = "";

  for (const result of results) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const timeCell = document.createElement("td");

    nameCell.textContent = result.name;
    timeCell.textContent = (result.time / 1000).toFixed(3);

    row.appendChild(nameCell);
    row.appendChild(timeCell);

    outputTable.appendChild(row);
  }

  // Calculate the total time
  const totalTime = results.reduce((total, result) => total + result.time, 0);
  const totalRow = document.createElement("tr");
  const totalNameCell = document.createElement("td");
  const totalTimeCell = document.createElement("td");

  totalNameCell.textContent = "Total";
  totalTimeCell.textContent = (totalTime / 1000).toFixed(3);

  totalRow.appendChild(totalNameCell);
  totalRow.appendChild(totalTimeCell);

  outputTable.appendChild(totalRow);
}

populateTable();
