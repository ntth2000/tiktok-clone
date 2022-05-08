import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from '~/components/GlobalStyles';
import { publicRoutes } from './routes';
import { DefaultLayout } from '~/components/Layouts';
function App() {
    return (
        <GlobalStyles>
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout === null) {
                            Layout = Fragment;
                        }
                        if (route.layout) {
                            Layout = route.layout;
                        }
                        return (
                            <Route
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                                key={index}
                            />
                        );
                    })}
                </Routes>
            </Router>
        </GlobalStyles>
    );
}

export default App;
