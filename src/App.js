import {NavLink, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Repository from "./component /Repositories";
import Contact from "./component /ContactMe"; 
import NotFound from "./component /NotFound";
import Home from "./component /Home";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import FirstRepo from "./component /FirstRepo";
import octocat from './Octocat.png';
import { Helmet } from "react-helmet";
import {useState, useEffect} from "react";




const ErrorFallback = ({ error, resetErrorBoundary }) => {

  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => resetErrorBoundary} className="border-green-400 border-2 p-3 hover:bg-emerald-800" >Try Again</button>
    </div>
  );
};



function App() {
  const activeLink = ' text-emerald-400 rounded-lg px-3 py-2 font-medium bg-slate-100 text-slate-900'  
  const normalLink = 'text-emerald-400 focus:ring-violet-300 rounded-lg px-3 py-2  font-medium hover:bg-cyan-700 hover:text-slate-900'

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/udofa18`
      )
      const data = await res.json()
      setItems(data)
      console.log(data)
    
  

      }
       fetchRepos() 
  }, []);


  const navigate = useNavigate()
  
 
  return (
    <div>
   
    <>

    <Helmet>
      <title> Daniels GitHub</title>
      <meta name="descripiton" content="Daniels Github Repository"/>
      <meta name="Keywords" content="Github, Daniel, Repositories, Dveloper"/>
    </Helmet>
      <div className="pt-10">
      <img className="w-1/12"  src={octocat} alt="github logo"/>
        <h1 className="mb-10 font-bold text-2xl">
          Daniels Git-Hub Repositories
        </h1>
        <hr></hr>
       
        <h1>AltSchool Assingment  2. GitHub Api </h1>
        <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => navigate("/Contact")}
      >
        <nav className="" >
          <ul className="flex  items-center space-x-2 text-xl my-8 sm:justify-center">
            <li 
            
            // " text-emerald-400 rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900" 
            >
              {" "}
              <NavLink  to="/" className={({isActive}) => isActive ? activeLink: normalLink }>Home</NavLink> 
            </li>
            <li >
              {" "}
              <NavLink to="/Repositories" className={({isActive}) => isActive ? activeLink: normalLink }>Repositories</NavLink>
            </li>
            <li >
              {" "}
              <NavLink to="/Contact" className={({isActive}) => isActive ? activeLink: normalLink }>Contact Me</NavLink>
            </li>
           
          </ul>
        </nav>
        {items ? (
        <div className="flex items-center sm:justify-center space-x-4 my-8 text-orange-400">
          <p> Followers: 
         {items.followers}</p>
         <p> Following: 
         {items.following}</p>
         <p> Total Repositories: 
         {items.public_repos}</p>
         </div>
         ): (
           'Loading...'
         )}
        <Suspense fallback={<div>Please Wait</div>}>
        <Routes>
            <Route path="/" element={<Home/> } />
            <Route path="/Repositories" element={<Repository/>} >
              <Route path="./FirstRepo" element={<FirstRepo/>}>

              </Route>
            </Route>

            <Route path="/Contact" element={<Contact/>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
          </ErrorBoundary>
          </div>
          <br></br> <br></br>
         <hr></hr>
       <br></br>
          <div className="bg-black border-black border h-60 pb-0">
          
          <div>
            <p className="px-4 py-4 text-2xl ">Connect with me today</p>
          </div>

          </div>
          </>
      
          </div>
          

  
      
     
   
  
)}

export default App
