import React from 'react'
import styled from 'styled-components'

const Dropdown3 = () => {
  return (
    <Container>
        <Wrapper>
            <Cardholder>
                <Card>
                    <img src="https://images.pexels.com/photos/7014926/pexels-photo-7014926.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Card>
                <label>People</label>
                <p>Growing personally and professionally at internet speed</p>
            </Cardholder>
            <Cardholder>
                <Card>
                    <img src="https://images.pexels.com/photos/7014926/pexels-photo-7014926.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Card>
                <label>Find your Dream Job</label>
                <p>Jump into an intense and game-changing adventure</p>
            </Cardholder>
            <Cardholder>
                <Card>
                    <img src="https://images.pexels.com/photos/7014926/pexels-photo-7014926.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Card>
                <label>Faces of Jumia</label>
                <p>Meet some of our Jumees</p>
            </Cardholder>
        </Wrapper>
    </Container>
  )
}

export default Dropdown3
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