import React from "react";
import './App.css';
import PageScroller from "./components/PageScroller";
import Page from "./components/Page";
import Home from './pages/home'
import About from './pages/about'
import Links from './pages/links'

function App(props) {
  return(
        <PageScroller>
            <Page style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} navTitle='Hello'>
                <Home/>
            </Page>
            <Page style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} navTitle='About me'>
                <About/>
            </Page>
            <Page style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} navTitle='Contact'>
                <Links/>
            </Page>
        </PageScroller>
    );
}

export default App