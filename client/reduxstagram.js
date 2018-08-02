import React from 'react';
import { render } from 'react-dom';

//Import CSS
import css from './styles/style.styl';

//import components
import Main from './components/Main';

render(
	<Main />,
	document.getElementById('root')
);