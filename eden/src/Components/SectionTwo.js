import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
const SectionTwo = () => {
    return (
        <div className='w-100'>
            <div className='body_Title mt-5'>
                <h4 className='text-center' style={{ textAlign: "center", fontSize: "21px" }}>Let,s set up a home for all your work</h4>
                <p className='body_subtitle'>
                    You Can Always create another workSpace Later.
                </p>
            </div>

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
        </div>
    );
}

export default SectionTwo;
