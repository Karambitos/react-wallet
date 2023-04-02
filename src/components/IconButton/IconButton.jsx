import css from './IconButton.module.scss';

export const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <button
      className={css.iconButton}
      onClick={onClick}
      {...allyProps}
    >
      <div className={css.iconButtonContainer}>{children}</div>
    </button>
  );
};

// IconButton.defaultProps = {
//   onClick: () => null,
//   children: null,
// };
