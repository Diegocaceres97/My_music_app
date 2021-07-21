import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import Portada from './portadaPlace';

test('renders content', () => {

    const component = render(<Portada />)
    
    component.getByText('Descubre lo mejor')
    const h4 = component.container.querySelector('h4')

    console.log(prettyDOM(h4))
})
