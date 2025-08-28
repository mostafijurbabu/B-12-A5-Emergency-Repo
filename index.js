let coins = 100;
let favCount = 0;

// Call button logic
document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    let card = btn.closest(".helpline-card");
    let serviceName = card.querySelector(".card-title").innerText;
    let serviceNumber = card.querySelector(".phone-number").innerText;

    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    coins -= 20;
    document.getElementById("coin-balance").innerText = coins;

    let now = new Date();
    let timeString = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    let historyContainer = document.getElementById("history-container");
    let entry = document.createElement("div");
    entry.className =
      "p-2 border rounded-md shadow-sm text-xs mt-3 border-none font-semibold";
    entry.innerHTML = `
        <strong>${serviceName}</strong> - ${serviceNumber}
        <div class="text-sm text-gray-500">${timeString}</div>
      `;
    historyContainer.appendChild(entry);
  });
});

// Heart icon logic
document.querySelectorAll(".fa-heart").forEach((heart) => {
  heart.addEventListener("click", function () {
    if (heart.classList.contains("fa-regular")) {
      // Mark as favorite
      favCount++;
      heart.classList.remove("fa-regular");
      heart.classList.add("fa-solid", "text-red-500");
    } else {
      // Unmark as favorite
      favCount--;
      heart.classList.remove("fa-solid", "text-red-500");
      heart.classList.add("fa-regular");
    }

    // Update navbar counter
    document.getElementById("heart-counter").innerText = favCount;
  });
});

// Clear Call History
document.getElementById("clear-history").addEventListener("click", () => {
  document.getElementById("history-container").innerHTML = "";
});

// copy button area

const navbarCopyBtn = document.querySelector(".btn-copy");
const navbarCopyCounter = navbarCopyBtn.querySelector("span");
let totalCopies = 0;

function handleCopy(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      totalCopies++;
      navbarCopyCounter.textContent = totalCopies;
      alert(`Copied: ${text}\nTotal copies: ${totalCopies}`);
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
}

navbarCopyBtn.addEventListener("click", () => {
  handleCopy("Some text from navbar!");
});

const cardCopyButtons = document.querySelectorAll(".helpline-card .fa-copy");

cardCopyButtons.forEach((icon) => {
  const card = icon.closest(".helpline-card");
  const button = icon.parentElement;

  button.addEventListener("click", () => {
    const phoneNumber = card.querySelector(".phone-number").textContent;
    handleCopy(phoneNumber);
  });
});
