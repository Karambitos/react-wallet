const BaseStyle = () => {
  return (
    <>
      <div className="contentMaxWidth">
        <h2>1.2 Buttons</h2>
        <p>
          <button type="button">
            A <b>&lt;button&gt;</b> element without a className should have its
            styles reset, so it can be used as a semantic tag on other interface
            elements, like the arrows of a slider, a closing × or a burger menu.
          </button>
        </p>
        <div>
          <button className="button button--small" type="button">
            Type Button Small
          </button>
          <button className="button" type="button">
            Type Button
          </button>
          <button className="button button--secondary" type="button">
            Type Button Secondary
          </button>
          <button
            className="button button--secondary"
            disabled="disabled"
            type="button"
          >
            Type Button Secondary Disabled
          </button>
          <button className="button" disabled="disabled" type="button">
            Button Disabled
          </button>
        </div>
        <div>
          <h2>FORM</h2>
          {/* // TODO: ИГОРЬ */}
          {/* http://localhost:3000/react-wallet/BaseStyle */}
          <form>
            <input type="text" placeholder="Comment" />
            <input type="date" />
            <input type="password" />
            <input type="email" />
            <input type="url" />
            <input type="search" />
            <input type="number" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BaseStyle;
