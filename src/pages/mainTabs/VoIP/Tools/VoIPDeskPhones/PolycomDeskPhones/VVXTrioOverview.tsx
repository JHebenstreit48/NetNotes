import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
