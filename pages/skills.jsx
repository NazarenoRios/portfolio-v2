import styles from '../styles/ArticlesPage.module.css';
import SkillsCard from '../components/SkillCard/SkillsCard';
import { SimpleGrid } from '@chakra-ui/react';

import skillsdata from "./api/skillsdata"

const SkillsPage = () => {
  return (
    <>
      <h3>My <span className={styles.underline}>Skills</span></h3>
      <br/>
      <br/>
      <br/>
      <SimpleGrid minChildWidth="200px" spacing="150px" ml={100}>
        {skillsdata.map((skill,i) => (
          <SkillsCard key={i} name={skill.name} img={skill.img}/>
        ))}
      </SimpleGrid>
    <br/>
    <br/>
    </>
  );
};


export default SkillsPage;
