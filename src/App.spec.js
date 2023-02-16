import React from "react";

import App from "./App.jsx";
import {render} from "@testing-library/react";

describe('App', function () {
  it('match', () => {
    render(<App />)
  })
});
