import {expect} from 'chai';
import sinon from 'sinon';
import {moveRover, process} from './rover';

describe('rover', () => {

  context('moveRover', () => {
    it('should move rover to the correct position',  () => {
      const roverObj = moveRover(`${__dirname}/resources/testfile`);
  
      expect(roverObj).to.deep.equal({
        x: 1,
        y: 3,
        direction: 'N',
        max_x: 5,
        max_y: 5
      })
    })
  })
  
  context('process', () => {
    let roverObj;
    beforeEach(() => {
     roverObj = {
        x: 0,
        y: 0,
        direction: 'N',
        max_x: 0,
        max_y: 0
      }
    });
    
    it('should setup the max grid position', () => {
      const line = '6 6';
      process(line, roverObj);
      expect(roverObj.max_x).to.equal(6);
      expect(roverObj.max_y).to.equal(6);
    })

    it('should setup the init position', () => {
      const line = '2 4 E';
      process(line, roverObj);
      expect(roverObj.x).to.equal(2);
      expect(roverObj.y).to.equal(4);
      expect(roverObj.direction).to.equal('E');
    })

    it('should move the rover', () => {
      roverObj = {
        x: 3,
        y: 3,
        direction: 'E',
        max_x: 5,
        max_y: 5
      }      
      const line = 'MMRMMRMRRM';
      process(line, roverObj);
      expect(roverObj.x).to.equal(5);
      expect(roverObj.y).to.equal(3);
      expect(roverObj.direction).to.equal('E');
    })

    it('should stay in the same position when the rover is out of the grid', () => {
      roverObj = {
        x: 3,
        y: 3,
        direction: 'E',
        max_x: 5,
        max_y: 5
      }      
      const line = 'MMRMMRMRRMMMMMMM';
      process(line, roverObj);
      expect(roverObj.x).to.equal(5);
      expect(roverObj.y).to.equal(3);
      expect(roverObj.direction).to.equal('E');
    })
  })
})