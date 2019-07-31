/* wrtie a promise that creates a script tag on a button click.
look at reference to the .gl project.
*/
const reactWrite = (() => {
    document.getElementById('reactor-btn').addEventListener('click', () => {
        writeScript('https://unpkg.com/react@16/umd/react.development.js');
        writeScript('https://unpkg.com/react-dom@16/umd/react-dom.development.js');

    })
})();

const writeScript = source => {
    let script = document.createElement('script');
    script.setAttribute('crossorigin','');
    script.setAttribute('src', source);
    let head = document.getElementsByTagName('head')[0];
    //TODO - add conditional to check if script is already in head.
    return head.appendChild(script);
}