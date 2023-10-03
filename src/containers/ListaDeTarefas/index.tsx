import Tarefa from '../../components/FiltroCard/Tarefa'
import { Container } from './styles'

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      <li>
        <Tarefa></Tarefa>
        <Tarefa></Tarefa>
        <Tarefa></Tarefa>
        <Tarefa></Tarefa>
        <Tarefa></Tarefa>
      </li>
    </ul>
  </Container>
)

export default ListaDeTarefas
