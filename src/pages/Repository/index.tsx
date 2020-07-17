import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
        Voltar
      </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://api.adorable.io/avatars/100/abott@adorable.png" alt="Profile" />
          <div>
            <strong>Test</strong>
            <p>Test</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>0</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>0</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>0</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link
          to={`/`}
        >
          <div>
            <strong>Test</strong>
            <p>Test</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
