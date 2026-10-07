import { Fragment, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import ContentTemplate from './components/ContentTemplate';
import { HUB_SLUGS, PAGES } from './content';
import Home from './views/Home';
import { Contact, IndustryHub, InsightsHub, NotFound, ServicesHub } from './views/Hubs';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesHub />} />
        <Route path="/insights" element={<InsightsHub />} />
        <Route path="/contact" element={<Contact />} />
        {HUB_SLUGS.map(hub => (
          <Fragment key={hub}>
            <Route path={`/${hub}`} element={<IndustryHub hub={hub} />} />
          </Fragment>
        ))}
        {PAGES.map(page => (
          <Fragment key={page.slug}>
            <Route path={`/${page.slug}`} element={<ContentTemplate page={page} />} />
          </Fragment>
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
