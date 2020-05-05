import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Link, Route, Switch
} from "react-router-dom";
import {GenerateQr} from "./components/GenerateQr"
import {ScanQr} from "./components/ScanQr"

function App() {
    return (
        <div>
            <Router>
                <div>
                    <header>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/scan">Scan Qr</Link>
                                </li>
                                <li>
                                    <Link to="/generate">Generate Qr</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>

                    <Switch>
                        <Route path="/scan">
                            <ScanQr/>
                        </Route>
                        <Route path="/generate">
                            <GenerateQr/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
