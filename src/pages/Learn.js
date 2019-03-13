import React, { Component } from 'react';

import '../style/css/Global.css';

import LearnInfo from '../components/LearnInfo.js';
import ScrollableAnchor from 'react-scrollable-anchor';

class Learn extends Component {
  render() {
    return (
      <div class='page-wrapper'>
      <ScrollableAnchor id={'learn'}>
        <LearnInfo/>
        </ScrollableAnchor>
        <div className='separator margin-10'></div>
        <div class='page-content'>
            <h3>How do loans work?</h3>
            <p>Augue mauris augue neque gravida. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Condimentum lacinia quis vel eros donec ac. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Ultrices tincidunt arcu non sodales neque sodales. Tincidunt eget nullam non nisi est sit amet facilisis. Urna molestie at elementum eu facilisis sed odio. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Aliquam ultrices sagittis orci a. Elit at imperdiet dui accumsan sit. In hac habitasse platea dictumst quisque sagittis purus sit amet. Dignissim sodales ut eu sem integer vitae justo.</p>
            <p>Nulla porttitor massa id neque aliquam vestibulum. Habitant morbi tristique senectus et netus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Sagittis eu volutpat odio facilisis mauris sit amet massa. Phasellus vestibulum lorem sed risus ultricies tristique. In mollis nunc sed id semper. Mollis aliquam ut porttitor leo. Pulvinar pellentesque habitant morbi tristique senectus et. Porta lorem mollis aliquam ut porttitor. Sem integer vitae justo eget. Adipiscing commodo elit at imperdiet dui accumsan sit.</p>
            <p>Commodo sed egestas egestas fringilla phasellus faucibus. Vestibulum lectus mauris ultrices eros in. Massa tincidunt dui ut ornare lectus sit amet est. Bibendum enim facilisis gravida neque. Eget aliquet nibh praesent tristique magna sit amet purus. Mattis pellentesque id nibh tortor id.</p>
        </div>
      </div>
    );
  }
}

export default (Learn);