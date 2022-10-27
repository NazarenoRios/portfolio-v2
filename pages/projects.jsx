import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';
import { SimpleGrid } from '@chakra-ui/react';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      
      <SimpleGrid minChildWidth="300px" spacing="150px" className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid >
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: 'Projects', projects },
  };
}

export default ProjectsPage;
