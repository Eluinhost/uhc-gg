export const renderTeamStyle = (style, size, custom) => {
  if (style.value === 'custom') {
    return custom;
  }

  if (style.requiresTeamSize) {
    return `${style.display} To${size || 'X'}`;
  }

  return style.display;
};

export class TeamStyle {
  constructor(display, value, requiresTeamSize) {
    this.display = display;
    this.value = value;
    this.requiresTeamSize = requiresTeamSize;
  }
}

export const TeamStyles = [
  new TeamStyle('FFA', 'ffa', false),
  new TeamStyle('Chosen', 'chosen', true),
  new TeamStyle('Random', 'random', true),
  new TeamStyle('Captains', 'captains', true),
  new TeamStyle('Picked', 'picked', true),
  new TeamStyle('SlaveMarket', 'market', false),
  new TeamStyle('Mystery', 'mystery', true),
  new TeamStyle('Red vs Blue', 'rvb', false),
  new TeamStyle('Custom', 'custom', false),
];
