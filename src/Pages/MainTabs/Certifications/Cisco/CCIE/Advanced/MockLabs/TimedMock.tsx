import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
