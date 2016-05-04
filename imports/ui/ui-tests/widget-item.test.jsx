import React from 'react';
import $ from 'teaspoon';
import { expect } from 'chai';
import { WidgetItem } from '../widget-item';

describe('<WidgetItem />', () => {
  it('has a button with text', () => {
    const buttonText = $(<WidgetItem />).render().find('button').text();
    console.log(buttonText)
    expect(buttonText).to.equal('Click Me');
  });

  it('has foo text', () => {
    const fooText = $(<WidgetItem fooText='chickadee'/>).render().find('p').text();
    console.log(fooText)
    expect(fooText).to.equal('chickadee');
  });

  it('has default foo text when no props provided', () => {
    const fooText = $(<WidgetItem />).render().find('p').text();
    console.log(fooText)
    expect(fooText).to.equal('crabapple');
  })
});
