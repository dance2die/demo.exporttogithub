import * as React from "react";
import { render } from "react-dom";
import { Provider, Consumer, ProviderStore } from "./components/Provider.tsx";

const App = () => (
  <div>
    <Provider>
      <Consumer>
        {(store: ProviderStore) => (
          <div>
            <span>Theme Color: </span>
            <p style={{ color: store.state.themeColor }}>
              {store.state.themeColor}
            </p>
          </div>
        )}
      </Consumer>
    </Provider>
  </div>
);

render(<App />, document.getElementById("root"));
