import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TimedMock = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Advanced/MockExams/TimedMock';

  return (
    <>
      <PageLayout>
        <PageTitle title="Timed Mock" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TimedMock;
