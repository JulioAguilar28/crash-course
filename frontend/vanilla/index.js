const fetchName = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fiatz");
    }, 5000);
  });
};

const getNameThen = () => {
  fetchName()
    .then((nombre) => {
      console.log(`Hola ${nombre}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getNameAsync = async () => {
  const name = await fetchName();
  return name;
};

const createNameParagraph = (name) => {
  const p = document.createElement("p");
  p.innerHTML = `Hola <strong>${name}</strong>`;

  return p;
};

const createNoNameParagraph = () => {
  const p = document.createElement("p");
  p.innerText = "No name";

  return p;
};

const displayParagraph = async (app) => {
  let name;
  const p = createNoNameParagraph();

  const intervalId = setInterval(() => {
    if (name === undefined) {
      if (app.childNodes.length >= 1) app.append(p);
    } else {
      const pWithName = createNameParagraph(name);
      app.replaceChild(pWithName, p);
      clearInterval(intervalId);
    }
  }, 1000);

  name = await getNameAsync();
};

const main = async () => {
  const app = document.getElementById("app");

  const button = document.createElement("button");
  button.innerText = "Fetch to get name";
  app.append(button);

  button.addEventListener("click", async () => {
    displayParagraph(app);
  });
};

main();
