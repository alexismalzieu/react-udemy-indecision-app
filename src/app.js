console.log('App is running');


//JSX

const app = {
  title: 'Indecision app',
  subtitle: 'This is the indecision app'
}

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0

const addOne = () => {
  console.log('addOne');
};

const minusOne = () => {
  console.log('minusOne');
};

const reset = () => {
  console.log('reset');
};

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}> +1 </button>
    <button onClick={minusOne}> -1 </button>
        <button onClick={reset}> Reset </button>

  </div>
);

console.log(templateTwo);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
