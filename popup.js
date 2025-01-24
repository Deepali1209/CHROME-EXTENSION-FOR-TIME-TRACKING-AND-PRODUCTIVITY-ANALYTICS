document.addEventListener("DOMContentLoaded", async () => {
  const tableBody = document.getElementById("time-data");
  const { timeSpent } = await chrome.storage.local.get("timeSpent") || {};
  
  if (timeSpent) {
    Object.keys(timeSpent).forEach((website) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${website}</td>
        <td>${timeSpent[website]}</td>
      `;
      tableBody.appendChild(row);
    });
  }
});
