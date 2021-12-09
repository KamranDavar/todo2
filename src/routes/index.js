import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Content} from '../components/layout/Content';
import {Header} from '../components/layout/Header';

export default function Router() {
    return <>
        <BrowserRouter>
            <Header/>
            <Content>
                <Routes>
                    <Route path="/" element={<>welcome</>}/>
                    <Route path="/about" element={<>about</>}/>
                    <Route path="/tasks/" element={<>tasks</>}/>
                    <Route path="/tasks/form" element={<>create form</>}/>
                    <Route path="/tasks/form/:id" element={<>edit form</>}/>
                    <Route path="/tasks/view/:id" element={<>view form</>}/>
                </Routes>
            </Content>
        </BrowserRouter>
    </>
}