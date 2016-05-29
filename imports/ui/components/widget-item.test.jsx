import React from 'react';
import {mount, shallow} from 'enzyme';
import { expect } from 'chai';
import { WidgetItem } from './widget-item.jsx';

describe('<WidgetItem />', () => {

  function setup() {
    let props = {}
    return shallow(<WidgetItem {...props}/>);
  }

  it('has foo text', () => {
    const el = setup();
    const fooText = el.find('p').text();
    expect(fooText).to.equal('crabapple');
  });
});
