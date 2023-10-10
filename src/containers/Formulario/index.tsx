import { MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes } from './styles'

const Formulario = () => (
  <MainContainer>
    <Titulo>Nova tarefa</Titulo>
    <Form>
      <Campo type="text" placeholder="Título"></Campo>
      <Campo as="textarea" placeholder="Descrição da tarefa"></Campo>
      <Opcoes></Opcoes>
      <div>
        <p>Prioridade</p>
        <input name="prioridade" type="radio" id="urgente"></input>
        <label htmlFor="urgente">Urgente</label>

        <input name="prioridade" type="radio" id="importante"></input>
        <label htmlFor="importante">Importante</label>

        <input name="prioridade" type="radio" id="normal"></input>
        <label htmlFor="normal">Normal</label>
      </div>

      <button type="submit">Cadastrar</button>
    </Form>
  </MainContainer>
)

export default Formulario
