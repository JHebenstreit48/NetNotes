import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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