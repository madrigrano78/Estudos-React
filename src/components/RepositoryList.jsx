import '../styles/global.scss'
import '../styles/repositories.scss'

import { RepositoryItem } from './RepositoryItem'

const salada = {
  name: 'salada',
  description: 'Forms in react',
  link: 'http://www.google.com',
  subtitle: 'Acess repository',
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem comidas={salada} />
        <RepositoryItem comidas={salada} />
        <RepositoryItem comidas={salada} />
        <RepositoryItem comidas={salada} />
      </ul>
    </section>
  )
}
