import { Container } from '@/shared/ui';
import { SearchSelect } from '@/shared/ui/SearchSelect/SearchSelect';

const options = [
  {
    groupLabel: 'group1',
    groupOptions: [
      { label: 'Group 1 Vlad', value: 'g1-1' },
      { label: 'Group 1 NE VLAD!', value: 'g1-2' },
    ],
  },
  {
    groupLabel: 'group2',
    groupOptions: [
      { label: 'Group 2 Vlad', value: 'g2-1' },
      { label: 'Group 2 NE VLAD!', value: 'g2-2' },
    ],
  },
];

export const Preheader = () => {
  return (
    <aside>
      <Container className="text-xl">
        <SearchSelect options={options} useGroups={true} />
      </Container>
    </aside>
  );
};
