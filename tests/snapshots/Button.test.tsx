import renderer from 'react-test-renderer';
import Button from './Button';
import React from 'react';

test('компонент Button корректно отображается на экране', () => {
    const button = renderer.create(<Button disabled={false} text='Кнопка' type='primary' btnClick={() => {}} />);
    let tree = button.toJSON();
    expect(tree).toMatchSnapshot();
})