import { Users, Messages, Profile, SelectUser, Password, SignUp } from "./pages"
import { Header, Sidebar } from "./components";
import { Route, Redirect } from "react-router-dom";


const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="pageWrapper">
        <div className="container">
          <div className="contentWrapper">
            <Route exact path="/" render={() => <Password />} />
            <Route path="/:page" render={() => <Sidebar />} />
            <Route path="/profile/:userId?" render={() => <Profile />} />
            <Route path="/messages/:userId?" render={() => <Messages />} />
            <Route path="/users" render={() => <Users />} />
            <Route path="/sign-up" render={() => <SignUp />} />
            <Route path="/select-user" render={() => <SelectUser />} />
            <Redirect from="/" exact to="/" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;














































// function App() {
//   return (
//     <div>
//       hello!
//     </div>
//   );
// }

// export default App;
