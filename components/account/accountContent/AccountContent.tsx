import { useRouter } from 'next/router';

const AccountContent = () => {
  const router = useRouter();

  console.log('routr', router)
  return (
    <div>HEY THIS IS PATH {router.pathname}</div>
  );
};

export default AccountContent;
