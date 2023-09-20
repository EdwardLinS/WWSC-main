import './RefereeRecord.css'

import { useCollection } from "../../../hooks/useCollection"
import Sidebar from "../../../components/Sidebar/Sidebar"
import MyModal from '../../../components/MyModal/MyModal';
import RefereeCard from '../../../components/RefereeCard/RefereeCard';

export default function RefereeRecord({ uid }) {
    const { documents, error } = useCollection(
        `users/${uid}/records`,
        ['uid', '==', uid],
        ['date', 'desc']
    )

    return (
        <div className="referee-home">
            <Sidebar />
            <RefereeCard />
            <div className="record">
                <h1>Training Record</h1>
                <table className='train-table'>
                    <tr className='train-head'>
                        <th>Training Date</th>
                        <th>Training Course</th>
                        <th>Training Organization</th>
                        <th>Instructor</th>
                        <th>Training Location</th>
                        <th></th>
                    </tr>
                    {documents ? documents.map((record) => (
                        <tr key={record.id} className='train-data'>
                            <td>{record.date}</td>
                            <td>{record.course}</td>
                            <td>{record.organization}</td>
                            <td>{record.instructor}</td>
                            <td>{record.location}</td>
                            <td><span class="material-symbols-outlined">delete</span></td>
                        </tr>
                    )) : <p>Loading records...</p>}
                </table >
                <div className="form-modal" >
                    <MyModal uid={uid} buttonTitle={"Add Training Record"} />
                </div>
            </div>
        </div >
    )
}
