import Head from "next/head";

const siteUrl = "https://www.jerrizzy.ca";
const defaultDescription =
  "Jerry Nwachi is an AI Engineer and software development student building practical web apps, data workflows, and automation systems.";

export default function PageMeta({
  title = "Jerry Nwachi | AI Engineer",
  description = defaultDescription,
  path = "/",
  image = "/projects/portfolio.png",
}) {
  const pageTitle = title.includes("Jerry Nwachi") ? title : `${title} | Jerry Nwachi`;
  const canonical = `${siteUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Jerry Nwachi" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content="Jerry Nwachi Portfolio" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="Jerry Nwachi portfolio preview" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
