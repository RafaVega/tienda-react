import React from 'react';
import '@styles/NotFound.scss';

const NotFound = () => {
	return (
		<div id='NotFound-Container'>
			<div id='sadFace'>:(</div>
			<div id='title'>404 Not Found</div>
			<p id='explicacionHumilde'>Hay que ser retrasado para tratar de cargar una página que no existe.</p>
		</div>
	);
}

export default NotFound;
