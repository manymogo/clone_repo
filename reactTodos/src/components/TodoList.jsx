import { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

export default function TodoList({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterTodos = () => {
    if (search === '') {
      return todos;
    }

    return todos.filter((todo) => todo.content.toUpperCase().includes(search.toUpperCase()));
  };

  return (
    <div className='TodoList'>
      <h4>Todos</h4>
      <input onChange={onChangeSearch} placeholder='검색어를 입력해주세요' />
      <div className='todos_wrapper'>
        {filterTodos().map((todo) => (
          <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
