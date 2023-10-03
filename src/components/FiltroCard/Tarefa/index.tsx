import * as S from './styles'

const Tarefa = () => (
  <S.Card>
    <S.Titulo>Nome da tarefa</S.Titulo>
    <S.Tag>importantes</S.Tag>
    <S.Tag>pendentes</S.Tag>
    <S.Descricao></S.Descricao>
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)

export default Tarefa
