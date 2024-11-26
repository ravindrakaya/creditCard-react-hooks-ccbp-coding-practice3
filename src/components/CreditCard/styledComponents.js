// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
`

export const CreditCardSection = styled.div`
  min-width: 40%;
  min-height: 100vh;
  background-image: linear-gradient(#3b4b69, #344e7a);
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CardHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  text-align: center;
`

export const HeadRise = styled.hr`
  width: 30%;
  background-color: #ffd773;
  height: 4px;
  margin-left: 160px;
  margin-top: 0px;
`

export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  border-radius: 15px;
  background-size: cover;
  margin-top: 200px;
  width: 100%;
  height: 300px;
  padding: 50px;
`

export const CardNumber = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  margin-top: 45px;
  margin-bottom: 30px;
  font-size: 25px;
`

export const CardName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  margin-top: 20px;
`

export const CardHolderName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
`
// PaymentSection

export const PaymentSection = styled.div`
  min-width: 60%;
  min-height: 100vh;
  background-color: #ffffff;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PaymentContainer = styled.div`
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  border-radius: 15px;
  background-size: cover;
  margin-top: 200px;
  width: 60%;
  height: 300px;
  padding: 50px;
  margin-right: 250px;
`
export const PaymentMethod = styled.h1`
  color: #344e7a;
  font-family: 'Roboto';
  margin-top: 10px;
  text-align: center;
`

export const CardNumInput = styled.input`
  outline: none;
  border: 1px solid #d3d9e0;
  border-radius: 3px;
  padding: 10px;
  width: 400px;
  margin-top: 10px;
  margin-bottom: 20px;
`

export const CardNameInput = styled.input`
  outline: none;
  border: 1px solid #d3d9e0;
  border-radius: 3px;
  padding: 10px;
  width: 400px;
  margin-top: 10px;
`
