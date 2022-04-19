import { useQuery } from 'react-query';
import axios from 'axios';

const fetchAlltodos = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos')
}

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery('super-heros', fetchAlltodos, { 
    // enabled: false
    select: (data) => {
      const allTodos = data.data.map(todo => todo.title);
      return allTodos;
    }
  });
  console.log(isFetching);
  if (isLoading) {
    return <h2>Is Loading ...</h2>;
  }

  if(isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <>
      <h2>Todo List</h2>
      <button onClick={refetch}>Clickl To Display</button>
      {/* {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.title}</div>;
      })} */}
      {data.map(todo => <div key={todo}>{todo}</div>)}
    </>
  );
};
