import { Breadcrumb } from 'react-bootstrap';
import { useAppSelector } from '../../redux/hooks';

const Breadcrumbs: React.FC = () => {
  const owner = useAppSelector(state => state.repoInfo.owner);
  const repo = useAppSelector(state => state.repoInfo.repo);

  function NormalizeString(str: string) {
    return str.replace(/_/g, ' ');
  }

  return (
    <Breadcrumb>
      <Breadcrumb.Item href={`https://github.com/${owner}`}>{NormalizeString(owner)}</Breadcrumb.Item>
      <Breadcrumb.Item href={`https://github.com/${owner}/${repo}`}>
      {NormalizeString(repo)}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Breadcrumbs;
