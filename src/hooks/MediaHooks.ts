import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useMediaHooks = () => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const medium = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const large = useMediaQuery(theme.breakpoints.up("md"));
  const extraLarge = useMediaQuery(theme.breakpoints.up("lg"))
  return [small, medium, large, extraLarge];
};
export default useMediaHooks;