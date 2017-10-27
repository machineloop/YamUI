/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { consoleTestResultHandler } from 'vrsource-tslint-rules/node_modules/tslint/lib/test';
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Clickable, { ClickableProps } from '.';

describe('<Clickable />', () => {
  let component: ShallowWrapper<ClickableProps, {}>;
  function handleClick(event: any) {}

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Clickable>clickable content</Clickable>);
    });

    it('renders its given content', () => {
      expect(component.render().text()).toEqual('clickable content');
    });

    it('contains its base className', () => {
      expect(component.hasClass('y-clickable')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Clickable className="TEST_CLASSNAME">clickable content</Clickable>);
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still has its base className', () => {
      expect(component.hasClass('y-clickable')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when block is true', () => {
    beforeEach(() => {
      component = shallow(<Clickable block={true}>clickable content</Clickable>);
    });

    it('renders the correct block className', () => {
      expect(component.hasClass('y-clickable__block')).toBe(true);
    });

    it('still has its base className', () => {
      expect(component.hasClass('y-clickable')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when title is passed', () => {
    beforeEach(() => {
      component = shallow(
        <Clickable title="extra browser tooltip content">clickable content</Clickable>,
      );
    });

    it('has title attribute', () => {
      expect(
        component
          .render()
          .find('button')
          .attr('title'),
      ).toEqual('extra browser tooltip content');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when ariaLabel is passed', () => {
    beforeEach(() => {
      component = shallow(<Clickable ariaLabel="aria label content">clickable content</Clickable>);
    });

    it('has aria-label attribute', () => {
      expect(
        component
          .render()
          .find('button')
          .attr('aria-label'),
      ).toEqual('aria label content');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when clicked', () => {
    let clicked: boolean;
    function clickMe() {
      clicked = true;
    }
    beforeEach(() => {
      clicked = false;
      component = shallow(<Clickable onClick={clickMe}>clickable content</Clickable>);
    });

    it('triggers its onClick callback', () => {
      component.simulate('click');
      expect(clicked).toBe(true);
    });
  });
});
