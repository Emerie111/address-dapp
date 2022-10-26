import React, {useState} from "react";
import {ethers} from "ethers";
const AddressStorage = () => {
    
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');
    const [curentContractVal, setCurentContractVal] = useState(null);
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);

    const connectWalletHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({method: "eth_requestAccounts"})
            .then(result => {
                accountChangedHandler(result[0]);
                setConnButtonText("Wallet Connected")
            })
        } else {
            setErrorMessage("Need to install MetaMask");
        }
    }

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
    }
    return (
        <div>
            <h3> {"Address Reveal Dapp"} </h3>
            <button onClick={connectWalletHandler}> {connButtonText} </button>
            <h3> Address: {defaultAccount} </h3>
            {errorMessage}
        </div>
    )
}

export default AddressStorage