import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import VidyoConnector  from '../../pages/vidyo'

export default class ModalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
   
    
  

    openModal() {
        this.setState({
            visible : true
          
            
        })
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <div>
                <input type="button" value="Open" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="90%" height="90%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                    <VidyoConnector/>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </div>
        );
    }


    // render () {
    //     const {visible} = this.state
    //     return visible == true ?     
    
           
    //     <div>
              
    //             <Modal visible={this.state.visible} width="90%" height="90%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
    //                 <div>
                        
    //                 <VidyoConnector />
               
    //                     <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
    //                  </div>
    //           </Modal>
    //         </div>
    
    //  : (
        
    //     <div>hey
    //         <input type="button" value="Open" onClick={() => this.openModal()} />  
    //     </div>
        
    //     )
    
    // }
    
}