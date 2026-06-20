import '../styles/index.css'
import "reflect-metadata";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./react_ui/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { bootstrap } from "./bootstrap/compositionRoot.ts";
import "bootstrap/dist/css/bootstrap.min.css";

bootstrap();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>,
)