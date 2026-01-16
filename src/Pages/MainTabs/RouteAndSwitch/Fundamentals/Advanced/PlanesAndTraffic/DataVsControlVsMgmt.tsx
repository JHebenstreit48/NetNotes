import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DataVsControlVsMgmt = () => {
  const markdownFilePath = 'RouteAndSwitch/Fundamentals/Advanced/PlanesAndTraffic/DataVsControlVsMgmt';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Data vs Control vs Mgmt" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DataVsControlVsMgmt;
