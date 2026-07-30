import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
