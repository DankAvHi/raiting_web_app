const getRandomInRange = (min: number, max: number, step: number) => {
     let delta, range, rand;
     if (!max) {
          max = min;
          min = 0;
     }
     if (!step) {
          step = 1;
     }
     max = max + step;
     delta = max - min;
     range = delta / step;
     rand = Math.random();
     rand *= range;
     rand = Math.floor(rand);
     rand *= step;
     rand += min;
     return rand;
};
export default getRandomInRange;
