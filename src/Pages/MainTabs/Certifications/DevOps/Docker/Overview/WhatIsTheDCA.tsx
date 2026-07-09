import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
