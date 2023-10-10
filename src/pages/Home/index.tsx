import React from 'react'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'
import BotaoAdicionar from '../../components/BotaoAdicionar'

const Home = () => {
  return (
    <>
      <BarraLateral></BarraLateral>
      <ListaDeTarefas></ListaDeTarefas>
      <BotaoAdicionar></BotaoAdicionar>
    </>
  )
}

export default Home
