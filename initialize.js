/* wrtie a promise that creates a script tag on a button click.
look at reference to the .gl project.
*/
const reactWrite = (() => {
    document.getElementById('reactor-btn').addEventListener('click', () => {
        let react = new Promise((resolve, reject)=> {
            // writeScript('https://unpkg.com/react@16/umd/react.development.js', document.getElementsByTagName('head')[0], 'reactCDN');
            // writeScript('https://unpkg.com/react-dom@16/umd/react-dom.development.js', document.getElementsByTagName('head')[0], 'react-d0mCDN');
            return resolve('success');
        })
        react.then(value => {
                writeScript('components/Todo.js', document.getElementsByTagName('body')[0], 'react-todo');            
                writeScript('components/Table.js', document.getElementsByTagName('body')[0], 'react-table');
        })
    })
})();

const writeScript = (source, target, id) => {
    if(document.getElementById(id)) return;
    let script = document.createElement('script');
    script.setAttribute('crossorigin','');
    script.setAttribute('src', source);
    script.setAttribute('id', id);
    //TODO - add conditional to check if script is already in head.
    return target.appendChild(script);
}
