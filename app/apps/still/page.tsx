import AppContent from '../AppContent';
import { appPages, pageMetadata } from '../../../content/apps.mjs';
export const metadata = pageMetadata(appPages.still);
export default function Still() { return <AppContent page="still"/>; }
