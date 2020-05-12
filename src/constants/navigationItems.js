import mainIcon from '../images/main.png';
import clipboardIcon from '../images/clipboard.png';
import modelIcon from '../images/model.png';

const navigationItems = [
    {
        name: "Home",
        icon: mainIcon,
        role: "home",
        help: "",
        link: "/"
    },
    {
        name: "Wide Clipboard",
        icon: clipboardIcon,
        role: "tool",
        help: "This tool used for",
        link: "/clipboard"
    },
    {
        name: "Model Viewer",
        icon: modelIcon,
        role: "tool",
        link: "/model"
    }
];
export {
    navigationItems
}
  