const date = document.getElementById("jsdate");
const jsmonth = document.getElementById("jsmonth");

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

const newMonth = (item) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = item;
  jsmonth.appendChild(newDiv);
};

const newDay = (item) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = item;
  date.appendChild(newDiv);
};

const init = () => {
  const dateString = date.innerHTML.split(" ");
  date.innerHTML = "";
  const yearNum = dateString[3];
  const monthNum = month(dateString[1]);
  const day = dateString[2];
  const week = dateString[0];
  console.log(yearNum, monthNum, day, week);
  newMonth(monthNum);
  newDay(yearNum);
  newDay(day);
  newDay(week);
};
init();
