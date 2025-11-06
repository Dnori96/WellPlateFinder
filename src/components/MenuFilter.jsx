import { Menu, MenuButton, MenuItem, MenuRadioGroup } from '@szhsin/react-menu';
import menuArrow from '@/images/icons/icon-chevron-down.svg';

export default function MenuFilter({ times, filters, onPrepTimeChange, onCookTimeChange }) {
  const sendNewPrepValue = (newTime) => {
    onPrepTimeChange(newTime);
  };

  const sendNewCookValue = (newTime) => {
    onCookTimeChange(newTime);
  };

  const pRawTimes = times.map((t) => t.prepMinutes); // Needs improvements probably
  const cRawTimes = times.map((t) => t.cookMinutes); // Needs improvements probably
  const prepTimesFilter = [...new Set(pRawTimes.sort().reverse())];
  const cookTimesFilter = [...new Set(cRawTimes.sort((a, b) => a - b))];

  return (
    <>
      <Menu
        menuButton={({ open }) => (
          <MenuButton className="menu-buttom">
            Max Prep Time
            <img
              className={`size-5 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
              src={menuArrow}
              alt="arrow icon for dropdown"
            />
          </MenuButton>
        )}
        transition
      >
        <MenuRadioGroup
          className="menu-radio-group"
          value={filters.prepTime}
          onRadioChange={(e) => sendNewPrepValue(e.value)}
        >
          {prepTimesFilter.map((p, i) => (
            <MenuItem key={i} className="radio-input" type="radio" value={p}>
              <span className={filters.prepTime === p ? 'radio-circle-active' : 'radio-circle'}>
                <span className="inner-circle-active"></span>
              </span>
              {`${p} minutes`}
            </MenuItem>
          ))}
        </MenuRadioGroup>
        <MenuItem
          className="hover:bg-primary-Neutral-200 bg-primary-Neutral-0 cursor-pointer p-2 text-primary-strong-950 font-medium text-base border border-t-0 border-primary-Neutral-300 rounded-b-lg shadow-[0_12px_22px_-12px_#E0E6E3]"
          value={'all'}
          onClick={() => sendNewPrepValue('all')}
        >
          Clear
        </MenuItem>
      </Menu>

      <Menu
        menuButton={({ open }) => (
          <MenuButton className="menu-buttom">
            Max Cook Time
            <img
              className={`size-5 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
              src={menuArrow}
              alt="arrow icon for dropdown"
            />
          </MenuButton>
        )}
        transition
      >
        <MenuRadioGroup
          className="menu-radio-group"
          value={filters.cookTime}
          onRadioChange={(e) => sendNewCookValue(e.value)}
        >
          {cookTimesFilter.map((p, i) => (
            <MenuItem key={i} className="radio-input" type="radio" value={p}>
              <span className={filters.cookTime === p ? 'radio-circle-active' : 'radio-circle'}>
                <span className="inner-circle-active"></span>
              </span>
              {`${p} minutes`}
            </MenuItem>
          ))}
        </MenuRadioGroup>
        <MenuItem
          className="hover:bg-primary-Neutral-200 bg-primary-Neutral-0 cursor-pointer p-2 text-primary-strong-950 font-medium text-base border border-t-0 border-primary-Neutral-300 rounded-b-lg shadow-[0_12px_22px_-12px_#E0E6E3]"
          value={'all'}
          onClick={() => sendNewCookValue('all')}
        >
          Clear
        </MenuItem>
      </Menu>
    </>
  );
}

{
  /* <MenuItem className="radio-input" type="radio" value={0}>
  <span className="radio-circle" /> 0 minutes
</MenuItem> */
}
