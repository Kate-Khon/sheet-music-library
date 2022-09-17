import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import './RootNavigator.scss';
import { Home } from '../Home/Home';
import { Library } from '../Library/Library';
import { Liturgy } from '../Liturgy/Liturgy';
import { Ectenias } from '../Ectenias/Ectenias';
import { Kijowska } from '../Ectenias/Kijowska/Kijowska';

export const RootNavigator = () => {
  const getClasses = (status) => {
    return status.isActive ? 'list__link is-active' : 'list__link';
  };

  return (
    <>
      <nav className="navigation">
        <div className="list">
          <NavLink
            to="/"
            className={getClasses} 
          >
            Home
          </NavLink>
          <NavLink
            to="/library"
            className={getClasses} 
          >
            Library
          </NavLink>
        </div>
      </nav>

      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/library">
            <Route index element={<Library />} />
            
            <Route path="liturgy">
              <Route index element={<Liturgy />} />
              
              <Route path="ectenias">
                <Route index element={<Ectenias />} />
                <Route path="kijowska" element={<Kijowska />} />
              </Route>
            </Route>
          </Route>
          <Route path="/home" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  )
}