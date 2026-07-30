import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OverviewAndFamilies = () => {
  const markdownFilePath = 'VoIP/Tools/VoIPDeskPhones/CiscoDeskPhones/OverviewAndFamilies';

  return (
    <>
      <PageLayout>
        <PageTitle title="Overview & Families (88xx/78xx)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OverviewAndFamilies;
