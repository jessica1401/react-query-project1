import { useQuery } from 'react-query';
import axios from 'axios';

const fetchAlltodos = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/')
}

export const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery('super-heros', fetchAlltodos);
  if (isLoading) {
    return <h2>Is Loading ...</h2>;
  }
  return (
    <>
      <h2>Todo List</h2>
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.title}</div>;
      })}
    </>
  );
};
