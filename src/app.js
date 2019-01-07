console.log('App is running');


//JSX

const app = {
  title: 'Indecision app',
  subtitle: 'This is the indecision app',
  options: []
}

const onFormSubit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';

    render();
  }
};

const removeAll = () => {
  app.options = [];
  
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
