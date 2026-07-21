import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
