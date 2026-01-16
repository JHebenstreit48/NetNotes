import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NSAPStructure = () => {
  const markdownFilePath = 'RouteAndSwitch/Legacy/OSIModel/Advanced/CLNSAndAddressing/NSAPStructure';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="NSAP Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NSAPStructure;
