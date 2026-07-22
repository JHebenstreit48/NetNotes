import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const ConnectedDevices = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/Fundamentals/ConnectedDevices';

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