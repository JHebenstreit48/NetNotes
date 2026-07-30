import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WhatIsTheCCNP = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Basics/Overview/WhatIsTheCCNP';

  return (
    <>
      <PageLayout>
        <PageTitle title="What is the CCNP?" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhatIsTheCCNP;
