import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
