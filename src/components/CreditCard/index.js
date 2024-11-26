// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CreditCardSection,
  CardHeading,
  HeadRise,
  CardContainer,
  CardNumber,
  CardName,
  CardHolderName,
  PaymentSection,
  PaymentContainer,
  PaymentMethod,
  CardNumInput,
  CardNameInput,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = event => setNumber(event.target.value)

  const onChangeName = event => setName(event.target.value)

  return (
    <MainContainer>
      <CreditCardSection>
        <CardHeading>CREDIT CARD</CardHeading>
        <HeadRise />
        <CardContainer data-testid="creditCard">
          <CardNumber>{number}</CardNumber>
          <CardName>CARDHOLDER NAME</CardName>
          <CardHolderName>{name}</CardHolderName>
        </CardContainer>
      </CreditCardSection>
      <PaymentSection>
        <PaymentContainer>
          <PaymentMethod>Payment Method</PaymentMethod>
          <CardNumInput
            type="text"
            placeholder="Card Number"
            onChange={onChangeNumber}
            value={number}
          />
          <CardNameInput
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeName}
            value={name}
          />
        </PaymentContainer>
      </PaymentSection>
    </MainContainer>
  )
}

export default CreditCard
