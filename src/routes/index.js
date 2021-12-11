import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Content, Header} from '../components/layout';
import {About, Error404, Tasks, Home} from '../pages';
import {View} from '../components/crud';

export default function Router() {
    return <>
        <BrowserRouter>
            <Header/>
            <Content>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/tasks/" element={<Tasks/>}/>
                    <Route path="/tasks/view/:id" element={<View/>}/>
                    <Route element={<Error404/>}/>
                </Routes>
            </Content>
        </BrowserRouter>
    </>
}