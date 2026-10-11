import AppContent from './AppContent';
import { appPages, pageMetadata } from '../../content/apps.mjs';
export const metadata = pageMetadata(appPages.index);
export default function Apps() { return <AppContent page="index"/>; }
