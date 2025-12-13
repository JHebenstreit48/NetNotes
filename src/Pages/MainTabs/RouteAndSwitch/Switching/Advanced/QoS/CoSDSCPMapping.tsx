import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CoSDSCPMapping = () => {
  const markdownFilePath = 'RouteAndSwitch/Switching/Advanced/QoS/CoSDSCPMapping';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CoS/DSCP Mapping" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoSDSCPMapping;