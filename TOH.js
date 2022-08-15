/*################## TOWER OF HANOI ##########################
https://www.simplilearn.com/tutorials/data-structure-tutorial/tower-of-hanoi
The Tower of Hanoi is a mathematical problem composed of three 
towers and numerous rings arranged in increasing order of their 
diameters. The number of towers is constant for this problem, 
whereas the player can vary the number of rings he wants to use

Rules of Tower of Hanoi Puzzle
The Tower of Hanoi problem is solved using the set of rules given below:

1) Only one disc can be moved at a time.
2) Only the top disc of one stack can be transferred to the top of another stack or an empty rod.
3) Larger discs cannot be stacked over smaller ones.
The complexity of this problem can be mapped by evaluating the 
   number of possible moves. The least movements needed to solve the 
   Tower of Hanoi problem with n discs are 2n-1.

In this problem, you will implement a logical solution to the four-ring TOH problem.*/
function TOH(n, sourceTower, destinationTower, helperTower) {
  if (n == 0) {
    return 0;
  }
  TOH(n - 1, sourceTower, helperTower, destinationTower);
  console.log(
    `move disc ${n} from tower ${sourceTower} to tower ${destinationTower}`
  );
  TOH(n - 1, helperTower, destinationTower, sourceTower);
}
TOH(3, "A", "B", "C"); // A,B,C are the names of the tower/rodes
// time complexity O(2^n)
// space complexity O(n) // auxiliary/helper
