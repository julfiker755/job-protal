import React from 'react';
import Navber from '../shared/Navber';
import Fooder from '../shared/Fooder';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <>
            <Navber></Navber>
            <Outlet></Outlet>
            <Fooder></Fooder>
        </>
    );
};

export default Mainlayout;