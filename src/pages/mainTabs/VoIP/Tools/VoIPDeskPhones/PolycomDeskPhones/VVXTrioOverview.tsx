import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const VVXTrioOverview = () => {
  const markdownFilePath = 'VoIP/Tools/VoIPDeskPhones/PolycomDeskPhones/VVXTrioOverview';

  return (
    <>
      <PageLayout>
        <PageTitle title="VVX/Trio Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VVXTrioOverview;
