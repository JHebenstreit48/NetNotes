import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SSHCutoverPlaybook = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/ProtocolsAndStatuses/Advanced/DecommissionAndMigration/SSHCutoverPlaybook'));
const MailPOP3IMAP = lazy(() => import('@/Pages/MainTabs/Networking/Legacy/ProtocolsAndStatuses/Advanced/DecommissionAndMigration/MailPOP3IMAP'));

const DecommissionAndMigration: RouteObject[] = [
  {
    path: '/legacy/protocols-and-statuses/advanced/decommission-and-migration/ssh-cutover-playbook',
    element: <SSHCutoverPlaybook />,
  },
  {
    path: '/legacy/protocols-and-statuses/advanced/decommission-and-migration/mail-pop3-to-imap',
    element: <MailPOP3IMAP />,
  },
];

export default DecommissionAndMigration;
