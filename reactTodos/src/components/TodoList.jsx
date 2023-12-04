import { useState, useMemo, useContext } from 'react';
import { TodoStateContext } from '../TodoContext';
import TodoItem from './TodoItem';
import './TodoList.css';

export default function TodoList() {
  const todos = useContext(TodoStateContext);
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

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className='TodoList'>
      <h4>Todos</h4>
      <div>
        <div>전체 목록: {totalCount}</div>
        <div>완료 목록: {doneCount}</div>
        <div>미완 목록: {notDoneCount}</div>
      </div>
      <input onChange={onChangeSearch} placeholder='검색어를 입력해주세요' />
      <div className='todos_wrapper'>
        {filterTodos().map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
}