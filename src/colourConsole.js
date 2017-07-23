class ColouredConsole {
  constructor() {
    this.bgColour = '';
    this.colour = '';
  }

  setColour = (bgColour, colour) => {
    this.bgColour = bgColour;
    this.colour = colour;
  };

  log = (colouredPart, notColouredPart) => {
    console.log(`%c${colouredPart}%c${notColouredPart}`, `background: ${this.bgColour}; color: ${this.colour}`, 'background: #fff; color: #000');
  };
}
export default ColouredConsole;