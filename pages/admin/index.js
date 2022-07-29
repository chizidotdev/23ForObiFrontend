import { useEffect, useState } from 'react';
import { MdMenuOpen } from 'react-icons/md';
import { useRouter } from 'next/router';
import styles from './admin.module.scss';
import Sidebar from './../../components/Admin/Sidebar';
import AdminNav from '../../components/Admin/AdminNav';
import AdminPage from '../../components/Admin/AdminPage';
import AdminDashboard from './../../components/Admin/AdminDashboard';
import useAuthStore from '../../store/authStore';

const admin = () => {
  const { adminUser } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (!adminUser) {
        router.push('/admin/login');
      }
    };
  }, [adminUser, router]);

  const [toggle, setToggle] = useState(true);

  return (
    <AdminPage>
      <div className={`${styles.admin}`}>
        <div className={styles.admin__dashboard}>
          <AdminNav />
          <AdminDashboard />
        </div>
      </div>
    </AdminPage>
  );
};

export default admin;
