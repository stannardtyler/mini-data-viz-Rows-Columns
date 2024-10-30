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
    let numCols = data.getColumnCount();

    let sunchips = data.findRow("Sun Chips", "Food");

    let sunchipsRowValues = [];
    for (let i = 1; i < numCols; i++) {
      let columnName = data.columns[i];
      sunchipsRowValues.push(Number(sunchips.get(columnName)));
    }

    //console.log(sunchipsRowValues);

    for (let i = 0; i < sunchipsRowValues.length; i++) {
      let x = 50;
      let y = 100 + i * 50;
      let w = sunchipsRowValues[i];
      let h = 10;

      text(data.columns[i + 1], x, y - 5);

      rect(x, y, w, h);

      textAlign(LEFT);
      fill(255);
      textSize(14);
      text(sunchipsRowValues[i], x + w + 5, y + 10);

      textAlign(CENTER);
      text("Sunchips", width / 2, 50);
    }
  }
}
