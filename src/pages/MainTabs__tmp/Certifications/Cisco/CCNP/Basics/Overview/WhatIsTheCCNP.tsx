import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
