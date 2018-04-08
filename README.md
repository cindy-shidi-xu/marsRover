Mars Rovers
---

This application allows you to load a file through command line to control the rover movements. 
The file content is read to an array and processed line by line. The rover movement rules are setup in the movements.js, which controls the direction and coordinates' increment. An rover object is created to store the cooridinates, the facing direction and the max coordinates of the grid. 
During processing each line, the object is updated accordingly and the result is printed out when the movements are finished for a rover.

# Test Files

Test files should sit with their source and be in teh format `*Spec.js`.
  npm test

# Environment Setup

Install modules: npm install

Build ES6: npm build 

Link command line: npm link

Run application: npm load -f=<filename>


