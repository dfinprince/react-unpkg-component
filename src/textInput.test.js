import React from 'react';
import TextInput from './';
import renderer from 'react-test-renderer';

describe('TextInput', () => {
    it('rendersd properly', () => {
        const tree = renderer.create(<TextInput label='Email' placehonder='name@test.com' />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});