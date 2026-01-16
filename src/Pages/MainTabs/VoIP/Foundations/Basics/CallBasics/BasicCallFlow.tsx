import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BasicCallFlow = () => {
  const markdownFilePath = 'VoIP/Foundations/Basics/CallBasics/BasicCallFlow';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Basic Call Flow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BasicCallFlow;
