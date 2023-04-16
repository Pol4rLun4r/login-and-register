import LogoStyle from './style/Logo';
import LogoLink from './style/LogoLink';
import icon from '../../../assets/cubeMini.svg';

interface ILogo {
    to: string
}

const Logo = ({ to }: ILogo) => {
    return (
        <LogoLink to={to}>
            <LogoStyle
                src={icon}
            />
        </LogoLink>
    )
}

export default Logo;