import css from './Plug.module.scss';

const Plug = ({ handleOpenModal }) => {
  return (
    <div className={css.container_btn}>
      <p className={css.text}>You don't have any transactions yet.</p>
      <button type="button" className={css.btn} onClick={handleOpenModal}>
        My First Transaction
      </button>
    </div>
  );
};

export default Plug;
