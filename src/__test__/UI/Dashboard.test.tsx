import { render, screen } from '@testing-library/react';
import Dashboard from '../../pages/Dashboard/Dashboard';
import { testRender } from "../TestUtil";
import store from "../../state/store"
import { BrowserRouter as Router } from "react-router-dom"


describe('<Dashboard />',()=>{
  
  it("has the user text",()=>{
    const dashboard=testRender(
    <Router>
      <Dashboard/>
    </Router>
    , { store, });
      // render(<Dashboard />)
      const users = screen.getByText("Users")
      const usersWithLoan = screen.getByText("USERS WITH LOANS")
        expect(users).toBeInTheDocument()
        expect(usersWithLoan).toBeInTheDocument()
        const usersWithSave = screen.getByText("USERS WITH SAVINGS")
        expect(usersWithSave).toBeInTheDocument()

      
  })
  it("Matches snapshot",()=>{
    const dashboard=testRender(
      <Router>
        <Dashboard/>
      </Router>
      , { store, });
    expect(dashboard).toMatchSnapshot()
})
})