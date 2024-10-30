let data;
let url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQADMbvtgD_CBG5kIv64DtRNuqYIooQd5F0QiJWi46L2A96U_xoHd-oe-bxMO6rqCMcMsAKKA9H2PF5/pub?gid=0&single=true&output=csv";

function preload() {
  data = loadTable(url, "csv", "header");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  if (data) {
    let numCols = data.getColumnCount(); //step 1
    let names = data.getColumn("Food"); //step 5

    // step 2
    let maruchan = data.findRow(
      "Maruchan Instant Lunch: Chicken Flavor",
      "Food"
    );

    //step 3
    let maraRowValues = [];
    for (let i = 0; i < numCols; i++) {
      let columnName = data.columns[i];
      maraRowValues.push(Number(maruchan.get(columnName)));
    }

    //step 4
    //Draw bars and values
    for (let i = 1; i < maraRowValues.length; i++) {
      let x = 50;
      let y = 50 + i * 50;
      let w = maraRowValues[i];
      let h = 10;

      text(data.columns[i], 50, y - 5);

      //Draw the bar
      rect(x, y, w, h);

      //Draw the value next to the bar
      textAlign(LEFT);
      fill(255);
      textSize(14);
      text(maraRowValues[i], x + w + 5, y + 10);

      textAlign(CENTER);
      text(names[0], width / 2, 50);
    }
  }
}
