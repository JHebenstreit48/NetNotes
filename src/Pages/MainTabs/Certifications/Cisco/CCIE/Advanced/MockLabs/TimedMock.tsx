import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const TimedMock = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Advanced/MockLabs/TimedMock';

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
