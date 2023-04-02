import { IconButton } from 'components/IconButton/IconButton';
import HomeTab from 'components/HomeTab/HomeTab';
import { ReactComponent as EditIcon } from 'images/edit-pensil.svg';

const Home = () => {
  return (
    <>
      <table className="transactionsTable">
        <thead>
          <tr>
            <th className="cell">Date</th>
            <th className="cell">Type</th>
            <th className="cell">Category</th>
            <th className="cell">Comment</th>
            <th className="cell textAlignL">Sum</th>
            <th className="cell"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="cell">2022-01-01</td>
            <td className="cell">+</td>
            <td className="cell">Groceries</td>
            <td className="cell">Bought food for week</td>
            <td className="cell">5 000.00</td>
            <td className="cell actions">
              <IconButton>
                <EditIcon />
              </IconButton>
              <button href="#" className="button button--small tableButton">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="cell">2022-01-01</td>
            <td className="cell">+</td>
            <td className="cell">Groceries</td>
            <td className="cell">Bought food for week</td>
            <td className="cell">5 000.00</td>
            <td className="cell actions">
              <IconButton>
                <EditIcon />
              </IconButton>
              <button href="#" className="button button--small tableButton">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="cell">2022-01-01</td>
            <td className="cell">+</td>
            <td className="cell">Groceries</td>
            <td className="cell">Bought food for week</td>
            <td className="cell">5 000.00</td>
            <td className="cell actions">
              <IconButton>
                <EditIcon />
              </IconButton>
              <button href="#" className="button button--small tableButton">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <HomeTab />
    </>
  );
};

export default Home;
