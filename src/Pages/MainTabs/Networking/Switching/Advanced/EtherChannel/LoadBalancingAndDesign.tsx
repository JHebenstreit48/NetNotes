import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const LoadBalancingAndDesign = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/EtherChannel/LoadBalancingAndDesign';

  return (
    <>
      <PageLayout>
        <PageTitle title="Load Balancing & Design" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LoadBalancingAndDesign;