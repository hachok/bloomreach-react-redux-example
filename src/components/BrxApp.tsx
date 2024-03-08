/*
 * Copyright 2019-2023 Bloomreach
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useEffect, useRef } from 'react';
import { BrComponent, BrPage, BrPageContext } from '@bloomreach/react-sdk';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Menu } from './Menu';
import { buildConfiguration } from '../utils/buildConfiguration';
import { Banner } from './Banner';
import { Content } from './Content';
import { NewsList } from './NewsList';

export const BrxApp: React.FC = React.memo(() => {
  const location = useLocation();
  const counter2 = useRef(0);

  const configuration = buildConfiguration(`${location.pathname}${location.search}`, axios);
  const mapping = { Banner, Content, 'News List': NewsList, 'Simple Content': Content };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      counter2.current = 2;
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div style={{ border: '1px solid red' }}>
      Child component

      <BrPage configuration={configuration} mapping={mapping}>
        <header>
          <nav className="navbar navbar-expand-sm navbar-dark sticky-top bg-dark" role="navigation">

            <div className="bg-light">
              Counter2:
              {' '}
              { counter2.current }
            </div>

            <div className="container">
              <BrPageContext.Consumer>
                {(page) => page
                      && (
                      <Link to={page.getUrl('/')} className="navbar-brand">
                        {page.getTitle() || 'brXM + React = ♥️'}
                      </Link>
                      )}
              </BrPageContext.Consumer>
              <div className="collapse navbar-collapse">
                <BrComponent path="menu">
                  <Menu />
                </BrComponent>
              </div>
            </div>
          </nav>
        </header>
        <section className="container flex-fill pt-3">
          <BrComponent path="main" />
        </section>
        <footer className="bg-dark text-light py-3">
          <div className="container clearfix">
            <div className="float-left pr-3">&copy; Bloomreach</div>
            <div className="overflow-hidden">
              <BrComponent path="footer" />
            </div>
          </div>
        </footer>
      </BrPage>
    </div>
  );
});
