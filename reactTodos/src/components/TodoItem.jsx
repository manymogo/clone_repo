import { memo } from 'react';
import './TodoItem.css';

function TodoItem({ id, content, createdDate, isDone, onUpdate, onDelete }) {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className='TodoItem'>
      <input onChange={onChangeCheckbox} checked={isDone} type='checkbox' />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(createdDate).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
}

export default memo(TodoItem);
