type Props = {
  className?: string;
  color?: string;
};

export const SkillsIconItem = ({ className, color }: Props) => (
  <i className={`${className || 'fa fa-li fa-tools'}`} style={{ color: color || '' }}></i>
);
