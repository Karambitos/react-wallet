import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';

const Home = () => {
  return (
    <div className="pageWrapper">
      <div className="aside">
        <h1>HOME</h1>
        <Balance />
        <Currency />
      </div>
      <div className="main">
        <table className="table">
          <tr>
            <th className="cell">Date</th>
            <th className="cell">Type</th>
            <th className="cell">Category</th>
            <th className="cell">Comment</th>
            <th className="cell">Sum</th>
            <th className="cell"></th>
          </tr>
          <tr>
            <td className="cell">2022-01-01</td>
            <td className="cell">Expense</td>
            <td className="cell">Groceries</td>
            <td className="cell">Bought food for week</td>
            <td className="cell">$50.00</td>
            <td className="cell actions">
              <button href="#" className="edit">
                I
              </button>
              <button href="#" className="button button--small">
                Delete
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Home;
