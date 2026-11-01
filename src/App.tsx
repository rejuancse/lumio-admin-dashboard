import useNavigation from './hooks/useNavigation';
import Route from './components/Route';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import BasicTable from './pages/BasicTable';
import ButtonsAlerts from './pages/ButtonsAlerts';
import LoginScreen from './pages/LoginScreen';
import RegisterNow from './pages/RegisterNow';

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
                    <Route path="/buttons-alerts">
                        <ButtonsAlerts />
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
