import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const SMTP = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/Basics/EmailAndCommunication/SMTP';

  return (
    <>
      <PageLayout>
        <PageTitle title="SMTP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SMTP;
