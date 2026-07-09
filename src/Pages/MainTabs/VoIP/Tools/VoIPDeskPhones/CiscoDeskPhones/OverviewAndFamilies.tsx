import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
