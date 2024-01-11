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

const FaqsCard: React.FC<FaqCardProps> = ({ faqsList, idx }) => {
    const answerE1Ref = useRef<HTMLDivElement>(null);
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState("0px")

    const handleOpenAnswer = () => {
  const answerEl = answerE1Ref.current;
  const answerElH = answerEl?.childNodes[0] instanceof HTMLElement
    ? answerEl.childNodes[0].offsetHeight
    : 0;
  setState(!state);
  setAnswerH(`${answerElH + 20}px`);
};
  return (
    <FaqsCardContainer 
        className='faq-card'
        isOpen={state}
        answerHeight={answerH}
        key={idx}
        onClick={handleOpenAnswer}
    >
        <h4 className='question-header'>
            {faqsList.q}
            {state ? (
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 24 24' fill='none' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M20 12H4"/>
                </svg>
            ) : (
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
            )} 
        </h4>
        
        <div ref={answerE1Ref} className='answer-container'>
            <div>
                <p>{faqsList.a}</p>
            </div>
        </div>   
    </FaqsCardContainer>
  )
}


const FaqsCardContainer = styled.div<FaqsCardContainerProps>`
  &.faq-card {
    margin-top: 5px;
    overflow: hidden;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: 10px;
  }

  .question-header {
    cursor: pointer;
    padding-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    color: #4b5563;
    font-weight: 500;

    .icon {
      width: 1.25rem;
      height: 1.25rem;
      fill: #6b7280;
      margin-left: 0.5rem;
    }
  }

  .answer-container {
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    height: ${(props) => (props.isOpen ? props.answerHeight : "0px")};

    p {
      color: #6b7280;
    }
  }
`;

const Faqs: React.FC = () => {
    const faqsList: { q: string; a: string }[] = [
    {
        q: "What are some random questions to ask?",
        a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question."
    },
    {
        q: "Do you include common questions?",
        a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator."
    },
    {
        q: "Can I use this for 21 questions?",
        a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."
     },
     {
        q: "Are these questions for girls or for boys?",
        a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with)."
    },
    {
        q: "What do you wish you had more talent doing?",
        a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires."
    }
  ];
    return (
        <SectionContainer>
            <div>
                <h1 className='title'>Frequently Asked Questions</h1>
                <p className='subtitle'>Answered all frequently asked questions, Still confused? feel free to contact us.</p>
            </div>
            <div className='section-content'>
                {faqsList.map((item, idx) => (
          <FaqsCard key={idx} faqsList={item} idx={idx} />
        ))}
            </div>
        </SectionContainer>
    )
}

export default Faqs

const SectionContainer = styled.section`
  && {
    margin-top: 12px;
    max-width: 95%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 4px;
    padding-right: 8px;
    margin-top: 80px;
    margin-bottom: 50px;
    /* background-color: red; */
  }

  .section-content {
    && {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 14px;
      max-width: 2xl;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .title {
    && {
      font-size: 3xl;
      color: gray-800;
      font-weight: semibold;
    }
  }

  .subtitle {
    && {
      color: gray-600;
      max-width: lg;
      margin-left: auto;
      margin-right: auto;
      font-size: lg;
    }
  }
`;