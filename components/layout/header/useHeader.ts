import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import { ME } from '../../../graphql/queries/customer';
import { me } from '../../../graphql/queries/types/me';

const useHeader = () => {
  const { data } = useQuery<me>(ME);
  return { data };
};

export default useHeader;
