import * as React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import {Main} from "./components/Main/Main.tsx";
import {StrictMode} from "react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
