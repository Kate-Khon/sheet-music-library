/* eslint-disable react/jsx-no-comment-textnodes */
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import './RootNavigator.scss';
import { 
  litanieList, 
  antyfonas1List, 
  littleLitanies1List,
  antyfonas2List,
  antyfonas3List,
  takeABow,
} from '../../data/LiturgyData';

import { Home } from '../Home/Home';
import { Library } from '../Library/Library';
import { Liturgy } from '../Liturgy/Liturgy';
import { Collection } from '../Collection/Collection';
import { Item } from '../Item/Item';

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
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/library">
              <Route index element={<Library />} />

              //#region LITURGY

              {/* Polish paths (eng chars). Other - eng  */}
              <Route path="liturgia">
                <Route index element={<Liturgy />} />

                <Route path="ektenie-wielkie">
                  <Route index element={<Collection list={litanieList} />} />
                    {litanieList.map(litanie => (
                      <Route path={litanie.path} element={<Item toShow={litanie} />} />
                    ))}
                </Route>

                <Route path="antyfony1">
                  <Route index element={<Collection list={antyfonas1List} />} />
                    {antyfonas1List.map(antyfona => (
                      <Route path={antyfona.path} element={<Item toShow={antyfona} />} />
                    ))}
                </Route>

                <Route path="ektenie-male-1">
                  <Route index element={<Collection list={littleLitanies1List} />} />
                    {littleLitanies1List.map(littleLitanie1 => (
                      <Route path={littleLitanie1.path} element={<Item toShow={littleLitanie1} />} />
                    ))}
                </Route>

                <Route path="antyfony2">
                  <Route index element={<Collection list={antyfonas2List} />} />
                    {antyfonas2List.map(antyfona => (
                      <Route path={antyfona.path} element={<Item toShow={antyfona} />} />
                    ))}
                </Route>

                <Route path="antyfony3">
                  <Route index element={<Collection list={antyfonas3List} />} />
                    {antyfonas3List.map(antyfona => (
                      <Route path={antyfona.path} element={<Item toShow={antyfona} />} />
                    ))}
                </Route>

                <Route path="przyjdzcie-poklonmy-sie">
                  <Route index element={<Collection list={takeABow} />} />
                    {takeABow.map(item => (
                      <Route path={item.path} element={<Item toShow={item} />} />
                    ))}
                </Route>
                
              </Route>

              //#endregion
            </Route>
            <Route path="/home" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </>
  )
}