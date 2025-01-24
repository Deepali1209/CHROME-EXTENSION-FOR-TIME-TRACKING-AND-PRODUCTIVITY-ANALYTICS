document.getElementById("view-dashboard").addEventListener("click", () => {
    chrome.tabs.create({ url: "http://localhost:3000/data" });
  });
  
  fetch("http://localhost:3000/data")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("data");
      container.innerHTML = JSON.stringify(data, null, 2);
    });
  