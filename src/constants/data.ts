import strings from "./strings"

const menuList = [
    { id: 1, name: strings.home, route: "home", isSelected: true },
    { id: 2, name: strings.aboutUs, route: "aboutus", isSelected: false },
    { id: 3, name: strings.services, route: "services", isSelected: false },
]

const externalUrls = {
    appStore: "https://example.com/app-store",
    playStore: "https://example.com/play-store",
    facebook: "https://example.com/facebook",
    instagram: "https://example.com/instagram",
    termsAndConditions: "https://example.com/terminos-y-condiciones",
}

export { menuList, externalUrls }
