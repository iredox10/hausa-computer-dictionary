import Home from './pages/Home'
import Register from './pages/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Category from './pages/Category'
import Dictionary from './pages/Dictionary'
import Word from './pages/Word'
import Admin from './pages/Admin'
import AddCategory from './pages/AddCategory'
import AddTopic from './pages/AddTopic'
import Topic from './pages/Topic'
import ManageTerms from './pages/ManageTerms'
import ManageWords from './pages/ManageWords'
import AddTerm from './pages/AddTerm'
import AddWord from './pages/AddWord'
import EditWord from './pages/EditWord'
function App() {
  return (
    <div className='bg-primary-color h-[100vh] '>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rijista' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/dictionary' element={<Dictionary />} />
          <Route path='/word/:id' element={<Word />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/add-category' element={<AddCategory />} />
          <Route path='/add-topic/:id' element={<AddTopic />} />
          <Route path='/manage-topic/:id' element={<Topic />} />
          <Route path='/manage-words/:id' element={<ManageWords />} />
          <Route path='/manage-terms/:id' element={<ManageTerms />} />
          <Route path='/add-term/:id' element={<AddTerm />} />
          <Route path='/add-word/:id' element={<AddWord />} />
          <Route path='/edit-word/:id' element={<EditWord />}  />
        </Routes>
      </Router>
    </div>
  )
}

export default App
