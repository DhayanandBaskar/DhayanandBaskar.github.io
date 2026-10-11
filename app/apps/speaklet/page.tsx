import AppContent from '../AppContent';
import { appPages, pageMetadata } from '../../../content/apps.mjs';
export const metadata = pageMetadata(appPages.speaklet);
export default function Speaklet() { return <AppContent page="speaklet"/>; }
