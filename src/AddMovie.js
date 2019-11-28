// import React, { Component } from 'react';
// import {Modal,Button} from 'react-bootstrap'
 
// class Add extends Component{

//   // constructor(){
//   //   super()
//   // }

//   //   handelChange=(ev)=>{
//   //       // this.setState({
//   //       //     console.log(ev.taget.value)
//   //       // })

//   //   }



//  render(){
//      return (
//      <div>
//         <Modal
//       // {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Add A Movie
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//           <div className='container'>
//                Add a movie form 
//           </div>

//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="danger" onClick={this.props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>       
//      </div>
//      )
     
//  }
// }
// export default Add;


 // <button
 //                type="button"
 //                class="btn btn-primary"
 //                data-toggle="modal"
 //                data-target="#exampleModal"
 //                >
 //                Add Film
 //            </button>
 //            <div
 //                class="modal fade"
 //                id="exampleModal"
 //                tabindex="-1"
 //                role="dialog"
 //                aria-labelledby="exampleModalLabel"
 //                aria-hidden="true"
 //            >
 //              <div class="modal-dialog" role="document">
 //                <div class="modal-content">
 //                  <div class="modal-header">
 //                    <h5 class="modal-title" id="exampleModalLabel" >
 //                    </h5>
 //                    <button
 //                      type="button"
 //                      class="close"
 //                      data-dismiss="modal"
 //                      aria-label="Close"
 //                    >
 //                      <span aria-hidden="true">&times;</span>
 //                    </button>
 //                  </div>
 //                  <div class="modal-footer">
 //                    <button
 //                      type="button"
 //                      class="btn btn-secondary"
 //                      data-dismiss="modal"
 //                    >
 //                      Close
 //                    </button>
 //                    <button type="button" class="btn btn-primary" data-dismiss="modal" >
 //                      Add Film
 //                    </button>
 //                  </div>
 //                </div>
 //              </div>
 //            </div>





 import React, { Component } from 'react'
 class AddMovie extends Component {

    constructor(props){
      super(props)
      this.state={
        movieRate:'',
        movieSrc:'',
        movieTitle:''
      }
    }

    handelChange=(e)=>{
      this.setState({

      [e.target.name]:e.target.value
      })
      console.log(e.target.value)
    }


    render() {
        return (
            <div>
                 <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Add Film
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                         Add a Movie
                    </h5>


                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>


                  <form className='container md-form'>
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput">the Rate</label>
                      <input 
                            type="number" 
                            className="form-control" 
                            id="movieRate" 
                            name="movieRate" 
                            placeholder="give a number " 
                            onChange={this.handelChange}
                        />
                    </div>
                    <div className="file-field">
                        <div className="btn btn-primary btn-sm float-left">
                          <span>Choose file</span>
                          <input 
                            type="file"
                            name="movieSrc"
                            onChange={this.handelChange} 
                          />
                        </div>
                        <div className="file-path-wrapper">
                          <input 
                              className="file-path validate" 
                              type="text"
                               placeholder="Upload your file"
                            />
                        </div>
                     </div>
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput2">the movie's title </label>
                      <input 
                          type="text" 
                          className="form-control" 
                          id="movieTitle" 
                          name="movieTitle" 
                          placeholder="give a title to movie "
                          onChange={this.handelChange}
                       />
                    </div>
                    
                  </form>


                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-primary" 
                      data-dismiss="modal" 
                      onClick={()=>this.props.addMovie(this.state)}
                    >
                      Add Film
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
        )
    }
}

export default AddMovie












