import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

export default function Header() {
  return (
    <Container style={{ marginTop: '20px' }}>
      <div className="mt-5 pt-5">
        <div className="text-center">
          <img src={logo} />
          <p className="text-secondary">
            <small>Journalism Without Fear or Favour</small>
          </p>
          <p>{moment().format('dddd, MMMM D, YYYY')}</p>
        </div>
        <div className="d-flex">
          <Button variant="danger">Latest</Button>
          <Marquee className="text-danger" speed={100}>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </div>
      </div>
    </Container>
  );
}
