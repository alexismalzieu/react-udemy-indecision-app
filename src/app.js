console.log('App is running');


//JSX

var app = {
  title: 'Indecision app',
  subtitle: 'This is the indecision app'
}

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Alexis',
  age: 21,
  location: 'Lille'
}

var userName = 'Alexis';
var userAge = 21;
var userLocation = 'Lille'

var template2 = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
