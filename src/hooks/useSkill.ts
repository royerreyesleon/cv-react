import { useSkillStore } from '../stores/useSkillStore';

export const useSkill = () => {
  const { skillIcons } = useSkillStore();
  return { skillIcons };
};
