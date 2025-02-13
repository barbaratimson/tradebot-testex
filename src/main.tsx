import {createRoot} from 'react-dom/client'
import './index.scss'
import {Main} from "./components/Main/Main.tsx";
import {StrictMode} from "react";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <StrictMode>
            <Main/>
        </StrictMode>
    </Provider>
)
