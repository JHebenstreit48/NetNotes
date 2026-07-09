import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DataCenterSPCollab = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Basics/Tracks/DataCenterSPCollab';

  return (
    <>
      <PageLayout>
        <PageTitle title="Data Center • SP • Collab" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DataCenterSPCollab;
