import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render} from '@testing-library/react';
import Footer from './footer';

test('render of Btn atom', () => {

    const component = render(<Footer />)
    
    expect(component.container).toBeVisible(true)
   
})