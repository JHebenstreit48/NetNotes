import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const DataCollectionTypes = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/Advanced/UserDataAndPrivacy/DataCollectionTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Data Collection Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DataCollectionTypes;
