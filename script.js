let stage = 0;

function handleYes() {
  document.getElementById("response").textContent = "";
  if (stage === 0) {
    updateStage("Do you love me?", "I am all yours by the way 😚", "https://media.tenor.com/RBa37_6ApVcAAAAj/cute-adorable.gif", true);
    stage = 1;
  } else if (stage >= 1 && stage <= 3) {
    updateStage("I knew it! You love me a lot 💘", "", "https://media1.tenor.com/m/QLxVnVaLiYUAAAAd/bear-kiss-bear-kisses.gif", false);
  } else if (stage === 4) {
    updateStage("I knew it! You love me a lot 💘", "", "https://media1.tenor.com/m/QLxVnVaLiYUAAAAd/bear-kiss-bear-kisses.gif", false);
  }
}

function handleNo() {
  if (stage === 1) {
    updateStage("Please think again 💭", "Itni jldi naa mt bolo 🙃", "https://media.tenor.com/XxrIqAfQDNIAAAAj/embarrassed.gif", true);
    stage = 2;
  } else if (stage === 2) {
    updateStage("Ek bar aur sochlo 😿", "Sorry baby aaj ke liye, really really sorry🥺", "https://media.tenor.com/tzvzrz4famQAAAAj/couple-forgive-me.gif", true);
    stage = 3;
  } else if (stage === 3) {
    updateStage("Baby maan jao na kitna bhav khaogi 😭", "Sorry na, ab please maaf krdo last time aage se ni hoga😔😔😔", "https://media.tenor.com/6Eu2kP-iK0YAAAAj/peach-goma-peach-and-goma.gif", true, true);
    stage = 4;
  }
}

function updateStage(title, subtitle, gifSrc, showYesNo, teleportNo = false) {
  document.getElementById("main-heading").textContent = title;
  document.getElementById("sub-heading").textContent = subtitle;
  document.getElementById("gifDisplay").src = gifSrc;

  const buttonsDiv = document.getElementById("buttons");
  if (showYesNo) {
    buttonsDiv.innerHTML = `
      <button onclick="handleYes()">Yes</button>
      <button id="teleportNo" onclick="handleNo()" onmouseover="teleportButton()">No</button>
    `;
    if (!teleportNo) {
      document.getElementById("teleportNo").onmouseover = null;
    }
  } else {
    buttonsDiv.innerHTML = `
      <button onclick="handleYes()">Yes</button>
    `;
  }
}

function teleportButton() {
  const button = document.getElementById("teleportNo");
  const container = document.querySelector(".buttons");
  const maxX = container.offsetWidth - button.offsetWidth;
  const maxY = container.offsetHeight - button.offsetHeight;
  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);
  button.style.left = `${randX}px`;
  button.style.top = `${randY}px`;
}