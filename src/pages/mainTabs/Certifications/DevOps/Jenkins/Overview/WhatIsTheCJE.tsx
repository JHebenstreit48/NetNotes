import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
