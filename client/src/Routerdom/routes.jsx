import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout';
import Home from '../pages/Home';
import Postjob from '../pages/Postjob';

const routes =createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        children:[
            {index:true,element:<Home></Home>},
            {path:'/postjob',element:<Postjob></Postjob>},
        ]
    }
])

export  default routes