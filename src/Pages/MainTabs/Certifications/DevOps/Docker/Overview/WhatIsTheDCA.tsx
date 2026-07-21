import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const WhatIsTheDCA = () => {
  const markdownFilePath = 'Certifications/DevOps/Docker/Overview/WhatIsTheDCA';

  return (
    <>
      <PageLayout>
        <PageTitle title="What is the DCA?" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhatIsTheDCA;
