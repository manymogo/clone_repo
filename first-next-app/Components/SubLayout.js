import style from './SubLayout.module.css';

export default function SubLayout({ children }) {
  return (
    <div className='subLayout'>
      <div>{children}</div>
      <footer className={style.footer}>@manymogo</footer>
    </div>
  );
}
