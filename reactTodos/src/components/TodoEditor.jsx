import { useRef, useState, useContext } from 'react';
import { TodoDispatchContext } from '../TodoContext';
import './TodoEditor.css';

export default function TodoEditor() {
  const { onCreate } = useContext(TodoDispatchContext);

  const [content, setContent] = useState('');
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClick = () => {
    if (content === '') {
      inputRef.current.focus();
      return;
    }

    onCreate(content);
    setContent('');
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClick();
    }
  };

  return (
    <div className='TodoEditor'>
      <input
        ref={inputRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder='새로운 Todo ...'
      />
      <button onClick={onClick}>추가</button>
    </div>
  );
}
