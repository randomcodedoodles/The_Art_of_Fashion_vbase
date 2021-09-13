import { useEffect, useState } from "react"
import { Footer } from "../Footer"
import "./ContactUs.css"
import axios from "axios"
import arrow from "../../Resources/Icon_Arrow.svg"
import submit from "../../Resources/Icon_Submit.svg"
import valid from "../../Resources/Icon_Valid.svg"



export const ContactUs = () => {

    const [phoneCounter, setPhoneCounter] = useState([""]);
    const [addrAdded,setAddrAdded] = useState(false);
    const [userData, setUserData] = useState({
        FullName: "",
        EmailAddress:"",
        PhoneNumbers: [""],
        Message: "",
        bIncludeAddressDetails: false,
        AddressDetails: {
            AddressLine1: "",
            AddressLine2: "",
            CityTown: "",
            StateCounty: "",
            Postcode: "",
            Country: ""
        }
    });

    const [errMsg, setErrMsg] = useState([]);

    //const handleInputChange = (e, index = -1) => { //case "PhoneNumbers"
    const handleInputChange = (e) => { //changeHandler
     /*   const newUserData = {...userData}
        newUserData[e.target.name] = e.target.value
        setUserData(newUserData)
    */
        const { name, value } = e.target;
        if (!userData.bIncludeAddressDetails) {
            // Assume root level
            setUserData({
                ...userData,
                [e.target.name] : e.target.value
            })
          } else {
            switch (name) {
                case "FullName":
                case "EmailAddress":
                case "Message":
                    setUserData({
                        ...userData,
                        [e.target.name] : e.target.value
                      });
                      break;
                case "AddressLine1":
                case "AddressLine2":
                case "CityTown":
                case "StateCounty":
                case "Postcode":
                case "Country":
                    setUserData({
                        ...userData,
                        AddressDetails: {
                          ...userData.AddressDetails,
                          [e.target.name] : e.target.value
                        }
                      });
                      break;
                default:
          }
        }
    }

    useEffect(()=>{console.log(userData)},[userData])
    const handlePhoneNumberChange = (e, index) => {
        const updatedPhoneNumber = {...userData}
        updatedPhoneNumber.PhoneNumbers[index] = e.target.value
        setUserData(updatedPhoneNumber)
    }

    const handleFormSubmission = (e) => { //submitHandler
        e.preventDefault();
        //console.log(phoneAdded)
        /*
        const { name, value } = e.target;

        

  switch (name) {
    case "name":
    case "email":
      setUserInfo((userInfo) => ({
        user: {
          ...userInfo.user,
          [name]: value
        }
      }));
      break;

    case "primary":
    case "alternate":
      setUserInfo((userInfo) => ({
        user: {
          ...userInfo.user,
          phone: userInfo.user.phone.map((el) =>
            el.hasOwnProperty(name)
              ? {
                  [name]: value
                }
              : el
          )
        }
      }));
      break;

    default:
    // ignore
  }
  */
        postUserData();
    }

    const addPhoneNumber = (e) => { //console.log(phoneAdded)
        //if(!phoneAdded) setPhoneAdded(true);
        //phoneCounter.push(""); 
        //setPhoneCounter(phoneCounter)
        console.log('hi')
        e.preventDefault();
        setUserData({
            ...userData,
            PhoneNumbers: [...userData.PhoneNumbers, ""]
        })
    }
    const addAddressDetails = (e) => { console.log('kid')
        //setAddrAdded(!addrAdded);
        setUserData({
            ...userData,
            bIncludeAddressDetails : !userData.bIncludeAddressDetails
          })
    }

    const [submitted, setSubmitted] = useState(false);
    useEffect(()=>{console.log(errMsg)},[errMsg])
    const postUserData = async () => {
        try {/*
            const res = await fetch("https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit", {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json-patch+json'
                },
                body: JSON.stringify(userData)
            });*/
            const res = await axios.post("https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit", userData)
            console.log(res);

            if(res.status === 200 || res.statusText === "OK" || res.data.Status === "1" || res.data.Errors.length === 0){
                setSubmitted(true);
                setUserData({
                    FullName: "",
                    EmailAddress:"",
                    PhoneNumbers: [""],
                    Message: "",
                    bIncludeAddressDetails: false,
                    AddressDetails: {
                        AddressLine1: "",
                        AddressLine2: "",
                        CityTown: "",
                        StateCounty: "",
                        Postcode: "",
                        Country: ""
                    }
        
                })
            }
            else if(res.status === 400 || res.statusText !== "OK" || res.data.Status === "0" || res.data.Errors.length > 0){
                //errMsg.push(`${res.data.Errors.FieldName} : ${res.data.Errors.MessageCode}`)
                //setErrMsg(errMsg)
                setErrMsg(res.data.Errors)
                
            }
        }catch(err) {
            console.log(err.message,err.status,err.statusCode,err.response,errMsg);
            setErrMsg(err.response.data.Errors)
        }

    }

    return (
        <section className="App-container">
            <div className="contact-us">
                    <div className="contact-form">
                        <h2> Contact Us</h2>
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Explicabo maxime quae quod. Vero, quasi saepe. Laborum, minus. 
                        </p>
                        
                        {submitted ? (<div className="submit-success">dfjkhkj</div>) : (
                        <form action="" className="form primary" onSubmit={(e) => {handleFormSubmission(e)}}>
                            <div className="secondary name-email">
                                <div className="form-group half name">
                                    <label htmlFor="FullName" className="form-label">Name: </label>
                                    <input type="text" id="FullName" name="FullName" className="form-control" value={userData.FullName} required onChange={handleInputChange}/>
                                </div>
                                <div className="form-group half email">
                                    <label htmlFor="EmailAddress" className="form-label">Address: </label>
                                    <input type="text" id="EmailAddress" name="EmailAddress" className="form-control" value={userData.EmailAddress} required onChange={handleInputChange}/>
                                </div>
                            </div>
                            {userData?.PhoneNumbers.map((_phone, _index) => {return (
                                <div className={`form-group primary phone phone${_index}`} key={_index}>
                                    <label htmlFor={`phone${_index}`} className="form-label">phone{_index}: </label>
                                    <input type="text" id={`phone${_index}`} name={`phone${_index}`} className="form-control" value={userData?.PhoneNumbers[_index]} onChange={(e) => {handlePhoneNumberChange(e, _index)}}/>
                                </div>
                            )})}
                            <div className="add-phone primary">
                                <button className="phone-btn" onClick={addPhoneNumber}>add a new phone number </button>
                            </div>
                            <div className="form-group message primary">
                                <label htmlFor="Message" className="form-label">message: <span className="max-length-req">fdgfdgfdgf hjhjkh  ghkh</span> </label>
                                
                                <textarea id="Message" name="Message" className="form-control" value={userData.Message} required maxLength="500" onChange={handleInputChange}/>
                            </div>
                            <div className="add-address primary">
                                <input type="checkbox" id="bIncludeAddressDetails" name="bIncludeAddressDetails" onChange={addAddressDetails} value={userData.bIncludeAddressDetails}></input>
                                <label htmlFor="bIncludeAddressDetails" className="form-label address">add address details? </label>
                            </div>
                            {userData.bIncludeAddressDetails ? (<>
                            <div className="secondary address">
                                <div className="address-1 half">
                                    <div className="form-group half address-line1">
                                        <label htmlFor="AddressLine1" className="form-label">Addres Line1: </label>
                                        <input type="text" id="AddressLine1" name="AddressLine1" className="form-control" value={userData?.AddressDetails?.AddressLine1} required onChange={handleInputChange}/>
                                    </div>
                                    <div className="secondary address-detail1">
                                        <div className="form-group quarter address-detail1">
                                            <label htmlFor="CityTown" className="form-label">City/town: </label>
                                            <input type="text" id="CityTown" name="CityTown" className="form-control" value={userData?.AddressDetails?.CityTown} required onChange={handleInputChange}/>
                                        </div>
                                        <div className="form-group quarter address-detail1">
                                            <label htmlFor="county" className="form-label"> state/county: </label>
                                            <input type="text" id="StateCounty" name="StateCounty" className="form-control" value={userData?.AddressDetails?.StateCounty} required onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                    </div>
                                <div className="address-2 half">
                                    <div className="form-group half address-line2">
                                        <label htmlFor="AddressLine12" className="form-label">Address line2: </label>
                                        <input type="text" id="AddressLine2" name="AddressLine2" className="form-control" value={userData?.AddressDetails?.AddressLine2} onChange={handleInputChange}/>
                                    </div>
                                    <div className="secondary address-detail1">
                                        <div className="form-group quarter address-detail2">
                                            <label htmlFor="Postcode" className="form-label">postcode: </label>
                                            <input type="text" id="Postcode" name="Postcode" className="form-control" value={userData?.AddressDetails?.Postcode} required onChange={handleInputChange}/>
                                        </div>
                                        <div className="form-group quarter address-detail2">
                                            <label htmlFor="Country" className="form-label"> country: </label>
                                            <input type="text" id="Country" name="Country" className="form-control" value={userData?.AddressDetails?.Country} required onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            </>):<></>}
                            {errMsg.length > 0 ? (
                            errMsg.map((_errmsg, _index) => (
                                <div className="error-msg">{_errmsg.FieldName} : {_errmsg.MessageCode}</div>
                            ))
                            ) : <></>}
                            <button type="submit" className="submit-btn">Submit</button>
                        </form>)}

                        
                    </div>
                
            </div>
            
        </section>
    )
}
//<img src={arrow} style={{width:"10px",height:"10px"}}/>
                        //<img src={submit} style={{width:"10px",height:"10px"}}/>
                        //<img src={valid} style={{width:"10px",height:"10px"}}/>
