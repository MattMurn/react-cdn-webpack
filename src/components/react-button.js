
const hooksButtonContainer = document.querySelector('#hooksButton');

'use strict';

const e = React.createElement;

const hooksButton = () => {
  const [clicked, setClicked] = React.useState(0);
  logger = () => {
    let num = clicked+1;
    setClicked(num);
  }
  return (
    <div>
      <div>
        {clicked}
      </div>
      <button onClick={this.logger}>hooks button</button>
    </div>
  );
}

ReactDOM.render(e(hooksButton), hooksButtonContainer);    