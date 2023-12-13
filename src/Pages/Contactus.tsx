import React from 'react'
import styled from "styled-components"
import { MdEmail, MdLocationPin  } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";

const Contactus = () => {
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
            </Cardhold>
        </Wrapper>
    </Container>
  )
}

export default Contactus
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
        width: 290px;
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
    width: 60%;
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