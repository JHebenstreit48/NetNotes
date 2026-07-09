import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DomainBreakdown = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/ObjectiveMap/DomainBreakdown';

  return (
    <>
      <PageLayout>
        <PageTitle title="Domain Breakdown" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DomainBreakdown;
