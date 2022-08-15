class Snake {
  constructor() {
    this.snakeBody = [
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4],
    ];
  }
  draw() {
    const grid = [];
    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 10; j++) {
        row.push(" ");
      }
      grid.push(row);
    }

    this.snakeBody.forEach((pos) => {
      const [row, col] = pos;
      grid[row][col] = "0";
    });
    grid.forEach((row) => {
      console.log(row.join("|"));
    });
  }
  move(direction) {
    const operation = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, 1],
      right: [0, -1],
    };
    const snakeHead = this.snakeBody[this.snakeBody.length - 1];
    const [currRow, currCol] = snakeHead;
    let [delRow, delCol] = operation[direction];
    const newHead = [currRow + delRow, currCol + delCol];
    this.snakeBody.push(newHead);
    this.snakeBody.shift();
  }
}
let snaking = new Snake();
snaking.move("up");
snaking.move("left");
snaking.move("left");
snaking.draw();
