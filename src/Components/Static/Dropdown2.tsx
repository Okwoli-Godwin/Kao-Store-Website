import React from 'react'
import styled from 'styled-components'

const Dropdown2 = () => {
  return (
    <Container>
        <Wrapper>
            <Cardholder>
                <Card>
                    <img src="https://images.pexels.com/photos/7241413/pexels-photo-7241413.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Card>
                <label>Business</label>
                <p>Jumia is built around three main pillars: Jumia Marketplace, Jumia Logistics and JumiaPay</p>
            </Cardholder>
            <Cardholder>
                <Card>
                    <img src="https://images.pexels.com/photos/7241413/pexels-photo-7241413.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Card>
                <label>Marketplace</label>
                <p>Offering goods from a large and diverse group of sellers across a wide range of categories</p>
            </Cardholder>
            <Cardholder>
                <Card>
                    <img src="https://images.pexels.com/photos/7241413/pexels-photo-7241413.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Card>
                <label>JumiaPay</label>
                <p>Designed to facilitate online transactions between sellers and consumers</p>
            </Cardholder>
            <Cardholder>
                <Card>
                    <img src="https://images.pexels.com/photos/7241413/pexels-photo-7241413.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </Card>
                <label>Logistics</label>
                <p>Facilitating the delivery of goods in a convenient and reliable way</p>
            </Cardholder>
        </Wrapper>
    </Container>
  )
}

export default Dropdown2
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
    width: 255px;
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