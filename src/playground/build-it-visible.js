class VisibilityToogle extends React.Component {

  constructor(props){
    super(props)
    this.handelToggleVisibility = this.handelToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  handelToggleVisibility(){
      this.setState((state) => {
        return {
        visibility: !state.visibility
        };
      });
      console.log(this.state.visibility);

  }

  render(){
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handelToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show Details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    )
  }

}

ReactDOM.render(<VisibilityToogle />, document.getElementById('app'));


// let visibility = false;
//
// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };
//
// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );
//
//   ReactDOM.render(jsx, document.getElementById('app'));
// };
//
// render();
