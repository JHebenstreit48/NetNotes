import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const BestPractices = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/Advanced/RemoteAccess/BestPractices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BestPractices;
