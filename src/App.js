import './App.css';
import Notes from './components/Notes';
import NotesForm from './components/NotesForm';


import {
  createBrowserRouter,
  RouterProvider,
}from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Notes/> ,
  },
  {path:"/notesform",
    element:<NotesForm/> ,

  }




])



function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
