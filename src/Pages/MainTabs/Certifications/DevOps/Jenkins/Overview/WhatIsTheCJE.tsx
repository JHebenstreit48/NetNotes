import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const WhatIsTheCJE = () => {
  const markdownFilePath = 'Certifications/DevOps/Jenkins/Overview/WhatIsTheCJE';

  return (
    <>
      <PageLayout>
        <PageTitle title="What is the CJE?" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhatIsTheCJE;
