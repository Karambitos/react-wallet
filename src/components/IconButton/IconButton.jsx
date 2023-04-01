import css from './IconButton.module.scss';

export const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <button
      type="button"
      className={css.iconButton}
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </button>
  );
};

// IconButton.defaultProps = {
//   onClick: () => null,
//   children: null,
// };
