import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WhatIsTheCJE = () => {
  const markdownFilePath = 'Certifications/DevOps/Jenkins/Overview/WhatIsTheCJE';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="What is the CJE?" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhatIsTheCJE;
