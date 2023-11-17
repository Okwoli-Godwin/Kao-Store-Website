import React from 'react'
import styled from 'styled-components'

const Dropdown4 = () => {
  return (
    <Container>
        <Wrapper>
            <Cardholder>
                <Card>
                    <img src="https://images.pexels.com/photos/783262/pexels-photo-783262.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Card>
                <label>Press</label>
                <p>What’s going on lately</p>
            </Cardholder>
            <Cardholder>
                <Card>
                    <img src="https://images.pexels.com/photos/783262/pexels-photo-783262.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Card>
                <label>News</label>
                <p>Follow our latest news from around the World</p>
            </Cardholder>
            <Cardholder>
                <Card>
                    <img src="https://images.pexels.com/photos/783262/pexels-photo-783262.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Card>
                <label>Media Kit</label>
                <p>Your source of information</p>
            </Cardholder>
        </Wrapper>
    </Container>
  )
}

export default Dropdown4
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
    width: 380px;
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