import "./App.css";
import DashboardPage from "./pages/dashboard/dashboard";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import LoginPage from "./pages/Auth/login/login";

function App() {
  return (
      <div className="App">
        <AuthenticatedTemplate>
          <DashboardPage />
        </AuthenticatedTemplate>

        <UnauthenticatedTemplate>
          <LoginPage />
        </UnauthenticatedTemplate>
      </div>
  );
}

export default App;
