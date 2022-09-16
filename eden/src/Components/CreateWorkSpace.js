import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../Assets/Images/logo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const CreateWorkSpace = () => {
    const [processCount, setProcessCount] = useState(1);
    const [processbar, setProcessBar] = useState(25);
    const setProcess = (e) => {
        e.preventDefault();
        if (processCount < 4) {
            setProcessCount(processCount + 1)
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
                                processCount === 1 ? <div className='body_Title mt-5'>
                                    <h4 className='text-center' style={{ textAlign: "center" }}>Wellcome! First Thing First...</h4>
                                    <p className='body_subtitle'>
                                        You Can Always Change Theme Later.
                                    </p>
                                </div> : processCount === 2 ? <div className='body_Title mt-5'>
                                    <h4 className='text-center' style={{ textAlign: "center", fontSize: "21px" }}>Let,s set up a home for all your work</h4>
                                    <p className='body_subtitle'>
                                        You Can Always create another workSpace Later.
                                    </p>
                                </div> : processCount === 3 ? <div className='body_Title mt-5'>
                                    <h4 className='text-center' style={{ textAlign: "center" }}>How are you planning to use eden?</h4>
                                    <p className='body_subtitle'>
                                        We will stream line your setup experience acordingly
                                    </p>
                                </div> :

                                    <div className='body_Title mt-5'>
                                        <span className="material-symbols-outlined coustom">
                                            task_alt
                                        </span>
                                        <h4 className='text-center' style={{ textAlign: "center" }}>Congratulations,Eran !</h4>
                                        <p className='body_subtitle'>
                                            You have completed onboarding,you can start using eden
                                        </p>
                                    </div>
                            }

                            {/* start Form Section */}

                            <Form>
                                {/* Starting first workShop Section */}
                                {
                                    processCount === 1 ? <div className='section_One'>
                                        <Form.Group className="mb-3" controlId="formBasicFullName">
                                            <Form.Label className='right'>Full Name</Form.Label>
                                            <Form.Control type="text" placeholder="Steve smith" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicDisplayName">
                                            <Form.Label>Display Name</Form.Label>
                                            <Form.Control type="text" placeholder="Steve" />
                                        </Form.Group>
                                    </div> : processCount === 2 ?
                                        <div className='section_two'>
                                            <Form.Group className="mb-3" controlId="formBasicWorkSpace">
                                                <Form.Label className='right'>WorkSpace Name</Form.Label>
                                                <Form.Control type="text" placeholder="Eden" />
                                            </Form.Group>

                                            <Form.Label htmlFor="basic-url">WorkSpace URL <span style={{ fontSize: "13px", color: "gray" }}>(optional)</span></Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon3">
                                                    www.eden.com/
                                                </InputGroup.Text>
                                                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                                            </InputGroup>
                                        </div>
                                        : processCount === 3 ?
                                            <div className='section_three'>
                                                <Row>
                                                    <Col>
                                                        <div className='single_wraper'>
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
                                                        <div className='team_wraper'>
                                                            <div className='icon'>
                                                                <span className="material-symbols-outlined">
                                                                    person
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
                                            :
                                            <div className='section_four'>

                                            </div>

                                }
                                {/* Starting second Workshop section */}

                                <Button variant="primary" onClick={(e) => setProcess(e)} className='w-100 bg_color' type="submit">
                                    {processCount === 4 ? "Launch Eden" : "Create Workshop"}
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CreateWorkSpace;
