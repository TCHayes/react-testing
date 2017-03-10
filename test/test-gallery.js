import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Gallery from '../js/components/gallery';

const imgArr = [
  {
    url: 'https://www.dustwise.com/',
    description: "Jared's LEET OldSchool site"
  },
  {
    url: 'https://www.terryhayes.com/',
    description: 'will be a site someday'
  }
];

describe('Gallery component', function() {
    it('Renders the gallery',  function() {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Gallery images={imgArr} />);
        const result = renderer.getRenderOutput();

        result.props.className.should.equal('gallery');
        result.props.children[0].props.url.should.equal(imgArr[0].url);
        result.props.children[0].props.description.should.equal(imgArr[0].description);
        result.props.children[1].props.url.should.equal(imgArr[1].url);
        result.props.children[1].props.description.should.equal(imgArr[1].description);
        result.props.children.length.should.equal(imgArr.length);
    });
});
