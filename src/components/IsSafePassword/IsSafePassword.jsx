import zxcvbn from 'zxcvbn';

export const IsSafePassword = ({ value }) => {
  const score = zxcvbn(value).score;
  const scoreWidth = (score * 100) / 4;
  const color = () => {
    switch (score) {
      case 0:
        return '#e10000';
      case 1:
        return '#ffaa65';
      case 2:
        return '#fff700';
      case 3:
        return '#04fd00';
      case 4:
        return '#04fd00';
      default:
        return '#ffffff';
    }
  };

  const changePasswordColor = () => ({
    width: `${scoreWidth}%`,
    height: '4px',
    background: color(),
    borderRadius: '4px',
  });
  const progressContainer = () => ({
    width: '100 %',
    height: '4px',
    borderRadius: '4px',

    background: 'rgba(229, 241, 239, 1)',
  });
  return (
    <div className="safe_password" style={progressContainer()}>
      <div style={changePasswordColor()}></div>
    </div>
  );
};
