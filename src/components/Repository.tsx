import {useState, useEffect} from 'react';
import { RepositoryItem } from "./RepositoryItem"

import '../style/repositories.scss'

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function Repository() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/renansjs/repos')
          .then(response => response.json())
          .then(data => setRepositories(data))
  }, [])
  return (
    <section className="repository">
      <h1>Repository List</h1>
      
      <ul>
        {repositories.map(repository => {
         return  <RepositoryItem key={repository.id} repository={repository}/>
        })}
        
      </ul>
    </section>
  )
}