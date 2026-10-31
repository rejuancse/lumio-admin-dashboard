import useNavigation from './hooks/useNavigation';
import Route from './components/Route';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import BasicTable from './pages/BasicTable';
import ButtonsAlerts from './pages/ButtonsAlerts';
import LoginScreen from './pages/LoginScreen';

function App() {
    const { currentPath } = useNavigation();
    const hideSidebar = currentPath === '/login-screen';

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
        </div>
    )
}

export default App
