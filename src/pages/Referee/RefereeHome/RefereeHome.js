import './RefereeHome.css';

import Sidebar from '../../../components/Sidebar/Sidebar'
import RefereeCard from '../../../components/RefereeCard/RefereeCard';
import RefereeRecord from '../RefereeRecord/RefereeRecord';
import { useAuthContext } from '../../../hooks/useAuthContext';

export default function RefereeHome() {
  const { user } = useAuthContext();

  return (
    <div className="referee-home">
      <Sidebar />
      <div>
        <RefereeCard />

      </div>
    </div>
  )
}
