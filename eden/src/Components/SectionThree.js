import React, { useEffect, useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SectionThree = () => {
    const [singleactive, SetsingleActive] = useState(true)
    const [teameactive, SetteamActive] = useState(false)
    const setSingle = (key) => {
        if (key === 'single') {
            SetsingleActive(true);
            SetteamActive(false);

        } else if (key === 'team') {
            SetteamActive(true);
            SetsingleActive(false);

        }
    }

    useEffect(() => {
        console.log("useEffect");
        console.log("single", singleactive);
        console.log("team", teameactive);
    });
    return (
        <div className='w-100'>
            <div className='section_three'>
                <Row>
                    <Col>
                        <div className={singleactive ? 'single_wraper blueborder' : 'single_wraper grayborder'} onClick={() => setSingle('single')}>
                            <div className='icon'>
                                <span className="material-symbols-outlined">
                                    person
                                </span>
                            </div>
                            <div className='single_body'>
                                <h5>For myself</h5>
                                <p>
                                    write better think more clearly stay organized
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={teameactive ? 'team_wraper blueborder' : 'team_wraper grayborder'} onClick={() => setSingle('team')}>
                            <div className='icon'>
                                <span className="material-symbols-outlined">
                                    group
                                </span>
                            </div>
                            <div className='single_body'>
                                <h5>For myteam</h5>
                                <p>
                                    write better think more clearly stay organized
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default SectionThree;
