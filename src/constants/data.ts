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
}

const termsDocumentData = {
    lastUpdatedDate: "10-07-2026",
    businessName: "XTUNER SAS",
    taxId: "901.472.344",
    address: "Cr 19 No. 28 15 Sur",
    contactEmail: "xtunercol@gmail.com",
    phone: "3232044505",
}

export { menuList, externalUrls, termsDocumentData }
