import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TextMessaging = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/Basics/EmailAndCommunication/TextMessaging';

  return (
    <>
      <PageLayout>
        <PageTitle title="Application Layer - Email & Communication - Text Messaging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TextMessaging;