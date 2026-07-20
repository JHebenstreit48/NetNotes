import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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