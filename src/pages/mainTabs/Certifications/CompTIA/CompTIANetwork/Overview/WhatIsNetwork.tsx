import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WhatIsNetwork = () => {
  const markdownFilePath = 'Certifications/CompTIA/CompTIANetwork/Overview/WhatIsNetwork';

  return (
    <>
      <PageLayout>
        <PageTitle title="What is Network+?" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhatIsNetwork;
