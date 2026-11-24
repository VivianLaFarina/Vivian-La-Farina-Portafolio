import { useEffect, useRef } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { usePreferences } from './context/PreferencesContext';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { BoxCursor } from './components/BoxCursor';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Blog from './pages/Blog';
import Article from './pages/Article';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Thanks from './pages/Thanks';
import NotFound from './pages/NotFound';

function RouteScroll() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);
  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    document.getElementById('main')?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function Layout() {
  const { t } = usePreferences();
  return <>
    <a className="skip-link" href="#main">{t.skip}</a>
    <RouteScroll />
    <SiteHeader />
    <main id="main" className="container" tabIndex="-1"><Outlet /></main>
    <SiteFooter />
    <BoxCursor />
  </>;
}

export default function App() {
  return <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:slug" element={<Article />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="contact" element={<Contact />} />
      <Route path="menu" element={<Navigate to="/" replace />} />
      <Route path="thanks" element={<Thanks />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>;
}
