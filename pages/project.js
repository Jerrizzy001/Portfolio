export default function LegacyProjects() { return null; }
export function getServerSideProps() { return { redirect: { destination: "/work", permanent: true } }; }
