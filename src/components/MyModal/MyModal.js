import './MyModal.css'

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import RefereeTraining from '../../pages/Referee/RefereeTraining/RefereeTraining';

function Example({ uid, buttonTitle }) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    // const closeBtn = (
    //     <button className="close" onClick={toggle} type="button">
    //         X
    //     </button>
    // );

    const closeBtn = (
        <Button className="close" onClick={toggle} size="lg" color='danger' outline>
            X
        </Button>
    );

    return (
        <div>
            <Button color="primary" size="lg" onClick={toggle} style={{ width: "20rem", height: "5rem", fontSize: "1.75rem", fontWeight: "bold" }}>
                {buttonTitle}
            </Button>
            <Modal isOpen={modal} toggle={toggle} backdrop="static" size='xl' centered={true}>
                <ModalHeader toggle={toggle} close={closeBtn}>Input Training Record</ModalHeader>
                <ModalBody>
                    <RefereeTraining uid={uid} />
                </ModalBody>
            </Modal>
        </div>
    );
}

export default Example;