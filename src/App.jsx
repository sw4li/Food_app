import Menu from './components/Menus'
import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom';
function App() {

    return (
        <div>
            <Router>
                <Menu />
            </Router>
        </div>
    );
}
export default App