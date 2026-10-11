import { appPages, pageMarkup } from '../../content/apps.mjs';
export default function AppContent({ page }: { page: keyof typeof appPages }) {
  return <><link rel="stylesheet" href="/apps/apps.css?v=4"/><div dangerouslySetInnerHTML={{ __html: pageMarkup(appPages[page]) }}/></>;
}
