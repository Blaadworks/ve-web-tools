import '../../styles/index.css'
import "reflect-metadata";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { bootstrap } from "./compositionRoot.ts";

bootstrap();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>,
)