import 'winbox/dist/css/winbox.min.css'; // required
import 'winbox/dist/css/themes/modern.min.css'; // optional
import 'winbox/dist/css/themes/white.min.css'; // optional
import WinBox from 'react-winbox';
import windowIcon from '/icons/window-icon.svg';
import { breakpoints } from '../utils/breakpoints';

function ProjectWindow({ project, onClose }) {
  const { name, prod } = project;
  const width = window.innerWidth > breakpoints.md ? 900 : 300;
  const height = window.innerWidth > breakpoints.md ? 500 : 200;

  const isDarkMode = document.documentElement.classList.contains('dark');

  return (
    <WinBox
      width={width}
      height={height}
      x="center"
      y="center"
      title={name}
      onClose={onClose}
      url={prod}
      background={`${
        isDarkMode
          ? 'linear-gradient(to right, #4f63ce, #9e445b)'
          : 'linear-gradient(to right, #5275e8, #7d8bf7)'
      }`}
      icon={windowIcon}
    ></WinBox>
  );
}

export default ProjectWindow;
