import type { Subpage } from '@/types/navigation';

const EmailAndCommunication: Subpage = {
  name: 'Email & Communication',
  subpages: [
    {
      name: 'SMTP',
      path: '/networking/tcp-ip-model/layers/application/basics/email-and-communication/smtp',
    },
    {
      name: 'IMAP',
      path: '/networking/tcp-ip-model/layers/application/basics/email-and-communication/imap',
    },
    {
      name: 'Text Messaging',
      path: '/networking/tcp-ip-model/layers/application/basics/email-and-communication/text-messaging',
    },
  ],
};

export default EmailAndCommunication;