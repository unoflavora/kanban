import { } from 'styled-components';
import { MainThemeType } from '../theme/theme';

declare module 'styled-components' {
    export interface DefaultTheme extends MainThemeType { }
}