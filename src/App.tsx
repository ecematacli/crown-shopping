import React from 'react'
import { gql, useQuery } from '@apollo/client'


import GlobalStyles from './Global.styles';
import { AppContainer, AppWrapper } from './App.styles';
import Header from './components/header/Header';

const App: React.FC = () => {
  const ME = gql`
    query me {
      me {
        activeCart {
          id
          lineItems {
            id
            quantity
          }
        }
      }
    }
  `
  // const { data } = useQuery(ME)
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')


  return (
    <AppContainer>
      <GlobalStyles />
      <AppWrapper>
        <Header />
      </AppWrapper>
    </AppContainer>
  )
}

export default App
