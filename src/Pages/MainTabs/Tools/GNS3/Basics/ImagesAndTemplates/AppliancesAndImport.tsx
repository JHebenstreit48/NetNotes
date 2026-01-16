import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AppliancesAndImport = () => {
  const markdownFilePath = 'Tools/GNS3/Basics/ImagesAndTemplates/AppliancesAndImport';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Appliances & Import" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AppliancesAndImport;
