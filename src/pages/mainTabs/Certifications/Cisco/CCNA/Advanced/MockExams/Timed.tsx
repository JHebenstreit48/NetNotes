import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
