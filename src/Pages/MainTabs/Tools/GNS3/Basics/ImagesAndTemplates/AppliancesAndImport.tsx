import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const AppliancesAndImport = () => {
  const markdownFilePath = 'Tools/GNS3/Basics/ImagesAndTemplates/AppliancesAndImport';

  return (
    <>
      <PageLayout>
        <PageTitle title="Appliances & Import" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AppliancesAndImport;
