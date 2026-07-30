import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const Timed = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/MockExams/Timed';

  return (
    <>
      <PageLayout>
        <PageTitle title="Timed (120 min)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Timed;
