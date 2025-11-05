import { Menu, MenuButton, MenuItem, MenuRadioGroup } from '@szhsin/react-menu';
import menuArrow from '@/images/icons/icon-chevron-down.svg';

export default function MenuFilter({ filters, onPrepTimeChange, onCookTimeChange }) {
  const sendNewPrepValue = (newTime) => {
    onPrepTimeChange(newTime);
  };

  const sendNewCookValue = (newTime) => {
    onCookTimeChange(newTime);
  };
  return (
    <>
      <Menu
        menuButton={
          <MenuButton className="menu-buttom">
            Max Prep Time <img className="size-5" src={menuArrow} alt="arrow icon for dropdown" />
          </MenuButton>
        }
        transition
      >
        <MenuRadioGroup
          className="menu-radio-group"
          value={filters.prepTime}
          onRadioChange={(e) => sendNewPrepValue(e.value)}
        >
          <MenuItem className="radio-input" type="radio" value={0}>
            0 minutes
          </MenuItem>
          <MenuItem className="radio-input" type="radio" value={5}>
            5 minutes
          </MenuItem>
          <MenuItem className="radio-input" type="radio" value={10}>
            10 minutes
          </MenuItem>
        </MenuRadioGroup>
        <MenuItem
          className="bg-primary-Neutral-0 cursor-pointer p-2 text-primary-strong-950 font-medium text-base"
          value={'all'}
          onClick={() => sendNewPrepValue('all')}
        >
          Clear
        </MenuItem>
      </Menu>

      <Menu
        menuButton={
          <MenuButton className="menu-buttom">
            Max Cook Time <img className="size-5" src={menuArrow} alt="arrow icon for dropdown" />
          </MenuButton>
        }
      >
        <MenuRadioGroup
          className="menu-radio-group"
          value={filters.cookTime}
          onRadioChange={(e) => sendNewCookValue(e.value)}
        >
          <MenuItem className="radio-input" type="radio" value={0}>
            0 minutes
          </MenuItem>
          <MenuItem className="radio-input" type="radio" value={5}>
            5 minutes
          </MenuItem>
          <MenuItem className="radio-input" type="radio" value={10}>
            10 minutes
          </MenuItem>
          <MenuItem className="radio-input" type="radio" value={15}>
            15 minutes
          </MenuItem>
          <MenuItem className="radio-input" type="radio" value={25}>
            25 minutes
          </MenuItem>
        </MenuRadioGroup>
        <MenuItem
          className="bg-primary-Neutral-0 cursor-pointer p-2 text-primary-strong-950 font-medium text-base"
          value={'all'}
          onClick={() => sendNewCookValue('all')}
        >
          Clear
        </MenuItem>
      </Menu>
    </>
  );
}
