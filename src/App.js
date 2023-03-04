import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";
import store from "./utils/store";
import {Provider} from 'react-redux';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children : [
        {
          path: '/',
          element: <MainContainer />
        },
      {
        path : '/watch',
        element : <WatchPage />
      }
      ]
    }
  ]
  )

  return (
   
      <Provider store={store} >
        <div className='h-full'>
    <Header/>
    <RouterProvider router={appRouter}>
     <Body/>
    </RouterProvider>
    </div>
    </Provider>
  
  );
}

export default App;


/**
 * 
 * plan so far
 * 
 * Head
 * Body 
 *  Sidebar 
 *    MenuItems 
 *  MainContainer
 *    buttons on top 
 *    Video Container
 *       video cards 
 *  
 *  
 */