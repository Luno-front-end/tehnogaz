import React, { useState, Suspense } from 'react';
import HeroMob from './components/Mobile/HeaderMob';
import HeroDesk from './components/Desktop/Hero/Hero';

import Preload from './components/Preloader/Preload';

const SectionGoods = React.lazy(() => import('./components/Desktop/SectionOne/SectionOne'));
const AboutUs = React.lazy(() => import('./components/Desktop/SectionAboutUs'));
const Company = React.lazy(() => import('./components/Desktop/SectionСompany'));
const Footer = React.lazy(() => import('./components/Desktop/Footer'));
// import React, { useState } from 'react';
// import logo from "./logo.svg";
// import './App.css';

export const App = () => {
    const [width, setWidth] = useState<number>(document.body.clientWidth);

    window.onresize = function (e: Event) {
        if (e.currentTarget instanceof Window) {
            setWidth(e.currentTarget.screen.width);
        }
    };

    return (
        <>
            {width < 768 ? (
                <header className="wrapper-header">
                    <div className="container">
                        <HeroMob />
                    </div>
                </header>
            ) : (
                <>
                    <header className="wrapper-header">
                        <div className="container">
                            <HeroDesk />
                        </div>
                    </header>
                    <main>
                        <section className="section-slider">
                            <div className="container">
                                <div>
                                    <Suspense fallback={<Preload />}>
                                        <SectionGoods />
                                    </Suspense>
                                </div>
                            </div>
                        </section>
                        <section id="AuboutUs" className="section-aboutUs">
                            <div className="container">
                                <Suspense fallback={<Preload />}>
                                    <AboutUs />
                                </Suspense>
                            </div>
                        </section>
                        <section className="section-company">
                            <div className="container">
                                <Suspense fallback={<Preload />}>
                                    <Company />
                                </Suspense>
                            </div>
                        </section>
                    </main>
                    <footer className="footer">
                        <div className="container">
                            <Suspense fallback={<Preload />}>
                                <Footer />
                            </Suspense>
                        </div>
                    </footer>
                </>
            )}
        </>
    );
};
