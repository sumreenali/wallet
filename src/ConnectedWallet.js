import React, {Component} from 'react'


class ConnectedWallet extends Component{
    state = {
        token_amount: null
     }
 
     handleChange=(e)=>{
         this.setState({
             token_amount: e.target.value
         })
     }
    render(){
        return(
            <>
                <div>
                    <div className="one column stackable
                        very relaxed ui text container">
                    {/* <!--Flow start--> */}
                    <div className="column" id="flow_start"
                        style={{marginTop: "5em"}}>
                        <div className="ui segment">
                            <h5 className="ui header">
                                1. Connect your wallet</h5>
                            <div className="ui grid">
                                <div className="seven wide column">
                                    <button className="fluid ui gray basic button"> 
                                    <i className="icon user"></i>
                                        <b>MetaMask 0XBA..K38H</b>
                                    </button>
                                </div>
                                <div className="right floated six wide column">
                                    <span>Available DAI</span><br/>
                                    <span className="available-dai">3094.00</span>
                                </div>
                            </div>
                            <div className="ui hidden divider"></div>
                            <div className="ui fluid form success">
                                <div className="field">
                                    <h5 className="ui header">
                                        2. Enter how much DAI you want to donate
                                    </h5>
                                    <div className="ui right labeled input left action">
                                        <button className="ui labled basic button">
                                            <small>MAX</small></button> 
                                            <input id="token_amount" placeholder="0.0000"
                                                style= {{textAlign: "right"}} type="text"
                                                onChange={this.handleChange} 
                                                value = {this.state.token_amount}
                                            />
                                        <div className="ui label token_symbol">
                                            DAI
                                        </div>
                                    </div>
                                </div>
                                <div className="ui">

                                    <button className="ui primary biggerbtn 
                                            button disabled fluid continue"
                                            id="metamask_btn">
                                        <img src="./assets/metamask.png" width="24"
                                        alt="Metamask logo" className="_ffn_img"/>
                                        Continue with Metamask
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ui hidden divider"></div>
            <div className="ui hidden divider"></div>
            <div className="ui hidden divider"></div>
            </>
        );
    }
}

export default ConnectedWallet;