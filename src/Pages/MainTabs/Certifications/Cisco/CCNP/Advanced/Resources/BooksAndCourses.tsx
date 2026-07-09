import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BooksAndCourses = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Advanced/Resources/BooksAndCourses';

  return (
    <>
      <PageLayout>
        <PageTitle title="Books & Courses" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BooksAndCourses;
