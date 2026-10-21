export const featuredProjects = [
  {
    slug: 'estimator',
    title: 'Internal estimating tool',
    category: 'Custom internal software',
    status: 'Used internally',
    summary: 'Turn customer documents into a structured estimate that an accounting team can review and export.',
    role: 'Concept, workflow design, and development',
    audience: 'An accounting team in manufacturing',
    challenge: 'An estimate brings together customer requirements, dimensions, quantities, and business pricing rules. Working across documents and spreadsheets makes that information difficult to keep together as a request changes.',
    approach: 'I designed and built an application around the team’s estimating process: read the customer files, organize the required information, apply business rules, and keep the result available for review before export.',
    outcome: 'The accounting team uses the tool as a regular part of its estimating work. The application brings the request, calculations, and review into one workflow.',
    steps: [
      { title: 'Read the request', description: 'Bring customer documents into the estimating workflow and extract the information needed for an estimate.' },
      { title: 'Review the details', description: 'Check dimensions, materials, and quantities. Resolve missing information before relying on the result.' },
      { title: 'Prepare the estimate', description: 'Apply business pricing rules and calculations, then review the estimate before exporting Excel or CSV output.' },
    ],
    safeguards: 'Human review remains part of the process. Customer information and company pricing rules are not included in the public demonstration.',
    demo: '/demos/estimator',
    demoLabel: 'Try the sample estimator',
    demoNote: 'The interactive example recreates a small part of the workflow using fictional requests and illustrative pricing.',
    technical: [
      'Document extraction feeds a structured review step, rather than treating extracted text as a finished estimate.',
      'Business rules and calculations are separated from the interface so the workflow can be maintained as requirements change.',
      'Excel and CSV outputs fit the team’s existing document workflow.',
    ],
    tags: ['Document processing', 'Business rules', 'Human review', 'Excel / CSV'],
  },
  {
    slug: 'email-to-erp',
    title: 'Email-to-ERP workflow',
    category: 'Workflow integration',
    status: 'Interactive demo',
    summary: 'Take a request from an email, check its details, and preview a business record ready for review.',
    role: 'Automation design and development',
    audience: 'Teams handling incoming customer requests',
    challenge: 'Incoming requests rarely match the fields in a business system. Someone needs to find the relevant details, match them to existing records, and check whether the request has already been handled.',
    approach: 'I built a public demonstration that extracts request details, compares them with sample records, flags duplicates, and makes uncertain matches visible to a reviewer.',
    outcome: 'The demo shows a readable record and the checks that led to it. It uses fictional data and previews the result without writing to a company system.',
    steps: [
      { title: 'Start with an email', description: 'Select a fictional customer request containing the details a team would normally read and re-enter.' },
      { title: 'Check the information', description: 'Review extracted fields and sample record matches. Duplicate and uncertain requests take a separate review path.' },
      { title: 'Preview the record', description: 'See the structured result and resolve outstanding details before considering a real system handoff.' },
    ],
    safeguards: 'The demonstration is isolated from company inboxes and business systems. Review states make missing or uncertain information explicit.',
    demo: '/demos/email-to-erp',
    demoLabel: 'Try the email workflow',
    demoNote: 'All requests, matches, and results in the public demo are fictional. No email is sent and no live business record is created.',
    technical: [
      'The workflow separates extraction, record matching, duplicate checks, and output preparation.',
      'Repeatable request identifiers support duplicate detection.',
      'The public interface presents business fields first, with technical details available separately.',
    ],
    tags: ['JavaScript', 'Structured records', 'Duplicate checks', 'Review workflows'],
  },
  {
    slug: 'sop-converter',
    title: 'SOP document converter',
    category: 'Document automation',
    status: 'Built tool',
    summary: 'Convert spreadsheet procedures into consistently formatted Word documents.',
    role: 'Automation development',
    audience: 'Teams maintaining standard operating procedures',
    challenge: 'A spreadsheet is useful for organizing procedure content, but it is not always the format a team needs to read or distribute. Copying each procedure into a Word document creates repetitive formatting work.',
    approach: 'I built a Python tool that reads procedure content from a spreadsheet and produces formatted Word documents, keeping the transformation repeatable.',
    outcome: 'The tool gives procedure authors a repeatable route from spreadsheet content to a document they can review and share.',
    steps: [
      { title: 'Organize the source', description: 'Keep the procedure title, steps, and supporting information in the expected spreadsheet structure.' },
      { title: 'Generate the document', description: 'Convert the source content into headings, numbered steps, and consistent document formatting.' },
      { title: 'Review and share', description: 'Check the generated Word document before publishing it as a team procedure.' },
    ],
    safeguards: 'Formatting automation does not validate the procedure itself. The author still reviews the content and final document.',
    demo: null,
    demoLabel: null,
    demoNote: 'The example below uses fictional content to illustrate the input and resulting document structure.',
    technical: [
      'Python reads and organizes the spreadsheet content; a Node.js document generator produces the formatted Word files.',
      'A repeatable conversion process keeps document structure consistent across procedures.',
      'The output remains a Word document that the team can review and edit.',
    ],
    tags: ['Python', 'Spreadsheets', 'Word documents', 'Document formatting'],
  },
];

export const additionalProjects = [
  { slug: 'job-finder', title: 'My Job Finder', category: 'Web application', status: 'Public application', role: 'Developer', summary: 'An application bringing job discovery, document processing, matching, and application tracking into one place.', tags: ['Web applications', 'Document workflows'] },
  { slug: 'jarvis', title: 'JARVIS', category: 'Personal AI assistant', status: 'Personal project', role: 'Co-developer, built with a friend', summary: 'A personal assistant exploring voice interaction, desktop tools, and human approval for consequential actions.', tags: ['Next.js', 'TypeScript', 'Local AI'] },
  { slug: 'taskflow', title: 'Taskflow', category: 'Mobile application', status: 'Active project', role: 'Mobile app developer', summary: 'A mobile goal-planning app that organizes larger goals into small steps, reminders, and progress views.', tags: ['React Native', 'Expo', 'SQLite'] },
  { slug: 'met-art-explorer', title: 'Met Art Explorer', category: 'Web application', status: 'Portfolio project', role: 'Full-stack developer', summary: 'A museum collection explorer with artwork search, accounts, favourites, and saved search history.', tags: ['Next.js', 'React', 'REST API'] },
];

export function getProject(slug) {
  return featuredProjects.find((project) => project.slug === slug) || null;
}
