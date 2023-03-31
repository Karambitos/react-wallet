import { useDispatch, useSelector } from 'react-redux';
import {
  register,
  logIn,
  newTransaction,
  getCategories,
  getTransactions,
  getSummaryController,
} from 'redux/auth/operations';

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.auth.categories);
  console.log(categories);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        username: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleSubmitLogin = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    ).unwrap();
    // form.reset();
  };
  const handleSubmitCreate = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const select = form.elements.categoryId;
    const type = select.selectedOptions[0].getAttribute('data-type');
    const amount =
      type === 'INCOME'
        ? +form.elements.amount.value
        : 0 - +form.elements.amount.value;
    const data = {
      transactionDate: form.elements.transactionDate.value,
      type: type,
      categoryId: select.value,
      comment: 'Some comment',
      amount: amount,
    };
    dispatch(newTransaction(data)).unwrap();
    // form.reset();
  };

  const handleGetCategories = () => {
    console.log('handleGetCategories');
    dispatch(getCategories()).unwrap();
  };

  const handleGetTransaction = () => {
    console.log('getTransactions');
    dispatch(getTransactions()).unwrap();
  };

  const handleGetSummaryController = () => {
    console.log('getSummaryController');
    dispatch(getSummaryController()).unwrap();
  };

  return (
    <>
      <h1>HOME</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className="form">
        <label className="label" htmlFor="name">
          Username
        </label>
        <input
          className="input"
          type="text"
          name="username"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagna"
          required
        />
        <label className="label" htmlFor="email">
          Email
        </label>
        <input className="input" type="email" name="email" required />
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          name="password"
          autoComplete="false"
          required
        />
        <button className="button" type="submit">
          Register
        </button>
      </form>
      <h2>LOgIN</h2>
      <h3>dsajkhkjdskjdsdskkdfhkhds@mail.com</h3>
      <form onSubmit={handleSubmitLogin} autoComplete="off" className="form">
        <label className="label" htmlFor="email">
          Email
        </label>
        <input className="input" type="email" name="email" required />
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          name="password"
          autoComplete="false"
          required
        />
        <button className="button" type="submit">
          LogIn
        </button>
      </form>
      <h2>Create Transaction</h2>
      <form onSubmit={handleSubmitCreate} autoComplete="off" className="form">
        <label className="label" htmlFor="email">
          Date
        </label>
        <input className="input" type="date" name="transactionDate" required />
        <label className="label" htmlFor="password">
          categoryId
        </label>
        <select name="categoryId">
          {categories.map(({ id, name, type }) => {
            return (
              <option key={id} data-type={type} value={id}>
                {name}
              </option>
            );
          })}
        </select>
        <label className="label" htmlFor="email">
          Amount
        </label>
        <input className="input" type="number" name="amount" required />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      <button onClick={handleGetCategories}>getCategories</button>
      <button onClick={handleGetTransaction}>getTransactions</button>
      <button onClick={handleGetSummaryController}>getSummaryController</button>
    </>
  );
};

export default Home;
