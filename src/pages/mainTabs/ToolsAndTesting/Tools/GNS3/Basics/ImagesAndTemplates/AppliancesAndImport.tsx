import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
