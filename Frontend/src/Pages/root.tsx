import { Route, Routes } from "react-router-dom";
import About from "./AboutUs/About";
import Contacts from "./Contacts/Contacts";
import Main from "./Main/Main";
import Page404 from "./Page404/Page404";
import Account from "./Account/Account";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path='*' element={<Page404 />} />
            <Route path="account" element={<Account />} />
        </Routes>
    );
};