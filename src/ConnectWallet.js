import React, {Component} from 'react'
import QRCode from 'qrcode'
import ModalBox from './ModalBox'
import metamaskImg from './assets/metamask-big.png';
import ledgerImg from './assets/ledger-big.png'

class ConnectWallet extends Component{
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
                <div className="one column stackable very 
                    relaxed ui text container">
              {/* <!--Flow start--> */}
                    <div className="column" 
                         id="flow_start"
                        style={{marginTop: '5em'}}>
                  
                    <div className="ui segment">
                      <h5 className="ui header">
                        1. Connect your wallet
                      </h5>
                      <div className="ui grid">
                          <div className="seven wide column">
                              <div className="ui fluid icon 
                                  dropdown simple green basic button">
                                  <span className="text">
                                    Connect your wallet</span>
                                  <i className="dropdown icon"></i>
                                  <div className="menu">
                                      <div className="item">Connect MetaMask</div>
                                      <div className="item">Connect Ledger</div>
                                  </div>
                              </div>
                          </div>
                          <div className="right floated six wide column">
                              <span>Available DAI</span><br/>
                              <span className="available-dai">-</span>
                          </div>
                      </div>
                      <div className="ui hidden divider"></div>
                      <div className="ui fluid form success">
                          <div className="field">
                              <h5 className="ui header">
                                2. Enter how much DAI you want to donate</h5>
                              <div className="ui right labeled input left action">
                                  <button className="ui labled basic button">
                                    <small>MAX</small>
                                    </button>
                                  <input id="token_amount" placeholder="0.0000"
                                         style={{textAlign:'right'}} type="text" 
                                         onChange={this.handleChange} value = {this.state.token_amount}/>
                                  <div className="ui label token_symbol">
                                      DAI
                                  </div>
                              </div>
                          </div>
                          <div className="ui">
                              <button className="ui fluid primary biggerbtn 
                                      button disabled continue">Continue</button>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
         </div>

        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>

        {/* Script */}
          {/* <script type="text/javascript">
          var qrcode = new QRCode("qrcode2", {
              text: "REPLACEWITHADDRESS",
              width: 120,
              height: 120,
          });
          var qrcode = new QRCode("qrcode3", {
              text: "REPLACEWITHADDRESS",
              width: 120,
              height: 120,
          });
      </script>

      <script type="text/javascript">
          $('.ui.accordion')
              .accordion();
      </script> */}

    <ModalBox buttonText = "MetaMask Wallet Connect Loading Popup"
              imgSrc={metamaskImg} 
              headerText= "Unlock Wallet"
              message="You may need to click the extension."/>

    <ModalBox buttonText = " Ledger Wallet Conncet Loading Popup"
              imgSrc={ledgerImg} 
              headerText= "Plugin Ledger &amp; Enter PIN"
              message="Open the ETH application and make sure Contract Data
              &amp; Browser Support are enabled in ETH settings."/>

    <ModalBox buttonText = "Ledger Wallet Connect Error Popup"
              imgSrc={ledgerImg} 
              headerText= "Ledger Connection Failed!"
              message={ <>
                            <p>1. Unlock your ledger and open the ETH application.</p>
                            <p>2. Verify Contract Data &amp; Browser Support are enabled in ETH settings.</p>
                            <p>3. If Browser Support is not an option in settings, update to latest firmware. </p>
                            <button className="ui fluid basic button">
                                <i className="undo icon"></i>
                                    Try Again
                            </button>
                        </> }
    />

            </>
        );
    }
}

export default ConnectWallet;