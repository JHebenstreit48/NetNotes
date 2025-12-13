import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Protections = () => {
  const markdownFilePath = 'RouteAndSwitch/Switching/Advanced/STP/Protections';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="STP - Protections (BPDU/Root/Loop Guard)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Protections;