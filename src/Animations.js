export class Animations {
    constructor(patterns) {
      this.patterns = patterns;
      this.activeKey = Object.keys(this.patterns)[0];
    }
  
    get frame() {
      return this.patterns[this.activeKey].frame;
    }
  
    step(delta) {
      this.patterns[this.activeKey].step(delta);
    }
  }