/*
<div className="contact-us">
                <div className="contact-dna">
                    <div className="contact-form">
                        <h2> Contact Us</h2>
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Explicabo maxime quae quod. Vero, quasi saepe. Laborum, minus. 
                        </p>
                    </div>
                </div>
            </div>
            */

            /*
            <div className="fourth address">
                                <div className="secondary address-detail1">
                                    <div className="form-group half address-detail1">
                                        <label htmlFor="CityTown" className="form-label">City/town: </label>
                                        <input type="text" id="CityTown" name="CityTown" className="form-control" value={userData?.AddressDetails?.CityTown} required onChange={handleInputChange}/>
                                    </div>
                                    <div className="form-group half address-detail1">
                                        <label htmlFor="county" className="form-label"> state/county: </label>
                                        <input type="text" id="StateCounty" name="StateCounty" className="form-control" value={userData?.AddressDetails?.StateCounty} required onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div className="secondary address-detail1">
                                    <div className="form-group half address-detail2">
                                        <label htmlFor="Postcode" className="form-label">postcode: </label>
                                        <input type="text" id="Postcode" name="Postcode" className="form-control" value={userData?.AddressDetails?.Postcode} required onChange={handleInputChange}/>
                                    </div>
                                    <div className="form-group half address-detail2">
                                        <label htmlFor="Country" className="form-label"> country: </label>
                                        <input type="text" id="Country" name="Country" className="form-control" value={userData?.AddressDetails?.Country} required onChange={handleInputChange}/>
                                    </div>
                                </div>
                            </div>
            */