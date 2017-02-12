/**
 * Created by batur on 2017/2/10.
 */

//var Alert = require('react-bootstrap').Alert;
import React from 'react';
import { render } from 'react-dom';
import { Button, FormGroup, FormControl } from 'react-bootstrap';


const Btn = (
  <Button bsStyle="primary">Success</Button>
);

const inputInstance = (
  <FormGroup bsSize="large">
    <FormControl type="text" />
  </FormGroup>
);

![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/nodejsWeb/Lobby)

render(Btn, document.getElementById('sBtn'));
render(inputInstance, document.getElementById('search'));


