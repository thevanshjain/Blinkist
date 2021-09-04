import Typography from "@material-ui/core/Typography";

const Header = ({ heading }) => {
  return <Typography component="span" variant="h5" data-testid="head">{heading}</Typography>;
};

export default Header;
