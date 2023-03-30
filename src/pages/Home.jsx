import { useDispatch } from 'react-redux';
import {
  register,
  logIn,
  newTransaction,
  getCategories,
} from 'redux/auth/operations';

const Home = () => {
  const dispatch = useDispatch();

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
    const data = {
      transactionDate: form.elements.transactionDate.value,
      type: 'EXPENSE',
      categoryId: form.elements.categoryId.value,
      comment: 'Some comment',
      amount: 0 - +form.elements.amount.value,
    };
    dispatch(newTransaction(data)).unwrap();
    form.reset();
  };

  const handleGetCategories = () => {
    console.log('handleGetCategories');
    dispatch(getCategories()).unwrap();
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
          <option value="c9d9e447-1b83-4238-8712-edc77b18b739">Products</option>
          <option value="27eb4b75-9a42-4991-a802-4aefe21ac3ce">Car</option>
          <option value="self care">Self Care</option>
          <option value="education">Education</option>
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
    </>
  );
};

export default Home;
