import React from 'react';
import Form from 'react-bootstrap/Form';

const Firstform = () => {
    return (
        <div className='w-100'>
            <div className='body_Title mt-5'>
                <h4 className='text-center' style={{ textAlign: "center" }}>Wellcome! First Thing First...</h4>
                <p className='body_subtitle'>
                    You Can Always Change Theme Later.
                </p>
            </div>

            <div className='section_One'>
                <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Label className='right'>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Steve smith" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDisplayName">
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control type="text" placeholder="Steve" />
                </Form.Group>
            </div>
        </div>

    );
}

export default Firstform;
