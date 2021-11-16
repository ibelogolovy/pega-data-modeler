import mainIcon from '../images/main.png';
import clipboardIcon from '../images/clipboard.png';
import modelIcon from '../images/model.png';
import clipboardComparator from '../images/compare.png';
import modelClassIcon from '../images/mesh.png';

const navigationItems = [
    {
        name: "Home",
        icon: mainIcon,
        role: "home",
        help: "This project is created from pega architects and analysts. There are tools for pega data review and modeling.",
        link: "/",
        dependOn: null
    },
    {
        name: "Wide Clipboard",
        icon: clipboardIcon,
        role: "tool",
        help: "Clipboard: tools for view work object data and property definitions.",
        link: "/clipboard",
        dependOn: "activeSettingName"
    },
    {
        name: "Clipboard Comparator",
        icon: clipboardComparator,
        role: "tool",
        help: "Compares values in a clipboard",
        link: "/clipboard/compare",
        dependOn: "activeSettingName"
    },
    {
        name: "Class Model",
        icon: modelClassIcon,
        role: "tool",
        help: "Class Model",
        link: "/model",
        dependOn: "activeSettingName"
    },
    {
        name: "Data Model",
        icon: modelIcon,
        role: "tool",
        help: "Class Model",
        link: "/model/data",
        dependOn: "activeSettingName"
    }
];
export {
    navigationItems
}
  