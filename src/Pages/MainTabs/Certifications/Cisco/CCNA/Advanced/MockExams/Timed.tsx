import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Timed = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/MockExams/Timed';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Timed (120 min)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Timed;
