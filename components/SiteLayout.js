import Navbar from './Navbar';
import PageMeta from './PageMeta';

export default function SiteLayout({ title, description, path, children, className = '' }) {
  return (
    <div className={`page-shell ${className}`}>
      <PageMeta title={title} description={description} path={path} />
      <Navbar />
      <main id="main-content" className="site-main">{children}</main>
    </div>
  );
}
