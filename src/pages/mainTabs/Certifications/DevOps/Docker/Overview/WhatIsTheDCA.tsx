import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
