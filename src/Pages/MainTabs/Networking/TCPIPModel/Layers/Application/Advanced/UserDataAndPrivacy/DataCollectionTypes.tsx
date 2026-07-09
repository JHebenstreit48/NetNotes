import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
