import { render } from 'preact';
import { LocationProvider, Route } from 'preact-iso';

import { Header } from './header/Header.js';
import { Home } from './pages/Home/index.jsx';
import './index.css';

export function App() {
  return (
    <LocationProvider>
      <Header />
      <main class='flex flex-col items-center justify-center max-w-5xl mx-auto mt-20 sm:p-8'>
        <Route path='/' component={Home} />
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById('app'));
