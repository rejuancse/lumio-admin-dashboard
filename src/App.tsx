import Route from './components/Route';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
// import BasicTable from './pages/BasicTable';
import ButtonsAlerts from './pages/ButtonsAlerts';

function App() {
    return (
        <div>
            <Sidebar />
            <div className="main-wrapper">
                <Route path="/">
                    <Dashboard />
                </Route>
                {/* <Route path="/basic-tables">
                    <BasicTable />
                </Route> */}
                <Route path="/buttons-alerts">
                    <ButtonsAlerts />
                </Route>
            </div>
        </div>
    )
}

export default App
