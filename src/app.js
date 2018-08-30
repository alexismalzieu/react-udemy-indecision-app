console.log('App is running');


//JSX

var app = {
  title: 'Indecision app',
  subtitle: 'This is the indecision app',
  options: ['One','Two']
}

var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? 'Here are the options' : 'No options'}
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Alexis',
  age: 25,
  location: 'Lille'
}

var userName = 'Alexis';
var userAge = 22;
var userLocation = 'Lille'

function getLocation(location) {
  if(location){
    return <p>Location: {location}</p>;
  }
}


var template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age>18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
