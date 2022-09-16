import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../Assets/Images/logo.png';
import Button from 'react-bootstrap/Button';
import Firstform from './Firstform';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';

const CreateWorkSpace = () => {
    const [processCount, setProcessCount] = useState(1);
    const [processbar, setProcessBar] = useState(25);
    const setProcess = (e) => {
        e.preventDefault();
        if (processCount < 4) {
            setProcessCount(processCount + 1);
            setProcessBar(processbar + 25);
        }
    }
    return (
        <div>
            <Container >
                <Row className='justify-content-md-center'>
                    <Col xs={12} md={5} className='my-5'>
                        {/* Logo Start */}
                        <div className='edenLogo my-5'>
                            <img className='Image_Size' src={Logo} alt='Logo' />
                            <h2 className='d-inline-block'>Eden</h2>
                        </div>
                        {/* Status bar start */}

                        <div className='statusbar_wraper justify-content-md-center'>
                            <div className='stausbar_body'>
                                <div className={processCount >= 1 ? "first_part circle" : "circle"}>1</div>
                                <div className={processCount >= 2 ? "first_part circle" : "circle"}>2</div>
                                <div className={processCount >= 3 ? "first_part circle" : "circle"}>3</div>
                                <div className={processCount === 4 ? "first_part circle" : "circle"}>4</div>

                            </div>
                            <div className='base_line2' style={{ width: `${processbar}%` }}></div>
                            <div className='base_line'></div>
                        </div>
                        {/* start Body  */}

                        <div className='Main_Body'>
                            {
                                processCount === 1 ? <Firstform /> :
                                    processCount === 2 ? <SectionTwo /> :
                                        processCount === 3 ? <SectionThree /> :
                                            <SectionFour />
                            }

                            <Button variant="primary" onClick={(e) => setProcess(e)} className='bg_color' type="submit">
                                {processCount === 4 ? "Launch Eden" : "Create Workshop"}
                            </Button>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CreateWorkSpace;
