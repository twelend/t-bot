import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import Auth from './pages/Auth/Auth';
import Registration from './pages/Registration/Registration';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';

function App() {
const dispatch = useDispatch()
 
const url = process.env.REACT_APP_SERVER_URL;

useEffect(() => {
  axios.get(`${url}/item/search`)
    .then(res => res.data)
    .then((data) => data.content)
    .then((content) => {
        dispatch({type: 'GET_DATA', payload: [...content]})
    })
    .catch((err) => console.log(err))
})


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
