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
        </Wrapper>
    </Container>
  )
}

export default Contactus
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
    /* height: 40px; */
`

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`