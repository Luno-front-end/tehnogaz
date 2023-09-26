import { App } from './App';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Preload from './components/Preloader/Preload';

import 'modern-normalize/modern-normalize.css';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback={<Preload />}>
                <App />
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>,
);
