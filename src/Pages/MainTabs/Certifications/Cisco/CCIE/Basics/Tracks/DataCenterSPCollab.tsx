import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DataCenterSPCollab = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Basics/Tracks/DataCenterSPCollab';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Data Center • SP • Collab" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DataCenterSPCollab;
