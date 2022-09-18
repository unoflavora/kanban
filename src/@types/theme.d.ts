import { } from 'styled-components';
import { MainThemeType } from '../styles/theme';

declare module 'styled-components' {
    export interface DefaultTheme extends MainThemeType { }
}