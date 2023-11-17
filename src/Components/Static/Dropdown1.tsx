import React from 'react'
import styled from 'styled-components'

const Dropdown1 = () => {
  return (
    <Container>
        <Wrapper>
            <Cardholder>
                <Card>
                    <img src="https://images.pexels.com/photos/3775553/pexels-photo-3775553.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Card>
                <label>About Us</label>
                <p>Harnessing technology to make people’s lives easier in Africa</p>
            </Cardholder>
            <Cardholder>
                <Card>
                    <img src="https://images.pexels.com/photos/3775553/pexels-photo-3775553.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Card>
                <label>What We Do</label>
                <p>Serving consumers and empowering businesses</p>
            </Cardholder>
            <Cardholder>
                <Card>
                    <img src="https://images.pexels.com/photos/3775553/pexels-photo-3775553.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Card>
                <label>Locations</label>
                <p>The countries we serve</p>
            </Cardholder>
            <Cardholder>
                <Card>
                    <img src="https://images.pexels.com/photos/3775553/pexels-photo-3775553.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Card>
                <label>Leadership</label>
                <p>Meet our leaders</p>
            </Cardholder>
        </Wrapper>
    </Container>
  )
}

export default Dropdown1
const Card = styled.div`
    width: 100%;
    height: 290px;
    border-radius: 7px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const Cardholder = styled.div`
    display: flex;
    flex-direction: column;
    width: 285px;
    p{
        line-height: 25px;
    }
        label{
        font-size: 24px;
        font-weight: 500;
        margin-top: 25px;
    }
`
const Wrapper = styled.div`
    width: 88%;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`