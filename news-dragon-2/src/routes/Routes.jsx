import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewLayout from "../layouts/NewLayout";
import News from "../pages/News/News";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params})=> fetch(`http://localhost:7000/category/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewLayout></NewLayout>,
        children: [
            {
                path: ':id',
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:7000/news/${params._id}`)
            }
        ]
    }    
]);

export default router;