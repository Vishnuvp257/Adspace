import React, { useState } from 'react';
import { useRouter } from 'next/router';

import Sidebar from '@/components/Sidebar';
import CreateForm from '@/components/Form/CreateForm';
import RegisteredForm from '@/components/Form/RegisteredForm';

import styles from '@/styles/SpaceName.module.css';

const registeredArray = [{
    name: 'vishnu',
    code: 12356,
    status: '✅'
}, {
    name: 'prakash',
    code: 45678,
    status: '⚓'
}, {
    name: 'srivarsha',
    code: 78718,
    status: '❌'
},
{
    name: 'rose',
    code: 45671,
    status: '⚓'
}, {
    name: 'rose',
    code: 45671,
    status: '⚓'
}]

function SpaceName(props) {
    const [showModal, setShowModal] = useState(false);
    const [registeredForm, setRegisteredForm] = useState([]);

    const router = useRouter();

    const submitHandler = (data) => {
        setRegisteredForm(prevState => {
            return [...prevState, data]
        })
    }

    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.formArea}>
                <CreateForm onSubmit={submitHandler} />
                <hr />
                <div className={styles.registedFormArea}>
                    {registeredArray.map((ra, i) =>
                        <RegisteredForm
                            key={i}
                            name={ra.name}
                            code={ra.code}
                            status={ra.status} />)}
                </div>
            </div>
        </div>
    );
}

export default SpaceName;
