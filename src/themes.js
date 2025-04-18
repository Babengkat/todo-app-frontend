import bannerLight from './images/daytime.jpg';
import bannerDark from './images/moon.jpg';


export const lightTheme = {
    bgBody: 'rgb(250, 250, 250)',
    bgTodos: 'rgb(255, 255, 255)',
    mainText: 'rgb(147, 148, 165)',
    todosText: 'rgb(72, 75, 106)',
    borders: 'rgb(228, 229, 241)',
    complete: 'rgb(210, 211, 219)',
    hoverText: 'rgb(72, 75, 106)',
    bannerMobile: bannerLight,
    bannerDesktop: bannerLight,
    boxShadow: 'rgb(207, 207, 207, 0.5)',
}

export const darkTheme = {
    bgBody: 'rgb(22, 23, 34)',
    bgTodos: 'rgb(37, 39, 60)',
    mainText: 'rgb(119, 122, 146)',
    todosText: 'rgb(202, 205, 232)',
    borders: 'rgb(57, 58, 76)',
    complete: 'rgb(77, 80, 102)',
    hoverText: 'rgb(228, 229, 241)',
    bannerMobile: bannerDark,
    bannerDesktop: bannerDark,
    boxShadow: 'rgb(0, 0, 0, 0)',
}
