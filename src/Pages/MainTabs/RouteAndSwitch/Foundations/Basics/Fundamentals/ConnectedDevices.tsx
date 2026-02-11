import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConnectedDevices = () => {
  const markdownFilePath = 'RouteAndSwitch/Foundations/Basics/Fundamentals/ConnectedDevices';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Fundamentals - Devices and Interfaces" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConnectedDevices;