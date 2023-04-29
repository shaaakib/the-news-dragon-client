import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import QZone from '../Qzone/QZone';
import bg from '../../../assets/bg.png';

export default function RightNav() {
  return (
    <div>
      <div>
        <h4 className="mt-4">Login With</h4>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub /> Login with Github
        </Button>
      </div>
      <div>
        <h4 className="mt-4">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
}
