import React, {useRef, useState} from 'react'
import styled from 'styled-components'

interface FaqCardProps {
    faqsList: { q: string; a: string }
    idx: number;
}

interface FaqsCardContainerProps {
    isOpen: boolean;
    answerHeight: string;
}

const Faqs: React.FC<FaqCardProps> = ({ faqsList, idx }) => {
    const answerE1Ref = useRef<HTMLDivElement>(null);
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState("0px")
  return (
    <Container>
        <Wrapper>
            <h2>FAQS</h2>
        </Wrapper>
    </Container>
  )
}

export default Faqs
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`