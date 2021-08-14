const game = document.getElementById("game");
let array = Array(9).fill(0);
const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let end = false;
const findWinner = () => {
  winningPositions.forEach((index) => {
    [a, b, c] = index;
    if (array[a] && array[a] === array[b] && array[b] === array[c]) {
      document.getElementById("result").innerText = `${
        array[a] === 1 ? "X" : "O"
      } Qalibdir...`;
      end = true;
      return;
    }
  });
  let t = array.filter((a) => a === 0);
  if (t.length === 0 && !end) {
    document.getElementById("result").innerText = "Berabere";
    return;
  }
  let time = Math.floor(Math.random() * (1200 - 250 + 1) + 250);
  setTimeout(randomMove, time);
};
for (let i = 0; i < 9; i++) {
  game.innerHTML += `
  <div onclick="play(event,${i})" class="box"></div>`;
}
// let sira = "X";
const play = (e, coordinate) => {
  if (e.target.innerText === "" && !end) {
    e.target.innerText = "X";
    array[coordinate] = 1;
    findWinner();
    // setTimeout(randomMove, 150);
    // if (sira === "X") {
    //   e.target.innerText = "X";
    //   sira = "O";
    //   array[coordinate] = 1;
    // } else {
    //   e.target.innerText = "O";
    //   sira = "X";
    //   array[coordinate] = 2;
    // }
  }
};
const randomMove = () => {
  if (!end) {
    let empty = [];
    array.forEach((item, index) => {
      if (item === 0) {
        empty.push(index);
      }
    });
    let randomNumber = Math.floor(Math.random() * empty.length);
    array[empty[randomNumber]] = 2;
    document.querySelectorAll(".box")[empty[randomNumber]].innerText = "O";
  }
};
document.getElementById("reset").addEventListener("click", () => {
  array = Array(9).fill(0);
  document.querySelectorAll(".box").forEach((a) => (a.innerHTML = ""));
  document.getElementById("result").innerHTML = "";
  end = false;
});
