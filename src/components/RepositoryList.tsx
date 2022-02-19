import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem'

import '../styles/global.scss'
import '../styles/repositories.scss'

// https://api.github.com/orgs/rocketseat/repos
// https://api.github.com/users/madrigrano78/repos
interface Repository {
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  // useEffect dispara uma função quando algo acontecer nela. Ex: Variavel mudou.
  // recebe 2 parametros, 1 uma função 2 um array/lista, onde podemos trocar a variavel.
  // 2 parametro são as dependencias.
  // Cuidado para não deixar sem o 2º parametro. Se deixar, ele fica em loop.

  useEffect(() => {
    fetch('https://api.github.com/users/madrigrano78/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data))
  }, [])

  // no .map cada item do array vai executar uma função.
  // o .map também retorna algo, além de executar, diferente do forEach.
  //
  return (
    <section className="repository-list">
      <h1>Lista de repositórios @madrigrano78</h1>

      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  )
}
