import { render, screen, waitFor } from '@testing-library/react';
import User from '../../pages/User/User';
import { testRender } from "../TestUtil";
import wait from 'waait';
import store from "../../state/store"
import { BrowserRouter as Router } from "react-router-dom"
import { act } from 'react-dom/test-utils';
import { updateUser } from '../../state/user';
import { user1 } from '../testData';


describe('<User />',()=>{
  
  it("has the user text",async ()=>{
    const user=testRender(
    <Router>
      <User/>
    </Router>
    , { store, });
      const back = screen.getByText("Back to Users")
        expect(back).toBeInTheDocument()
        act(()=>{
          store.dispatch(updateUser({user:user1}));
          })
          
          await waitFor(() => wait(3));
        //   const fullname = screen.getByText("Shayne Hickle")
          const nouser= screen.getByText("No User Found")
          expect(nouser).toBeInTheDocument()
        //   expect(fullname).toBeInTheDocument()
      
  })
  it("Matches snapshot",()=>{
    const user=testRender(
      <Router>
        <User/>
      </Router>
      , { store, });
    expect(user).toMatchSnapshot()
})
})