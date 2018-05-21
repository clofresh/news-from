import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export class Scrollbar extends Component {
	render() {
		return (
			<Scrollbars style={{ width: 500, height: 300 }}>
        <p>Some great content...</p>
      </Scrollbars>
		);
	}
}

export default Scrollbar;