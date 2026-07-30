import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
