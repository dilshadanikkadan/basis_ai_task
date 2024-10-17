import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Table from '../components/viewComponents/table/Table';


const documents = [
    {
      id: 1,
      name: 'dilshad',
      age: 20,
      condition: 'booked',
    },
    {
        id: 2,
        name: 'nahid',
        age: 20,
        condition: 'ashtma',
      },
  ];

  describe('dashborad Component', () => {
    it('renders table names correctly', () => {
      render(<Table data={documents} />);
  
      expect(screen.getByText('dilshad')).toBeInTheDocument();
      expect(screen.getByText('nahid')).toBeInTheDocument();
      expect(screen.getByText('ashtma')).toBeInTheDocument();
    }); 
 
  });