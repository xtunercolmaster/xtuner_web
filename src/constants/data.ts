import strings from "./strings"

const menuList = [
    { id: 1, name: strings.home, route: "home", isSelected: true },
    { id: 2, name: strings.aboutUs, route: "aboutus", isSelected: false },
    { id: 3, name: strings.services, route: "services", isSelected: false },
    { id: 4, name: strings.allies, route: "allies", isSelected: false },
    { id: 5, name: strings.contactUs, route: "contactus", isSelected: false },
]

export { menuList }