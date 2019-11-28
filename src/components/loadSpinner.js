// import React from 'react';
// import { Spinner } from 'reactstrap';

// const LoadSpinner = () => {
//   return (
//     <div className='container'>
//       <Spinner color="success" />

//     </div>
//   );
// }

// export default LoadSpinner;


//<<<<<<<<<3wschool>>>>>>>>>


// import React from 'react';
// import { Spinner } from 'reactstrap';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       color: '',
//     }
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({color:'success'})
//     }, 2000)
//   }
//   render() {
//     return (
//     <div className='container'>
//       <Spinner color={this.state.color} />
//     </div>
//     );
//   }
// }

// export default Header
//<<<<<<<<<<<<<<



import React, { Component } from 'react';

const UpdatedComponent = OriginalComponent => {
class NewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true }
    }

componentDidMount=()=>
setTimeout(() => {
    this.setState({
        loading: false
    })
}, 3000)

    render() {  
            if(this.state.loading===true)
            return (
            <div className="spinner-border text-danger" role="status">
  
</div>)
else return (
    <OriginalComponent {...this.props}/>
)
    }
}
 
return NewComponent;

}

export default UpdatedComponent;
