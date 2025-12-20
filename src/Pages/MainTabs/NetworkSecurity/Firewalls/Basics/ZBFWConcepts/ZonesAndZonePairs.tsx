import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ZonesAndZonePairs = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Basics/ZBFWConcepts/ZonesAndZonePairs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Zones & Zone-Pairs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ZonesAndZonePairs;
