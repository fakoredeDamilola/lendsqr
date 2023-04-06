
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

export function testRender(jsx:any, { store, ...otherOpts }:{store:any}) {
  return render(
  <Provider store={store}>
    {jsx}
    </Provider>
    , otherOpts);
}

