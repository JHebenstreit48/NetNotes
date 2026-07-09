import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DataVsControlVsMgmt = () => {
  const markdownFilePath = 'Networking/Foundations/Advanced/PlanesAndTraffic/DataVsControlVsMgmt';

  return (
    <>
      <PageLayout>
        <PageTitle title="Data vs Control vs Mgmt" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DataVsControlVsMgmt;
