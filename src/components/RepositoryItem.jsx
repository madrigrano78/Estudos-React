export function RepositoryItem(props) {
  return (
    <li>
      <strong> {props.comidas.name}</strong>
      <p> {props.comidas.description}</p>

      <a href={props.comidas.link}>{props.comidas.subtitle ?? 'Acessar Repositório'}</a>
    </li>
  )
}
