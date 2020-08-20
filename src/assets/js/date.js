const dateContainer = document.querySelectorAll("#jsmemberDate");
console.log(dateContainer);
const month = (m) => {
  if (m === "Jan") {
    return 1;
  } else if (m === "Feb") {
    return 2;
  } else if (m === "Mar") {
    return 3;
  } else if (m === "Apr") {
    return 4;
  } else if (m === "May") {
    return 5;
  } else if (m === "Jun") {
    return 6;
  } else if (m === "Jul") {
    return 7;
  } else if (m === "Aug") {
    return 8;
  } else if (m === "Sep") {
    return 9;
  } else if (m === "Oct") {
    return 10;
  } else if (m === "Nov") {
    return 11;
  } else {
    return 12;
  }
};

const newDay = (item, date) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = item;
  date.appendChild(newDiv);
};

const newEtc = (item, date) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = item;
  date.appendChild(newDiv);
};

const divWrapper = (Wrap, date, date2) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `${date}.${date2}`;
  Wrap.appendChild(newDiv);
};

const init = () => {
  for (const date of dateContainer) {
    const date2 = date.querySelector("#jsDate");
    const jsEtc = date.querySelector("#jsDateEtc");
    const dateString = jsEtc.innerHTML.split(" ");
    jsEtc.innerHTML = " ";
    const yearNum = dateString[3];
    const monthNum = month(dateString[1]);
    const day = dateString[2];
    const week = dateString[0];
    newDay(day, date2);
    divWrapper(jsEtc, yearNum, monthNum);
    newEtc(week, jsEtc);
  }
};
init();
