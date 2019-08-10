const {createElement} = React;
const {render} = ReactDOM;
const Btn = ({b_class, content, id}) => {
    return (
        <button type="button" class={b_class} id={id}>{content}</button>
    )
}

const htmlBtnEl = document.querySelector('#btn-wrapper');
render(createElement(<Btn b_class="btn-danger" id="reactify" content="Click me for magic"/>, htmlBtnEl));