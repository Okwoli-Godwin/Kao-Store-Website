import React from 'react'
import styled from "styled-components"
import { MdEmail, MdLocationPin  } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GoogleMap, useLoadScript, Marker, Libraries } from "@react-google-maps/api"

const libraries: Libraries = ["places"];
    const mapContainerStyle = {
        width: "100vw",
        height: "100vh"
    };
    const center = {
        lat: 7.2905715,
        lng: 80.6337262
    }

const Contactus = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyCsxCWx_FVJ0xBrk4gwbUgGHTkZkUvA9IQ",
        libraries
    })

    if (loadError) {
        return <div>Error Loading Maps</div>
    }

    if (!isLoaded) {
        return <div>Loading Maps</div>
    }
  return (
    <Container>
        <Wrapper>
            <Wrap>
                <Hold>
                <Iconhold>
                    <MdEmail />
                </Iconhold>
                <Text>support@yourself.com</Text>
            </Hold>
            <Hold>
                <Iconhold>
                    <BiSolidPhoneCall />
                </Iconhold>
                <Text>+234-8022-1744-75</Text>
            </Hold>
            <Hold>
                <Iconhold>
                    <MdLocationPin  />
                </Iconhold>
                <Text>121 King street Abuja</Text>
            </Hold>
            </Wrap>
            
            <Cardhold>
                <Details>
                    <h1>Get in touch with us</h1>
                    <Holder>
                        <Inputhold>
                            <p>Your Name (*)</p>
                            <input type="text" />
                        </Inputhold>
                        <Inputhold>
                            <p>Your Email (*)</p>
                            <input type="email" />
                        </Inputhold>
                        <Inputhold>
                            <p>Subject (*)</p>
                            <input type="text" />
                        </Inputhold>
                        <Inputhold>
                            <p>Department (*)</p>
                            <input type="text" />
                        </Inputhold>
                        <Textareahold>
                            <p>Your Question (*)</p>
                            <textarea></textarea>
                        </Textareahold>
                        
                        <Button>Ask</Button>
                    </Holder>
                </Details>
                
                <Mapholder>
                    <GoogleMap 
                        mapContainerStyle={mapContainerStyle}
                        zoom={10}
                        center={center}
                    >
                        <Marker position={center}/>
                    </GoogleMap>
                </Mapholder>
            </Cardhold>
        </Wrapper>
    </Container>
  )
}

export default Contactus
const Mapholder = styled.div`
    width: 38%;
    display: flex;
    background-color: red;
    border-radius: 20px;
`
const Button = styled.button`
    width: 120px;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    color: #0030AD;
    margin-top: 20px;
`
const Textareahold = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    p{
        color: rgba(255,255,255,.6);
    }
    textarea{
        height: 150px;
        border-radius: 8px;
        resize: none;
    }
`
const Inputhold = styled.div`
    flex-direction: column;
    padding-bottom: 20px;
    p{
        color: rgba(255,255,255,.6);
    }
    input{
        width: 260px;
        height: 40px;
        border: none;
        outline: none;
        border-radius: 5px;
        padding-left: 12px;
    }
`
const Holder = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Details = styled.div`
    width: 55%;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
    padding-right: 40px;
    background-color: #0030AD;
    border-radius: 20px;
    flex-direction: column;
    h1{
        color: #fff;
        font-size: 33px;
    }
`
const Cardhold = styled.div`
    width: 100%;
    display: flex;
    margin-top: 70px;
    justify-content: space-between;
`
const Wrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
const Text = styled.div`
    margin-left: 20px;
    font-weight: 500;
`
const Iconhold = styled.div`
    width: 60px;
    height: 60px;
    background-color: #0030AD;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9px;
    font-size: 30px;
`
const Hold = styled.div`
    display: flex;
    align-items: center;
`
const Wrapper = styled.div`
    width: 88%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 90px;;
    /* height: 40px; */
`

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`