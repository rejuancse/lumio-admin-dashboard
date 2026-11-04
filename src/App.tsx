import useNavigation from './hooks/useNavigation';
import Route from './components/roots/Route';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import BasicTable from './pages/BasicTable';
import DefaultButtons from './pages/DefaultButtons';
import DefaultAlerts from './pages/DefaultAlerts';
import LoginScreen from './pages/LoginScreen';
import RegisterNow from './pages/RegisterNow';
import Profiles from './pages/Profiles';

function App() {
    const { currentPath } = useNavigation();
    const hideSidebar =
        currentPath === '/login-screen' ||
        currentPath === '/register-now';

    return (
        <div>
            { !hideSidebar && <Sidebar /> }

            { !hideSidebar &&
                <div className="main-wrapper">
                    <Route path="/">
                        <Dashboard />
                    </Route>
                    <Route path="/basic-tables">
                        <BasicTable />
                    </Route>
                    <Route path="/default-buttons">
                        <DefaultButtons />
                    </Route>
                    <Route path="/default-alerts">
                        <DefaultAlerts />
                    </Route>
                    <Route path="/profiles">
                        <Profiles />
                    </Route>
                </div>
            }

            <Route path="/login-screen">
                <LoginScreen />
            </Route>

            <Route path="/register-now">
                <RegisterNow />
            </Route>
        </div>
    )
}

export default App
