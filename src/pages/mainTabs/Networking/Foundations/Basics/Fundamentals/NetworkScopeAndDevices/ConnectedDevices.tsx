import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ConnectedDevices = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/Fundamentals/NetworkScopeAndDevices/ConnectedDevices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fundamentals - Connected Devices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConnectedDevices;