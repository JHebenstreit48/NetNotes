import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
