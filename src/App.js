import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './NavBar.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create.js';
import BlogDetail from './BlogDetail.js';
import NotFound from './NotFound.js';

function App() {

  const title = "New Blog Page";
  const likes = 50;
  const person = { name:'APL', gender:'male'};
  const link = "htpps://www.google.com"

  return (
    <Router>
      <div className="App">
          
          {/* <Nav />
          <Routes>
            <Route path='/' element = {<Blog1/>} />
            <Route path='/blog2' element = {<Blog2 />}/>
            <Route path='blog3' element = { <Blog3 />} />
          </Routes> */}

          <NavBar />
          <div className="content">
            {/* <h1>{title}</h1>
            <p>Liked {likes} times</p> */}
            {/* <p>{ person.name }</p> */}
            {/* <p>{10}</p>
            <p>{"HeLlO StRiNg"}</p>
            <p>{ [1,2,3,4,5] }</p>
            <p>{ Math.random() }</p> */}
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/create'>
                <Create />
              </Route>
              <Route path='/blogs/:id'>
                <BlogDetail />
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          </div>

    </div>
    </Router>
  );
}

export default App;
