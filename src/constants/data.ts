import strings from "./strings"

const menuList = [
    { id: 1, name: strings.home, route: "home", isSelected: true },
    { id: 2, name: strings.aboutUs, route: "aboutus", isSelected: false },
    { id: 3, name: strings.services, route: "services", isSelected: false },
]

const externalUrls = {
    appStore: "https://www.apple.com/app-store/",
    playStore: "https://play.google.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    termsAndConditions: "https://example.com/terminos-y-condiciones",
}

export { menuList, externalUrls }
